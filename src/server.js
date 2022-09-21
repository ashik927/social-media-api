const app = require('./app');
const connectWithDb = require("./database");

const port = process.env.PORT || 7000;

app.get("/", (req, res) => {
    res.send("Social-media");
});

app.listen(port, () => {
    connectWithDb();

    console.log(`Server is running on port ${port}`);
});
