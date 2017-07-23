/*

  MONOCAL

  JS implementation of @IanBattaglia's MONOCAL calendar
  https://monochromatic.co/metachromatic/hub/2017/1/16/monocal-1

  Josh Avanier

  MIT

*/

"use strict";

const MONOCAL = {
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

  dis: {

    // 01 Unumium 2017
    full: function(m) {
      if (m.date === "Chomsky Day" || m.date === "Leap Day")
        return m.date + m.year
      else
        return MONOCAL.addZero(m.date) + " " + m.month + " " + m.year
    },

    // 01 UNUM 17
    short: function(m) {
      let year = m.year.toString().substr(-2)
      if (m.date === "Chomsky Day" || m.date === "Leap Day")
        return m.date + " " + year
      else
        return MONOCAL.addZero(m.date) + " " + MONOCAL.abbreviate(m.month) + " " + year
    },

    // 01UNUM17
    shorter: function(m) {
      let year = m.year.toString().substr(-2)
      if (m.date === "Chomsky Day" || m.date === "Leap Day")
        return m.date + year
      else
        return MONOCAL.addZero(m.date) + "" + MONOCAL.abbreviate(m.month) + year
    },

    // Unumium 1st, 2017
    standard: function(m) {
      if (m.date === "Chomsky Day" || m.date === "Leap Day")
        return m.date + m.year
      else
        return m.month + " " + MONOCAL.ordinalise(m.date) + ", " + m.year

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

    let yer = n.getFullYear(),
        nth = MONOCAL.nthDay(n),
        qrt = MONOCAL.quarter(nth),
        qlt = MONOCAL.altQuarter(nth),
        mon = MONOCAL.month(nth),
        wek = MONOCAL.week(nth),
        dat = MONOCAL.date(nth)

    if (nth === 0) {
      dat = "Chomsky Day"
      qrt = undefined
      qlt = undefined
      mon = undefined
      wek = 0
    } else if (nth === 365) {
      dat = "Leap Day"
      qrt = undefined
      qlt = undefined
      mon = undefined
      wek = 0
    }

    return {
      year: yer,
      quarter: qrt,
      quarterAlt: qlt,
      month: mon,
      week: wek,
      date: dat,
      day: MONOCAL.day(nth)
    }
  },

  /**
   * Converts a date into its nth day of the year
   * @param {Date} date - the date
   * @return {number} the nth day of the year
   */

  nthDay: function(d) {
    d = d || new Date()
    return Math.floor((d - new Date(d.getFullYear(), 0, 1)) / 86400000)
  },

  /**
   * Gets the day of the week
   * @return {string} the day of the week
   */

  day: function() {
    return MONOCAL.days[(new Date()).getDay()]
  },

  /**
   * Gets the MONOCAL date
   * @param {number} [n=today] - a Gregorian date (nth day)
   * @return {number} the MONOCAL date
   */

  date: function(n) {
    n = n || MONOCAL.nthDay((new Date()))
    let d = (n - (28 * Math.floor(n / 28)))
    if (d === 0) d = 28
    return d
  },

  /**
   * Gets the week number
   * @param {number} [n=today] - a Gregorian date (nth day)
   * @return {number} the week number
   */

  week: function(n) {
    n = n || MONOCAL.nthDay((new Date()))
    return Math.floor(n / 7)
  },

  /**
   * Gets the MONOCAL month
   * @param {number} [n=today] - a Gregorian date (nth day)
   * @return {string} the MONOCAL month
   */

  month: function(n) {
    n = n || MONOCAL.nthDay((new Date()))
    return MONOCAL.months[Math.ceil(n / 28) - 1]
  },

  /**
   * Gets the MONOCAL quarter
   * @param {number} [n=today] - a Gregorian date (nth day)
   * @return {string} the MONOCAL quarter
   */

  quarter: function(n) {
    n = n || MONOCAL.nthDay((new Date()))
    return MONOCAL.quarters[Math.floor(MONOCAL.week(n) / 13)]
  },

  /**
   * Gets the MONOCAL quarter (alt)
   * @param {number} [n=today] - a Gregorian date (nth day)
   * @return {string} the MONOCAL quarter
   */

  altQuarter: function(n) {
    n = n || MONOCAL.nthDay((new Date()))
    return MONOCAL.quartersAlt[Math.floor(MONOCAL.week(n) / 13)]
  }
}
