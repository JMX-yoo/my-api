# my-api

后端 API 服务，基于 Node.js + Express，配置为可直接部署到 [Render](https://render.com)。

## 接口

| 方法 | 路径 | 说明 |
|---|---|---|
| GET | `/` | 服务信息与状态 |
| GET | `/health` | 健康检查（Render 蓝图使用此路径） |
| GET | `/api/hello?name=x` | 示例接口，回显查询参数 |

## 本地运行

```bash
npm install
npm start          # 或 npm run dev（自动重启）
```

服务默认监听 3000 端口。

## 部署到 Render

项目根目录已包含 `render.yaml` 蓝图，支持一键部署：

1. 登录 [Render Dashboard](https://dashboard.render.com)
2. 选择 **New → Blueprint**
3. 连接并选择本仓库
4. 填入蓝图名称，点击 **Apply**

部署完成后会得到形如 `https://my-api.onrender.com` 的地址。

也可从命令行直接跳转：

```
https://dashboard.render.com/blueprint/new?repo=https://github.com/<你的用户名>/my-api
```

## 部署说明

- **运行时**：Node.js 22
- **构建命令**：`npm install`
- **启动命令**：`npm start`
- **健康检查**：`/health`
- 端口由 Render 通过 `process.env.PORT` 注入，不要硬编码

## 免费额度限制

- 闲置 15 分钟自动休眠，下次请求约需 1 分钟唤醒
- 每月 750 免费实例小时，用尽后暂停至下月
- 适合演示与个人项目；生产环境需升级付费档（最低 $7/月）