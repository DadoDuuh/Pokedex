import mongoose from 'mongoose';

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;


mongoose.set('strictQuery', true)
const connect = () => {
  mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@devmonk.uput8o9.mongodb.net/DevMonk?retryWrites=true&w=majority`, {useNewUrlParser: true})
  const connection = mongoose.connection;

  connection.on("error", () => {
    console.error("Erro ao conectar com o mongoDB!")
  })
  connection.on("open", () => {
    console.log("MongoDB conectado com sucesso!")
  })
}

connect();

export default connect;