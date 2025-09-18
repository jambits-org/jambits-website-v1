// Button click alert
document.getElementById("notifyBtn").addEventListener("click", () => {
  alert("We’ll notify you when Jambits goes live!");
});

// Email form
document.getElementById("emailForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  alert(`Thanks! We'll keep you updated at ${email}`);
  document.getElementById("emailForm").reset();
});
