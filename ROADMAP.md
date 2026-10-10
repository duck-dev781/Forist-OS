# Forist OS roadmap

This roadmap is aspirational. Items are not complete unless explicitly marked done.

## Milestone 0 — Project foundation
- [x] Establish project repository and initial documentation
- [x] Define initial visual direction and create editable SVG concept assets
- [x] Add basic repository validation workflow
- [ ] Agree on supported upstream base and release policy

## Milestone 1 — Desktop prototype
- [ ] Implement launcher, taskbar/dock, settings shell, and wallpaper
- [ ] Establish design tokens, accessibility, and keyboard navigation
- [ ] Prototype local user profiles and session boundaries
- [ ] Measure startup time, idle RAM, and disk footprint

## Milestone 2 — Bootable x86-64 development image
- [ ] Select a maintainable ChromiumOS-derived or Linux-based upstream
- [ ] Document reproducible build dependencies and source provenance
- [ ] Boot in a VM and on at least one physical test machine
- [ ] Test installation, recovery, graphics, audio, networking, suspend, and updates

## Milestone 3 — Application environments
- [ ] Evaluate Linux app/container integration
- [ ] Evaluate Android runtime options and hardware acceleration
- [ ] Provide an open-source app discovery/store experience
- [ ] Investigate Google Play authorization and compatibility requirements

## Milestone 4 — Reliability and security
- [ ] Signed update metadata and packages
- [ ] Atomic/A-B update strategy with rollback and recovery
- [ ] Secure boot/verified boot feasibility assessment
- [ ] Security response process and supported update window
- [ ] Privacy review for accounts, telemetry, and crash reporting

## Milestone 5 — Hardware expansion
- [ ] Publish a tested hardware compatibility matrix
- [ ] Expand Intel and AMD graphics/network/audio coverage
- [ ] Test common Realtek and Broadcom devices where lawful firmware is available
- [ ] Assess a separate legacy 32-bit x86 target

## Release principles
- Do not promise universal driver support.
- Do not ship Google Play or Google Mobile Services without appropriate authorization.
- Do not publish a build as stable until installation, update, rollback, and recovery have been tested.
- Keep build provenance, checksums, and security advisories public.