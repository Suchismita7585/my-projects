// Simple interactivity for the dashboard
document.addEventListener("DOMContentLoaded", function () {
  // Set current date for transaction forms
  const today = new Date();
  const dueDate = new Date();
  dueDate.setDate(today.getDate() + 14);

  document.getElementById("transactionIssueDate").valueAsDate = today;
  document.getElementById("transactionDueDate").valueAsDate = dueDate;

  // Highlight active navigation item
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const pageId = this.getAttribute("data-page");

      // Update active nav link
      navLinks.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");

      // Show the selected page
      showPage(pageId);
    });
  });

  // Handle form submissions
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert(
        "Form submitted! In a real app, this would save data to the database."
      );
      closeAllModals();
    });
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");

  menuToggle.addEventListener("click", function () {
    sidebar.classList.toggle("open");
  });

  // Animate cards on load
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
  });

  let delay = 0;
  cards.forEach((card) => {
    setTimeout(() => {
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, delay);
    delay += 150;
  });
});

// Page navigation function
function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => page.classList.remove("active"));

  // Show the selected page
  document.getElementById(pageId).classList.add("active");

  // Close sidebar on mobile after selection
  document.querySelector(".sidebar").classList.remove("open");
}

// Modal Functions
function openModal(modalId) {
  document.getElementById(modalId).classList.add("show");
  document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("show");
  document.body.style.overflow = "auto"; // Re-enable scrolling
}

function closeAllModals() {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => modal.classList.remove("show"));
  document.body.style.overflow = "auto";
}

// Close modal if user clicks outside of it
window.addEventListener("click", function (event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (event.target == modal) {
      modal.classList.remove("show");
      document.body.style.overflow = "auto";
    }
  });
});
