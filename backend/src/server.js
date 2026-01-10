// const express = require("express")
import express from "express"
import { ENV } from "./lib/env.js"

const app = express()

app.get('/',(req,res)=>{
    res.status(200).json({msg:"success from api backend 12345"})
})


app.listen(ENV.PORT,()=>{
    console.log("Srever is rrunning on port: ",ENV.PORT)
})