/*

  MONOCAL
  Ian Battaglia's calendar

  Josh Avanier

  MIT

*/

"use strict";

const MONO = {

  monthsInYear: 13,
  daysInMonth: 28,
  yearDay: "Chomsky Day",
  leapDay: "Leap Day",

  // 01 Unumium 2017

  full: function(m) {
    if (m.date == this.yearDay || m.date == this.leapDay)
      return this.space([m.date, m.year])
    else
      return this.space([this.add0(m.date), m.month, m.year])
  },

  // 01 UNUM 17

  short: function(m) {
    let y = m.year.toString().substr(-2)
    if (m.date == this.yearDay || m.date == this.leapDay)
      return this.space([m.date, y])
    else
      return this.space([this.add0(m.date), this.abbr(m.month), y])
  },

  // 01UNUM17

  shorter: function(m) {
    let y = m.year.toString().substr(-2)
    if (m.date == this.yearDay || m.date == this.leapDay)
      return m.date + y
    else
      return this.add0(m.date) + this.abbr(m.month) + y
  },

  // Unumium 1st 2017

  standard: function(m) {
    if (m.date == this.yearDay || m.date == this.leapDay)
      return this.space([m.date, m.year])
    else
      return this.space([m.month, ordinalise(m.date), m.year])

    function ordinalise(n) {
      return n + (['st', 'nd', 'rd'][(n + '').match(/1?\d\b/) - 1] || 'th')
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
        nth = this.nthDay(n),
        dat = 0,
        wek = 0,
        mon = "",
        qrt = "",
        qlt = ""

    switch(nth) {

      case 0:
        dat = this.yearDay
        wek = 0
        mon = undefined
        qrt = undefined
        qlt = undefined
        break;

      case 365:
        dat = this.leapDay
        wek = 0
        mon = undefined
        qrt = undefined
        qlt = undefined
        break;

      default:
        dat = this.date(nth)
        wek = this.week(nth)
        mon = this.month(nth)
        qrt = this.quarter(nth)
        qlt = this.altQuarter(nth)
        break;
    }

    return {
      year: yer,
      quarter: qrt,
      quarterAlt: qlt,
      month: mon,
      week: wek,
      date: dat,
      day: this.day(nth)
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
    n = n || this.nthDay((new Date()))
    let d = (n - (this.daysInMonth * Math.floor(n / this.daysInMonth)))
    if (d == 0) d = this.daysInMonth
    return d
  },

  week: function(n) {
    n = n || this.nthDay((new Date()))
    return Math.floor(n / 7)
  },

  month: function(n) {
    n = n || this.nthDay((new Date()))
    return ["Unumium", "Duomium", "Tresium", "Quattrium", "Quintium", "Sexium", "Septium", "Octium", "Nonium", "Decium", "Undecium", "Dudecium", "Tredecium"][Math.ceil(n / this.daysInMonth) - 1]
  },

  quarter: function(n) {
    n = n || this.nthDay((new Date()))
    return ["i.", "ii.", "iii.", "iv."][Math.floor(this.week(n) / this.monthsInYear)]
  },

  altQuarter: function(n) {
    n = n || this.nthDay((new Date()))
    return ["air", "water", "fire", "earth"][Math.floor(this.week(n) / this.monthsInYear)]
  }
}
