// Connect to the DataBase (for FAKER and generate DataSet)
const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017/CarRentBuy", { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
client.connect((err, res, db) => {
    if (err) throw err;
    console.log("Connect to the Server!")
    db.close();
});

module.exports = client.db();