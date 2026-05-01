# 📱 AI 聊天助手 - 应用下载指南

## 🎯 最简单的方式 - 使用 Expo Go（推荐）

### 步骤 1: 安装 Expo Go 应用

**iOS 用户：**
- 打开 App Store
- 搜索 "Expo Go"
- 点击下载：https://apps.apple.com/app/expo-go/id982107779

**Android 用户：**
- 打开 Google Play
- 搜索 "Expo Go"
- 点击下载：https://play.google.com/store/apps/details?id=host.exp.exponent

### 步骤 2: 启动开发服务器

在电脑上运行：
```bash
cd /home/ubuntu/ai-mobile-app
npm start
```

### 步骤 3: 扫描 QR 码

用手机打开 Expo Go 应用，扫描电脑上显示的 QR 码，应用就会自动加载！

---

## 📦 构建独立应用（APK/IPA）

### 方式 1: 使用 EAS Build（云构建 - 推荐）

```bash
# 1. 安装 EAS CLI
npm install -g eas-cli

# 2. 登录 Expo 账户（需要免费注册）
eas login

# 3. 构建 Android APK
eas build --platform android --type apk

# 4. 构建 iOS IPA
eas build --platform ios

# 构建完成后会生成下载链接
```

### 方式 2: 本地构建（需要 Android Studio 或 Xcode）

```bash
# Android
npm run android

# iOS
npm run ios
```

---

## 🔗 GitHub 下载

**项目地址：** https://github.com/yel893182-cell/ai-mobile-app

**克隆项目：**
```bash
git clone https://github.com/yel893182-cell/ai-mobile-app.git
cd ai-mobile-app
npm install
npm start
```

---

## 💻 系统要求

- **Node.js** >= 18.0
- **npm** >= 9.0
- **iOS**: macOS + Xcode（本地构建）
- **Android**: Android Studio（本地构建）

---

## 🎨 应用预览

- **设计**：渐变 + 极简风格
- **功能**：AI 聊天、消息历史、多对话管理
- **平台**：iOS 和 Android
- **大小**：约 50-100 MB（APK）

---

## ❓ 常见问题

**Q: 为什么推荐用 Expo Go？**
A: 最快、最简单，无需构建，直接扫码运行

**Q: Expo Go 应用免费吗？**
A: 完全免费

**Q: 如何在真实设备上运行？**
A: 用 Expo Go 扫码即可，无需 USB 连接

**Q: 如何获得独立的 APK 文件？**
A: 使用 EAS Build 或本地构建

**Q: 构建需要多长时间？**
A: EAS Build 通常 5-15 分钟

---

## 📞 需要帮助？

- Expo 官方文档：https://docs.expo.dev
- GitHub 仓库：https://github.com/yel893182-cell/ai-mobile-app
- 问题反馈：在 GitHub 上提交 Issue

---

**由星渊工作室创作 | 作者：小秋 | AI 聊天助手 Pro**
