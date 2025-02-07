const express = require("express");
const cors = require('cors');
const path = require("path");
const mysql = require('mysql2');
const bcrypt = require('bcryptjs'); 
const bodyParser = require('body-parser'); 

const app = express();
const PORT = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'user',   
    password: '1234',  
    database: 'user'  
});

db.connect((err) => {
    if (err) {
        console.error('❌ Error connecting to the database:', err);
        return;
    }
    console.log('✅ Connected to the database!');
});

app.use(cors());  
app.use(express.json());  
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index', 'index_web.html')));
app.get('/cart', (req, res) => res.sendFile(path.join(__dirname, 'index2', 'cart.html')));
app.get('/product', (req, res) => res.sendFile(path.join(__dirname, 'index3', 'product.html')));
app.get('/cc', (req, res) => res.sendFile(path.join(__dirname, 'index4', 'cc.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'login', 'login.html')));

app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    const checkQuery = 'SELECT * FROM datauser WHERE email = ?';
    db.query(checkQuery, [email], async (err, result) => {
        if (err) {
            console.error('❌ Error checking user: ', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        if (result.length > 0) {
            return res.status(400).json({ message: 'Email already exists.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10); 

        const insertQuery = 'INSERT INTO datauser (email, password) VALUES (?, ?)';
        db.query(insertQuery, [email, hashedPassword], (err, result) => {
            if (err) {
                console.error('❌ Error inserting user: ', err);
                return res.status(500).json({ message: 'Internal Server Error' });
            }

            return res.status(201).json({ message: '✅ Registration successful!' });
        });
    });
});

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    const checkQuery = 'SELECT * FROM datauser WHERE email = ?';
    db.query(checkQuery, [email], async (err, result) => {
        if (err) {
            console.error('❌ Error fetching user: ', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        if (result.length === 0) {
            return res.status(400).json({ message: 'Email not found.' });
        }

        // Compare the entered password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, result[0].password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect password.' });
        }

        return res.status(200).json({ message: '✅ Login successful!' });
    });
});
app.post('/submit_contact', (req, res) => {
    const { name, email, message } = req.body;
  
    // ป้องกัน SQL Injection
    const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
    db.query(query, [name, email, message], (err, result) => {
      if (err) {
        res.status(500).send('Error: ' + err);
        return;
      }
      res.send('Data saved successfully!');
    });
  });

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
