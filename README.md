# Claude Code v1.0.3 - Unbundled Source

从 npm 包 `@anthropic-ai/claude-code@1.0.3` 的 esbuild bundle 中反向提取并格式化的模块代码。

## 说明

- 这些代码是从 `cli.js` 单文件 bundle 中拆解出的 **1868 个模块**
- 使用 prettier 进行了代码格式化
- 变量名仍为打包后的短名称（如 `A`, `B`, `Q`），非原始命名
- **不是**可直接运行的源码项目，仅供学习参考

## 目录结构

```
modules/         # 拆解出的各个模块文件
├── module_XXXX_YYY.js   # 按序号命名的模块
├── src/         # 部分模块按原始路径组织
└── lib/         # 第三方库模块
```

## 提取方法

1. `npm pack @anthropic-ai/claude-code@1.0.3` 下载 tgz 包
2. 解压得到 `cli.js`（esbuild bundle，7.2MB）
3. 自定义脚本解析 esbuild 模块包装器 `w()` 提取各模块
4. 使用 prettier 格式化代码

## 声明

Claude Code 是 Anthropic 的产品，受其商业条款约束。本仓库仅用于学习研究目的。
