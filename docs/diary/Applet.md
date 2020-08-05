---
title: 小程序踩坑
date: 2018-12-05
sidebar: 'auto'
categories:
 - 小程序
tags:
 - 踩坑
publish: true

---

  小程序自定义组件传值问题


<!-- more -->
# 小程序踩坑
我在小程序里 自己封装的组件 父组件向子组件传值的时候 子组件在ready 里接收父组件传过来的值 不能直接拿到函数里用 会有异步的问题 后来在社区问了问才发现 可以用监听父组件传过来的值 然后通过监听属性 来实现 当 父组件传过来的值改变是就会调用这个函数
```
list:{type:Array,
    observer: function (list) {
        var that = this;
        for (var i = 0; i < that.data.list.length; i++) {
          if (that.data.list[i].reviewStar != null) {
            var ss = Number(that.data.list[i].reviewStar)
            var xx = that.data.num
            console.log(ss)
            xx.splice(0, ss)
            for (var i = 0; i < ss; i++)
              xx.unshift('../../static/img/3448.png')
            this.setData({
              num: xx
            })
          }
        }

      }
    
    }

```