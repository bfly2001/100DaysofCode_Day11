const { MongoClient } = require('mongodb');

async function main() {
    /**
    * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
    * See https://docs.mongodb.com/ecosystem/drivers/node/
    */

    const uri = "mongodb+srv://<username:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
}

/**
 * The MongoClient you will use to interact with your database
 * See https://mongodb.github.io/node-mongodb-native/3.3/api/MongoClient.html for mor details
  */
  const client = new MongoClient(uri);

  try {
      // Connect to the MongoDB cluster
      await client.connect();

      //Make the appropriate DB calls
      await listDatabases(client);
  } catch (e) {
      console.error(e);
  } finally {
      // close the connection to the MongoDB cluster
      await client.close();
  }