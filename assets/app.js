(function () {
  "use strict";
  var DATA = Array.isArray(window.PROJECT_DATA) ? window.PROJECT_DATA : [];

  /* ---------- theme ---------- */
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');
  function applyTheme(t) {
    root.setAttribute('data-theme', t);
  }
  // Theme already applied in <head>; keep toggle in sync
  try {
    var saved = localStorage.getItem('aj-theme');
    if (!root.getAttribute('data-theme')) {
      applyTheme(saved === 'dark' ? 'dark' : 'light');
    }
  } catch (e) {
    if (!root.getAttribute('data-theme')) applyTheme('light');
  }
  toggle.addEventListener('click', function () {
    var current = root.getAttribute('data-theme') || 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('aj-theme', next); } catch (e) {}
  });

  /* ---------- hide on scroll down / show on up ---------- */
  var topbar = document.getElementById('topbar');
  var topSpacer = document.getElementById('topSpacer');
  var lastScroll = 0;
  var ticking = false;
  var hideThreshold = 80;

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    var goingDown = y > lastScroll;

    if (y < 24) {
      topbar.classList.remove('is-hidden');
    } else if (goingDown && y > hideThreshold) {
      topbar.classList.add('is-hidden');
    } else {
      topbar.classList.remove('is-hidden');
    }

    lastScroll = y <= 0 ? 0 : y;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  function updateSpacer() {
    topSpacer.style.height = topbar.offsetHeight + 'px';
  }

  /* ---------- card rendering ---------- */
  function esc(s) {
    return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function escPre(s) {
    return (s || '').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  }

  function cardHTML(p) {
    var detailHtml = (p.details || []).slice(0, 4).map(function (d) {
      return d.indexOf('\n') >= 0 ? '<p class="card-detail-pre">' + escPre(esc(d)) + '</p>' : '<p>' + esc(d) + '</p>';
    }).join('');
    var titleInner = esc(p.title);
    var isOpenSource = p.workType === 'Self-Initiated';
    var ossTag = isOpenSource ? '<span class="card-title-oss">(Open-Source)</span>' : '';
    var titleBlock = p.extraLinks && p.extraLinks.length
      ? '<span>' + titleInner + '</span>'
      : '<a href="' + esc(p.url) + '" target="_blank" rel="noopener">' + titleInner + '</a>';

    var linksBlock = '';
    if (p.extraLinks && p.extraLinks.length) {
      var items = p.extraLinks.map(function (l) {
        var label = esc(l.text);
        var sp = label.indexOf(' ');
        var first = sp >= 0 ? label.slice(0, sp) : label;
        var rest = sp >= 0 ? label.slice(sp) : '';
        return '<a href="' + esc(l.href) + '" target="_blank" rel="noopener"><strong>' + first + '</strong>' + rest + '</a>';
      }).join('');
      linksBlock = '<div class="card-variants">' + items + '</div>';
    }

    var clientLabel = p.clientUrl
      ? '<a href="' + esc(p.clientUrl) + '" target="_blank" rel="noopener" style="color:var(--link);text-decoration:none">' + esc(p.client) + '</a>'
      : esc(p.client || '—');

    var infoBadges = '<span class="info-badge">Work Type: ' + esc(p.workType || 'Self-Initiated') + '</span>';
    if (p.client) {
      infoBadges += '<span class="info-badge">Client: ' + clientLabel + '</span>';
    }
    if (p.tasks && p.tasks.length) {
      infoBadges += p.tasks.map(function (t) {
        return '<span class="info-badge info-badge-tasks">' + esc(t) + '</span>';
      }).join('');
    }

    var imgLink = p.url
      ? '<a href="' + esc(p.url) + '" target="_blank" rel="noopener" tabindex="-1">'
      : '<div>';
    var imgClose = p.url ? '</a>' : '</div>';

    return '' +
      '<article class="card">' +
        '<div class="card-media">' +
          imgLink +
            '<img src="' + esc(p.image) + '" alt="" loading="lazy" decoding="async">' +
          imgClose +
        '</div>' +
        '<div class="card-body">' +
          '<h3 class="card-title">' + titleBlock + ossTag + '</h3>' +
          '<div class="card-detail">' + detailHtml + '</div>' +
          linksBlock +
          '<div class="card-info">' + infoBadges + '</div>' +
        '</div>' +
      '</article>';
  }

  var gridEl = document.getElementById('grid');

  function wireImages() {
    gridEl.querySelectorAll('.card-media img').forEach(function (img) {
      var media = img.closest('.card-media');
      function done() {
        img.classList.add('is-loaded');
        if (media) media.classList.add('has-image');
      }
      if (img.complete && img.naturalWidth) {
        done();
      } else {
        img.addEventListener('load', done);
        img.addEventListener('error', done);
      }
    });
  }

  var reduceMotion = false;
  try {
    reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (e) {}

  var cardObserver = null;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    cardObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        entry.target.classList.remove('is-entering');
        cardObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  }

  function wireCardReveal() {
    if (!cardObserver) return;
    gridEl.querySelectorAll('.card').forEach(function (card, i) {
      card.classList.add('is-entering');
      card.style.transitionDelay = Math.min(i * 35, 280) + 'ms';
      cardObserver.observe(card);
    });
  }

  function render() {
    gridEl.innerHTML = DATA.map(cardHTML).join('');
    wireImages();
    wireCardReveal();
  }

  render();
  updateSpacer();
  window.addEventListener('resize', updateSpacer);
})();
