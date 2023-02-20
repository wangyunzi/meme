---
title: "常用命令合集"
slug: "commands"
description: "包括一些git命令、mangodb等"
date: 2022-11-13T11:30:09+08:00
gitinfo: true
displayCopyright: false
---

#### mangodb的twikoo评论数据上传和下载
下载数据命令
```markdown
 mongoexport --uri mongodb+srv://xxx:xxx@cluster0.z5rsya3.mongodb.net/ --collection comment --type json --out twikoo-comments.json
```

上传数据命令
```markdown
 mongoimport --uri mongodb+srv://xxx:xxx@cluster0.z5rsya3.mongodb.net/test --collection comment --type json --file twikoo-comments.json --mode upsert
```

说明：

第一个xxx：数据名称

第二个xxx：密码

test是指mangodb数据库的名称

#### git命令
写文章常用git
```markdown
git add .
git commit -m "first commit"
git branch -M master
git push -u origin master
```
