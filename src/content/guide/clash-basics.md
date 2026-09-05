---
title: Clash基础教程：订阅、节点、策略组和分流规则
description: 讲解Clash系客户端（Clash Verge/ClashX Meta/Clash Meta for Android）的核心概念：订阅、代理组、策略组和分流规则，帮助你理解界面上各个功能的作用。
summary: Clash的核心概念是"订阅提供节点、策略组决定怎么选节点、分流规则决定哪些流量走代理"，理解这三层逻辑之后，不管在哪个平台使用Clash系客户端都能快速上手。
pubDate: 2026-09-05
category: 客户端教程
tags: [Clash, 客户端教程, 分流规则]
related: ["guide/windows-proxy-setup", "guide/macos-proxy-setup", "airport/what-is-airport-node"]
faq:
  - q: Clash、Clash Verge、ClashX Meta是什么关系？
    a: Clash最初是一个开源代理内核项目，后来衍生出多个基于这个内核（或其继任者Mihomo/Clash Meta）开发的图形界面客户端，比如Windows上的Clash Verge、macOS上的ClashX Meta、Android上的Clash Meta for Android，核心逻辑相通，界面和平台不同。
---

## Clash是什么

Clash最初是一个开源的代理内核项目，负责实现流量转发、多协议支持（Shadowsocks、VMess、VLESS、Trojan等）和灵活的规则分流。后来社区在这个内核基础上（包括继任的Mihomo/Clash Meta内核）开发出多个平台的图形界面客户端，比如Clash Verge（Windows/跨平台）、ClashX Meta（macOS）、Clash Meta for Android。虽然界面不同，核心概念是一致的。

## 核心概念一：订阅（Subscription）

订阅就是机场服务商提供给你的那个URL链接，客户端通过这个链接获取该机场提供的全部节点信息和（可选的）预设规则。大部分机场支持定期自动更新订阅内容，客户端里通常有"更新订阅"的按钮或自动更新的间隔设置。

## 核心概念二：代理组/策略组（Proxy Groups）

策略组是节点的"分组和选择逻辑"，常见类型包括：

- **Select（手动选择）**：让你在列表里手动选一个具体节点。
- **URL-Test（自动测速）**：客户端定期测试组内节点延迟，自动选用最快的一个。
- **Fallback（自动故障转移）**：优先使用某个节点，一旦不可用自动切换到下一个。
- **Load-Balance（负载均衡）**：把流量分摊到组内多个节点。

机场提供的订阅通常会预设好几个策略组，你也可以在支持自定义配置的客户端中自己调整。

## 核心概念三：分流规则（Rules）

分流规则决定"某个域名或IP的流量应该走代理还是直连"。例如，你可能希望访问境外网站走代理，访问国内网站直接连接，不额外经过代理服务器（既能加快国内网站访问速度，也能节省流量额度）。规则通常基于域名列表、IP段等方式匹配，机场的默认订阅通常已经内置一套常用规则，进阶用户也可以自己编写或使用社区维护的规则集。

## 一个典型的连接流程

1. 导入订阅 → 客户端获取节点列表和默认规则。
2. 打开客户端的"代理"页面，选择或让自动测速挑选一个节点。
3. 开启系统代理（或TUN模式）。
4. 日常使用中，符合分流规则里"代理"条件的流量走你选择的节点，其余走直连。

## 遇到问题时的排查思路

- 特定网站打不开：检查该网站域名是否被规则错误分流到了直连。
- 全部无法上网：检查节点是否可用，尝试切换其他节点。
- 想要更精细控制：了解自定义规则语法，或参考社区维护的规则集。

如果你使用的是sing-box内核的客户端，核心概念类似但配置语法不同，可以参考[sing-box基础教程](/guide/singbox-basics/)。
