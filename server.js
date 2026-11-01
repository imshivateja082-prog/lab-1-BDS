// Tasks 4-6: Express server with three routes and a 404 handler.
const express = require("express");

const app = express();
const PORT = 3000;

// Change these two values to your own details.
const STUDENT_NAME = "P SHIVA TEJA YADAV";
const STUDENT_SECTION = "CSE GEN AI 111 (2B)";

// GET /  -> welcome text
app.get("/", (request, response) => {
    response.status(200).send("Welcome to the Backend Development Fundamentals Lab 1 server!");
});

// GET /about  -> JSON with name and section
app.get("/about", (request, response) => {
    response.status(200).json({
        name: STUDENT_NAME,
        section: STUDENT_SECTION
    });
});

// GET /time  -> current date and time
app.get("/time", (request, response) => {
    const now = new Date();
    response.status(200).send(`Current date and time: ${now.toString()}`);
});

// Unknown paths -> 404 (must be after every real route)
app.use((request, response) => {
    response.status(404).send("404 - Page Not Found");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
});
