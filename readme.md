[![wtfpl](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png)](http://www.wtfpl.net/txt/copying/)
[![Travis](https://img.shields.io/badge/made%20with-love-red.svg)](https://github.com/rakeen/battery-checker)
[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)


Battery Checker:
================

Checks your battery with battery api.  


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

