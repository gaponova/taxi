window.onscroll = () => {
  const headerbar = document.querySelector('.header-bar');
  const Y = window.scrollY;

  if (Y > 100) {
    headerbar.classList.add('bar-fixed');
  }else if (Y < 100) {
    headerbar.classList.remove('bar-fixed');
  }
};