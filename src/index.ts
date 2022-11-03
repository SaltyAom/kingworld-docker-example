import KingWorld from 'kingworld'
import staticPlugin from '@kingworldjs/static'

new KingWorld()
    .use(staticPlugin, {
        prefix: ''
    })
    .get('/', () => 'Hello Docker')
    .listen(8080)

console.log('🦊 KINGWORLD is running at :3000')
