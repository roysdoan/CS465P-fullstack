// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

// Read form data
app.use(express.urlencoded({ extended: true }));

// Display form
app.get("/form", (req, res) => {
  res.send(`
    <h1>User Form</h1>
    <form action="/submit" method="POST">
      <label>Username:</label>
      <input type="text" name="username" required>

      <br><br>

      <label>Email:</label>
      <input type="email" name="email" required>

      <br><br>

      <button type="submit">Submit</button>
    </form>
  `);
});

// Display submitted data
app.post("/submit", (req, res) => {
  const { username, email } = req.body;

  res.send(`
    <h1>Form Submitted!</h1>
    <p>Username: ${username}</p>
    <p>Email: ${email}</p>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
