import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import {fileURLToPath} from "url"
import path from "path"

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname + '/public')));

const PORT = process.env.PORT || process.env.SERVER_LOCAL_PORT;
// const { HOST_DB, DATABASE_NAME, USERNAME_DB, PASSWORD_DB  } = process.env;

app.use(express.static(path.join(__dirname + '/public')))
app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
    res.send("Welcome to my shop !")
})


app.listen(PORT, ()=>{
    console.log(`server running at : http://localhost:${PORT}`);
})

