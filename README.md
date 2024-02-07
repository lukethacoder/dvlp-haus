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
  <a href="https://app.netlify.com/sites/dvlp-haus/deploys">
    <img src="https://therealsujitk-vercel-badge.vercel.app/?app=dvlp-haus" alt="vercel deployment status for dvlp.haus" />
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
