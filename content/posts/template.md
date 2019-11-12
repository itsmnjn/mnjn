---
title: "Template"
date: "2019-11-09T12:00:00.000Z"
template: "post"
draft: false
slug: "/posts/template"
category: ""
tags:
  - ""
description: ""
socialImage: ""
recording: ""
---

So basically this is how you should do it.

Let's start off with some imports.

```javascript
// @flow strict
import React from "react";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby";
import type { Node as ReactNode } from "react";
import { useSiteMetadata } from "../../hooks";
import styles from "./Layout.module.scss";
```
