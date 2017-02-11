[![wtfpl](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png)](http://www.wtfpl.net/txt/copying/)
[![Travis](https://img.shields.io/badge/made%20with-love-red.svg)](https://github.com/rakeen/battery-checker)
[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)
[![Code Climate](https://codeclimate.com/github/rakeen/battery-checker/badges/gpa.svg)](https://codeclimate.com/github/rakeen/battery-checker)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/552a2d5876db4819b7810ed5bec673da)](https://www.codacy.com/app/rakeen/battery-checker?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=rakeen/battery-checker&amp;utm_campaign=Badge_Grade)

Battery Checker:
================

Checks your battery with battery api.  

![Alt text](./demo.png?raw=true "demo")
<br><br>

Basically it's the result of playing with js `Promise`,`fetch` and `battery` api.  



Internals:
==========

There's two part to this project.  

## 1. Quotes:  

It uses a promise and tries to fetch data from two sources(one from external api, another from local json).  
It then shows the data whichever is returned first(using `promise.all` ). Clearly the localone should be faster.  

## 2. Battery:

This ones pretty simple. Uses native battery api which returns a promise.  
If the browser doesn't support the battery api, it'll show an error.  

