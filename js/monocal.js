/*

  MONOCAL
  Ian Battaglia's calendar

  Josh Avanier
  MIT

*/

"use strict";

const MONO = {

  miy: 13, // months in year
  dim: 28, // days in month

  ydy: "Chomsky Day",
  ldy: "Leap Day",

  /**
   * Display a full-form date (01 Nonium 2017)
   * @param {Object} m - a MONOCAL object
   * @return {string} a full-form date
   */

  full: function(m) {
    return m.dt == this.ydy || m.dt == this.ldy ? this.space([m.dt, m.yr]) : this.space([this.pad(m.dt), m.mn, m.yr])
  },

  /**
   * Display a short-form date (01 NON 17)
   * @param {Object} m - a MONOCAL object
   * @return {string} a short-form date
   */

  short: function(m) {
    let y = m.yr.toString().substr(-2)

    return m.dt == this.ydy || m.dt == this.ldy ? this.space([m.dt, y]) : this.space([this.pad(m.dt), this.abbr(m.mn), y])
  },

  /**
   * Display a shorter-form date (01NON17)
   * @param {Object} m - a MONOCAL object
   * @return {string} a shorter-form date
   */

  shorter: function(m) {
    let y = m.yr.toString().substr(-2)

    return m.dt == this.ydy || m.dt == this.ldy ? m.dt + y : this.pad(m.dt) + this.abbr(m.mn) + y
  },

  /**
   * Display a standard-form date (Nonium 1st 2017)
   * @param {Object} m - a MONOCAL object
   * @return {string} a standard-form date
   */

  standard: function(m) {
    return m.dt == this.ydy || m.dt == this.ldy ? this.space([m.dt, m.yr]) : this.space([m.mn, (m.dt + (['st', 'nd', 'rd'][(m.dt + '').match(/1?\d\b/) - 1] || 'th')), m.yr])
  },

  /**
   * Convert a Gregorian date to MONOCAL
   * @param {Date} n - the date
   * @return {object} a MONOCAL object
   */

  convert: function(n) {
    n = n || new Date()

    let yer = n.getFullYear(),
        nth = this.nth(n),
        dat = 0,
        wek = 0,
        mon = "",
        qrt = "",
        qlt = ""

    switch (nth) {
      case 0:
        dat = this.ydy
        wek = 0
        mon = undefined
        qrt = undefined
        qlt = undefined
        break;

      case 365:
        dat = this.ldy
        wek = 0
        mon = undefined
        qrt = undefined
        qlt = undefined
        break;

      default:
        dat = this.dat(nth)
        wek = this.wek(nth)
        mon = this.mon(nth)
        qrt = this.qua(nth)
        qlt = this.aqu(nth)
        break;
    }

    return {
      yr: yer, q1: qrt,
      q2: qlt, mn: mon,
      wk: wek, dt: dat,
      dy: this.day(nth)
    }
  },

  /**
   * Get nth day of the year
   * @param {Date} d - the date
   * @return {number} nth day of the year
   */

  nth: function(d) {
    d = d || new Date()
    return Math.floor((d - new Date(d.getFullYear(), 0, 1)) / 86400000)
  },

  /**
   * Get day of the week
   * @return {string} day of the week
   */

  day: function() {
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][(new Date()).getDay()]
  },

  /**
   * Get the MONOCAL date
   * @param {Date} n - nth day of the year
   * @return {number} MONOCAL date
   */

  dat: function(n) {
    n = n || this.nth((new Date()))
    let d = n - (this.dim * Math.floor(n / this.dim))
    return d == 0 ? 28 : d
  },

  /**
   * Get the week number
   * @param {Date} n - nth day of the year
   * @return {number} week number
   */

  wek: function(n) {
    n = n || this.nth((new Date()))
    return Math.floor(n / 7)
  },

  /**
   * Get the MONOCAL month
   * @param {Date} n - nth day of the year
   * @return {string} MONOCAL month
   */

  mon: function(n) {
    n = n || this.nth((new Date()))
    return ["Unumium", "Duomium", "Tresium", "Quattrium", "Quintium", "Sexium", "Septium", "Octium", "Nonium", "Decium", "Undecium", "Dudecium", "Tredecium"][Math.ceil(n / this.dim) - 1]
  },

  /**
   * Get the MONOCAL quarter
   * @param {Date} n - nth day of the year
   * @return {string} MONOCAL quarter
   */

  qua: function(n) {
    n = n || this.nth((new Date()))
    return ["i.", "ii.", "iii.", "iv."][Math.floor(this.wek(n) / this.miy)]
  },

  /**
   * Get the MONOCAL quarter (alt)
   * @param {Date} n - nth day of the year
   * @return {string} MONOCAL quarter
   */

  aqu: function(n) {
    n = n || this.nth((new Date()))
    return ["air", "water", "fire", "earth"][Math.floor(this.wek(n) / this.miy)]
  },

  // TODO: Make space(), pad(), & abbr() private

  /**
   * Display an array of items with spaces in between
   * @param {array} a - an array
   * @return {string} array items spaced out
   */

  space: function(a) {
    let s = ""

    for (let i = 0, l = a.length; i < l; i++)
      s += a[i] + " "

    return s.substring(0, s.length - 1)
  },

  /**
   * Add padding zeroes for numbers less than 10
   * @return {string} padded number
   */

  pad: function(n) {
    return ('0' + n).substr(-2)
  },

  /**
   * Abbreviate MONOCAL months
   * @return {string} MONOCAL month name sans "-ium"
   */

  abbr: function(m) {
    return m.substring(0, m.length - 3).toUpperCase()
  }
}
