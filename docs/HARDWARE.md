# Hardware support strategy

Forist OS aims for broad PC compatibility, but support depends on the selected kernel, firmware availability, upstream maintenance, and testing.

## First target

Start with x86-64 UEFI PCs and virtual machines. Record exact machine model, CPU, GPU, Wi-Fi chipset, audio device, firmware requirements, and test results.

## Compatibility areas

- Intel and AMD CPU/chipset platforms
- Intel, AMD, and supported NVIDIA graphics paths
- Ethernet and Wi-Fi adapters, including supported Realtek and Broadcom chipsets
- Bluetooth, audio, USB, cameras, touchpads, keyboards, suspend/resume and power management
- NVMe, SATA, USB storage and common display resolutions

A vendor name alone does not establish compatibility. Some devices require proprietary firmware or out-of-tree drivers; licensing and redistribution must be reviewed.

## Test matrix

For each test device, report: boot mode, kernel version, whether firmware was required, whether acceleration works, networking, audio, suspend/resume, installation, update, and recovery results.

## 32-bit x86

Treat 32-bit x86 as a separate legacy experiment. Modern browser builds, Android runtimes, firmware and security support may be unavailable. Do not advertise it as equivalent to x86-64 until the complete stack has been tested.