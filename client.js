const { Kafka } = require('kafkajs')

exports.kafka = new Kafka({
    clientId: "kafka-app",
    brokers: ["192.168.29.244:9092"]
})
