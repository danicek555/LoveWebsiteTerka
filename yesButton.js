const srdceZpet = document.getElementById('clickOnMeSrdce');

srdceZpet.addEventListener('click', function() {
    window.location.href = './index.html';
});
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit');
    const dateForm = document.querySelector('.dateForm');
    const omg = document.querySelector(".omg")
    const omgDiv = document.querySelector(".omgDiv")
    // Scroll to the top of the page


    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting (if you don't want the form to submit)

        dateForm.classList.add("hide");
        omg.textContent = 'Babe I love you sooo much of course I will go with you on a date <';
        omgDiv.classList.add("center")
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: Smooth scrolling animation
          });

    });
});
