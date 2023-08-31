import  mongoose from 'mongoose'

const connectDB  = async() => { 
try{
const conn = await mongoose.connect(process.env.MONGO_URL);
console.log(`connecte to mongodb host ${conn.connection.host}`.bgMagenta.white)
}
catch(error){
    console.log(`error in mongodb ${error}`.bgRed.white)
}
}


const { Schema } = mongoose;


const blogSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs: Number
    }
  });

  export default connectDB