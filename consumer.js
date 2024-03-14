const {kafka} = require('./client')

async function init() {
    const consumer = kafka.consumer({groupId: 'user-1'})

    await consumer.connect()
    console.log('consumer connected')

    await consumer.subscribe({topics: ['messages'], fromBeginning: true})

    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause}) => {
            console.log(`[${topic}]: PARTITION:${partition}: `,message.value.toString())
        }
    })
    console.log('message consumed')
}

init()