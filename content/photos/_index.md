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

{{< album >}}