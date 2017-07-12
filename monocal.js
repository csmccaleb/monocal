/*

  MONOCAL

  JS implementation of @IanBattaglia's MONOCAL calendrical system
  https://monochromatic.co/metachromatic/hub/2017/1/16/monocal-1

  Josh Avanier

*/

"use strict";

var Monocal = {
  months: [
    "Unumium", "Duomium", "Tresium", "Quattrium", "Quintium", "Sexium", "Septium", "Octium", "Nonium", "Decium", "Undecium", "Dudecium", "Tredecium"
  ],
  days: [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ],
  quarters: ["i.", "ii.", "iii.", "iv."],
  quartersAlt: ["air", "water", "fire", "earth"],

  /**
   * Displays a MONOCAL date
   * @param {object} m - a MONOCAL date (converted)
   */

  display: {

    // 01 Unumium 2017
    full: function(m) {
      if (m.date === "Chomsky Day" || m.date === "Leap Day")
        return m.date + m.year
      else {
        return Monocal.addZero(m.date) + " " + m.month + " " + m.year
      }
    },

    // 01 UNUM 17
    short: function(m) {
      let year = m.year.toString().substr(-2)
      if (m.date === "Chomsky Day" || m.date === "Leap Day")
        return m.date + " " + year
      else {
        return Monocal.addZero(m.date) + " " + Monocal.abbreviate(m.month) + " " + year
      }
    },

    // 01UNUM17
    shorter: function(m) {
      let year = m.year.toString().substr(-2)
      if (m.date === "Chomsky Day" || m.date === "Leap Day")
        return m.date + year
      else {
        return Monocal.addZero(m.date) + "" + Monocal.abbreviate(m.month) + year
      }
    },

    // Unumium 1st, 2017
    standard: function(m) {
      if (m.date === "Chomsky Day" || m.date === "Leap Day")
        return m.date + m.year
      else {
        return m.month + " " + Monocal.ordinalise(m.date) + ", " + m.year
      }
    }
  },

  /* TODO Make these functions private */

  ordinalise: function(n) {
    let m = n % 10,
        o = n % 100

    if (m === 1 && o !== 11) return n + "st"
    if (m === 2 && o !== 12) return n + "nd"
    if (m === 3 && o !== 13) return n + "rd"
    else return n + "th"
  },

  addZero: function(n) {
    if (n < 10) return "0" + n
    else return n
  },

  abbreviate: function(m) {
    return m.substring(0, m.length - 3).toUpperCase()
  },

  /**
   * Converts a Gregorian date to MONOCAL
   * @param {number} [n=today] - a Gregorian date
   * @return {object} MONOCAL date properties
   */

  convert: function(n) {
    n = n || new Date()

    let year = n.getFullYear(),
        nth = Monocal.getNthDay(n),
        quarter = Monocal.getQuarter(nth),
        quarterAlt = Monocal.getAltQuarter(nth),
        month = Monocal.getMonth(nth),
        week = Monocal.getWeek(nth),
        date = Monocal.getDate(nth)

    if (nth === 0) {
      date = "Chomsky Day"
      quarter = undefined
      quarterAlt = undefined
      month = undefined
      week = 0
    } else if (nth === 365) {
      date = "Leap Day"
      quarter = undefined
      quarterAlt = undefined
      month = undefined
      week = 0
    }

    return {
      year: year,
      quarter: quarter,
      quarterAlt: quarterAlt,
      month: month,
      week: week,
      date: date,
      day: Monocal.getDay(nth)
    }
  },

  /**
   * Converts a date into its nth day of the year
   * @param {Date} date - the date
   * @return {number} the nth day of the year
   */

  getNthDay: function(d) {
    d = d || new Date()

    let start = new Date(d.getFullYear(), 0, 1),
        diff = d - start,
        nth = Math.floor(diff / (1000 * 60 * 60 * 24))

    return nth
  },

  /**
   * Gets the day of the week
   * @return {string} the day of the week
   */

  getDay: function() {
    return Monocal.days[(new Date()).getDay()]
  },

  /**
   * Gets the Monocal date
   * @param {number} [n=today] - a Gregorian date (nth day)
   * @return {number} the Monocal date
   */

  getDate: function(n) {
    n = n || Monocal.getNthDay((new Date()))
    var date = (n - (28 * Math.floor(n / 28)))
    if (date === 0) date = 28
    return date
  },

  /**
   * Gets the week number
   * @param {number} [n=today] - a Gregorian date (nth day)
   * @return {number} the week number
   */

  getWeek: function(n) {
    n = n || Monocal.getNthDay((new Date()))
    return Math.floor(n / 7)
  },

  /**
   * Gets the Monocal month
   * @param {number} [n=today] - a Gregorian date (nth day)
   * @return {string} the Monocal month
   */

  getMonth: function(n) {
    n = n || Monocal.getNthDay((new Date()))
    return Monocal.months[Math.ceil(n / 28) - 1]
  },

  /**
   * Gets the Monocal quarter
   * @param {number} [n=today] - a Gregorian date (nth day)
   * @return {string} the Monocal quarter
   */

  getQuarter: function(n) {
    n = n || Monocal.getNthDay((new Date()))
    return Monocal.quarters[Math.floor(Monocal.getWeek(n) / 13)]
  },

  /**
   * Gets the Monocal quarter (alt)
   * @param {number} [n=today] - a Gregorian date (nth day)
   * @return {string} the Monocal quarter
   */

  getAltQuarter: function(n) {
    n = n || Monocal.getNthDay((new Date()))
    return Monocal.quartersAlt[Math.floor(Monocal.getWeek(n) / 13)]
  }
}
