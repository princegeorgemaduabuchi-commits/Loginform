function getLoginForm() {
  document.querySelector('.logform').style.display = 'block';
  document.querySelector('.regform').style.display = 'none';
}

function getRegisterForm() {
  document.querySelector('.logform').style.display = 'none';
  document.querySelector('.regform').style.display = 'block';
}

// Initialize by showing the login form and hiding the registration form
document.addEventListener('DOMContentLoaded', () => {
  getLoginForm();
});