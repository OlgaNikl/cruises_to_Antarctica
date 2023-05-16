export function initSmoothScroll() {
  let anchors = document.querySelectorAll('a[href*="#"]');
  if (!anchors.length) {
    return;
  }
  anchors.forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      setTimeout(() => {
        let anchorID = anchor.getAttribute('href');
        document.querySelector(anchorID).scrollIntoView({
          behavior: 'smooth', block: 'start',
        });
      }, 50);
    });
  });
}
