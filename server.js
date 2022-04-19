const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Test the Express.js connection
// app.get("/", (req, res) => {
//   res.json({
//     message: "Hello World",
//   });
// });

// Default response for any other request (Not Found)
// This is a catchall route, its placement is very important.What happens to the GET test route if we place this route above it ? This route will override all others—so make sure that this is the last one.

app.use((req, res) => {
  res.status(404).end();
});

// Starts Express.js server on port 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
