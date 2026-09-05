---
title: 机场节点是什么意思？
description: 解释机场服务中"节点"一词的具体含义，以及节点信息通常包含哪些内容（地区、协议、线路、倍率）。
summary: 机场节点指服务商部署的一台代理服务器，通常标注地区、使用的协议（如VMess/Trojan）、线路类型（如专线/中转）和倍率信息，节点质量直接决定实际使用体验。
pubDate: 2026-09-05
category: 机场知识
tags: [机场, 节点]
related: ["vpn/what-is-node", "airport/what-is-ieplc", "airport/proxy-protocols-comparison", "airport/airport-test-metrics"]
---

## 节点的定义

在机场服务里，"节点"指服务商部署在某个机房、供用户连接使用的一台代理服务器。你订阅的机场套餐通常会包含一批节点，客户端软件导入订阅链接后，会把这批节点以列表形式展示出来，供你手动选择或交给客户端自动测速选择。

## 节点信息通常包含什么

打开客户端的节点列表，一个典型的节点名称可能类似"香港01｜IEPL｜1.5x"，这几段信息分别对应：

- **地区**：节点所在或模拟的地理位置（如香港、日本、美国）。
- **线路类型**：如[IEPL/IPLC](/airport/what-is-ieplc/)（国际私有专线，稳定性较好但成本高）、[BGP中转](/airport/what-is-bgp-relay/)（多为公共网络路由，成本较低）。
- **倍率**：使用该节点时流量消耗的比例，详见[机场倍率是什么](/airport/what-is-airport-multiplier/)。

不同机场服务商的命名习惯不完全一致，具体以各自面板和客户端里的说明为准。

## 节点使用的协议

节点在技术上运行某种代理协议，常见的包括 Shadowsocks、VMess、VLESS、Trojan、Hysteria2 等，具体差异可参考[机场协议对比](/airport/proxy-protocols-comparison/)。不同协议在抗封锁能力、连接效率上各有特点，但对普通用户来说，协议细节通常由服务商预先配置好，不需要手动选择——除非你使用sing-box等客户端自己搭建或深度定制，可参考[sing-box基础教程](/guide/singbox-basics/)。

## 怎么判断节点好不好

节点数量本身不是关键指标，更值得关注的是：

- 高峰时段（晚上）的速度和延迟是否明显下降
- 是否使用[专线（IEPL/IPLC）](/airport/what-is-ieplc/)而非纯中转线路
- 是否稳定，不频繁出现连不上、掉线的情况

这些维度可以对照[机场应该测试哪些指标](/airport/airport-test-metrics/)逐条了解。
