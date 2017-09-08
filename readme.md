# MONOCAL

![MIT](https://joshavanier.github.io/badges/mit.svg)

![Screenshot](img/screenshot.png)

**MONOCAL** is [Ian Battaglia](https://twitter.com/IanJBattaglia)'s [calendrical system](https://monochromatic.co/metachromatic/index/2017/1/16/monocal-1?rq=monocal).

## ⌘

To convert a Gregorian date to MONOCAL, pass a Date as a parameter. If there is none, today will be used by default

```js
MONO.convert(new Date(1997, 03, 17))
MONO.convert()

MONO.full(m)     // 04 Septium 2017
MONO.short(m)    // 04 SEPT 17
MONO.shorter(m)  // 04SEPT17
MONO.standard(m) // Septium 4th, 2017

MONO.qua() // quarter (i., ii., iii., iv.)
MONO.aqu() // quarter (air, water, fire, earth)
MONO.mon() // month name
MONO.wek() // week number
MONO.dat() // date number
```

---

Ian Battaglia

[![@MoreThanLuck](https://joshavanier.github.io/badges/github.svg)](https://github.com/MoreThanLuck) [![@IanJBattaglia](https://joshavanier.github.io/badges/twitter.svg)](https://twitter.com/IanJBattaglia) [![monochromatic.co](https://joshavanier.github.io/badges/website.svg)](https://monochromatic.co)

Josh Avanier

[![@joshavanier](https://joshavanier.github.io/badges/twitter.svg)](https://twitter.com/joshavanier) [![joshavanier.com](https://joshavanier.github.io/badges/website.svg)](https://joshavanier.com)
