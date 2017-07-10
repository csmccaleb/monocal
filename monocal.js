/*

  MONOCAL

  JS implementation of @IanBattaglia's MONOCAL calendrical system
  https://monochromatic.co/metachromatic/hub/2017/1/16/monocal-1

  Josh Avanier

*/

"use strict";

var Monocal = {
  months: [
    "Unumium", "Duomium", "Tresium", "Quattrium",
    "Quintium", "Sexium", "Septium", "Octium", "Nonium", "Decium",
    "Undecium", "Dudecium", "Tredecium"
  ],

  days: [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday"
  ],

  quarters: ["i.", "ii.", "iii.", "iv."],
  quartersAlt: ["air", "water", "fire", "earth"],

  /**
   * Converts a Gregorian date to MONOCAL
   * @param {number} [n=today] - a Gregorian date
   * @return {object} MONOCAL date properties
   */

  convert: function(n) {
    n = n || new Date()

    let year = n.getFullYear(),
        nth = Monocal.getNthDay(n),
        date = Monocal.getDate(nth),
        month = Monocal.getMonth(nth)

    if (nth === 0) {
      return "Chomsky Day " + year
    } else if (date > 0) {
      return {
        year: year,
        quarter: Monocal.getQuarter(nth),
        quarterAlt: Monocal.getAltQuarter(nth),
        month: month,
        week: Monocal.getWeek(nth),
        date: Monocal.getDate(nth),
        day: Monocal.getDay(nth)
      }
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
    var month = Math.ceil(n / 28) - 1

    return Monocal.months[month]
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

function abbr(t) {
  return t.substring(0, 3).toUpperCase()
}

var cal = Monocal.convert()

document.getElementsByTagName("span")[0].innerHTML=abbr(cal.day) + " " + cal.date + " " + abbr(cal.month) + " " + cal.year.toString().substr(-2)
document.getElementById("q").innerHTML=cal.quarter + " (" + cal.quarterAlt + ")"
document.getElementById("m").innerHTML=cal.month
document.getElementById("w").innerHTML=cal.week
document.getElementById("d").innerHTML=cal.day
