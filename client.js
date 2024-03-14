const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: "kafka-app",
    brokers: ["http://192.168.29.244:9092"]
})
