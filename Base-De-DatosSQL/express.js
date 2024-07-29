const { Pool } = require('pg');
const pool = new Pool({
  user: 'base_de_datos_9wrf_user',
  host: 'dpg-cqjr91qj1k6c73a2eoq0-a',
  database: 'base_de_datos_9wrf',
  password: 'FlAEEb7jcUKimy4VUpYfuJrPJO2AXGcI',
  port: 5432,
});

const express = require('express');
const app = express();
const port = 3000;

app.get('/empleados', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM empleados');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en la consulta');
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
