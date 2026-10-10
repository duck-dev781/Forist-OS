# Forist OS

A lightweight, open-source desktop OS project exploring a ChromiumOS-inspired web desktop, Android application support, and Linux applications.

> **Status: early-stage project.** This repository currently contains project documentation and design assets, not a bootable operating system. Google Play and Google Mobile Services require appropriate authorization and licensing.

## Vision

Forist OS aims to combine:

- A fast, desktop-first web experience with Chromium-based browsing.
- An Android-inspired interface with an app launcher and bottom dock.
- Linux application support where the underlying platform permits it.
- Local user accounts, with optional online account integrations designed with privacy in mind.
- Secure, signed system updates and recovery mechanisms.
- Hardware support for a broad range of x86-64 PCs, with a separate legacy x86 feasibility track.

## Design direction

The visual concept uses misty forested mountains, a turquoise alpine lake, a dark translucent application launcher, and a centered dock. See [`assets/forist-wallpaper.svg`](assets/forist-wallpaper.svg) and [`assets/forist-logo.svg`](assets/forist-logo.svg).

## Project status

The first milestone is documentation, branding, and reproducible build research. A real OS image, Android runtime, driver coverage, OTA infrastructure, and any Google Play integration will require separate engineering and validation work.

## Documentation

- [Roadmap](ROADMAP.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Security and updates](docs/SECURITY.md)
- [Hardware support](docs/HARDWARE.md)
- [Accounts and app stores](docs/ACCOUNTS-AND-APPS.md)
- [Contributing](CONTRIBUTING.md)
- [License](LICENSE)

## License

Project-authored code and documentation are offered under the MIT License. Third-party source code, firmware, trademarks, and services remain subject to their own terms. See [LICENSE](LICENSE).
