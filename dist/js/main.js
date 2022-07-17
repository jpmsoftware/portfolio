var gitHubLinks = document.querySelectorAll('.icon-github');



gitHubLinks.forEach((icon) => {
  icon.addEventListener('click', () => {
    // get clicked element data-link attribute and redirect to it 
    window.location.href = icon.getAttribute('data-link');
  });
});