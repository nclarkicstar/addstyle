require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const morgan = require('morgan');

const app = express();

app.use(cors()); 
app.use(express.json());

// Get all Scorecards
app.get("/api/v1/scorecards", async (req, res) => {
    try{
        const results = await db.query("SELECT * FROM scorecards");
            res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                scorecards: results.rows,
            },
        });
    } catch (err) {
        console.log(err);
    }
});

// Get a Scorecard
app.get("/api/v1/scorecards/:id", async (req, res) => {
    console.log(req.params.id);  

    try {
        const scorecard = await db.query(`SELECT * FROM scorecards WHERE id = $1`,[req.params.id,]);
        //SELECT * FROM scorecards WHERE id = req.params.id
        const elements = await db.query(`SELECT * FROM elements WHERE scorecard_id = $1`,[req.params.id,]);



        res.status(200).json({
            status: "success",
            data: {
                scorecard: scorecard.rows[0],
                elements: elements.rows          
            },
        });
    } catch(err) {
    console.log(err);
    }
});



// Create a Scorecard
app.post("/api/v1/scorecards", async (req, res) => {
    console.log(req.body);
    try {
        const results = await db.query("INSERT INTO scorecards (name, description) values ($1, $2) returning *", [req.body.name, req.body.description]);    
        
        console.log(results);
        res.status(201).json({
        status: "success",
        data: {
            scorecard: results.rows[0],          
        },
    });
    } catch (err) {
        console.log(err);
    }

        
});

// Update a Scorecard
app.put("/api/v1/scorecards/:id", async (req, res) => {
    try {
        const results = await db.query(
            "UPDATE scorecards SET name = $1, description = $2 where id = $3 returning *",
            [req.body.name, req.body.description, req.params.id]
        );

        res.status(200).json({
            status: "succes",
            data: {
                scorecard: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err)
    }
    console.log(req.params.id),
    console.log(req.body);
});

//Delete Scorecard 

app.delete("/api/v1/scorecards/:id", async (req, res) => {
    try {
        const results = db.query("DELETE FROM scorecards where id =$1", [
            req.params.id,
        ]);
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
    }
});

//Add Element
app.post("/api/v1/scorecards/:id/addElement", async (req, res) => {

    try {
        const newElement= await db.query("INSERT INTO elements (scorecard_id, name, description, weight) values ($1, $2, $3, $4) returning *;", [req.params.id, req.body.name, req.body.description, req.body.weight]);
        console.log(newElement);
        res.status(201).json({
            status: "success",
            data: {
                element: newElement.rows[0],
            },
        });
    } catch (err) {
        console.log.apply(err);
    }
});



const port = process.env.PORT || 3001; 
app.listen (port,() => {
    console.log(`server is up and listening on port ${port}`);
});
