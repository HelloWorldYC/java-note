---
title: 'Spring Security'
---

- 简介
  - Spring Security 是一个专注于为 Java 应用程序提供身份认证和授权的框架，它的强大之处在于它可以轻松扩展以满足自定义的需求。

- 特征
  - 对身份的 **认证** 和 **授权** 提供全面的、可扩展的支持。
  - 防止各种攻击，如会话固定攻击、点击劫持、csrf攻击等。
  - 支持与 Servlet API、Spring MVC 等 Web 技术集成。

- 底层细节
  - Spring Security 底层是利用 Java EE 的 filter 来实现的，具体有十一个 filter 来实现不同的功能