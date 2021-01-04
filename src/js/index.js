function toggleView(el) {
  const id = el.getAttribute('href') || '';
  const hiddenDiv = document.querySelector(`${id}`);

  if (!this.currentView.classList.contains('is-hidden')) {
    this.currentView.classList.add('is-hidden');
  }

  hiddenDiv.classList.remove('is-hidden');
  this.currentView = hiddenDiv

  if (hiddenDiv.id === 'whoami') {
    grow();
  }
}

// function enlargeImage(className) {
//   const img = document.querySelector(`.${className}`);

//   if (!img.classList.contains('is-modal-open')) {
//     img.classList.add('is-modal-open');
//     img.style.objectFit = 'contain';
//     img.style.cursor = 'zoom-out';
//     return;
//   }
//   img.classList.remove('is-modal-open');
//   img.style.objectFit = 'cover';
//   img.style.cursor = 'default';
// }

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

function init() {
  this.currentView = document.querySelector('#projects');

  document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      toggleView(e.target);
    }
  });
}

document.addEventListener('DOMContentLoaded', init.bind(this));
