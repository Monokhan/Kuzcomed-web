// Kuzcomed — interacciones del sitio de muestra (sin dependencias)
(function () {
  'use strict';

  // Menú móvil
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // Año actual en el pie
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Selector de especialidades (Inicio) — patrón de pestañas accesible
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.spec-btn'));
  function selectTab(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      var panel = document.getElementById(t.getAttribute('aria-controls'));
      if (panel) panel.hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { selectTab(tab, false); });
    tab.addEventListener('keydown', function (e) {
      var next = null;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
      if (e.key === 'Home') next = tabs[0];
      if (e.key === 'End') next = tabs[tabs.length - 1];
      if (next) { e.preventDefault(); selectTab(next, true); }
    });
  });

  // Filtro de médicos por especialidad
  var chips = Array.prototype.slice.call(document.querySelectorAll('.chip[data-filter]'));
  var docs = Array.prototype.slice.call(document.querySelectorAll('.doc[data-specs]'));
  var countEl = document.querySelector('[data-result-count]');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var f = chip.getAttribute('data-filter');
      chips.forEach(function (c) { c.setAttribute('aria-pressed', c === chip ? 'true' : 'false'); });
      var shown = 0;
      docs.forEach(function (d) {
        var match = f === 'todos' || d.getAttribute('data-specs').split(' ').indexOf(f) > -1;
        d.hidden = !match;
        if (match) shown++;
      });
      if (countEl) countEl.textContent = 'Mostrando ' + shown + (shown === 1 ? ' especialista' : ' especialistas');
    });
  });

  // Formulario de contacto (demostración: valida y muestra confirmación, no envía datos)
  var form = document.getElementById('contact-form');
  var done = document.getElementById('form-done');
  if (form && done) {
    var required = ['nombre', 'email', 'mensaje'];
    function check(name) {
      var input = form.elements[name];
      var field = input.closest('.field');
      var err = field.querySelector('.error');
      var msg = '';
      if (!input.value.trim()) msg = 'Completa este campo.';
      else if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) msg = 'Escribe un email válido, por ejemplo nombre@correo.cl.';
      field.classList.toggle('invalid', !!msg);
      input.setAttribute('aria-invalid', msg ? 'true' : 'false');
      err.textContent = msg;
      return !msg;
    }
    required.forEach(function (n) {
      form.elements[n].addEventListener('blur', function () { check(n); });
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstBad = null;
      required.forEach(function (n) { if (!check(n) && !firstBad) firstBad = form.elements[n]; });
      if (firstBad) { firstBad.focus(); return; }
      form.hidden = true;
      done.hidden = false;
      done.querySelector('h2').focus();
    });
    var again = document.getElementById('form-again');
    if (again) {
      again.addEventListener('click', function () {
        form.reset();
        done.hidden = true;
        form.hidden = false;
        form.elements.nombre.focus();
      });
    }
  }
})();
