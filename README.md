# CCWM Website - Consortium of Chinese Women Mathematicians

华人女数学家联盟官方网站

## 项目简介

这是一个简洁的学术风格静态网站，用于展示华人女数学家联盟（CCWM）的信息。网站采用响应式设计，完美适配桌面端、平板和移动端。

## 功能特点

✅ **简洁学术风格** - 参考 ICCM 网站设计，专业简洁  
✅ **完全响应式** - 适配所有设备尺寸  
✅ **移动端优化** - 汉堡菜单、触摸优化  
✅ **纯静态网站** - 无需后端，易于部署  
✅ **快速加载** - 轻量级设计，性能优秀  

## 页面结构

```
/
├── index.html          # 首页（导航入口）
├── about.html          # 关于 CCWM
├── news.html           # 最新新闻
├── officer.html        # 人员架构（主席、理事等）
├── events.html         # 活动列表
├── charter.html        # 章程（Coming Soon）
├── member.html         # 成为会员（Coming Soon）
├── css/
│   └── style.css       # 主样式文件
├── js/
│   └── main.js         # JavaScript 交互
└── asset/
    └── image.png       # CCWM Logo
```

## 技术栈

- **HTML5** - 语义化标签
- **CSS3** - 响应式设计、Flexbox
- **JavaScript (ES5+)** - 原生 JS，无依赖
- **字体编码** - UTF-8，中英文双语支持

## 本地运行

### 方法 1：直接打开
双击 `index.html` 文件即可在浏览器中打开。

### 方法 2：使用本地服务器

#### Python 3
```bash
cd web
python3 -m http.server 8000
# 访问 http://localhost:8000
```

#### Python 2
```bash
cd web
python -m SimpleHTTPServer 8000
# 访问 http://localhost:8000
```

#### Node.js (http-server)
```bash
npm install -g http-server
cd web
http-server -p 8000
# 访问 http://localhost:8000
```

#### PHP
```bash
cd web
php -S localhost:8000
# 访问 http://localhost:8000
```

## 浏览器兼容性

- ✅ Chrome / Edge (最新版)
- ✅ Firefox (最新版)
- ✅ Safari (最新版)
- ✅ 移动端浏览器 (iOS Safari, Chrome Mobile)

## 响应式断点

- **桌面端**: > 1024px
- **平板**: 768px - 1024px
- **移动端**: < 768px
- **小屏手机**: < 480px

## 部署方式

### GitHub Pages
1. 上传代码到 GitHub 仓库
2. 进入 Settings > Pages
3. 选择分支和 `/web` 目录
4. 保存即可

### Netlify
1. 拖拽 `web` 文件夹到 Netlify
2. 自动部署完成

### Vercel
```bash
cd web
vercel deploy
```

### 传统服务器
上传 `web` 文件夹到服务器的网站根目录即可。

## 主要功能说明

### 移动端菜单
- 点击右上角汉堡图标打开/关闭菜单
- 点击菜单外区域自动关闭
- 点击菜单项跳转并关闭

### Show More 功能
- News 和 Events 页面支持展开更多内容
- 点击 ">> Show More" 显示隐藏项

### 返回顶部
- 移动端自动显示返回顶部按钮
- 滚动超过 300px 后显示

## 自定义修改

### 修改颜色
编辑 `css/style.css`，搜索颜色代码进行修改：
- 链接颜色: `#0000EE`
- 背景色: `#fff`
- 文字颜色: `#000`

### 添加新闻/活动
编辑对应的 HTML 文件，复制现有的 `news-item` 或 `event-item` 结构。

### 添加人员
编辑 `officer.html`，在对应的 section 中添加 `officer-item`。

## 文件说明

| 文件 | 说明 |
|------|------|
| `index.html` | 首页，展示 Logo 和导航菜单 |
| `about.html` | 关于页面，组织介绍（中英文） |
| `officer.html` | 人员架构，包含所有领导和理事信息 |
| `news.html` | 新闻列表，支持 Show More |
| `events.html` | 活动列表，外部链接支持 |
| `charter.html` | 章程页面（待完善） |
| `member.html` | 会员注册页面（待完善） |
| `css/style.css` | 主样式文件，包含响应式设计 |
| `js/main.js` | JavaScript 交互逻辑 |

## 维护指南

### 更新新闻
1. 打开 `news.html`
2. 在 `.news-list` 中添加新的 `news-item`
3. 格式参考现有项

### 更新人员
1. 打开 `officer.html`
2. 找到对应的 section（如 Council）
3. 添加新的 `officer-item`

### 更新活动
1. 打开 `events.html`
2. 在 `.events-list` 中添加新的 `event-item`

## 性能优化建议

1. **图片优化**: Logo 已经是 PNG，如需更好性能可转为 WebP
2. **CDN 加速**: 部署到支持 CDN 的平台
3. **Gzip 压缩**: 服务器开启 Gzip 压缩
4. **缓存策略**: 设置静态资源缓存

## 联系方式

如有问题或建议，请联系 CCWM 管理员。

## 许可证

© 2025 Consortium of Chinese Women Mathematicians (CCWM). All rights reserved.

---

**最后更新**: 2025年10月

