import { createServer } from 'http'
import serveStatic from 'serve-static'
import finalhandler from 'finalhandler'

const PORT = process.env.PORT || 3000
const PUBLIC_FOLDER = 'public'

const publicFolder = serveStatic(PUBLIC_FOLDER)

const server = createServer(async (req, res) => {
  publicFolder(req, res, finalhandler(req, res))
})

server.listen(PORT, () => {
  console.log(`server start on port ${PORT} !`)
  // wsServer.startTick();
})
