# 🚀 AI 聊天助手 - APK 构建指南（仅需手机）

## 📱 方式 1：使用 EAS Build（最简单 - 推荐）

### 步骤 1：访问 Expo 官网
1. 打开浏览器，访问：https://expo.dev
2. 点击 **Sign Up** 免费注册账户

### 步骤 2：在线构建 APK
1. 登录 Expo 账户
2. 进入 **Build** 页面
3. 连接你的 GitHub 仓库：https://github.com/yel893182-cell/ai-mobile-app
4. 选择 **Android** → **APK**
5. 点击 **Build** 开始构建

### 步骤 3：下载 APK
1. 构建完成后（约 10-15 分钟）
2. 会显示下载链接
3. 用手机浏览器打开链接下载 APK

### 步骤 4：安装应用
1. 打开手机文件管理器
2. 找到下载的 APK 文件
3. 点击安装
4. 允许安装来自未知来源的应用
5. 安装完成！

---

## 📱 方式 2：使用在线 APK 构建工具

### 推荐工具：
1. **Expo Build**（官方）- https://expo.dev/build
2. **AppMySite** - 支持 React Native 构建
3. **Appetize.io** - 在线模拟器

### 步骤：
1. 上传项目代码
2. 选择 Android 平台
3. 选择 arm64-v8a 架构
4. 开始构建
5. 下载 APK

---

## 📥 直接下载 APK（如果已构建）

### GitHub Releases
1. 访问：https://github.com/yel893182-cell/ai-mobile-app/releases
2. 下载最新的 `arm64-v8a.apk` 文件
3. 用手机浏览器打开链接下载

---

## 📱 手机上安装 APK

### Android 手机：

**方法 1：使用文件管理器**
1. 下载 APK 文件到手机
2. 打开文件管理器
3. 找到 APK 文件
4. 点击安装
5. 允许安装来自未知来源

**方法 2：使用浏览器**
1. 用浏览器打开下载链接
2. 点击下载
3. 下载完成后点击安装

**方法 3：使用 ADB（需要电脑）**
```bash
adb install ai-chat-mobile-arm64-v8a.apk
```

### iOS 手机：
- iOS 不支持直接安装 APK
- 需要使用 TestFlight 或 Xcode 构建
- 或者使用 Web 版本：https://ai.661015.xyz

---

## ⚙️ 应用配置

### 修改 API Key
编辑 `app/(tabs)/index.tsx`：
```javascript
const API_KEY = 'sk-c3gs45vbc6ha1qs0akck494k9eerv7snmtydzbx6l0zkbf2w';
```

### 修改应用名称
编辑 `app.json`：
```json
{
  "expo": {
    "name": "AI 聊天助手"
  }
}
```

---

## 🔗 快速链接

| 项目 | 链接 |
|------|------|
| **GitHub 仓库** | https://github.com/yel893182-cell/ai-mobile-app |
| **Expo Build** | https://expo.dev/build |
| **Web 版本** | https://ai.661015.xyz |

---

## ❓ 常见问题

**Q: 为什么需要注册 Expo 账户？**
A: 这是官方免费服务，用于云构建 APK

**Q: 构建需要多长时间？**
A: 通常 10-15 分钟

**Q: APK 文件大小？**
A: 约 50-100 MB

**Q: 如何分享给朋友？**
A: 直接分享 APK 文件或下载链接

**Q: 应用会自动更新吗？**
A: 不会，需要重新下载新的 APK

---

## 📞 需要帮助？

- Expo 官方文档：https://docs.expo.dev
- GitHub 仓库：https://github.com/yel893182-cell/ai-mobile-app
- 问题反馈：在 GitHub 上提交 Issue

---

**由星渊工作室创作 | 作者：小秋 | AI 聊天助手 Pro**
