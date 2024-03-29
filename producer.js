const {kafka} = require('./client')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

async function init() {
    const producer = kafka.producer()

    await producer.connect()
    console.log('producer connected')

    rl.setPrompt('> ')
    rl.prompt()

    rl.on('line', async function(line) {
        const [userName, userMessage, partition] = line.split(' ')
        await producer.send({
            topic: 'messages',
            messages: [
                { 
                    partition: partition,
                    key:'message-send', 
                    value: JSON.stringify({ user: userName, message: userMessage})}
            ]
        })
    }).on('close', async function() {
        await producer.disconnect()
        console.log('producer disconnected')
    })
}

init()