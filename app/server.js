// server.js
const express = require('express');
const mysql = require('mysql2/promise'); // Using promise-based version
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file

const app = express();
const port = 3000; // Cổng cho backend API

// Cấu hình CORS để cho phép frontend của bạn truy cập API
// Trong môi trường sản phẩm, bạn nên chỉ định rõ origin của frontend.
app.use(cors({
    origin: 'https://damcuoichungminh.site' // Thay thế bằng địa chỉ frontend của bạn khi deploy
}));

// Sử dụng body-parser để phân tích cú pháp JSON trong request body
app.use(bodyParser.json());

// Cấu hình kết nối MySQL
process.env.API_KEY
const dbConfig = {
    host: process.env.DB_HOST, // Địa chỉ host của MySQL
    user:  process.env.DB_USER, // Tên người dùng MySQL của bạn
    password:  process.env.DB_PASS, // Mật khẩu MySQL của bạn
    database:  process.env.DB_DATABASE // Tên database của bạn
};

// Hàm để tạo bảng nếu chưa tồn tại
async function createTable() {
    try {
        const connection = await mysql.createConnection(dbConfig);
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS wishes (
                id INT AUTO_INCREMENT PRIMARY KEY,
                fullName VARCHAR(255) NOT NULL,
                phone VARCHAR(20),
                attendance VARCHAR(50),
                message TEXT,
                timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('Bảng "wishes" đã sẵn sàng hoặc đã được tạo.');
        connection.end();
    } catch (err) {
        console.error('Lỗi khi tạo bảng:', err);
    }
}

// Gọi hàm tạo bảng khi server khởi động
createTable();

// Endpoint để nhận xác nhận tham gia và lời chúc (POST)
app.post('/api/rsvp', async (req, res) => {
    const { fullName, phone, attendance, message } = req.body;

    if (!fullName || !attendance) {
        return res.status(400).json({ error: 'Tên và lựa chọn tham dự là bắt buộc.' });
    }

    try {
        const connection = await mysql.createConnection(dbConfig);
        const [result] = await connection.execute(
            'INSERT INTO wishes (fullName, phone, attendance, message) VALUES (?, ?, ?, ?)',
            [fullName, phone, attendance, message]
        );
        connection.end();
        res.status(201).json({ message: 'Thông tin xác nhận và lời chúc đã được lưu thành công!', id: result.insertId });
    } catch (err) {
        console.error('Lỗi khi lưu thông tin RSVP:', err);
        res.status(500).json({ error: 'Lỗi server nội bộ khi lưu thông tin.' });
    }
});

// Endpoint để lấy tất cả lời chúc (GET)
app.get('/api/wishes', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        // Lấy lời chúc và sắp xếp theo thời gian mới nhất trước
        const [rows] = await connection.execute('SELECT fullName, message, timestamp FROM wishes ORDER BY timestamp DESC');
        connection.end();
        res.status(200).json(rows);
    } catch (err) {
        console.error('Lỗi khi lấy lời chúc:', err);
        res.status(500).json({ error: 'Lỗi server nội bộ khi lấy lời chúc.' });
    }
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server Node.js đang chạy tại http://localhost:${port}`);
    console.log('API sẵn sàng tại /api/rsvp (POST) và /api/wishes (GET)');
});

