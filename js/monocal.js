/**
 * MONOCAL
 * JS implementation of Ian Battaglia's MONOCAL system
 *
 * @author Josh Avanier
 * @license MIT
 */

"use strict";

const MONOCAL = {

  months: ["Unumium", "Duomium", "Tresium", "Quattrium", "Quintium", "Sexium", "Septium", "Octium", "Nonium", "Decium", "Undecium", "Dudecium", "Tredecium"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  quarters: ["i.", "ii.", "iii.", "iv."],
  quartersAlt: ["air", "water", "fire", "earth"],

  /**
   * Display a MONOCAL date
   * @param {Object} m - A MONOCAL date (converted)
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
        return m.month + " " + ordinalise(m.date) + ", " + m.year

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

  /**
   * Add a leading zero to a number less than 10
   * @param {number} n - The number
   */

  addZero: function(n) {
    return 10 > n ? "0" + n : n
  },

  /**
   * Abbreviate a MONOCAL month
   * @param {string} m - The month
   */

  abbreviate: function(m) {
    return m.substring(0, m.length - 3).toUpperCase()
  },

  /**
   * Convert a Gregorian date to MONOCAL
   * @param {number=} [n=today] - A Gregorian date
   * @return {Object} MONOCAL date properties
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
   * Convert a date into its nth day of the year
   * @param {Object} d - The date
   * @return {number} The nth day of the year
   */

  nthDay: function(d) {
    d = d || new Date()
    return Math.floor((d - new Date(d.getFullYear(), 0, 1)) / 86400000)
  },

  /**
   * Get the day of the week
   * @return {string} The day of the week
   */

  day: function() {
    return MONOCAL.days[(new Date()).getDay()]
  },

  /**
   * Get the MONOCAL date
   * @param {number=} [n=today] - A Gregorian date (nth day)
   * @return {number} The MONOCAL date
   */

  date: function(n) {
    n = n || MONOCAL.nthDay((new Date()))
    let d = (n - (28 * Math.floor(n / 28)))
    if (d === 0) d = 28
    return d
  },

  /**
   * Get the week number
   * @param {number=} [n=today] - A Gregorian date (nth day)
   * @return {number} The week number
   */

  week: function(n) {
    n = n || MONOCAL.nthDay((new Date()))
    return Math.floor(n / 7)
  },

  /**
   * Get the MONOCAL month
   * @param {number=} [n=today] - A Gregorian date (nth day)
   * @return {string} The MONOCAL month
   */

  month: function(n) {
    n = n || MONOCAL.nthDay((new Date()))
    return MONOCAL.months[Math.ceil(n / 28) - 1]
  },

  /**
   * Get the MONOCAL quarter
   * @param {number=} [n=today] - A Gregorian date (nth day)
   * @return {string} The MONOCAL quarter
   */

  quarter: function(n) {
    n = n || MONOCAL.nthDay((new Date()))
    return MONOCAL.quarters[Math.floor(MONOCAL.week(n) / 13)]
  },

  /**
   * Get the MONOCAL quarter (alt)
   * @param {number=} [n=today] - A Gregorian date (nth day)
   * @return {string} The MONOCAL quarter
   */

  altQuarter: function(n) {
    n = n || MONOCAL.nthDay((new Date()))
    return MONOCAL.quartersAlt[Math.floor(MONOCAL.week(n) / 13)]
  }
}
