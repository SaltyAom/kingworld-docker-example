import { KingWorld, t } from 'kingworld'
import { staticPlugin } from '@kingworldjs/static'

const app = new KingWorld()
    .use(staticPlugin())
    .get('/', () => 'Hi')
    .get('/header', ({ request }) => {
        const header: Record<string, string> = {}
        for (const v of request.headers.entries()) header[v[0]] = v[1]

        return header
    })
    .listen(3000)

console.log(
    `🦊 KingWorld is running at http://${app.server?.hostname}:${app.server?.port}`
)
