/*

  MONOCAL
  JS implementation of Ian Battaglia's MONOCAL system

  Josh Avanier

  MIT

*/

"use strict";

const MONO = {

  monthsInYear: 13,
  daysInMonth: 28,
  yearDay: "Chomsky Day",
  leapDay: "Leap Day",

  // Display options

  dis: {

    // 01 Unumium 2017

    full: function(m) {
      if (m.date === MONO.yearDay || m.date === MONO.leapDay)
        return MONO.space([m.date, m.year])
      else
        return MONO.space([MONO.add0(m.date), m.month, m.year])
    },

    // 01 UNUM 17

    short: function(m) {
      let y = m.year.toString().substr(-2)
      if (m.date === MONO.yearDay || m.date === MONO.leapDay)
        return MONO.space([m.date, y])
      else
        return MONO.space([MONO.add0(m.date), MONO.abbr(m.month), y])
    },

    // 01UNUM17

    shorter: function(m) {
      let y = m.year.toString().substr(-2)
      if (m.date === MONO.yearDay || m.date === MONO.leapDay)
        return m.date + y
      else
        return MONO.add0(m.date) + MONO.abbr(m.month) + y
    },

    // Unumium 1st 2017

    standard: function(m) {
      if (m.date === MONO.yearDay || m.date === MONO.leapDay)
        return MONO.space([m.date, m.year])
      else
        return MONO.space([m.month, ordinalise(m.date), m.year])

      function ordinalise(n) {
        let m = n % 10,
            o = n % 100
        if (m === 1 && o !== 11) return n + "st"
        if (m === 2 && o !== 12) return n + "nd"
        if (m === 3 && o !== 13) return n + "rd"
        else return n + "th"
      }
    }
  },

  // Add space between an array of items

  space: function(a) {
    let s = ""
    for (let i = 0, l = a.length; i < l; i++) s += (a[i] + " ")
    return s.substring(0, s.length - 1)
  },

  add0: function(n) {
    return ('0' + n).substr(-2)
  },

  abbr: function(m) {
    // Octium becomes OCT
    return m.substring(0, m.length - 3).toUpperCase()
  },

  // Converts a Gregorian date to MONO

  convert: function(n) {
    n = n || new Date()

    let yer = n.getFullYear(),
        nth = MONO.nthDay(n),
        dat = 0,
        wek = 0,
        mon = "",
        qrt = "",
        qlt = ""

    switch(nth) {

      case 0:
        dat = MONO.yearDay
        wek = 0
        mon = undefined
        qrt = undefined
        qlt = undefined
        break;

      case 365:
        dat = MONO.leapDay
        wek = 0
        mon = undefined
        qrt = undefined
        qlt = undefined
        break;

      default:
        dat = MONO.date(nth)
        wek = MONO.week(nth)
        mon = MONO.month(nth)
        qrt = MONO.quarter(nth)
        qlt = MONO.altQuarter(nth)
        break;
    }

    return {
      year: yer,
      quarter: qrt,
      quarterAlt: qlt,
      month: mon,
      week: wek,
      date: dat,
      day: MONO.day(nth)
    }
  },

  // Get nth day of the year

  nthDay: function(d) {
    d = d || new Date()
    return Math.floor((d - new Date(d.getFullYear(), 0, 1)) / 86400000)
  },

  day: function() {
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][(new Date()).getDay()]
  },

  date: function(n) {
    n = n || MONO.nthDay((new Date()))
    let d = (n - (MONO.daysInMonth * Math.floor(n / MONO.daysInMonth)))
    if (d === 0) d = MONO.daysInMonth
    return d
  },

  week: function(n) {
    n = n || MONO.nthDay((new Date()))
    return Math.floor(n / 7)
  },

  month: function(n) {
    n = n || MONO.nthDay((new Date()))
    return ["Unumium", "Duomium", "Tresium", "Quattrium", "Quintium", "Sexium", "Septium", "Octium", "Nonium", "Decium", "Undecium", "Dudecium", "Tredecium"][Math.ceil(n / MONO.daysInMonth) - 1]
  },

  quarter: function(n) {
    n = n || MONO.nthDay((new Date()))
    return ["i.", "ii.", "iii.", "iv."][Math.floor(MONO.week(n) / MONO.monthsInYear)]
  },

  altQuarter: function(n) {
    n = n || MONO.nthDay((new Date()))
    return ["air", "water", "fire", "earth"][Math.floor(MONO.week(n) / MONO.monthsInYear)]
  }
}
