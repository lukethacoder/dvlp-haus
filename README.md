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

## ⚙️ Tools

Configuring a new tool requires a few steps:

### Create a new folder with the following files in `./tools/{my-new-tool}/`

```
.
└── tools/
    ├── index.ts
    └── my-new-tool/
        ├── content.mdx // description and/or documentation
        ├── index.tsx // tool config
        └── server.tsx // main entry point for your component
```

`content.mdx`

This is an optional file to describe the tool and provide any extra documentation

`index.tsx`

```ts
import { ITool } from '@/lib/tools'

const CONFIG: ITool = {
  slug: 'my-new-tool',
  name: 'My New Tool',
  description:
    'Short description about the tool. Used for Card displays and SEO.',
  category: 'math', // check the ./lib/tools/index.ts file for allowed categories, and/or allow TS to tell you
}

export default CONFIG
```

`server.tsx`

This is the main entry point for your component. If you do not require `'use client'`, you may build your component directly here. If you do require `'use client'`, create a `client.tsx` file and import it here using the following boilerplate in your `server.tsx` file.

```tsx
import { Suspense } from 'react'

import { Client } from './client'

export default function ServerComponent() {
  return (
    <span>
      <Suspense>
        <Client />
      </Suspense>
    </span>
  )
}
```

### Update `./tools/index.ts`

Add your new component to the following config constants:

- `TOOL_NAMES` - add the slug value of your tool (e.g. `my-new-tool`)
- `TOOLS` - add the new slug and the config (`ITool`)
- `TOOL_COMPONENTS` - add a `component` key and an optional `content` key that both resolve React components
