---
title: "我的相册"
slug: "photos"
layout: "photos"
description: "欲买桂花同载酒，终不似，少年游。"
meta: false
# date: 2023-03-14T21:05:29+08:00
---

<script src="//tokinx.github.io/ViewImage/view-image.min.js"></script>
<script>
    window.ViewImage && ViewImage.init('.content img');
</script>

<script>
    jQuery(document).ready(function () {
        jQuery.viewImage({
        'target' : '.view-image img', //需要使用ViewImage的图片
        'exclude': '.exclude img',    //要排除的图片
        'delay'  : 300                //延迟时间
        });
    });
    </script>

<!-- <gallery>
    <img src="https://cn.bing.com/th?id=OHR.SessileOaks_EN-US1487454928_768x1280.jpg">
    <img src="https://cn.bing.com/th?id=OHR.SessileOaks_EN-US1487454928_1280x768.jpg">
    <img src="https://cn.bing.com/th?id=OHR.Umschreibung_EN-US4693850900_768x1280.jpg">
    <img src="https://cn.bing.com/th?id=OHR.RumeliHisari_EN-US4800002879_1280x768.jpg">
</gallery>

<gallery>![你好](https://cn.bing.com/th?id=OHR.SessileOaks_EN-US1487454928_768x1280.jpg)![美丽风景]([https://xxxx](https://cn.bing.com/th?id=OHR.SessileOaks_EN-US1487454928_1280x768.jpg))</gallery> -->

{{< album >}}