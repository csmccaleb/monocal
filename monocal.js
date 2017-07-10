/*

  MONOCAL

  JS implementation of @IanBattaglia's MONOCAL calendrical system
  https://monochromatic.co/metachromatic/hub/2017/1/16/monocal-1

  Josh Avanier

*/

"use strict";

var Monocal = {
  months: [
    "Chomsky Day", "Unumium", "Duomium", "Tresium", "Quattrium",
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
        nth = Monocal.getNthDay(n)

    return {
      year: year,
      quarter: Monocal.getQuarter(nth),
      quarterAlt: Monocal.getAltQuarter(nth),
      month: Monocal.getMonth(nth),
      week: Monocal.getWeek(nth),
      date: Monocal.getDate(nth),
      day: Monocal.getDay(nth)
    }
  },

  /**
   * Converts a date into its nth day of the year
   * @param {Date} date - the date
   * @return {number} the nth day of the year
   */

  getNthDay: function(date) {
    date = date || new Date()

    let start = new Date(date.getFullYear(), 0, 0),
        diff = date - start,
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
    return (n + 1) - (28 * Math.floor(n / 28))
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
    return Monocal.months[Math.ceil(n / 28)]
  },

  /**
   * Gets the Monocal quarter
   * @param {number} [n=today] - a Gregorian date (nth day)
   * @return {string} the Monocal quarter
   */

  getQuarter: function(n) {
    n = n || Monocal.getNthDay((new Date()))
    return Monocal.quarters[Math.ceil(Monocal.getWeek(n) / 13) - 1]
  },

  /**
   * Gets the Monocal quarter (alt)
   * @param {number} [n=today] - a Gregorian date (nth day)
   * @return {string} the Monocal quarter
   */

  getAltQuarter: function(n) {
    n = n || Monocal.getNthDay((new Date()))
    return Monocal.quartersAlt[Math.ceil(Monocal.getWeek(n) / 13) - 1]
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
