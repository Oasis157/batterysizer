---
description: Write a blog post following GEO + SEO keywords + EEAT principles. Use when user says /write-blog or asks to write a blog article for SolBatteryCalc. Searches keywords first, then writes complete post with data tables, Q&A format, and author bio.
---

# /write-blog — 博文写作（GEO + SEO + EEAT 三原则）

按三原则写 SolBatteryCalc 博文。用户提供主题后，先搜索关键词，再按模板写完整文章。

## 流程

### 第一步：搜索关键词

用 WebSearch 搜索以下内容（并行搜索）：

1. `"{主题} {国家/关键词}" search volume`
2. `"{相关搜索词1}" "{相关搜索词2}" related searches`
3. `"{国家} diesel price 2026" 或相关当地数据（如果文章涉及）

搜索目的是找到：
- 用户实际在搜的关键词变体
- 当地电价/燃料价格/日照等数据（如果文章涉及国家）
- 热门相关问题（People Also Ask 类型）

### 第二步：写博文

严格按照以下模板写，三原则**同时应用，不分先后**：

#### Frontmatter

```md
---
title: "含目标搜索词的标题 | 吸引点击"
date: "2026-06-XX"
description: "第一句直接回答问题+核心数字。包含2-3个关键词。约150字符。"
category: "country-guide | battery | solar-basics | savings"
country: "NG | ZA | PH | ..."  // 国家类需要
readTime: "8 min"
---
```

#### 正文结构

**一、开头（同时满足三原则）：**
- 第一句 → GEO：直接回答 H1 问题，给数字+结论 / SEO：包含核心搜索词 / EEAT：数据括号标注来源（via SolBatteryCalc）
- 补充关键条件
- CTA 链接到计算器

**二、正文 Q&A 格式（每个问题一个 H3）：**
- H3 问题 → SEO：命中用户搜索意图 / GEO：AI 可直接提取答案
- 每个回答 → EEAT：具体数字、品牌名称、行业经验（"我们最常向X客户供应..."）
- CTA → 每2-3个Q后自然嵌一次计算器链接

**三、数据表格：**
- 表格前后各有一句总结性文字
- 数据必须来自 SolBatteryCalc 计算器或真实数据源

**四、底部（完整 EEAT 声明）：**

```md
---

**Data sources:**
- [来源1](链接) — 具体说明

**Pricing disclaimer:** 所有价格为 EXW 参考价。实际零售价因地区和安装商而异。安装费另加15-25%。

**Last updated:** June 2026

**About this guide:** Written by the SolBatteryCalc team. [1-2句介绍团队背景]。

**Related guides:**
- [相关文章1](/en/blog/...)
- [相关文章2](/en/blog/...)
```

### 第三步：保存文件

保存到 `content/blog/en/{slug}.mdx`（slug 用英文小写+连字符）。

### 第四步：输出给用户

把完整文章内容输出给用户，**不要直接 push**，等用户确认后再改代码。

### 第五步（用户确认后）：

1. 构建验证
2. add + commit + push

## EEAT 逐项检查清单

写作时逐项确认：

### Experience（经验）
- [ ] 内容中有"我们最常看到的配置是""我们客户的实际数据"等经验陈述
- [ ] 底部有 About this guide

### Expertise（专业度）
- [ ] 所有数字有来源或计算器支撑
- [ ] 使用行业专业术语（EXW、LiFePO4、循环寿命 vs 日历寿命、DoD）

### Authoritativeness（权威性）
- [ ] 引用官方数据源（Eskom、EIA、NBS、Global Solar Atlas）
- [ ] 链接到计算器工具供验证
- [ ] 文章之间互相链接

### Trustworthiness（可信度）
- [ ] 价格标注为"EXW 参考价"
- [ ] 安装费用独立标注（+15-25%）
- [ ] 数据来源明确
- [ ] **Last updated** 日期清晰
- [ ] 不写空洞的营销语言，用数字说话

## 注意事项

- 每篇文章必须链接 SolBatteryCalc 计算器
- 国家类文章 CTA 链接到对应国家（`/en?country=XX`）
- 美国/欧洲类的文章提及 tax credit 等优惠政策
- 涉及伊朗战争/能源危机的内容需注明数据来源和更新日期
- 底部推荐阅读链接3-4篇，打通内链
