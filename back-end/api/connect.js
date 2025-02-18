import {MongoClient} from 'mongodb'
const URI = "mongodb+srv://0johnnym2025:pffeB62AnqeBnHgk@cluster0.ww83p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(URI)
const db = client.db('AudioStreamingPlatform')
const songCollection = db.collection('songs').find({}).toArray()
console.log(songCollection)