# &#120444;&#120446;&#120445;&#120446;&#120434;&#120432;&#120443;
This is an implementation of [Ian Battaglia](https://twitter.com/IanJBattaglia)'s [MONOCAL calendrical system](https://monochromatic.co/metachromatic/hub/2017/1/16/monocal-1) in JS.

## Console Commands
You can use MONOCAL's display and conversion functions on the console:

There are 4 display options.

```javascript
let m = MONOCAL.convert() // e.g. Septium 4, 2017

MONOCAL.dis.full(m)     // 04 Septium 2017
MONOCAL.dis.short(m)    // 04 SEPT 17
MONOCAL.dis.shorter(m)  // 04SEPT17
MONOCAL.dis.standard(m) // Septium 4th, 2017
```

To convert a Gregorian date to MONOCAL, pass a Date object as a parameter. If there are no parameters, today's date will be converted. An object containing MONOCAL properties (quarter name, month name, etc.) is returned.

```javascript
MONOCAL.convert(new Date(1997, 03, 17))
MONOCAL.convert()
```

You can also use the following to calculate a Gregorian date's MONOCAL quarter, month, week number, or date. These functions expect integers (nth day of the year) as parameters. Again, if there are no parameters, today's date will be used by default.

```javascript
MONOCAL.quarter()    // returns quarter (i., ii., iii., iv.)
MONOCAL.altQuarter() // returns quarter (air, water, fire, earth)
MONOCAL.month()      // returns month name i.e. Septium
MONOCAL.week()       // returns week number
MONOCAL.date()       // returns MONOCAL date number
```

## License
MIT

The MONOCAL calendrical system is created by Ian Battaglia ([Twitter](https://twitter.com/IanJBattaglia) | [GitHub](https://github.com/MoreThanLuck))
