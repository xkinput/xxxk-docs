# 快速开始

## 项目简介

**小小星空**是一个将星空键道6、星空二笔等**汉字编码方案**挂载到**小小输入法**的项目。

如果你看不懂上面这句话，阅读以下名词解释可能有所帮助：

* **输入法**：一个笼统的概念，有时表示**编码方案**，有时又可以表示**输入法编辑器**。
* **编码方案**（简称方案）：将键盘编码映射为字符的一套规则，例如全拼、王码五笔、小鹤双拼等。本项目主要使用 *@吅吅大山* 创造的星空系列方案，这类方案的主要特色是[顶功](https://zhuanlan.zhihu.com/p/291029476)、易学易用。
* [输入法编辑器](https://docs.microsoft.com/zh-cn/windows/uwp/design/input/input-method-editors)（input method editor）：接受用户键盘输入的编码，然后依照某种编码方案，输出相应字符的软件。常见的有：搜狗拼音输入法、王码五笔输入法、小鹤音形输入法等。其中，有一类特殊的输入法，例如[中州韵输入法引擎](https://rime.im/)（Rime Input Method Engine）、[多多输入法生成器](https://www.chinput.com/portal.php)、[小小输入法][小小输入法论坛]（Yong）等，它们不专精于一种汉字编码方案，而是致力于打造一个能够挂载各种编码方案的通用平台。本项目所使用的输入平台是由 *@dgod* 开发的小小输入法。

::: info
与本项目类似的项目有：[KeyTao][KeyTao官网]，[RIME星空两笔](https://gitee.com/morler/rime_xklb)等，它们都是基于中州韵输入法引擎（RIME）的，该引擎支持更多操作系统（包括 macOS 和 iOS），且拥有强大的 [脚本扩展](https://github.com/tswwe/my-rime-lua)能力。
:::

## 安装使用

下载**小小星空输入法**安装包：

* 下载地址1：[Github 仓库][小小星空仓库]
* 下载地址2：[永硕E盘][小小星空网盘]

下载完成后，推荐继续阅读以下章节：

* [安装小小星空](/install.md)：新手必读
* [方案介绍](/schema.md)：新手必读，键道方案理论课
* [使用小小星空](/usage.md)

## 社区资源

本项目离不开社区中的各位大佬和以下项目的支持：

社区：

* [星空QQ群：320053116][星空QQ群] —— 接近满员，建议改为加入键道QQ群
* [键道QQ群：865189947][键道QQ群]
* [星空电报交流群][星空电报群]

项目：

* [星空官网][星空官网] —— 星空系列输入法门户网站
* [KeyTao][KeyTao官网] —— 本项目内置星空键道方案的码表来源
* [大牛的网盘](http://daniushuangpin.ysepan.com) —— 本项目内置星空一笔、星空二笔、星空星笔方案的码表来源
* [字海两分输入法](http://cheonhyeong.com/Simplified/download.html) —— 本项目内置字海两分方案的码表来源
* [小小输入法][小小输入法论坛]

[星空QQ群]: https://jq.qq.com/?_wv=1027&k=5tVcZlL
[键道QQ群]: https://jq.qq.com/?_wv=1027&k=WxhhXU6u
[星空电报群]: https://t.me/xkinput

[星空官网]: https://xkinput.github.io
[KeyTao官网]: https://keytao-docs.rea.ink

[小小星空首页]: https://xkinput.github.io/xxxk-help
[小小星空仓库]: https://github.com/xkinput/xxxk
[小小星空网盘]: http://xxxk.ysepan.com

[小小输入法网盘]: http://yongim.ysepan.com
[小小输入法论坛]: https://yong.dgod.net
[小小输入法仓库]: https://github.com/dgod/yong