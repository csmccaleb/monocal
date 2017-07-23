# &#120444;&#120446;&#120445;&#120446;&#120434;&#120432;&#120443;
CSS-.514 JS-1.95 M-98 D-98

This is an implementation of [Ian Battaglia](https://twitter.com/IanJBattaglia)'s MONOCAL calendrical system in JS. Read about MONOCAL [here](https://monochromatic.co/metachromatic/hub/2017/1/16/monocal-1).

## Screenshot
![MONOCAL](/img/MONOCAL.PNG)

## Console Commands
You can use MONOCAL's display and conversion functions on the console:

There are 4 display options.

```javascript
let m = Monocal.convert() // e.g. Septium 4, 2017

Monocal.dis.full(m)     // 04 Septium 2017
Monocal.dis.short(m)    // 04 SEPT 17
Monocal.dis.shorter(m)  // 04SEPT17
Monocal.dis.standard(m) // Septium 4th, 2017
```

To convert a Gregorian date to MONOCAL, pass a Date object as a parameter. If there are no parameters, today's date will be converted. An object containing MONOCAL properties (quarter name, month name, etc.) is returned.

```javascript
Monocal.convert(new Date(1997, 03, 17))
Monocal.convert()
```

You can also use the following to calculate a Gregorian date's MONOCAL quarter, month, week number, or date. These functions expect integers (nth day of the year) as parameters. Again, if there are no parameters, today's date will be used by default.

```javascript
Monocal.quarter()    // returns quarter (i., ii., iii., iv.)
Monocal.altQuarter() // returns quarter (air, water, fire, earth)
Monocal.month()      // returns month name i.e. Septium
Monocal.week()       // returns week number
Monocal.date()       // returns MONOCAL date number
```

## License
The MONOCAL calendrical system is created by Ian Battaglia ([Twitter](https://twitter.com/IanJBattaglia) | [GitHub](https://github.com/MoreThanLuck))
