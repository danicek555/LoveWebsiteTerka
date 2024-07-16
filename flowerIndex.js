
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  
  const srdceZpet = document.getElementById('clickOnMeSrdce');

srdceZpet.addEventListener('click', function() {
    window.location.href = './index.html';
});