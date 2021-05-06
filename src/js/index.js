function toggleView(el) {
  const id = el.getAttribute('href') || '';
  const hiddenDiv = document.querySelector(`${id}`);

  if (!this.currentView.classList.contains('is-hidden')) {
    this.currentView.classList.add('is-hidden');
  }

  hiddenDiv.classList.remove('is-hidden');
  this.currentView = hiddenDiv;
}

function init() {
  this.currentView = document.querySelector('#projects');

  document.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
      toggleView(e.target);
    }
  });
}

document.addEventListener('DOMContentLoaded', init.bind(this));
