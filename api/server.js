import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path"

//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();
const __dirname = path.resolve();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended:false }))
app.use(express.static(path.join(__dirname,'../client/build')))

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api
app.use('*',function(req,res){
res.sendFile(path.join(__dirname,'../client/build/index.html'))
})

//rest api
app.get('/', (req, res) => {
    res.send({
        message: 'welcome to Thebandwala.com'
    })
})

//PPRT
const PORT=8800

//run listen
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`.bgCyan.white)
})