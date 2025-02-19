import {MongoClient} from 'mongodb'
const URI = "mongodb+srv://0johnnym2025:pffeB62AnqeBnHgk@cluster0.ww83p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(URI)
export const db = client.db('AudioStreamingPlatform');
/*

*/