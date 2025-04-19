document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Simple client-side form validation
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Form submitted successfully!');
    // You can implement further actions like sending data to your server here
  } else {
    alert('Please fill out all fields.');
  }
});
