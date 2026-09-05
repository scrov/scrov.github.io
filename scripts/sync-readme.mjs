import { cp, mkdir } from 'node:fs/promises'

await mkdir('src/pages', { recursive: true })
await cp('README.mdx', 'src/pages/index.mdx')
