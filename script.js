// Wait for the page to load
document.addEventListener('DOMContentLoaded', function () {

  // Select the button and the card
  var button = document.getElementById('acceptQuestBtn'); //DOM selection method 
  var card = button.closest('.quest-card');

  // Handle button click
  button.addEventListener('click', function () {
    // Change button text
    button.textContent = 'Quest Accepted!';

    // Change button color by disabling it (styled via CSS)
    button.disabled = true;

    // Add a green border glow to the card
    card.classList.add('accepted');
  });

});
