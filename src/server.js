const app = require('./app');
const dbConn = require("./database");

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("Social-media");
});

app.listen(port, () => {
    dbConn;

    console.log(`Server is running on port ${port}`);
});
