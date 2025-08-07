# 设计文档

## 概述

Grow a Garden Recipes 网站采用2025年最新的现代化设计语言，参考Stripe、Linear、Vercel等顶级产品的设计标准。设计目标是创建一个既专业又用户友好的现代化平台，通过先进的视觉效果和交互设计提供卓越的用户体验。

网站架构采用现代化的设计系统理念，使用组件化设计、一致的视觉语言和流畅的交互动画。通过玻璃态效果、动态渐变、微交互动画等2025年主流设计趋势，确保网站在视觉质量上达到行业领先水平。

## 设计原则

1. **现代化优先** - 所有设计决策都以达到2025年顶级网站标准为目标
2. **用户体验至上** - 每个交互都经过精心设计，确保流畅和直观
3. **性能与美观并重** - 在保证视觉效果的同时优化加载性能
4. **一致性原则** - 建立完整的设计系统，确保所有组件的一致性
5. **可访问性标准** - 遵循WCAG 2.1 AA标准，确保所有用户都能良好使用

## 重要说明

**🌍 产品语言要求：**

- **所有用户界面内容必须使用地道英语实现**
- **所有页面文本、按钮、标签、提示信息等均使用英语**
- **食谱内容、说明文字、SEO元数据等全部采用英语**
- **确保英语表达自然流畅，符合英语母语用户的阅读习惯**
- **技术文档和代码注释可使用中文，但最终产品界面必须是英语**

**🎨 现代化设计要求：**

- **必须达到2025年主流网站的视觉标准**
- **使用2025年最新设计趋势：玻璃态效果、动态渐变、微交互动画、神经拟态设计**
- **避免简陋或过时的界面元素，杜绝2020年以前的设计模式**
- **确保达到Stripe、Linear、Vercel、Figma、Notion等顶级产品的视觉质量**
- **实现可与Apple、Google、Microsoft等大厂产品媲美的用户体验**
- **所有动画和交互必须在60FPS下流畅运行**

## 架构设计

### 网站结构

```
首页 (/)
├── 热门食谱区域
├── 搜索功能
├── 分类导航
└── 最新更新

食谱分类页面 (/recipes/)
├── 主食类 (/recipes/main-dishes/)
│   ├── 汉堡 (/recipes/burger/)
│   ├── 披萨 (/recipes/pizza/)
│   ├── 三明治 (/recipes/sandwich/)
│   └── 热狗 (/recipes/hot-dog/)
├── 甜品类 (/recipes/desserts/)
│   ├── 甜甜圈 (/recipes/donut/)
│   ├── 蛋糕 (/recipes/cake/)
│   ├── 冰淇淋 (/recipes/ice-cream/)
│   └── 派 (/recipes/pie/)
├── 小食类 (/recipes/snacks/)
│   ├── 华夫饼 (/recipes/waffle/)
│   └── 沙拉 (/recipes/salad/)
└── 特色料理 (/recipes/special/)
    └── 寿司 (/recipes/sushi/)

烹饪活动页面 (/cooking-events/)
├── 当前活动
├── 活动历史
└── 活动攻略

游戏指南 (/guides/)
├── 新手入门
├── 高级技巧
└── 更新日志

搜索结果页 (/search/)
关于页面 (/about/)
```

### SEO关键词映射

**完整关键词覆盖策略：**

#### 主要着陆页面 (高流量关键词)

1. **首页** - "grow a garden recipes", "cooking recipes grow a garden", "recipes grow a garden", "all recipes in grow a garden"
2. **Roblox专题页** - "grow a garden cooking recipes roblox", "roblox grow a garden cooking recipes"

#### 食谱详情页面 (长尾关键词)

**甜品类：**

- **甜甜圈页面** - "donut recipe grow a garden", "how to make donut in grow a garden", "how to make a donut in grow a garden", "donut grow a garden"
- **蛋糕页面** - "cake recipe grow a garden", "how to make cake in grow a garden", "how to make a cake in grow a garden", "how to make cake in grow a garden roblox", "how to make a cake in grow a garden roblox", "grow a garden cake recipe", "cake grow a garden"
- **冰淇淋页面** - "ice cream recipe grow a garden", "how to make ice cream in grow a garden", "how to make ice cream in grow a garden roblox", "ice cream grow a garden", "grow a garden ice cream"
- **派页面** - "pie recipe grow a garden", "how to make pie in grow a garden", "how to make a pie in grow a garden", "pie grow a garden"

**主食类：**

- **汉堡页面** - "burger recipe grow a garden", "how to make burger in grow a garden", "how to make a burger in grow a garden", "burger grow a garden"
- **披萨页面** - "how to make pizza in grow a garden", "how to make pizza grow a garden", "pizza grow a garden"
- **三明治页面** - "sandwich recipe grow a garden", "how to make sandwich in grow a garden", "how to make a sandwich in grow a garden", "sandwich grow a garden"
- **热狗页面** - "how to make hot dog in grow a garden", "how to make a hot dog in grow a garden", "how to make hotdog in grow a garden", "how to make a hotdog in grow a garden"

**小食类：**

- **华夫饼页面** - "waffle recipe grow a garden", "how to make waffle in grow a garden", "how to make a waffle in grow a garden", "waffle grow a garden"
- **沙拉页面** - "how to make salad in grow a garden", "how to make a salad in grow a garden"

**特色料理：**

- **寿司页面** - "sushi recipe grow a garden", "how to make sushi in grow a garden", "how to make sushi grow a garden", "sushi grow a garden"

#### 活动和更新页面

- **烹饪活动页面** - "grow a garden cooking event", "cooking event grow a garden", "cooking update grow a garden"

#### 用户体验优化的页面结构

**首页布局优化：**

1. **现代化英雄区域** (Hero Section)
   - **背景设计**: 动态渐变背景 + 浮动装饰元素
   - **大标题**: "Grow a Garden Recipes - Complete Roblox Cooking Guide"
     - 使用渐变文字效果 (gradient text)
     - 字体大小: 3.5rem (桌面) / 2.5rem (移动端)
     - 动画: 淡入 + 轻微的上升效果
   - **副标题**: "Master every recipe in Roblox's most popular cooking game"
     - 半透明文字效果
     - 打字机动画效果
   - **主要CTA**: 现代化搜索框设计
     - 玻璃态效果背景
     - 内置搜索图标和快捷键提示
     - 聚焦时展开动画
   - **视觉元素**: 
     - 浮动的装饰性几何图形
     - 轻微的视差滚动效果
     - 现代化的游戏截图轮播，带有平滑过渡

2. **现代化快速访问区域** (Quick Access)
   - 最热门的6个食谱采用现代卡片设计
   - 每个卡片包含: 高质量食谱图片、渐变标题、现代化难度标签、制作时间
   - 卡片悬停效果: 3D变换和阴影增强
   - 一键直达详情页面，带有平滑的页面过渡

3. **分类浏览区域** (Category Browse)
   - 可视化分类图标 (甜品、主食、小食、特色)
   - 每个分类显示代表性食谱预览
   - 悬停显示该分类下的所有食谱数量

4. **最新更新区域** (Latest Updates)
   - 最近添加的食谱
   - 游戏更新相关的食谱变化
   - 烹饪活动信息

**食谱详情页面用户体验优化：**

1. **页面顶部信息** (Above the Fold)
   - 食谱名称 (H1)
   - 高质量食谱图片
   - 关键信息: 难度、时间、所需材料数量
   - "开始制作" CTA按钮

2. **配料清单** (Ingredients List)
   - 可勾选的配料清单
   - 每个配料的获取提示
   - 可选配料的明确标识

3. **制作步骤** (Cooking Steps)
   - 大号步骤编号
   - 每步配有游戏截图
   - 重要提示高亮显示
   - 进度条显示完成度

4. **额外价值内容** (Additional Value)
   - 制作技巧和窍门
   - 常见错误避免
   - 相关食谱推荐
   - 用户评论和评分 (如果有)

**搜索体验优化：**

1. **智能搜索建议**
   - 输入时实时显示匹配的食谱
   - 支持模糊搜索和拼写纠错
   - 热门搜索词提示

2. **搜索结果页面**
   - 按相关性排序
   - 筛选选项: 难度、分类、制作时间
   - 搜索结果的丰富摘要显示

**移动端用户体验优化：**

1. **触摸友好设计**
   - 足够大的点击区域 (最小44px)
   - 易于单手操作的导航
   - 滑动手势支持

2. **快速加载**
   - 图片懒加载
   - 关键内容优先加载
   - 离线缓存支持

3. **简化导航**
   - 底部导航栏 (主要功能)
   - 面包屑导航
   - 快速返回顶部按钮

### H1-H6 标题层次结构

**首页标题结构：**

- H1: "Grow a Garden Recipes - Complete Roblox Cooking Guide"
- H2: "Popular Recipes", "Latest Updates", "Recipe Categories"
- H3: 各个食谱名称
- H4: 食谱子分类
- H5: 技巧和提示标题
- H6: 详细步骤标题

**食谱页面标题结构：**

- H1: "How to Make [Food Name] in Grow a Garden - Complete Recipe Guide"
- H2: "Ingredients", "Cooking Steps", "Tips & Tricks", "Related Recipes"
- H3: 具体步骤标题
- H4: 子步骤或注意事项
- H5: 额外提示
- H6: 细节说明

## 组件和界面设计

### 核心组件

#### 1. 现代化导航栏组件

- **位置**: 页面顶部固定，带有玻璃态效果
- **元素**: 现代Logo设计、主导航菜单、智能搜索框、主题切换
- **样式**: 
  - 背景: 玻璃态效果 (backdrop-blur + 半透明背景)
  - 悬停效果: 平滑的颜色过渡和轻微的阴影变化
  - 边框: 1px solid rgba(255, 255, 255, 0.1)
- **交互**: 
  - 导航项悬停时显示下划线动画
  - 搜索框聚焦时展开并显示建议
  - Logo悬停时轻微的缩放效果
- **响应式**: 移动端汉堡菜单带有平滑的展开动画

#### 2. 搜索组件

- **功能**: 实时搜索建议、自动完成、拼写纠错
- **位置**: 导航栏和首页显著位置
- **样式**: 游戏UI风格的输入框，带有搜索图标和动画效果
- **交互**: 键盘快捷键支持 (Ctrl+K)，语音搜索支持
- **智能提示**: 显示热门搜索词和最近搜索历史
- **搜索范围**: 支持按分类筛选搜索结果

#### 3. 现代化食谱卡片组件

- **布局**: CSS Grid响应式布局，支持多种卡片尺寸
- **内容**: 高质量食谱图片、渐变标题、现代化难度标签、制作时间图标
- **现代化样式**:
  - 背景: 白色卡片带有轻微的玻璃态效果
  - 圆角: 16px 大圆角设计
  - 阴影: 默认轻微阴影，悬停时增强
  - 边框: 1px solid rgba(0, 0, 0, 0.05)
- **高级交互效果**:
  - 悬停时: 卡片轻微上升 (transform: translateY(-4px))
  - 悬停时: 阴影增强和图片轻微缩放
  - 点击时: 轻微的按压效果
  - 加载时: 骨架屏动画效果
- **内容设计**:
  - 图片: 带有渐变遮罩的高质量占位符
  - 标题: 使用渐变文字效果
  - 标签: 现代化的胶囊形状设计
  - 按钮: 玻璃态效果的操作按钮

#### 4. 食谱详情组件

- **结构**:
  - 头部：食谱名称、图片、基本信息
  - 配料列表：可勾选的清单
  - 制作步骤：编号步骤，配图说明
  - 技巧提示：高亮显示的重要信息
  - 相关推荐：其他相似食谱

#### 5. 分类导航组件

- **样式**: 标签页设计，游戏风格图标
- **功能**: 快速分类筛选
- **交互**: 平滑切换动画

### 视觉设计系统

#### 现代化色彩方案

- **主品牌色调**:
  - 主要绿色: #22c55e (现代化的鲜艳绿色，代表花园主题)
  - 辅助橙色: #f97316 (活力橙色，代表烹饪主题)
  - 强调蓝色: #3b82f6 (现代蓝色，代表专业性)
- **渐变色彩**:
  - 主渐变: linear-gradient(135deg, #22c55e 0%, #3b82f6 100%)
  - 辅助渐变: linear-gradient(135deg, #f97316 0%, #ef4444 100%)
  - 背景渐变: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
- **中性色系**:
  - 深色背景: #0f172a (现代深色)
  - 浅色背景: #f8fafc (柔和白色)
  - 卡片背景: rgba(255, 255, 255, 0.1) (玻璃态效果)
  - 文字颜色: #1e293b / #f1f5f9
- **功能色彩**:
  - 成功: #10b981
  - 警告: #f59e0b
  - 错误: #ef4444
  - 信息: #3b82f6

#### 现代字体系统

- **主标题**: "Inter" - 现代无衬线字体，权重700-800，支持渐变文字效果
- **副标题**: "Inter" - 权重600，用于章节标题
- **正文**: "Inter" - 权重400-500，优秀的可读性
- **按钮文字**: "Inter" - 权重500-600，清晰的交互元素
- **代码/数据**: "JetBrains Mono" - 等宽字体，用于技术内容

**字体大小层次**:
- H1: 3.5rem (56px) - 主页标题
- H2: 2.25rem (36px) - 页面标题  
- H3: 1.875rem (30px) - 章节标题
- H4: 1.5rem (24px) - 子标题
- Body: 1rem (16px) - 正文
- Small: 0.875rem (14px) - 辅助信息

#### 现代间距系统

- **基础单位**: 4px (0.25rem)
- **组件内间距**: 8px, 12px, 16px, 20px
- **组件间间距**: 24px, 32px, 48px, 64px
- **页面边距**: 
  - 移动端: 16px (1rem)
  - 平板: 32px (2rem)  
  - 桌面: 48px (3rem)
- **卡片内边距**: 24px (1.5rem)
- **按钮内边距**: 12px 24px (垂直 水平)

#### 现代视觉效果

- **阴影系统**:
  - 轻微阴影: 0 1px 3px rgba(0, 0, 0, 0.1)
  - 中等阴影: 0 4px 6px rgba(0, 0, 0, 0.1)
  - 强烈阴影: 0 10px 15px rgba(0, 0, 0, 0.1)
  - 悬停阴影: 0 20px 25px rgba(0, 0, 0, 0.15)

- **圆角系统**:
  - 小圆角: 6px
  - 中等圆角: 12px
  - 大圆角: 20px
  - 按钮圆角: 8px

- **玻璃态效果**:
  - 背景: rgba(255, 255, 255, 0.1)
  - 边框: 1px solid rgba(255, 255, 255, 0.2)
  - 背景模糊: backdrop-filter: blur(10px)
  - 实现代码示例:
    ```css
    .glass-effect {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 16px;
    }
    ```

#### 响应式断点系统

- **移动端**: 320px - 768px
  - 容器宽度: 100% - 32px padding
  - 字体缩放: 0.875倍
  - 卡片间距: 16px
- **平板端**: 768px - 1024px  
  - 容器宽度: 100% - 64px padding
  - 字体缩放: 0.9375倍
  - 卡片间距: 24px
- **桌面端**: 1024px+
  - 容器最大宽度: 1200px
  - 字体缩放: 1倍
  - 卡片间距: 32px

#### 组件状态系统

**按钮状态定义：**
- **默认状态**: 基础样式，无交互
- **悬停状态**: transform: translateY(-2px) + 阴影增强
- **激活状态**: transform: scale(0.98) + 内阴影
- **禁用状态**: 透明度50% + 禁用指针事件
- **加载状态**: 旋转动画 + 文字替换为加载图标

**卡片状态定义：**
- **默认状态**: 基础阴影 + 静态内容
- **悬停状态**: translateY(-4px) + 阴影扩散 + 图片轻微缩放
- **激活状态**: 边框高亮 + 内容预览展开
- **加载状态**: 骨架屏动画 + 渐进式内容加载

## 数据模型

### Recipe 食谱模型

```typescript
interface Recipe {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: RecipeCategory;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  cookingTime: number; // 分钟
  ingredients: Ingredient[];
  steps: CookingStep[];
  tips: string[];
  images: RecipeImage[];
  tags: string[];
  seoKeywords: string[];
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}
```

### Ingredient 配料模型

```typescript
interface Ingredient {
  id: string;
  name: string;
  quantity: string;
  isOptional: boolean;
  notes?: string;
}
```

### CookingStep 制作步骤模型

```typescript
interface CookingStep {
  id: string;
  stepNumber: number;
  instruction: string;
  image?: string;
  duration?: number;
  tips?: string[];
}
```

### Category 分类模型

```typescript
interface RecipeCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  parentId?: string;
  seoTitle: string;
  seoDescription: string;
}
```

## 错误处理

### 用户体验错误处理

1. **404页面**: 自定义游戏风格的404页面，提供搜索建议
2. **搜索无结果**: 显示相关推荐和热门食谱
3. **加载失败**: 优雅的加载状态和重试机制
4. **网络错误**: 离线提示和缓存内容访问

### 技术错误处理

1. **API错误**: 统一错误响应格式
2. **图片加载失败**: 默认占位图片
3. **JavaScript错误**: 错误边界组件
4. **SEO降级**: 服务端渲染备用方案

## 现代化实现技术栈

### 前端技术要求

**核心框架：**
- Next.js 14+ (App Router)
- React 18+ (并发特性)
- TypeScript 5+ (严格模式)

**样式系统：**
- Tailwind CSS 3.4+ (最新特性)
- CSS-in-JS (styled-components 或 emotion)
- Framer Motion 10+ (高性能动画)
- CSS Custom Properties (主题系统)

**现代化特性：**
- CSS Container Queries (响应式组件)
- CSS Subgrid (复杂布局)
- CSS :has() 选择器 (动态样式)
- Web Animations API (高性能动画)
- Intersection Observer (滚动动画)

### 性能优化要求

**Core Web Vitals 目标：**
- LCP (Largest Contentful Paint): < 1.2s
- FID (First Input Delay): < 50ms  
- CLS (Cumulative Layout Shift): < 0.05
- INP (Interaction to Next Paint): < 100ms

**加载性能：**
- 首屏渲染: < 800ms
- 交互就绪: < 1.5s
- 路由切换: < 200ms
- 动画帧率: 60FPS 稳定

### 现代化组件实现标准

**按钮组件实现示例：**
```tsx
interface ModernButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

const ModernButton = ({ variant, size, loading, icon, children }: ModernButtonProps) => {
  return (
    <motion.button
      className={cn(
        // 基础样式
        "relative overflow-hidden rounded-lg font-medium transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        // 玻璃态效果
        "backdrop-blur-sm border border-white/20",
        // 渐变背景
        variant === 'primary' && "bg-gradient-to-r from-green-500 to-blue-500",
        // 悬停效果
        "hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5",
        // 尺寸变体
        size === 'md' && "px-6 py-3 text-base",
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={loading}
    >
      {/* 背景光效 */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                      translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" />
      
      {/* 内容 */}
      <span className="relative flex items-center gap-2">
        {loading ? <Spinner /> : icon}
        {children}
      </span>
    </motion.button>
  );
};
```

**卡片组件实现示例：**
```tsx
const ModernCard = ({ children, className, ...props }: CardProps) => {
  return (
    <motion.div
      className={cn(
        // 基础样式
        "relative overflow-hidden rounded-2xl",
        // 玻璃态效果
        "bg-white/10 backdrop-blur-md border border-white/20",
        // 阴影系统
        "shadow-xl shadow-black/5",
        // 悬停效果
        "hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-1",
        "transition-all duration-300 ease-out",
        className
      )}
      whileHover={{ 
        y: -4,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      {...props}
    >
      {/* 装饰性渐变边框 */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      {/* 内容 */}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </motion.div>
  );
};
```

## 测试策略

### 功能测试

1. **搜索功能测试**: 关键词搜索准确性
2. **导航测试**: 所有链接和路由正常工作
3. **响应式测试**: 各种设备尺寸的兼容性
4. **性能测试**: 页面加载速度和交互响应

### SEO测试

1. **关键词排名测试**: 目标关键词的搜索表现
2. **元数据测试**: 所有页面的meta标签完整性
3. **结构化数据测试**: Schema.org标记验证
4. **移动友好性测试**: Google移动友好性检测

### 用户体验测试

1. **可用性测试**: 用户任务完成率
2. **A/B测试**: 不同设计方案的转化率对比
3. **加载性能测试**: Core Web Vitals指标
4. **无障碍测试**: WCAG 2.1 AA标准合规性

### 内容测试

1. **食谱准确性验证**: 与游戏内实际情况对比
2. **图片质量检查**: 所有食谱图片清晰度
3. **文本校对**: 语法和拼写检查
4. **链接有效性**: 所有内部和外部链接测试

## 用户体

验优化策略

### 首次访问用户体验

1. **3秒规则**: 确保用户在3秒内找到他们需要的食谱
2. **视觉层次**: 使用大小、颜色、位置引导用户注意力
3. **认知负荷最小化**: 避免信息过载，优先显示最重要内容
4. **即时满足**: 提供快速预览和一键访问功能

### 回访用户体验

1. **个性化推荐**: 基于浏览历史推荐相关食谱
2. **收藏功能**: 允许用户保存常用食谱
3. **进度追踪**: 记录用户已完成的食谱
4. **快速访问**: 最近查看的食谱快速入口

### 游戏玩家特定优化

1. **游戏术语**: 使用游戏内的准确术语和名称
2. **视觉一致性**: 界面风格与游戏UI保持一致
3. **快速查找**: 支持游戏内物品名称的直接搜索
4. **实时更新**: 跟随游戏更新及时调整内容

### 性能优化

1. **Core Web Vitals优化**:
   - LCP (Largest Contentful Paint) < 2.5s
   - FID (First Input Delay) < 100ms
   - CLS (Cumulative Layout Shift) < 0.1
2. **图片优化**: WebP格式，响应式图片，懒加载
3. **代码分割**: 按路由和功能进行代码分割
4. **CDN加速**: 静态资源全球分发

### 无障碍设计

1. **键盘导航**: 所有功能支持键盘操作
2. **屏幕阅读器**: 语义化HTML和ARIA标签
3. **色彩对比**: 满足WCAG 2.1 AA标准
4. **字体大小**: 支持用户自定义字体大小

### 社交和分享功能

1. **社交分享**: 一键分享到主流社交平台
2. **嵌入代码**: 允许其他网站嵌入食谱卡片
3. **打印友好**: 优化的打印样式
4. **离线访问**: PWA支持，关键内容离线可用

## 转化优化策略

### 用户留存

1. **内容深度**: 每个食谱提供详尽的制作指导
2. **相关推荐**: 智能推荐系统增加页面浏览深度
3. **定期更新**: 跟随游戏更新保持内容新鲜度
4. **社区功能**: 用户评论和评分系统

### SEO转化

1. **长尾关键词**: 针对具体问题的详细解答页面
2. **结构化数据**: Recipe Schema标记提升搜索展示
3. **内链策略**: 相关食谱之间的智能链接
4. **外链建设**: 与游戏社区和博主的合作

### 移动端转化

1. **AMP页面**: 关键页面的AMP版本
2. **PWA功能**: 添加到主屏幕，推送通知
3. **触摸优化**: 大按钮，易于点击的界面元素
4. **快速加载**: 移动端优先的加载策略
