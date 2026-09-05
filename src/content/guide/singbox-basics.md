---
title: sing-box基础教程
description: 介绍sing-box这个通用代理平台的基本概念、与Clash的区别，以及在各平台上的常见使用方式。
summary: sing-box是一个较新的通用代理内核项目，支持多种协议和平台，配置采用JSON格式，理念和Clash类似（订阅/出站/路由规则），但配置语法和生态工具略有不同，很多机场和客户端已经开始同时支持这两种内核。
pubDate: 2026-09-05
category: 客户端教程
tags: [sing-box, 客户端教程]
related: ["guide/clash-basics", "guide/iphone-proxy-setup", "airport/what-is-airport-node"]
---

## sing-box是什么

sing-box 是一个开源的通用代理平台项目，目标是用一套统一的配置格式，支持多种代理协议（Shadowsocks、VMess、VLESS、Trojan、Hysteria2等）并跨多个操作系统运行（Windows、macOS、Linux、Android、iOS）。相比Clash生态，sing-box的更新迭代较快，对一些较新的协议（如Hysteria2）支持也比较及时。

## 和Clash的主要区别

- **配置格式**：sing-box使用JSON格式配置文件；Clash系客户端多使用YAML格式。
- **概念命名**：sing-box里对应Clash"节点"的概念叫"出站(Outbound)"，对应"分流规则"的概念叫"路由(Route)"，底层逻辑类似，但配置语法不同。
- **生态定位**：sing-box更偏向底层内核项目，图形界面客户端（如各平台的sing-box官方或第三方GUI）通常在其基础上做了封装，具体易用性因客户端而异。

## 常见的使用方式

大多数普通用户不需要手写JSON配置文件，而是通过支持sing-box内核的图形界面客户端（不同平台有各自的应用）导入机场提供的sing-box格式订阅链接，操作逻辑和使用Clash类似：

1. 在客户端中导入订阅链接（需要确认你的机场是否提供sing-box格式的订阅，不是所有机场都同时支持两种格式）。
2. 客户端解析订阅，生成出站节点列表。
3. 选择节点，开启代理。
4. 如果客户端支持TUN模式，可以选择开启以获得全局代理效果。

## 什么时候需要用到sing-box而不是Clash

- 你的机场明确推荐或只提供sing-box格式的订阅。
- 你需要用到Hysteria2等sing-box生态支持更及时的协议。
- 你在iOS上使用类似逻辑的客户端，部分iOS客户端底层也采用了sing-box内核。

## 排查思路

- 导入订阅失败：确认订阅链接格式是否与客户端要求的一致（sing-box格式和Clash格式的订阅链接通常不能混用）。
- 连接后无法上网：检查出站节点配置和路由规则是否正确。
- 想要更精细的分流：需要了解sing-box的路由规则（route rules）语法，具体可以查阅sing-box官方文档。

如果你更习惯图形化的规则编辑体验，也可以对比使用[Clash基础教程](/guide/clash-basics/)中介绍的客户端方案。
