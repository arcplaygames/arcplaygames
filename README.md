# Arc Play Games — Premium Website

This package contains the complete landing-page source for **Arc Play Games**.

## Included

- `index.html` — premium purple GameFi landing page.
- `admin.html` — local submission viewer + CSV export.
- `google-apps-script.gs` — optional Google Sheets backend.
- `assets/arc-play-bg.mp4` — your uploaded video used as the cinematic background.
- `assets/arc-play-logo.jpg` — your uploaded logo/poster.

## Important background-video behavior

The uploaded portrait video is used in two layers:
1. a blurred, cover-filled layer so the entire browser is visually filled;
2. a clean `contain` layer so **the original video itself is never cropped**.

The video autoplays muted and loops. Browsers generally require muted autoplay for reliable automatic playback.

## Wallet connection

The Connect Wallet button uses the browser's injected EVM wallet (`window.ethereum`) and requests/switches to Arc mainnet (chain ID `5042`, hex `0x13b2`). It uses:
- RPC: `https://rpc.mainnet.arc.io`
- Explorer: `https://explorer.arc.io`

Test the wallet flow before accepting real funds or signing transactions. The website does **not** request private keys.

## X username submissions — easiest permanent setup

The front-end saves submissions locally immediately. To collect them from everyone into one place:

1. Create a Google Sheet.
2. Open **Extensions → Apps Script**.
3. Paste `google-apps-script.gs`.
4. Deploy it as a **Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the resulting `/exec` URL.
6. Open `index.html`.
7. Find:
   `submissionEndpoint: ""`
8. Replace it with your Web App URL:
   `submissionEndpoint: "YOUR_GOOGLE_APPS_SCRIPT_EXEC_URL"`
9. Re-upload/redeploy the website.

After that, every submitted X username is appended to your Google Sheet with timestamp and wallet address (if supplied). That Google Sheet becomes your simple admin dashboard.

### Local demo

If you don't configure the backend, users' submissions are stored only in that browser/device. Open `admin.html` on the same browser to view and export them.

## Deployment

You can upload the whole folder to any static host such as GitHub Pages, Cloudflare Pages, Netlify, Vercel, or your own hosting.

## Notes

- The copy says Arc Play Games is **building toward becoming** a major GameFi ecosystem; it is promotional positioning, not a guarantee.
- The page currently has no token-sale, deposit, or transaction functionality.
- Before launch, add your official terms/privacy links if you collect user data.
