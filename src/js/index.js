function showDiv(div) {
  const id = div.getAttribute('href') || '';
  const hiddenDiv = document.querySelector(`${id}`);
  hiddenDiv.classList.remove('is-hidden');

  if (hiddenDiv.id === 'tools') {
    grow();
  }
}

function enlargeImage(className) {
  const img = document.querySelector(`.${className}`);

  if (!img.classList.contains('is-modal-open')) {
    img.classList.add('is-modal-open');
    img.style.objectFit = 'contain';
    img.style.cursor = 'zoom-out';
    return;
  }
  img.classList.remove('is-modal-open');
  img.style.objectFit = 'cover';
  img.style.cursor = 'default';
}

function removeFilter() {
  if (isSafari()) {
    const gradient = document.querySelector('.radial-gradient');
    gradient.style.filter = 'none';
  }
}

function grow() {
  const bars = document.querySelectorAll('.bar');
  bars.forEach((bar) => bar.classList.add('is-grow'));
}

function isDesktop() {
  return window.innerWidth >= 1024;
}

function isSafari() {
  return navigator.vendor.indexOf('Apple') > -1;
}

document.addEventListener('DOMContentLoaded', function () {
  removeFilter();

  document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      showDiv(e.target);
    }

    if (e.target.tagName === 'IMG') {
      const className = e.target.classList[0];
      if (isDesktop()) {
        enlargeImage(className);
      }
    }
  });
});
