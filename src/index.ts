import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import useRoutes from "./routes/use.route";

const app = express();
dotenv.config();

app.use(
    cors({
        origin: ['http://localhost:3000', 'http://localhost:3001']
    })
)

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const PORT = 8000;

app.use("/users", useRoutes);

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
})

