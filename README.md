<div align="center">
  <br>
  <br>
  <img alt="dvlp.haus" src="./docs/dvlp-haus-banner.svg" width="500">
  <br>
  <br>
  <strong>Essential developer tools to make your life easier.<br/>
Productive. Accessible. Open Source.</strong>
</div>
<br>
<p align="center">
  <a href="https://travis-ci.com/lukethacoder/dvlp-haus">
    <img src="https://travis-ci.org/lukethacoder/dvlp-haus.svg?branch=master" alt="Travis Status for dvlp.haus">
  </a>
  <a href="https://app.netlify.com/sites/dvlp-haus/deploys">
    <!-- <img src="https://api.netlify.com/api/v1/badges/4b38ccb4-466e-491e-8057-7564c1c3ee25/deploy-status" alt="Netlify Status for DVLP HAUS maintainability"> -->
    <img src="https://therealsujitk-vercel-badge.vercel.app/?app=dvlp-haus" />
  </a>
</p>

## 🍱 Tools

### Converters

- [Font Size Converter](https://dvlp.haus/tools/font-size-converter)
- [SVG to base64](https://dvlp.haus/tools/svg-to-base64)

### Math

- [Aspect Ratio Calculator](https://dvlp.haus/tools/font-size-converter)

## 🔥 Local Development

**Install the node_modules.**

```shell
pnpm install
```

**Edit the Environment variables.**

Vercel KV Redis

```env
KV_URL="redis://default:1234567890@abcdefgh-ijklm-12345.upstash.io:12345"
KV_REST_API_URL="https://abcdefgh-ijklm-12345.upstash.io"
KV_REST_API_TOKEN="abcdefghijklmnopqrstuvwxyz="
KV_REST_API_READ_ONLY_TOKEN="abcdefghijklmnopqrstuvwxyz="
```

**Start the site in `dev` mode.**

```sh
pnpm dev
```

**Open the code in your IDE of choice and start editing!**

Your site is now running at `http://localhost:3000`.
