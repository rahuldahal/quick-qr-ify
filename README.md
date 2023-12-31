# QuickQRify - Chrome Extension

- Video URL: [Youtube](https://youtu.be/MaE6e1GZnxs)
- Slides URL: [Google Slides](https://docs.google.com/presentation/d/1aXWCyfP9_guvL45EH9ODF6VPNtE2Is31VKU6Q0DVMQk/edit?usp=sharing)

## Overview

QuickQRify is a Chrome browser extension that simplifies the process of generating QR codes for selected text on webpages. It provides a quick and convenient way for users, especially students, to share resources by converting selected text, such as URLs or any other information, into QR codes.

## Features

1. **Text Selection:**

   - Automatically captures and processes the selected text on a webpage.

2. **QR Code Generation:**

   - Opens a user-friendly popup for inputting text and generating QR codes.

3. **QR Code Display:**

   - Displays the dynamically generated QR code within the extension popup.

4. **Copy to Clipboard:**
   - Allows users to copy the generated QR code image to the clipboard for easy sharing.

## How to Use

1. **Installation:**

   - Download the extension files or clone the repository.
   - Open Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode" and click "Load unpacked." Select the extension directory.

2. **Generate QR Code:**

   - Select text on any webpage.
   - Click on the QuickQRify icon in the browser toolbar to open the extension popup.
   - Input the selected text and click "Generate QR Code."

3. **Copy and Share:** [TODO for future]
   - Optionally, click a button to copy the generated QR code image to the clipboard.
   - Share the QR code with others for quick access to the selected information.

## Development

- The extension is built using Manifest V3 for Chrome extensions.
- Content scripts capture and process selected text on webpages.
- QR codes are generated dynamically using JavaScript and a QR code library.

## Contribution

- Use Tailwind CSS for styling the extension popup.

## Additional Resources

- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/mv3/getstarted/)
- [QRCode Library (example)](https://github.com/davidshimjs/qrcodejs)
