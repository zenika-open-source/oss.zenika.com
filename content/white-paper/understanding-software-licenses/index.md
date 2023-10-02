---
title: "Chapter 4: Understanding software licenses"
date: 2019-12-10T12:00:00.284Z
author: Benjamin Petetot
path: "/white-paper/licenses/"
---

As a developer or an open source project maintainer, it's essential to have knowledge of the different types of licenses. What are your rights and duties when you use them? Which license should you use for your project?

There are several types of licenses available and each may have pros and cons that should be measured before choosing. You must remain vigilant, there may be confusion between different categories of "free" software (OSS, freeware, public domain ...). It exists dozens of free licenses, some of which are viral. This article is intended to help you understand the different features of licenses and choose the most suitable for your project.

## Free Software & Open Source

The **Free Software Foundation** ([FSF](www.fsf.org)), an American non-profit company founded in 1985 by R. Stallman, supports the GNU operating system and manages "GPL" licenses.

This foundation gives a definition of free software based on four irrevocable freedoms:

- Freedom to use the software.
- Freedom to copy the software (includes the freedom to sell copies).
- Freedom to study the software (suppose access to the source code).
- Freedom to modify the software and redistribute the modified versions.

Free license works are not always available for free and you will often paid for associated services (development, warranties, support, etc.). A work contaminated by a free license, which could initially be available only against payment, must be rebroadcast freely.

> « Think Free as Free speech and not Free beer »
>
> _R. Stallman_

While the **Open Source Initiative** ([OSI](http://opensource.org/)), an American non-profit society founded in 1998 by E. Raymond & B. Perens, promotes open source code.

According to OSI, for software to be open source, its license must meet the following 10 criterias:

- Free redistribution.
- Provision of the source code.
- Allow derivative works and modifications.
- Integrity of the source code of the author.
- No discrimination between individuals or groups.
- No discrimination between the fields of application.
- No restriction on the distribution of the license (vs NDA).
- The license must not be specific to a product.
- The license must not restrict other software.
- The license must be technologically neutral.

> Both terms describe virtually the same category of software. But they represent views based on fundamentally different values.
>
> _R. Stallman_


## Copyright, copyleft and public domain

Before presenting the different types of licenses available, it is necessary to understand the different types of rights applied to projects. Here is an explanation, in simple terms, of the 3 major license types.

**Copyright** is a right granted to the author of the original work, including the right to authorize or prohibit the publication or distribution of their work. It protects authors from copying or unauthorized sale of their works. Copyright is granted for a limited period of time, then the work enters the public domain.

The **public domain** includes all creations where no intellectual property rights is applied. These rights may be expired, confiscated, expressly waived or inapplicable. Copyright is generally valid until 50 to 100 years after the author's death. In simple terms, anyone can use, modify and sell these creations without permission from the author.

For example, Beethoven's compositions entered the public domain 70 years after his death in 1827. His musical compositions are available for use and sale by all.

Under **copyleft**, everyone can edit and distribute the work. It requires only one condition:

> the same freedom must be preserved in modified versions of the original work.

People can use, modify and distribute the work as they wish. However, copyleft requires modified work to be distributed on the basis of the same license.

The GNU General Public License, originally written by Richard Stallman, was the first copyleft license.


## What type of license to choose or use?

A free software always has a license (contract) of use associated, it is necessary to analyze the conditions of use, the rights and the obligations resulting from it.

To facilitate the understanding of the different types of licenses, we can classify them according to the degree of freedom they grant to the user:

- "Strong Copyleft"
- "Low Copyleft"
- "Permissive"


### Strong Copyleft

A license with a strong copyleft has **a highly contaminating character**. If a software component is under a copylefted license, the same license is imposed on all the software which contains this component. This is known as a "contaminating" or "viral" license. It forces to make available the associated source code and to distribute the entire program (free and proprietary) under the same license.

**Some strong copyleft licenses:**
- GPL: General Public License V3
- AGPL: Affero General Public License
- CC: Creative Commons declined in 6 licenses, some permissive

In the case of the GPL license, there are some explicit use cases that do not trigger the phenomenon of contamination:
- Either by exception clauses included in the license: For example, the [GCC Runtime] (https://gcc.gnu.org/onlinedocs/libstdc++/manual/license.html)
- Either in the case of independent binaries, ie your software uses a program with the GPL license, but does not distribute it.

Stack Overflow threads are also licensed. When you copy and paste a piece of code from the forum, it is important to know that all code snippets posted are under the CC Creative Commons license. 😱


### Low Copyleft

A license with a low copyleft, **a weakly contaminating character**, forces to distribute the modified free software under the same license and to make available the associated source code. But you can freely use a component with a low copyleft in a proprietary software without constraining it to have the same licence.

**Some low copyleft licenses:**
- LGPL: Lesser GPL
- EPL: Eclipse Public License
- MPL: Mozilla Public License

Here some software and librairies using LGPL license: VLC media player, 7-Zip, GLib, etc.

### Permissive

Permissive licenses offer the greatest freedom with unconditional sharing. In general, only the citation of the original authors is requested and allow any actor to change the license under which the software is distributed and without obligation of diffusion.

**Some permissive licenses:**
- BSD: Berkeley Software Distribution
- MIT: Massachussetts Institute of Technology
- Apache2

The Apache license is the second most popular license in the Free and open source domain after MIT license. If you want to open source your project, I recommend using Apache2 or MIT licence. 

There are also more esoteric permissive licenses. Like the [Postcard license](https://en.wikipedia.org/wiki/Postcardware), which only obligation is to send a postcard to the author. Or the [WTFPL](http://www.wtfpl.net/) (Do What the Fuck You Want to Public License), the name speaks for itself. 🙂


## Conclusion

As a developer, if you use libraries or software, do not forget to check their licenses because it can impact your software. As an open source project maintainer, choose your license properly to protect your work or its use. I hope this article help you to know more about different type and categories of licences. Finally I recommend you the website ["Choose a license"](https://choosealicense.com/) to compare and choose your license according to your usage.