const srdceZpet = document.getElementById('clickOnMeSrdce');

srdceZpet.addEventListener('click', function() {
    window.location.href = './index.html';
});

function generateRandomNumber() {
    return Math.floor(Math.random() * (100 - 90) + 90);
  }

function updateLoveText() {
    const loveText = document.getElementById('loveText');
    const myText = "Love percentage: ";
    const randomNumber = generateRandomNumber();
    loveText.textContent = myText + randomNumber + "%";
}

function simulateEffect(iterations, delay) {
    let count = 0;
    const interval = setInterval(() => {
        updateLoveText();
        count++;
        if (count === iterations) {
            clearInterval(interval);
        }
    }, delay);
    
}

simulateEffect(20, 100); // Change 10 times with a delay of 500 milliseconds
const loveText = document.getElementById('loveText');
loveText.addEventListener('click', updateLoveText); // Add click event listener to regenerate the number
