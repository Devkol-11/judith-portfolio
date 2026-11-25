"use client";

import { useEffect, useRef } from "react";

// Soft "light through water" caustics drawn with a tiny WebGL shader.
// Renders at reduced resolution, pauses when off screen or when the tab is
// hidden, and draws a single still frame for reduced-motion visitors.
// If WebGL is unavailable the hero keeps its plain CSS gradient.

const VERTEX = `
attribute vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }
`;

const FRAGMENT = `
precision mediump float;
uniform vec2 uRes;
uniform float uTime;
uniform vec3 uDeep;
uniform vec3 uShallow;
uniform float uFadeTop;

// Layered, self-warping sine field: reads as moving water light
float field(vec2 p, float t) {
  float v = 0.0;
  for (int k = 0; k < 5; k++) {
    float fk = float(k);
    p += vec2(sin(p.y * 1.4 + t * 0.55 + fk * 1.3), cos(p.x * 1.2 - t * 0.45 + fk * 2.1)) * 0.42;
    v += sin(p.x * 1.6 + p.y * 1.1 + t * (0.35 + 0.08 * fk));
  }
  return v / 5.0;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  vec2 p = gl_FragCoord.xy / uRes.y * 6.5;
  float t = uTime * 0.5;

  // Two drifting layers make the fine, shifting net of light seen in a pool
  float a = field(p, t);
  float b = field(p * 1.35 + 7.0, t * 0.8);
  float lines = pow(1.0 - abs(sin(a * 4.7)), 9.0) + pow(1.0 - abs(sin(b * 4.2)), 11.0) * 0.6;
  float glow = pow(1.0 - abs(sin(field(p * 0.45 + 3.0, t * 0.6) * 3.14159)), 3.0);

  vec3 col = mix(uDeep, uShallow, uv.y * 0.55 + 0.25);
  col = mix(col, vec3(1.0), clamp(lines * 0.8 + glow * 0.15, 0.0, 1.0));

  // Fade toward white at one edge so the section meets the page softly
  float edge = mix(uv.y, 1.0 - uv.y, uFadeTop);
  col = mix(col, vec3(1.0), smoothstep(0.35, 0.0, edge) * 0.85);
  gl_FragColor = vec4(col, 1.0);
}
`;

const TINTS = {
  // pale pool blue -> near white (hero)
  blue: { deep: [0.8, 0.9, 0.985], shallow: [0.95, 0.98, 1.0] },
  // blush pink -> near white (contact)
  pink: { deep: [1.0, 0.84, 0.91], shallow: [1.0, 0.95, 0.975] },
} as const;

export function WaterBackground({ tint = "blue", fade = "bottom" }: { tint?: keyof typeof TINTS; fade?: "bottom" | "top" }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const gl = canvas?.getContext("webgl", { antialias: false, premultipliedAlpha: false });
    if (!canvas || !gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl.VERTEX_SHADER, VERTEX));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAGMENT));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(program, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const uRes = gl.getUniformLocation(program, "uRes");
    const uTime = gl.getUniformLocation(program, "uTime");
    gl.uniform3fv(gl.getUniformLocation(program, "uDeep"), TINTS[tint].deep);
    gl.uniform3fv(gl.getUniformLocation(program, "uShallow"), TINTS[tint].shallow);
    gl.uniform1f(gl.getUniformLocation(program, "uFadeTop"), fade === "top" ? 1 : 0);

    // Half resolution: the effect is soft, so this costs nothing visually
    const SCALE = 0.5;
    const resize = () => {
      canvas.width = Math.max(1, Math.round(canvas.clientWidth * SCALE));
      canvas.height = Math.max(1, Math.round(canvas.clientHeight * SCALE));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const draw = (seconds: number) => {
      gl.uniform1f(uTime, seconds);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let visible = true;
    const start = performance.now();
    const loop = (now: number) => {
      draw((now - start) / 1000);
      frame = requestAnimationFrame(loop);
    };
    const play = () => {
      cancelAnimationFrame(frame);
      if (!reduce && visible && !document.hidden) frame = requestAnimationFrame(loop);
    };

    draw(8);
    canvas.dataset.ready = "true";
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      play();
    });
    io.observe(canvas);
    document.addEventListener("visibilitychange", play);
    play();

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", play);
    };
  }, [tint, fade]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="water absolute inset-0 -z-10 h-full w-full opacity-0 transition-opacity duration-1500 data-[ready=true]:opacity-100"
    />
  );
}
