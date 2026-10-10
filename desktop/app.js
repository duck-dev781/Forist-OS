(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const launcher = $('#launcher');
  const quickSettings = $('#quick-settings');
  const appWindow = $('#app-window');
  const appSearch = $('#app-search');
  const appGrid = $('#app-grid');
  const toast = $('#toast');
  const timeLabel = $('#time-label');
  const dateLabel = $('#date-label');
  const lockScreen = $('#lock-screen');
  let toastTimer;
  let lastApp = 'browser';

  const appDetails = {
    browser: ['Chromium', 'A clean window to the web.', 'A browser engine is not bundled into this desktop mockup yet. This button demonstrates how the Forist shell will launch the browser installed by the underlying OS.'],
    files: ['My files', 'Your files, organized.', 'A future file manager will provide Downloads, local storage, removable drives, and app-specific folders. This prototype does not read or change files on your computer.'],
    settings: ['Settings', 'Make Forist feel like yours.', 'Planned settings include wallpaper, display scale, accounts, privacy, network, Bluetooth, sound, power, and updates.'],
    calculator: ['Calculator', 'Quick calculations.', 'Try a simple calculation below.'],
    android: ['Android apps', 'Android app environment', 'Android runtime integration is not implemented yet. This tile reserves a place for the future Android application environment.'],
    play: ['Play Store', 'Application store', 'Google Play is proprietary and requires appropriate authorization and licensing. No store is installed by this visual prototype; an open-source app catalog is planned.'],
    terminal: ['Terminal', 'Linux command line', 'A future Linux environment can provide a terminal and isolated Linux applications. This webpage cannot execute operating-system commands.'],
    gallery: ['Gallery', 'Your favorite moments.', 'A future gallery app could browse local images after desktop integration and permission controls are implemented.'],
    music: ['Music', 'A little soundtrack for the trail.', 'Audio playback will be implemented as a separate application.'],
    notes: ['Notes', 'A quiet place for ideas.', 'Your draft stays in this demo window until you close it.'],
    linux: ['Linux apps', 'Tools from the open-source world.', 'Linux application support is a roadmap item and is not active in this browser-based preview.'],
    help: ['Welcome to Forist OS', 'A desktop concept growing into an OS.', 'This interactive prototype previews the launcher, dock, quick settings, and window style. It is not an installed operating system yet.']
  };

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2300);
  }
  function closePanels() {
    launcher.hidden = true;
    quickSettings.hidden = true;
  }
  function toggleLauncher(force) {
    const open = typeof force === 'boolean' ? force : launcher.hidden;
    launcher.hidden = !open;
    quickSettings.hidden = true;
    if (open) {
      appSearch.value = '';
      filterApps('');
      setTimeout(() => appSearch.focus(), 20);
    }
  }
  function filterApps(query) {
    const q = query.trim().toLowerCase();
    $$('.app-tile', appGrid).forEach(tile => {
      tile.hidden = !tile.dataset.name.toLowerCase().includes(q);
    });
  }
  function launchApp(id) {
    const details = appDetails[id] || appDetails.help;
    lastApp = id;
    closePanels();
    $('#window-title').textContent = details[0];
    $('#window-mark').textContent = details[0].slice(0, 1);
    const content = $('#window-content');
    if (id === 'calculator') {
      content.innerHTML = '<h2>Calculator</h2><p>A tiny working calculator for the desktop demo.</p><label for="calc-expression">Expression</label><input id="calc-expression" inputmode="decimal" placeholder="Example: 12 * (4 + 3)"><button class="primary-button" id="calc-run">Calculate</button><div class="demo-card" id="calc-result" aria-live="polite">Your result will appear here.</div>';
      $('#calc-run').addEventListener('click', () => {
        const expression = $('#calc-expression').value.trim();
        // Intentionally support only arithmetic tokens; never evaluate arbitrary JavaScript.
        if (!/^[0-9+\-*/().%\s]+$/.test(expression) || !expression) {
          $('#calc-result').textContent = 'Enter a valid arithmetic expression.';
          return;
        }
        try {
          const tokens = expression.match(/\d+(?:\.\d+)?|[()+\-*/%]/g) || [];
          if (tokens.join('') !== expression.replace(/\s/g, '')) throw new Error('Invalid expression');
          const result = parseArithmetic(tokens);
          $('#calc-result').textContent = Number.isFinite(result) ? String(result) : 'That calculation is not finite.';
        } catch (_) { $('#calc-result').textContent = 'Could not calculate that expression.'; }
      });
    } else if (id === 'notes') {
      content.innerHTML = '<h2>Notes</h2><p>Write a quick thought. This draft is only kept in this open demo window.</p><textarea id="note-draft" rows="5" placeholder="A trail, an idea, a TODO…"></textarea><button class="primary-button" id="note-save">Keep draft in this window</button><div class="demo-card" id="note-result" aria-live="polite">Nothing saved yet.</div>';
      $('#note-save').addEventListener('click', () => { $('#note-result').textContent = $('#note-draft').value || 'Your note is empty.'; });
    } else if (id === 'settings') {
      content.innerHTML = '<h2>Personalize your workspace</h2><p>Designed to stay calm, readable, and lightweight.</p><div class="demo-card"><strong>Appearance</strong><br>Forest lake wallpaper · Dark glass panels<br><strong>Accounts</strong><br>Local profile · Online sign-in not connected<br><strong>System updates</strong><br>Updater not implemented in this prototype</div><button class="primary-button" id="settings-wallpaper">Refresh wallpaper view</button>';
      $('#settings-wallpaper').addEventListener('click', () => showToast('Forist forest wallpaper is active.'));
    } else {
      content.innerHTML = '<h2>' + escapeHTML(details[1]) + '</h2><p>' + escapeHTML(details[2]) + '</p><div class="demo-card"><strong>Forist OS preview</strong><br>This is a UI prototype. The real application will be connected when the underlying OS services are implemented.</div>';
    }
    appWindow.hidden = false;
    appWindow.classList.remove('maximized');
    $$('.dock-app').forEach(button => button.classList.toggle('is-active', button.dataset.app === id));
  }
  function escapeHTML(text) {
    return text.replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  }
  function parseArithmetic(tokens) {
    let pos = 0;
    function primary() {
      const token = tokens[pos++];
      if (token === '(') {
        const value = expression();
        if (tokens[pos++] !== ')') throw new Error('Missing parenthesis');
        return value;
      }
      if (token === '-') return -primary();
      if (token === '+') return primary();
      if (!token || !/^\d+(?:\.\d+)?$/.test(token)) throw new Error('Expected number');
      return Number(token);
    }
    function term() {
      let value = primary();
      while (['*','/','%'].includes(tokens[pos])) {
        const op = tokens[pos++];
        const right = primary();
        value = op === '*' ? value * right : op === '/' ? value / right : value % right;
      }
      return value;
    }
    function expression() {
      let value = term();
      while (['+','-'].includes(tokens[pos])) {
        const op = tokens[pos++];
        const right = term();
        value = op === '+' ? value + right : value - right;
      }
      return value;
    }
    const result = expression();
    if (pos !== tokens.length) throw new Error('Unexpected token');
    return result;
  }
  function updateClock() {
    const now = new Date();
    timeLabel.textContent = new Intl.DateTimeFormat(undefined, {hour:'numeric', minute:'2-digit'}).format(now);
    dateLabel.textContent = new Intl.DateTimeFormat(undefined, {weekday:'short', month:'short', day:'numeric'}).format(now);
    $('#lock-time').textContent = new Intl.DateTimeFormat(undefined, {hour:'numeric', minute:'2-digit'}).format(now);
  }
  updateClock();
  setInterval(updateClock, 15000);

  $('#launcher-button').addEventListener('click', () => toggleLauncher());
  $('#all-apps-button').addEventListener('click', () => { appSearch.focus(); showToast('Showing all available demo apps.'); });
  appSearch.addEventListener('input', event => filterApps(event.target.value));
  $('#clock-button').addEventListener('click', () => {
    quickSettings.hidden = !quickSettings.hidden;
    launcher.hidden = true;
  });
  $('#wifi-button').addEventListener('click', () => { quickSettings.hidden = false; launcher.hidden = true; });
  $('#volume-button').addEventListener('click', () => { quickSettings.hidden = false; launcher.hidden = true; showToast('Sound controls are demo-only.'); });
  $('#profile-button').addEventListener('click', () => showToast('Signed in locally as Forist profile (demo).'));
  $$('.shortcut, .app-tile, .dock-app').forEach(button => button.addEventListener('click', () => launchApp(button.dataset.app)));
  $$('.setting-toggle').forEach(button => button.addEventListener('click', () => {
    button.classList.toggle('active');
    const state = button.classList.contains('active') ? 'on' : 'off';
    const name = button.querySelector('strong').textContent;
    const small = button.querySelector('small');
    if (small) small.textContent = state === 'on' ? 'On (demo)' : 'Off (demo)';
    showToast(name + ' ' + state + ' · demo only');
  }));
  $$('.close-button').forEach(button => button.addEventListener('click', () => { const panel = document.getElementById(button.dataset.close); if (panel) panel.hidden = true; }));
  $('#brightness-slider').addEventListener('input', event => {
    $('#brightness-value').textContent = event.target.value + '%';
    $('#desktop').style.filter = 'brightness(' + (0.55 + Number(event.target.value) / 200) + ')';
  });
  $('#close-window').addEventListener('click', () => { appWindow.hidden = true; appWindow.classList.remove('maximized'); });
  $('#minimize-window').addEventListener('click', () => { appWindow.hidden = true; showToast('Window minimized to the dock (demo).'); });
  $('#maximize-window').addEventListener('click', () => appWindow.classList.toggle('maximized'));
  $('#lock-button').addEventListener('click', () => { closePanels(); appWindow.hidden = true; lockScreen.hidden = false; });
  $('#unlock-button').addEventListener('click', () => { lockScreen.hidden = true; showToast('Welcome back. This demo lock screen has no authentication.'); });
  $$('.close-button').forEach(button => button.addEventListener('click', () => { if (button.dataset.close === 'quick-settings') quickSettings.hidden = true; }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      if (!launcher.hidden) { toggleLauncher(false); return; }
      if (!quickSettings.hidden) { quickSettings.hidden = true; return; }
      if (!appWindow.hidden) { appWindow.hidden = true; return; }
      if (!lockScreen.hidden) lockScreen.hidden = true;
    }
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault(); toggleLauncher();
    }
  });
  // Initial hint makes it obvious that this is a clickable desktop prototype.
  setTimeout(() => showToast('Welcome to Forist OS — click the logo to open apps.'), 700);
})();