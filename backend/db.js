import mysql from "mysql2";

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Dkvd@123",
    database:"hospital"
});

db.connect((err)=>{
    if(err){
        console.log("Database connection failed");
    }
    else{
        console.log("Database connected");
    }
});