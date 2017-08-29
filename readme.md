# &#120444;&#120446;&#120445;&#120446;&#120434;&#120432;&#120443;
![MIT License](https://joshavanier.github.io/badges/mit.svg)

An implementation of [Ian Battaglia](https://twitter.com/IanJBattaglia)'s [MONOCAL calendrical system](https://monochromatic.co/metachromatic/index/2017/1/16/monocal-1?rq=monocal)

## &#8984;
You can use MONOCAL's display and conversion functions on the console:

```js
let m = MONO.convert() // e.g. Septium 4, 2017

MONO.full(m)     // 04 Septium 2017
MONO.short(m)    // 04 SEPT 17
MONO.shorter(m)  // 04SEPT17
MONO.standard(m) // Septium 4th, 2017
```

To convert a Gregorian date to MONOCAL, pass a Date object as a parameter or else today's date will be converted by default. An object containing MONOCAL properties (quarter name, month name, etc.) is returned.

```js
MONO.convert(new Date(1997, 03, 17))
MONO.convert()
```

You can also use the following to calculate a Gregorian date's MONOCAL quarter, month, week number, or date. These functions expect integers (nth day of the year) as parameters. Again, today's date will be used by default unless specified otherwise.

```js
MONO.qua() // returns quarter (i., ii., iii., iv.)
MONO.aqu() // returns quarter (air, water, fire, earth)
MONO.mon() // returns month name i.e. Septium
MONO.wek() // returns week number
MONO.dat() // returns MONOCAL date number
```

## Credits
Ian Battaglia

[![@MoreThanLuck](https://joshavanier.github.io/badges/github.svg)](https://github.com/MoreThanLuck)
[![@IanJBattaglia](https://joshavanier.github.io/badges/twitter.svg)](https://twitter.com/IanJBattaglia)
[![monochromatic.co](https://joshavanier.github.io/badges/website.svg)](https://monochromatic.co)

---
Josh Avanier

[![@joshavanier](https://joshavanier.github.io/badges/github.svg)](https://github.com/joshavanier)
[![@joshavanier](https://joshavanier.github.io/badges/twitter.svg)](https://twitter.com/joshavanier)
[![joshavanier.com](https://joshavanier.github.io/badges/website.svg)](https://joshavanier.com)
