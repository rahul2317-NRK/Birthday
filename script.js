document.getElementById('reveal-btn').addEventListener('click', function () {
    const surpriseMessage = document.getElementById('surprise-message');
    surpriseMessage.classList.remove('hidden');
    surpriseMessage.style.display = 'block';
    this.style.display = 'none';
    // Show the first surprise message and second button
    surpriseMessage.classList.remove('hidden');
    secondButton.classList.remove('hidden');
    this.style.display = 'none'; // Hide the first button
});
document.getElementById('second-btn').addEventListener('click', function () {
    const secondMessage = document.getElementById('second-message');
    
    // Show the second surprise message
    secondMessage.classList.remove('hidden');
    this.style.display = 'none'; // Hide the second button
});