document.getElementById('login-box').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === '218x1a1227@khitguntur.ac.in' && password === '218x1a1227' || email === '218x1a1244@khitguntur.ac.in' && password === '218x1a1244' || email === '218x1a1236@khitguntur.ac.in' && password === '218x1a1236' || email === '218x1a1207@khitguntur.ac.in' && password === '218x1a1207' ) {
    window.location.href = 'https://nothing10.mydurable.com/';
  } else {
    alert('Invalid Email or Password');
  }
});
