
  const track = document.getElementById('muralTrack');
  const barTrack = document.getElementById('barTrack');
  const barThumb = document.getElementById('barThumb');

  let isDragging = false;
  let isHovering = false;
  const speed = 0.6; // px per frame for auto-scroll

  function maxScroll() {
    return Math.max(0, track.scrollWidth - track.clientWidth);
  }

  function updateThumb() {
    const barWidth = barTrack.getBoundingClientRect().width;
    const visibleRatio = Math.min(1, track.clientWidth / track.scrollWidth);
    const thumbWidth = Math.max(40, barWidth * visibleRatio);
    barThumb.style.width = thumbWidth + 'px';
    const max = maxScroll();
    const progress = max > 0 ? track.scrollLeft / max : 0;
    const maxThumbX = barWidth - thumbWidth;
    barThumb.style.left = (progress * maxThumbX) + 'px';
  }

  function tick() {
    if (!isDragging && !isHovering) {
      const max = maxScroll();
      if (max > 0) {
        if (track.scrollLeft >= max - 1) {
          track.scrollLeft = 0; // loop back to the start, keeps it infinite
        } else {
          track.scrollLeft += speed;
        }
      }
    }
    updateThumb();
    requestAnimationFrame(tick);
  }

  window.addEventListener('load', () => {
    updateThumb();
    requestAnimationFrame(tick);
  });
  window.addEventListener('resize', updateThumb);
  track.addEventListener('scroll', updateThumb);

  track.addEventListener('mouseenter', () => { isHovering = true; });
  track.addEventListener('mouseleave', () => { isHovering = false; });

  function setScrollFromBarX(clientX) {
    const barRect = barTrack.getBoundingClientRect();
    const thumbWidth = barThumb.getBoundingClientRect().width;
    const maxThumbX = barRect.width - thumbWidth;
    let x = clientX - barRect.left - thumbWidth / 2;
    x = Math.max(0, Math.min(maxThumbX, x));
    const progress = maxThumbX > 0 ? x / maxThumbX : 0;
    track.scrollLeft = progress * maxScroll();
  }

  barThumb.addEventListener('pointerdown', (e) => {
    isDragging = true;
    barThumb.setPointerCapture(e.pointerId);
  });
  barThumb.addEventListener('pointermove', (e) => {
    if (isDragging) setScrollFromBarX(e.clientX);
  });
  barThumb.addEventListener('pointerup', () => { isDragging = false; });
  barThumb.addEventListener('pointercancel', () => { isDragging = false; });

  barTrack.addEventListener('click', (e) => {
    if (e.target === barThumb) return;
    setScrollFromBarX(e.clientX);
  });
