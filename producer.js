const {kafka} = require('./client')

async function init() {
    const producer = kafka.producer()

    await producer.connect()
    console.log('producer connected')

    await producer.send({
        topic: 'messages',
        messages: [
            { 
                partition: 0,
                key:'message-send', 
                value: JSON.stringify({ user: 'Nishanth', message: 'Hi, How are you?'})}
        ]
    })

    producer.disconnect()
    console.log('producer disconnected')
}

init()