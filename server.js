const express = require('express');
const app = express();

// Render 会注入 PORT 环境变量，不能写死端口
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    service: 'my-api',
    status: 'ok',
    message: '服务已成功部署到 Render',
    timestamp: new Date().toISOString(),
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', uptime: process.uptime() });
});

app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello from Render',
    query: req.query,
  });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found', path: req.path });
});

// 监听 0.0.0.0，否则容器外部无法访问
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});