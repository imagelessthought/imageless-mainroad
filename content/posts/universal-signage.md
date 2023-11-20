---
title: "Universal Signage"
subtitle: "Digital signage can be costly but there is no reason to spend money on a solution that can easily be hosted for free with little maintenance required."
author: mbaggett
date: 2023-10-10
categories:
  - "Digital Signage"
tags:
  - "Raspberry Pi"
  - "Full PageOS" 
pin: true
nosearch: "True"
postauthor: Michael Baggett
postauthorinfo: Director and Assistant Dean of Information Technology
postauthorarea: Imageless Thought
postemail: baggett.michael@gmail.com
posturl: https://imagelessthought.github.io
thumbnail: "img/cross-platform-icon.svg"
---
The signage solution we have in place has served us well but it is time for an update. The original open source developer of the solution has taken their project proprietary as well.

We will be developing the new solution as open source and will use already available code whenever possible: don't reinvent the wheel.  Unless you have to, that is. 

## New Features

This time around we will be adding some new features:

* Users will be able to login to server to manage their digital signs centrally.
* Each sign can be included in a **group** or managed separately. Each sign in a group will play the same slideshow.
* Users will be able to upload images and create playlists on the server, and then assign them to the digital signs.
* Users wil be able to schedule playlist changes by individual signs or as groups.
* Each digital signage device will not be required to host the slideshow: they will receive their assigned content from a server. Each time a device reaches the end of the assigned playlist, it will check for content changes.
* Screensavers for the <b>Mac</b>, <b>Windows</b>, and <b>Linux</b> will be availale and will be managed the same as digital signs.
* In addition to playlists for digital signs, users will be able to created hosted Kiosks and Presentations. 