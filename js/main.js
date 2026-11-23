(function () {
  'use strict';

  var TODO_STORAGE_KEY = 'sae301_todo_state_v1';

  /* 1. Menu de navigation mobile */
  var navToggle = document.querySelector('[data-nav-toggle]');
  var siteNav = document.querySelector('[data-site-nav]');

  function closeNav() {
    if (!navToggle || !siteNav) return;
    siteNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && siteNav.classList.contains('is-open')) {
        closeNav();
        navToggle.focus();
      }
    });

    document.addEventListener('click', function (event) {
      if (
        siteNav.classList.contains('is-open') &&
        !siteNav.contains(event.target) &&
        !navToggle.contains(event.target)
      ) {
        closeNav();
      }
    });
  }

  /* 2. Boutons copier les codes hexadécimaux (charte-amu.html) */
  var copyButtons = document.querySelectorAll('[data-copy-hex]');
  copyButtons.forEach(function (button) {
    var originalText = button.textContent;
    button.addEventListener('click', function () {
      var hex = button.getAttribute('data-copy-hex');
      if (!hex) return;

      function showCopied() {
        button.textContent = 'Copié : ' + hex;
        window.setTimeout(function () {
          button.textContent = originalText;
        }, 1600);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(hex).then(showCopied).catch(function () {
          fallbackCopy(hex);
          showCopied();
        });
      } else {
        fallbackCopy(hex);
        showCopied();
      }
    });
  });

  function fallbackCopy(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
    } catch (e) {
      // Ignore fallback error
    }
    document.body.removeChild(textarea);
  }

  /* 3. Aperçu de progression sur la page d'accueil (index.html) */
  var homeProgressEl = document.querySelector('[data-home-todo-progress]');
  if (homeProgressEl) {
    var BASE_TASK_COUNT = 39;
    try {
      var raw = window.localStorage.getItem(TODO_STORAGE_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        var checked = parsed && typeof parsed.checked === 'object' && parsed.checked ? parsed.checked : {};
        var customTasks = Array.isArray(parsed && parsed.customTasks) ? parsed.customTasks : [];
        var total = BASE_TASK_COUNT + customTasks.length;
        var doneCount = Object.keys(checked).filter(function (k) {
          return checked[k] === true;
        }).length;
        if (doneCount > total) doneCount = total;
        var pct = total > 0 ? Math.round((doneCount / total) * 100) : 0;
        homeProgressEl.textContent = doneCount + ' / ' + total + ' tâches cochées (' + pct + ' %)';
      } else {
        homeProgressEl.textContent = '0 / ' + BASE_TASK_COUNT + ' tâches cochées (0 %)';
      }
    } catch (e) {
      homeProgressEl.textContent = 'Suivi local prêt (0 %)';
    }
  }
})();
