---
title: "hugo短代码记录"
slug: "shortcodes"
summary: "这是博主自己用的主页，需要用的时候打开这个"
description: "这是博主自己用的主页，需要用的时候打开这个"
date: 2022-10-26T22:53:11+08:00
toc: true
meta: false
comments: true
dropCap: true
share: false
toc: true
indent: false
# indentFirstParagraph: true
tocNum: false
---


#### 引入 ppt 功能
```markdown
{a{< ppt src="ppt网址" >}} 
# 使用的时候把字母a去掉，防止被识别生效
```
#### bilibili 视频
```markdown
{a{< bilibili BV1xW4y1a7NK >}}  
# 使用的时候把字母a去掉，防止被识别生效
# BV1Ab4y117G2 指的是 bilibili 链接中的 bvid
# 如果有集数（默认第一集），例如要播放第5集，则这样使用：{a{< bilibili BV1xW4y1a7NK 5 >}}
```

#### 博客文章内链
```markdown
{a{< innerlink src="posts/tech/go_slice_map_thread_safety.md" >}}  
# 使用的时候把字母a去掉，防止被识别生效
# 注意：结尾要加md，开头不用加域名
# 卡片获取的文章长度默认是70，需要在config.yaml配置文件添加 summaryLength: 140，即设置为140
```
{{< innerlink src="others/shortcodes.md" >}}

#### 豆瓣电影和书卡
```markdown
{a{< douban src="直接放网址如：https://book.douban.com/subject/20394150/" >}}
# 使用的时候把字母a去掉，防止被识别生效
```
{{< douban src="https://book.douban.com/subject/20394150/" >}}

#### imgloop
轮播图
```markdown
{< imgloop "URL1,URL2,URL3,URL4,URL5" >}} 
//实际使用时在前面多加入一个{
```
{{< imgloop "https://i.pinimg.com/564x/af/42/76/af42760c48f90d504d9d590e453260a2.jpg,https://i.pinimg.com/564x/ff/dd/79/ffdd792f92f5c04dc0af639d94f13f08.jpg,https://i.pinimg.com/564x/86/ed/45/86ed45e7100efb62b02e04f3a9d0f4ba.jpg,https://i.pinimg.com/564x/86/ed/45/86ed45e7100efb62b02e04f3a9d0f4ba.jpg,https://i.pinimg.com/564x/c7/67/e3/c767e363d2c53c350be3ecfe4756f29a.jpg" >}} 

#### align
```markdown
{{</* align left "文字居左" */>}}
```

{{< align left "文字居左" >}}

```markdown
{{</* align center "文字居中" */>}}
```

{{< align center "文字居中" >}}

```markdown
{{</* align right "文字居右" */>}}
```

{{< align right "文字居右" >}}

#### github
```markdown
{{</* github name="Organic-Carbon-Estimating" link="https://github.com/guanqr/Organic-Carbon-Estimating" description="A program used in estimating organic carbon stocks in oceans. 计算指定海域的有机碳存量，包括颗粒有机碳与溶解有机碳，数据依赖于 NASA 中分辨率成像光谱仪 MODIS 遥感产品。" color="#e16737" language="MATLAB" */>}}
```

{{< github name="Organic-Carbon-Estimating" link="https://github.com/guanqr/Organic-Carbon-Estimating" description="A program used in estimating organic carbon stocks in oceans. 计算指定海域的有机碳存量，包括颗粒有机碳与溶解有机碳，数据依赖于 NASA 中分辨率成像光谱仪 MODIS 遥感产品。" color="#e16737" language="MATLAB" >}}

#### notice
```markdown
{{</* notice notice-warning */>}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{</* /notice */>}}
```

{{< notice notice-warning >}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{< /notice >}}

```markdown
{{</* notice notice-info */>}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{</* /notice */>}}
```

{{< notice notice-info >}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{< /notice >}}

```markdown
{{</* notice notice-note */>}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{</* /notice */>}}
```

{{< notice notice-note >}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{< /notice >}}

```markdown
{{</* notice notice-tip */>}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{</* /notice */>}}
```

{{< notice notice-tip >}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{< /notice >}}

#### simple-notice
```markdown
{{</* simple-notice simple-notice-warning */>}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{</* /simple-notice */>}}
```

{{< simple-notice simple-notice-warning >}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{< /simple-notice >}}

```markdown
{{</* simple-notice simple-notice-info */>}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{</* /simple-notice */>}}
```

{{< simple-notice simple-notice-info >}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{< /simple-notice >}}

```markdown
{{</* simple-notice simple-notice-note */>}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{</* /simple-notice */>}}
```

{{< simple-notice simple-notice-note >}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{< /simple-notice >}}

```markdown
{{</* simple-notice simple-notice-tip */>}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{</* /simple-notice */>}}
```

{{< simple-notice simple-notice-tip >}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{< /simple-notice >}}

#### quote
中文：

```markdown
{{</* quote */>}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{</* /quote */>}}
```

{{< quote >}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{< /quote >}}

英文：

```markdown
{{</* quote en */>}}
To see a world in a grain of sand. And a heaven in a wild flower. Hold infinity in the palm of your hand. And eternity in an hour.
{{</* /quote */>}}
```

{{< quote en >}}
To see a world in a grain of sand. And a heaven in a wild flower. Hold infinity in the palm of your hand. And eternity in an hour.
{{< /quote >}}

#### quote-center
```markdown
{{</* quote-center */>}}
十里青山远，潮平路带沙<br>数声啼鸟怨年华<br>又是凄凉时候，在天涯<br>白露收残月，清风散晓霞<br>绿杨堤畔问荷花<br>记得年时沽酒，那人家
{{</* /quote-center */>}}
```

{{< quote-center >}}
十里青山远，潮平路带沙<br>数声啼鸟怨年华<br>又是凄凉时候，在天涯<br>白露收残月，清风散晓霞<br>绿杨堤畔问荷花<br>记得年时沽酒，那人家
{{< /quote-center >}}

---

需要以下格式：

```markdown
{{</*/* myshortcode */*/>}}
```

渲染结果：

```markdown
{{</* myshortcode */>}}
```

#### 参考链接（非常感谢以下大佬提供的代码）
- [Hugo博客自定义shortcodes](https://www.sulvblog.cn/posts/blog/shortcodes/)
- [自定义 Hugo Shortcodes 简码](https://guanqr.com/tech/website/hugo-shortcodes-customization/)
- [Hugo框架中文文档 短代码](https://www.andbible.com/post/hugo-content-management-shortcodes/)
- [在 Hugo 博客上实践 Shortcodes 短代码, 太强大了](https://matnoble.me/tech/hugo/shortcodes-practice-tutorial-for-hugo/)
- [Hugo 音乐短代码](https://immmmm.com/hugo-shortcodes-music/)
