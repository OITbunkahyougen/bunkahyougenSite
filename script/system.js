let pageTop =  document.getElementById('page_top');
pageTop.addEventListener('click',(e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});