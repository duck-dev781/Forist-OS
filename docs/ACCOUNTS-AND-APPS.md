# Accounts and application ecosystems

## Accounts

The initial design should support a local account that can sign in and use the computer without an internet connection. A future Forist account could synchronize optional preferences or backups, but should not be necessary to boot or use local applications.

Google sign-in is an external integration, not an assumption that Google will authorize a custom OS. Authentication must use documented, approved flows and must never collect or proxy users' Google passwords.

## Linux applications

Evaluate a maintained Linux container or sandbox and a catalog that clearly identifies package source, permissions, and update status. Do not imply that an app store is available until the installer, metadata, signature verification, and update behavior are implemented.

## Android applications

Evaluate Android runtime options independently from the desktop shell. Validate graphics acceleration, audio, networking, storage permissions, app isolation, and compatibility before promising Android app support.

## Google Play

Google Play and Google Mobile Services are proprietary services and require appropriate Google authorization/licensing and compliance with applicable requirements. They cannot simply be bundled into an otherwise open-source repository. Until an authorized integration exists, prioritize open-source app sources and clearly explain limitations.

## Browser

Chromium is the open-source browser project. Google Chrome is a separate branded distribution with its own terms and distribution constraints. The project should use a lawful, maintainable browser distribution strategy and avoid implying that Chrome branding is included by default.