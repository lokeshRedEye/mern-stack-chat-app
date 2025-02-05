import mongoose  from 'mongoose'

export const connectDb = async () => {
    try{
        const con = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`mongodb connected: ${con.connection.host}`)

    }
    catch(error){

        console.log("mongobd error " + error)
    }
}