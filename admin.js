const { kafka } = require("./client");

async function init() {
    const admin = kafka.admin();
  
    try {
        admin.connect();
        console.log("admin connection success");
    } catch (e) {
        console.log("\nERROR - ADMIN CONNECTION: \n", e, "\n")
    }

    try {
        await admin.createTopics({
            topics: [
            {
                topic: "chatMessages",
                numPartitions: 2,
            },
            ],
        });
        console.log("topic creation success [messages]");
    } catch (e) {
        console.log("\nERROR - TOPIC CREATION [messages]: \n", e, "\n")
    }
  
  
    try {
        await admin.disconnect();
        console.log("admin disconnected");
    } catch (e) {
        console.log("\nERROR - ADMIN DISCONNECTION: \n", e, "\n")
    }

}

init();