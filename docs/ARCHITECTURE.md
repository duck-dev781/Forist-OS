# Proposed architecture

Forist OS is a design and engineering project, not yet a bootable OS. The architecture below is a set of hypotheses to validate.

## Upstream base

First compare a ChromiumOS-derived base (including openFyde where its license and distribution terms fit) against a general-purpose Linux base. ChromiumOS is closer to the desired browser-first appliance experience; a conventional Linux base may make generic PC hardware support and desktop customization easier. The decision must consider maintainability, build reproducibility, licensing, update design, and Android integration.

## Layers

1. **Boot and platform:** UEFI/legacy boot as feasible, kernel, init, firmware and hardware enablement.
2. **System services:** networking, audio, power management, device discovery, update agent and recovery.
3. **Desktop shell:** mountain/lake wallpaper, launcher, status area, centered dock and settings.
4. **Web:** Chromium-based browser; Google Chrome branding/distribution only where permitted.
5. **Linux apps:** isolated application environment with controlled file/device access.
6. **Android apps:** optional runtime selected after testing acceleration, compatibility, isolation and licensing.
7. **Accounts:** local accounts first; external identity providers are optional and must not be required for offline use.
8. **Updates:** signed manifests, verified payloads, staged rollout, health checks, rollback and recovery.

## CPU targets

- **x86-64:** primary target for modern PCs and the first hardware milestone.
- **32-bit x86:** separate experimental/legacy target. Browser, kernel, runtime and upstream support may be limited; do not promise feature parity.

## Design reference

The current SVG wallpaper is an editable stylized interpretation of a misty forest, mountain silhouettes, and a turquoise lake. It is a project-owned illustration, not a copy of a third-party photo. The launcher and dock are currently design concepts, not functional UI components.