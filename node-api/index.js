const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Configuración de conexión utilizando las variables del entorno Docker
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
});

// Endpoint Base
app.get('/', (req, res) => {
  res.json({ status: "success", message: "API Node.js operativa en el entorno Docker" });
});

// Endpoint de verificación de base de datos
app.get('/db-check', async (req, res) => {
  try {
    const dbRes = await pool.query('SELECT NOW();');
    res.json({ status: "connected", timestamp: dbRes.rows[0].now });
  } catch (err) {
    res.status(500).json({ status: "error", error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Aplicación ejecutándose internamente en el puerto ${port}`);
});
