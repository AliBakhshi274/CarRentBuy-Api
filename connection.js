const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017/CarRentBuy", { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
client.connect((err, res) => {
    if (err) throw err;
    console.log("Connect to the Server!")
});

module.exports = client.db();