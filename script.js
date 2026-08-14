/* Synthica — scales the 1200px design canvas to fit the viewport width,
   keeping the design pixel-perfect at every size (Figma "Scale" constraint).
   Also pins the Step Intro section to the top of the viewport while the
   Step Cards scroll past it. */
(function () {
  const DESIGN_WIDTH = 1200;
  const DESIGN_HEIGHT = 5256;
  const canvas = document.getElementById('canvas');
  const wrap = document.querySelector('.scaler-wrap');
  const sticky = document.querySelector('.step-intro-sticky');

  let scale = window.innerWidth / DESIGN_WIDTH;

  function applyScale() {
    scale = window.innerWidth / DESIGN_WIDTH;
    canvas.style.transform = 'scale(' + scale + ')';
    // the wrap must reserve the scaled height so the page scrolls correctly
    wrap.style.height = (DESIGN_HEIGHT * scale) + 'px';
    updatePin();
  }

  /* Pin logic (counter-scroll translation):
     The sticky wrapper is a child of .canvas, so its transform values are
     in DESIGN px (the parent's scale() multiplies them on screen). We compute
     the needed screen-space offset, then divide by `scale`.

     Continuity: pinning starts exactly when the section's natural position
     reaches the target slot (top 18% of the viewport), so there is no jump.
     While pinned it stays put; after the range it resumes scrolling, offset
     by the total pinned distance so the hand-off is seamless. */
  function updatePin() {
    if (!sticky) return;

    const designStart = parseFloat(sticky.getAttribute('data-pin-start')) || 1589;
    const designEnd = parseFloat(sticky.getAttribute('data-pin-end')) || 3366;

    const screenStart = designStart * scale;
    const screenEnd = designEnd * scale;
    const targetTop = window.innerHeight * 0.18;

    const pinStart = screenStart - targetTop;
    const pinEnd = screenEnd - targetTop;
    const sy = window.scrollY || window.pageYOffset;

    let shiftScreen; // screen px to move the section DOWN (positive)
    if (sy <= pinStart) {
      shiftScreen = 0;
    } else if (sy >= pinEnd) {
      shiftScreen = pinEnd - pinStart;
    } else {
      shiftScreen = sy - pinStart;
    }

    sticky.style.transform = 'translateY(' + (shiftScreen / scale) + 'px)';
  }

  applyScale();

  let t;
  window.addEventListener('resize', function () {
    clearTimeout(t);
    t = setTimeout(applyScale, 60);
  });

  window.addEventListener('scroll', updatePin, { passive: true });
})();
