const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const users = [
    { id: 1, username: 'akshay1', name: 'Akshay Kumar', repoCount: 12, location: "San Francisco" },
    { id: 2, username: 'raj123', name: 'Raj Sharma', repoCount: 5, location: "New York" },
    { id: 3, username: 'ria_doe', name: 'Ria Doe', repoCount: 8, location: "London" },
    { id: 4, username: 'john_d', name: 'John Doe', repoCount: 15, location: "Berlin" }
];

app.get('/users',(req,res)=>{
    res.json({users});
});

app.get('/users/:id',(req,res)=>{

    let Id = parseInt(req.params.id);
    let user = users.find((user) => user.id === Id);
    if(!user)
        return res.status(404).json({message:"Id not found"});
    return res.status(200).json(user);
});

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
});