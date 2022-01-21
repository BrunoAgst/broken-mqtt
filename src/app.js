const { Server, persistence } = require('mosca')

const config = {
    type: 'redis',
    redis: require('redis'),
    db: 12,
    return_buffers: true,
    host: 'localhost',
    port: 6379
    
}

const settings = {
    port: 1883,
    backend: config,
    persistence: {
        factory: persistence.Redis,
        host: 'localhost',
        port: '6379'
    }
}

const server = new Server(settings)

server.on('clientConnected', function (client) {
    console.log('client connected', client.id)
})

server.on('published', function (packet, client) {
    console.log('Published', packet.payload)
})

server.on('ready', function () {
    console.log('Mosca server is up running')
})
