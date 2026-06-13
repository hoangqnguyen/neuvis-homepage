// Neuvis homepage — progressive enhancement only
(function () {
  "use strict";

  // Current year in footer
  var yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();

  // Theme toggle (light is the default; preference persisted)
  var root = document.documentElement;
  var themeBtn = document.getElementById("themeBtn");
  function applyTheme(mode) {
    if (mode === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    if (themeBtn) {
      var icon = themeBtn.querySelector(".theme__icon");
      if (icon) icon.textContent = mode === "dark" ? "☀" : "☾";
      themeBtn.setAttribute(
        "aria-label",
        mode === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    }
  }
  applyTheme(root.getAttribute("data-theme") === "dark" ? "dark" : "light");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem("neuvis-theme", next); } catch (e) {}
    });
  }

  // Mobile menu toggle
  var nav = document.querySelector(".nav");
  var menuBtn = document.getElementById("menuBtn");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () { nav.classList.toggle("open"); });
    nav.querySelectorAll(".nav__links a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); });
    });
  }

  // Scroll-reveal with IntersectionObserver
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("in"); });
  }
})();
