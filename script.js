// Show/hide back to top button
const btn = document.getElementById("backToTop");

window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Handle all Register button clicks
document.querySelectorAll(".batch-btn").forEach((registerbtn) => {
  registerbtn.addEventListener("click", function (e) {
    e.preventDefault(); // prevent navigation if it's a link
    showToast("Please send an email to the mail mentioned in contact section. Thank you!");
  });
});

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  // Hide after 5 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 5000);
}

