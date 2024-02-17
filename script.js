document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const validEmails = ['218x1a1227@khitguntur.ac.in', '218x1a1244@khitguntur.ac.in', '218x1a1236@khitguntur.ac.in', '218x1a1207@khitguntur.ac.in'];
  const validPasswords = ['218x1a1227', '218x1a1244', '218x1a1236', '218x1a1207'];

  if (validEmails.includes(email) && validPasswords.includes(password)) {
    window.location.href = 'https://nothing10.mydurable.com/';
  } else {
    alert('Invalid Email or Password');
  }
});
