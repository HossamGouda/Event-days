projectData={};
// require express
const express=require("express")
//creat app
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}));

//cors for cross origin
const cors=require('cors');
app.use(cors());


app.use(express.static('web'));
//setup server
const port=3000;
const server=app.listen(port,listening);

//callback fun
function listening() {
    console.log("Server is life")
    console.log(`Server on port : ${port}  https\\<localhost:3000`)
    
}

//routs

app.get("/getData",(req,res)=>{
    res.send(projectData)
    res.send("Hello server")
})

app.post("/saveData", (req, res) => {
    projectData=req.body;
    res.send(projectData)
})
