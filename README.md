# Kafka Test set-up

start zookeeper container and expose it on port 2181:
```docker run -p 2181:2181 zookeeper```

run kafka broker in docker (make sure to set <PRIVATE_IP> address of the server):
```docker run -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=192.168.29.244:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka```

