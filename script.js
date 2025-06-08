// Navigation functionality
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const pages = document.querySelectorAll(".page");
  const businessCaseCards = document.querySelectorAll(".business-case-card");
  const modal = document.getElementById("businessCaseModal");
  const modalClose = document.querySelector(".modal-close");
  const contactForm = document.getElementById("contactForm");

  // Navigation between pages
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all nav links and pages
      navLinks.forEach((nav) => nav.classList.remove("active"));
      pages.forEach((page) => page.classList.remove("active"));

      // Add active class to clicked nav link
      this.classList.add("active");

      // Show corresponding page
      const targetPage = this.getAttribute("data-page");
      document.getElementById(targetPage).classList.add("active");
    });
  });

  // Business case modal functionality
  

  // Open business case modal
  businessCaseCards.forEach((card) => {
    card.addEventListener("click", function () {
      const caseId = this.getAttribute("data-case");
      const caseData = businessCases[caseId];

      if (caseData) {
        document.getElementById("modalTitle").textContent = caseData.title;
        document.getElementById("modalBody").innerHTML = caseData.content;
        modal.style.display = "block";
      }
    });
  });

  // Close modal
  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal when clicking outside
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Contact form handling
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Create mailto link
    const mailtoLink = `mailto:salmansanadi54@gmail.com.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    alert(
      "Email client opened! Please send the email to complete your message."
    );

    // Reset form
    this.reset();
  });

  // Theme toggle functionality
  const themeToggle = document.getElementById("themeToggle");
  const darkModeToggle = document.getElementById("darkModeToggle");

  themeToggle.addEventListener("click", function () {
    // Add theme switching logic here if needed
    console.log("Theme toggle clicked");
  });

  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  // On page load, set theme from localStorage
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  // Smooth scrolling for better UX
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add animation on scroll for timeline items
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe timeline items for animation
  const timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(item);
  });

  // Observe business case cards for animation
  const caseCards = document.querySelectorAll(".business-case-card");
  caseCards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });
});
