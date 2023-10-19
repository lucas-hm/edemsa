app.get('/getData', (req, res) => {
    returnData().then(result => {
        console.log(result); //This logs undefined
        res.send(result); //This sends undefined
    })
});



async function returnData() {
    const uri = "mongodb://" + "root" + ":" + "example" + "@" + "10.1.0.16:27017" + "/";

    //Connect to the database and return all documents in the collection
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    try {
        await client.connect();
        const database = client.db('data');
        const collection = database.collection('edemsa');
        const query = {};
        const options = {};
        const cursor = collection.find(query, options);
        await cursor.toArray().then((docs) => {
            console.log(docs); // <- This works and logs all the data to console 
            return docs;
        });
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}