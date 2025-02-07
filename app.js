// เรียกใช้งาน mysql2
const mysql = require('mysql2');

// ตั้งค่าการเชื่อมต่อฐานข้อมูล
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',  // username ที่ใช้ในการเชื่อมต่อ
  password: '1234',  // รหัสผ่านฐานข้อมูล
  database: 'user'
});

// เชื่อมต่อฐานข้อมูล
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

// ฟังก์ชันเพิ่มข้อมูลสินค้า
function addOrder(name, email, productName, quantity) {
  const sql = `INSERT INTO orders (name, email, product_name, quantity) VALUES (?, ?, ?, ?)`;
  connection.query(sql, [name, email, productName, quantity], (err, results) => {
    if (err) {
      console.error('Error inserting order: ' + err.stack);
      return;
    }
    console.log('Order added: ', results);
  });
}

// ฟังก์ชันดึงข้อมูลจากฐานข้อมูล
function getOrders() {
  const sql = 'SELECT * FROM orders';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching orders: ' + err.stack);
      return;
    }
    console.log('Orders:', results);
  });
}

// ตัวอย่างการเพิ่มข้อมูล
addOrder('John Doe', 'john.doe@example.com', 'Laptop', 2);

// ตัวอย่างการดึงข้อมูล
getOrders();

// ปิดการเชื่อมต่อฐานข้อมูล
connection.end();
