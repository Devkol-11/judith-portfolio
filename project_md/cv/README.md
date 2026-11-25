# Judith's CV

- `cv.template.html` is the editable source (two A4 pages, styled like the site). Icon markers like `{{icon:mail}}` are filled in by `build_cv.py` from `icons.json` (lucide icons, ISC licence; Instagram mark from simple-icons, CC0).
- `cv.html` is the built page; `public/judith-urevbu-cv.pdf` is what visitors download (top bar "CV" and contact "Download CV").
- Photo: `public/images/judith.jpg` (cropped from `assets/dp.jpg`, without the follower graphic).

ATS-friendly by design: single reading order, standard headings, all text selectable (fonts embedded with Unicode maps); the photo and icons are decorative only.

To update: edit `cv.template.html`, run `python project_md/cv/build_cv.py`, open `cv.html` in Chrome, Ctrl+P > Save as PDF, margins "None", "Background graphics" on, and save over `public/judith-urevbu-cv.pdf`.
