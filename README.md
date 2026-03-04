# 雅思词汇真经 - 一键部署指南

## 🚀 快速部署（推荐）

### 方式一：Netlify Drop（30秒完成）

1. **访问** https://app.netlify.com/drop
2. **下载部署包**（已为你准备好）
3. **拖拽上传**到网页中
4. **获得永久链接**

部署包位置：
```
/root/.openclaw/workspace/ielts-vocab-deploy/
├── index.html
├── app.js
└── vocabulary-data.js
```

### 方式二：GitHub Pages（免费永久）

1. **创建 GitHub 账号**：https://github.com/signup
2. **创建新仓库**：名为 `ielts-vocab`
3. **上传文件**：
   - index.html
   - app.js
   - vocabulary-data.js
4. **启用 Pages**：
   - 进入仓库 Settings → Pages
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main"
5. **访问链接**：`https://你的用户名.github.io/ielts-vocab`

### 方式三：Vercel（国内访问快）

1. **创建 Vercel 账号**：https://vercel.com/signup
2. **导入 GitHub 仓库**
3. **自动部署**，获得 `.vercel.app` 链接

---

## 📱 当前可用方式

### 本地访问（同一WiFi）
- 电脑运行：`python3 -m http.server 8765`
- 手机访问：`http://10.59.9.24:8765`

### 文件位置
```
/root/.openclaw/workspace/ielts-vocab/
```

---

## ✨ 功能说明

- ✅ 10个章节，200个核心雅思词汇
- ✅ 点击 🔊 播放发音（TTS）
- ✅ 智能记忆曲线（困难/良好/简单）
- ✅ 自动记录学习进度
- ✅ 连续学习天数统计
- ✅ 阶段完成激励弹窗
- ✅ 数据保存在浏览器本地
- ✅ 支持离线使用

---

## 📝 使用步骤

1. 打开页面，选择章节
2. 听发音 → 看释义 → 读例句
3. 根据掌握程度点击 **困难/良好/简单**
4. 系统按记忆曲线自动安排复习
5. 完成章节获得激励！

---

**提示**：数据保存在浏览器 localStorage 中，清除浏览器数据会丢失进度。
