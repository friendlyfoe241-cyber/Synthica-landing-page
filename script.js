/* Synthica — scales the 1200px design canvas to fit the viewport width,
   keeping the design pixel-perfect at every size (Figma "Scale" constraint). */
(function () {
  const DESIGN_WIDTH = 1200;
  const canvas = document.getElementById('canvas');
  const wrap = document.querySelector('.scaler-wrap');

  function applyScale() {
    const scale = window.innerWidth / DESIGN_WIDTH;
    canvas.style.transform = 'scale(' + scale + ')';
    // the wrap must reserve the scaled height so the page scrolls correctly
    wrap.style.height = (5256 * scale) + 'px';
  }

  applyScale();
  let t;
  window.addEventListener('resize', function () {
    clearTimeout(t);
    t = setTimeout(applyScale, 60);
  });
})();
