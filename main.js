// Theme, the same rules as bhalla.info: the black hole inverts the page, the
// new theme wiping out from wherever it was pressed. The choice only holds
// for the session, so a fresh visit always opens on the OS preference.
(function () {
  var root = document.documentElement;
  var mq = matchMedia("(prefers-color-scheme: dark)");

  function current() {
    return root.dataset.theme === "dark" ? "dark" : "light";
  }

  function toggle(x, y) {
    var next = current() === "dark" ? "light" : "dark";
    var apply = function () {
      root.dataset.theme = next;
      try {
        sessionStorage.setItem("theme", next);
      } catch (e) {
        /* storage blocked: the switch still works, it just won't persist */
      }
    };
    var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !document.startViewTransition) {
      apply();
      return;
    }
    // Big enough to clear the furthest corner, or the old theme lingers.
    var r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    root.style.setProperty("--vt-x", x + "px");
    root.style.setProperty("--vt-y", y + "px");
    root.style.setProperty("--vt-r", r + "px");
    document.startViewTransition(apply);
  }

  var hole = document.querySelector(".hole");
  if (hole) {
    hole.addEventListener("click", function (e) {
      // Keyboard presses report 0,0: wipe from the button's centre instead.
      var b = hole.getBoundingClientRect();
      var x = e.clientX || b.left + b.width / 2;
      var y = e.clientY || b.top + b.height / 2;
      toggle(x, y);
    });
  }

  // Follow the OS switching underneath us, unless the visitor has overridden
  // it this session.
  mq.addEventListener("change", function () {
    try {
      if (sessionStorage.getItem("theme")) return;
    } catch (e) {}
    root.dataset.theme = mq.matches ? "dark" : "light";
  });

  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
