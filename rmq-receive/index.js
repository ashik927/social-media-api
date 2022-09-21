const express = require("express");
const amqp = require("amqplib");

const app = express();

const port = 8001;

setInterval(
    subscription,
    3000
);

// subscription();
// const subscription = async () => {
async function subscription() {
    const amqpServer = "amqp://localhost:5672";
    const connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();

    let queue = 'warehouse-creation';

    await channel.assertQueue(queue);
    await channel.consume(queue, (message) => {
        const receivedMessage = JSON.parse(message.content);
        console.log(receivedMessage);
    }, { noAck: true });

    /*await channel.consume(queue, (message) => {
        const receivedMessage = JSON.parse(message.content);
        console.log(receivedMessage);

        channel.ack(message);
    });*/

    // console.log(consumeMessage);
    console.log("Message was received");

    setTimeout(() => {
        connection.close();
    }, 500);

};

app.get("/", async (req, res) => {
    try {
        // await subscription();
    } catch (ex) {
        console.log("Check an error: S Ahmed Naim");
        console.error(ex);
    }

    res.send("KX Fulfillment - RMQ Receieve");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
