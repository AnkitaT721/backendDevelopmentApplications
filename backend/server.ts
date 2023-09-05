import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import taskRoutes from './routes/taskRoutes';

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const URL = "mongodb://127.0.0.1:27017/TypescriptToDo"
//connecting to database
mongoose.connect(URL).then((data) => {
    console.log(`Mongodb connected with server: ${data.connection.host}`);
  });

//route import
app.use("/api/v1", taskRoutes);


const PORT = 8000;

app.listen(PORT , () => {
    console.log(`server is running on ${PORT}`)
})