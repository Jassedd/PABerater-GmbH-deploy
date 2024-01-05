import  express  from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"

import AdminRoutes from "./routes/admin.routes.js"
import authRoutes from "./routes/auth.routes.js"
import newsRouter from "./routes/news.routes.js"

export const app = express()

app.get('/', (req , res) =>{
    res.send('<h1>Hola Backend</h1>')
})

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(express.json());

app.use("/Parabeter/admin", AdminRoutes)
app.use("/Parabeter/Authorization", authRoutes)
app.use("/Paberater/news", newsRouter)