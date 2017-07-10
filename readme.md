## MONOCAL
This is an implementation of [Ian Battaglia](https://twitter.com/IanJBattaglia)'s MONOCAL calendrical system in JS. Read about MONOCAL [here](https://monochromatic.co/metachromatic/hub/2017/1/16/monocal-1).

### Screenshot
![MONOCAL](/img/MONOCAL.PNG)

### Console Commands
You can use Monocal's conversion functions on the console:

To convert a Gregorian date to MONOCAL, pass a Date object as a parameter. If there are no parameters, today's date will be converted. An object containing MONOCAL properties (quarter name, month name, etc.) is returned.

```javascript
Monocal.convert(new Date(1997, 03, 17))
```

You can also use the following to calculate a Gregorian date's MONOCAL quarter, month, week number, or date. These functions expect integers (nth day of the year) as parameters. Again, if there are no parameters, today's date will be used by default.

```javascript
Monocal.getQuarter() // returns quarter (i., ii., iii., iv.)
Monocal.getAltQuarter() // returns quarter (air, water, fire, earth)
Monocal.getMonth() // returns month name i.e. Septium
Monocal.getWeek() // returns week number
Monocal.getDate() // returns MONOCAL date number
```

### License
The MONOCAL calendrical system is created by Ian Battaglia ([Twitter](https://twitter.com/IanJBattaglia) | [GitHub](https://github.com/MoreThanLuck))
