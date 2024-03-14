const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: "kafka-app",
    brokers: ["http://192.168.29.244:9092"]
})

async function init() {
    const admin = kafka.admin()
    try {
        await admin.connect()
        console.log('admin connection success')
    } catch (e) {
        console.log('admin connection error: ', e)
    }

    try {
        await admin.createTopics({
            validateOnly: false,
            waitForLeaders: false,
            timeout: 30,
            topics: [{
                topic: 'messages',
                numPartitions: 2,
            }]
        })
        console.log("Topic [messages] creation success")
    } catch (e) {
        console.log("error creating Topic [messages]: ", e)
    }


    try {
        await admin.disconnect()
        console.log('admin disconnected')
    } catch (e) {
        console.log('error disconnecting admin: ', e)
    }

}
