---
title: How I (sorta) Dualboot Windows and Linux
author: Dylan / Shark
description: This is how I managed to (sorta) dualboot linux (Pop!_OS) and Windows 10 (22H2).
pubDatetime: 2024-05-08T18:54:19.949Z
slug: dualbooting-win-and-linux
featured: true
draft: false
tags:
  - dualbooting
  - linux
  - windows
  - tech
---

This is how I managed to (kind of) dualboot Windows and Linux.

## Why dualboot?

I would like to dualboot because I still get access to Windows along with the many quality features of Linux. I have also
been having lots of bugs on windows and at this point, I only use it for gaming.

## Why leave Windows?

I have left the Windows community because of many bugs, little customizability, and a massive dependency on Microsoft Store.

## Windows Bugs:

### Microsoft Store

Microsoft Store doesn't work (very often). I try to download TranslucentTB off of Microsoft Store
(which is like the only thing I download) and it requires me to login. I login and such, but it still won't let me install it.

> The only error I get is the word 'Error'. How am I supposed to understand what it is trying to indicate?

**_I can't._**

I love winget because I don't have to login to download from the store, but winget is very annoying most of the time because I still have to
go through one of those generic installer files to install the program I want. Although it works, still very bad.

### Little Customizability

Windows is very hard to customize without having to take apart the entire shell (explorer) to understand how everything works.

> Want an invisible taskbar?

**_Either learn C++ or download something off of the Microsoft Store. Oh wait... it doesn't work._**

> Want a taskbar that doesn't touch the edge of the screen?

**_Nope, learn C++ or download some program off of some sketchy website._**

### Everything needs Microsoft Store

If you try to use Calculator without Microsoft Store, it will just refuse to open. My question is why do you need
Microsoft Store to calculate numbers?

It isn't just me that is having these issues. There are many other people complaining about this in the Windows community aswell.

## Now actually dualbooting..

Dualbooting was a very challenging switch to make (and still is) for me. I have used a more advanced and modern tool for
booting with EFI and swapping between them (bootloader / bootmanager).

The tool that I have used is [rEFInd](https://www.rodsbooks.com/refind/).
It is a very nice and easy-to-use tool. Not so easy-to-setup though (_ba dum bum pshhh_). Seriously though, it was very hard
to setup at first.

I kept on having Windows take over boot priority over rEFInd, then Linux took boot priority. Now I have it
working somewhat correctly (after about 5 tutorials).

This tool doesn't have the best documentation (for issues) compared to other tools, so if you have an issue, you're all on your own (for the most part).



**_(This post is unfinished and will be updated sometime in the future.)_**
