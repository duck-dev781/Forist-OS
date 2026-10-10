# Forist OS

A lightweight, open-source desktop OS project exploring a ChromiumOS-inspired web desktop, Android application support, and Linux applications.

> **Status: early-stage project.** This repository contains an interactive desktop-shell prototype, project documentation, and design assets. It is not a bootable operating system. Google Play and Google Mobile Services require appropriate authorization and licensing.

## Try the desktop shell

Open [desktop/index.html](desktop/index.html) in a browser, or serve the repository root locally:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000/desktop/. Serving the root preserves the relative paths to the wallpaper and logo assets.

The prototype includes the Forist forest-and-lake wallpaper, desktop shortcuts, searchable app launcher, centered dock, quick-settings panel, clock, demo app windows, a simple calculator, and a lock-screen mockup. It does not change real hardware settings, run Linux commands, authenticate users, or install apps. Google Play, Android, Chromium, and Linux runtimes are not bundled by this web prototype.

## Vision

Forist OS aims to combine:

- A fast, desktop-first web experience with Chromium-based browsing.
- An Android-inspired interface with an app launcher and bottom dock.
- Linux application support where the underlying platform permits it.
- Local user accounts, with optional online account integrations designed with privacy in mind.
- Secure, signed system updates and recovery mechanisms.
- Hardware support for a broad range of x86-64 PCs, with a separate legacy x86 feasibility track.

## Design direction

The visual concept uses misty forested mountains, a turquoise alpine lake, a dark translucent application launcher, and a centered dock. See [the wallpaper](assets/forist-wallpaper.svg), [the logo](assets/forist-logo.svg), and [the desktop shell](desktop/).

## Project status

The current desktop shell is a browser-based UI prototype. A real OS image, Android runtime, driver coverage, OTA infrastructure, and any Google Play integration require separate engineering and validation work.

## Documentation

- [Roadmap](ROADMAP.md)
- [Desktop shell guide](docs/DESKTOP-SHELL.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Security and updates](docs/SECURITY.md)
- [Hardware support](docs/HARDWARE.md)
- [Accounts and app stores](docs/ACCOUNTS-AND-APPS.md)
- [Contributing](CONTRIBUTING.md)
- [License](LICENSE)

## License

Project-authored code and documentation are offered under the MIT License. Third-party source code, firmware, trademarks, and services remain subject to their own terms. See [LICENSE](LICENSE).
