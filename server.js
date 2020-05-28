const express = require('express');
const {MongoClient} = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;



app.get('/', (req, res) => res.send('Hello World! BiP'));



async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb://localhost:27017";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        var db = client.db('reader');

        var coll = db.collection('books');

        var item = await coll.findOne({id:0});

        console.log('LEN - ' + item.pensieri.length);
        return item.pensieri;
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

app.get('/pensieri', (req, res) => {    
    main().then(i => {
        console.log('LEN LEN - ' + i.length);
        res.send(i);
    });
    

});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
app.use(express.static('./FE'));

