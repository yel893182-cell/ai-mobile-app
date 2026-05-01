# AI 聊天助手 - 移动应用构建指南

## 快速开始

### 方式 1: 本地开发预览（推荐）

```bash
# 安装依赖
npm install

# 启动开发服务器
npm start

# 选择平台：
# i - iOS 模拟器
# a - Android 模拟器  
# w - Web 预览
# s - 扫描 QR 码（使用 Expo Go 应用）
```

### 方式 2: 使用 Expo Go 应用（最快）

1. 在手机上安装 **Expo Go** 应用
   - iOS: https://apps.apple.com/app/expo-go/id982107779
   - Android: https://play.google.com/store/apps/details?id=host.exp.exponent

2. 运行开发服务器：
   ```bash
   npm start
   ```

3. 用手机扫描显示的 QR 码

### 方式 3: 构建独立应用

#### 构建 Android APK：
```bash
# 需要 EAS CLI
npm install -g eas-cli

# 登录 Expo 账户
eas login

# 构建 APK
eas build --platform android --local
```

#### 构建 iOS IPA：
```bash
eas build --platform ios --local
```

## 项目结构

```
ai-mobile-app/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx          # 主聊天界面
│   │   └── explore.tsx        # 探索页面
│   └── _layout.tsx            # 路由配置
├── app.json                   # 应用配置
├── package.json               # 依赖管理
└── assets/                    # 图标和资源
```

## 应用特性

✨ **渐变 + 极简设计**
- 深蓝黑色背景
- 炫彩渐变按钮
- 护眼深色主题

💬 **AI 聊天功能**
- 实时消息交互
- 集成 xiaomimimo API
- 消息历史记录

📱 **跨平台支持**
- iOS 和 Android
- 响应式布局
- 流畅动画

## 配置说明

### API Key
在 `app/(tabs)/index.tsx` 中修改：
```javascript
const API_KEY = 'sk-c3gs45vbc6ha1qs0akck494k9eerv7snmtydzbx6l0zkbf2w';
```

### 应用名称
在 `app.json` 中修改：
```json
{
  "expo": {
    "name": "AI 聊天助手",
    "slug": "ai-chat-mobile"
  }
}
```

## 常见问题

**Q: 如何在真实设备上运行？**
A: 使用 Expo Go 应用扫描 QR 码即可

**Q: 如何修改 API Key？**
A: 编辑 `app/(tabs)/index.tsx` 中的 `API_KEY` 变量

**Q: 如何打包为应用商店版本？**
A: 使用 EAS Build 服务（需要 Expo 账户）

## 技术栈

- React Native
- Expo
- TypeScript
- Expo Router
- Linear Gradient

## 署名

由星渊工作室创作 | 作者：小秋 | AI 聊天助手 Pro

---

**需要帮助？** 查看 Expo 官方文档：https://docs.expo.dev
