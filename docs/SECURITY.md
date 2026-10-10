# Security and updates

Security is a design requirement, not a later add-on. This document describes intended controls; it does not claim they are implemented.

## Baseline principles

- Prefer supported upstream components and publish the versions and patch provenance used by builds.
- Minimize privileged services and default-on network listeners.
- Keep applications isolated with least-privilege filesystem and device access.
- Protect local credentials with OS-appropriate secure storage; never store passwords in plaintext.
- Make telemetry opt-in, documented, and easy to disable.
- Publish vulnerability reporting instructions and security advisories.

## Update design

The target design is signed update metadata and payloads, integrity verification before activation, staged rollout, and automatic rollback when health checks fail. An A/B system partition approach may be suitable, depending on the selected base. Recovery must be documented and tested before stable releases.

Signing keys must not be committed to this repository or exposed in CI logs. Release signing should use protected release infrastructure; ordinary pull-request builds must never receive production signing secrets.

## Threat model to develop

Consider malicious updates, compromised mirrors, rollback attacks, local privilege escalation, malicious apps, stolen local devices, account-provider compromise, and insecure recovery media. Document which threats are mitigated by the chosen base and which remain.

## Current status

No secure updater, verified boot configuration, or production signing infrastructure is implemented by this documentation change. These require code, key management, testing, and a defined release process.