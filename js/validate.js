document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  const successMsg = document.getElementById("test-contact-success");

  const showError = (id, msg) => {
    const el = document.getElementById(id);
    el.textContent = msg;
  };

  // Here is Reset errors
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  successMsg.hidden = true;

  // Here is Validation
  if (!name.value.trim()) {
    showError("test-contact-error-name", "Full name is required.");
    valid = false;
  }

  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email.value)) {
    showError(
      "test-contact-error-email",
      "Please enter a valid email address."
    );
    valid = false;
  }

  if (!subject.value.trim()) {
    showError("test-contact-error-subject", "Subject is required.");
    valid = false;
  }

  if (message.value.trim().length < 10) {
    showError(
      "test-contact-error-message",
      "Message must be at least 10 characters."
    );
    valid = false;
  }

  if (valid) {
    successMsg.hidden = false;
    e.target.reset();
  }
});
