/* Synthica About page — scales the 1200px design canvas to fit the viewport width. */
(function () {
  const DESIGN_WIDTH = 1200;
  const DESIGN_HEIGHT = 3980;
  const canvas = document.getElementById('canvas');
  const wrap = document.querySelector('.scaler-wrap');

  let scale = window.innerWidth / DESIGN_WIDTH;

  function applyScale() {
    scale = window.innerWidth / DESIGN_WIDTH;
    canvas.style.transform = 'scale(' + scale + ')';
    wrap.style.height = (DESIGN_HEIGHT * scale) + 'px';
  }

  applyScale();

  let t;
  window.addEventListener('resize', function () {
    clearTimeout(t);
    t = setTimeout(applyScale, 60);
  });
})();
