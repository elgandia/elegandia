(function(){
  var path = window.location.pathname;
  var lang = 'fr';
  if (path.indexOf('/blog/nl/') !== -1) lang = 'nl';
  else if (path.indexOf('/blog/de/') !== -1) lang = 'de';

  var t = {
    fr: { home: 'Accueil' },
    nl: { home: 'Home' },
    de: { home: 'Home' }
  }[lang];

  document.getElementById('site-header').innerHTML =
    '<a href="/" class="logo">Elegan<span>dia</span></a>' +
    '<nav>' +
      '<a href="/">' + t.home + '</a>' +
      '<a href="/blog/" class="active">Blog</a>' +
    '</nav>' +
    '<div class="lang-btns">' +
      '<a href="/blog/" class="lang-btn' + (lang==='fr'?' active':'') + '">FR</a>' +
      '<a href="/blog/nl/" class="lang-btn' + (lang==='nl'?' active':'') + '">NL</a>' +
      '<a href="/blog/de/" class="lang-btn' + (lang==='de'?' active':'') + '">DE</a>' +
    '</div>';

  var style = document.createElement('style');
  style.textContent =
    '@media(max-width:700px){' +
    'header{flex-wrap:wrap;gap:10px;justify-content:center}' +
    '.logo{font-size:20px}' +
    'nav{gap:10px;order:3;width:100%;justify-content:center}' +
    '.lang-btns{gap:6px}' +
    '.lang-btn{padding:3px 8px;font-size:10px}' +
    '}';
  document.head.appendChild(style);
})();
