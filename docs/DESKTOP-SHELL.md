# Forist OS desktop shell prototype

## Run locally

From the repository root, run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000/desktop/ in a browser. A local HTTP server is recommended so all relative assets resolve consistently. You can also open desktop/index.html directly in a modern browser.

## Interactions

- Select the Forist icon at the left of the dock to open the launcher.
- Search filters the app tiles by name.
- Select a tile or desktop shortcut to open its demo window.
- Select the clock or network icon to open quick settings.
- Quick-setting toggles, brightness, window minimize/maximize/close, and the demo lock screen are interactive.
- Press Escape to dismiss the current panel/window; Ctrl+K or Meta+K toggles the launcher.
- The Calculator and Notes tiles include simple in-window demonstrations.

## Scope and safety

This is a static HTML/CSS/JavaScript concept, not an OS desktop session. The launcher tiles do not launch installed applications. Quick settings do not change actual Wi-Fi, Bluetooth, audio, or display hardware. The lock screen is not a security boundary and has no authentication. The prototype does not persist notes or settings, access personal files, execute shell commands, or include Chromium, an Android runtime, Google Play, or Linux containers.

## Design direction

The shell references the project-owned SVG wallpaper and logo in the assets directory. It uses a translucent dark teal launcher, responsive six-column app grid, centered bottom dock, system tray, and an Android-inspired desktop layout. CSS and JS are intentionally dependency-light; the stylesheet optionally loads fonts from Google Fonts, with system fallbacks if the network is unavailable.

## Next integration work

1. Review keyboard navigation, focus restoration, screen-reader labels, and reduced-motion behavior.
2. Replace demo controls with interfaces to real system services only after the OS base is chosen.
3. Connect app launch requests to a trusted application registry rather than arbitrary command strings.
4. Implement real session locking and account authentication in the OS layer, not in browser JavaScript.
5. Measure performance on low-memory x86-64 hardware and avoid loading heavyweight components until needed.
