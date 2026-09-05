---
title: iPhone代理设置教程
description: 在iPhone上使用Shadowrocket或Stash导入机场订阅链接并配置代理的步骤，以及App Store地区限制的应对方式。
summary: iPhone上常见的代理客户端是Shadowrocket和Stash，这两款App在中国区App Store通常无法直接下载，需要切换到其他地区的Apple ID账号获取，导入订阅链接后开启VPN配置即可使用。
pubDate: 2026-09-05
category: 客户端教程
tags: [iPhone, iOS, 客户端教程]
related: ["guide/android-proxy-setup", "guide/singbox-basics", "airport/what-is-airport"]
faq:
  - q: 为什么App Store中国区搜不到Shadowrocket？
    a: Shadowrocket、Stash等代理类App长期未上架中国区App Store，需要使用其他地区（如美国、香港等）的Apple ID账号才能搜索和下载，具体操作请以App开发者或应用商店的官方说明为准。
---

## 准备工作

- 一个机场服务的订阅链接。
- 一台iPhone。
- 一个代理客户端，本教程以 **Shadowrocket** 为例，Stash的使用逻辑类似。

## 第一步：获取客户端App

Shadowrocket是一款付费App，且长期未在中国区App Store上架，需要使用其他地区的Apple ID登录App Store后搜索下载。具体切换地区账号的方法可以参考Apple官方支持文档，此处不展开。

## 第二步：导入订阅链接

1. 打开Shadowrocket，点击右上角的"+"或"配置"按钮。
2. 选择"类型"为Subscribe（订阅），粘贴你的机场订阅链接。
3. 保存后，App会拉取该订阅下的全部节点。

## 第三步：选择节点

在主界面的节点列表中选择具体节点，App通常会显示每个节点的延迟测试结果，方便挑选。

## 第四步：开启VPN配置

首次连接时，iOS会提示"添加VPN配置"，这是iOS系统提供给此类App的标准接口，用于实现全局代理，同意授权后即可开始使用。

## 第五步：验证效果

打开Safari或其他浏览器访问一个可显示当前IP的网站，确认显示的IP地址已经变为所选节点对应的地区。

## 常见问题排查

- 如果无法搜索到App，确认当前登录的Apple ID所在地区是否支持下载该App。
- 如果连接后无法访问网络，尝试切换节点，或检查iOS的"设置-VPN与设备管理"中该VPN配置是否已经正确启用。
- 部分企业或学校网络会限制VPN配置的安装，如果是这类受管理设备，可能需要联系管理员确认权限。

如果你的机场支持sing-box内核，也可以在iOS上尝试[sing-box基础教程](/guide/singbox-basics/)中提到的客户端方案。
