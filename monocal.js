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
   * @param {number} n - the Gregorian date
   * @return {object} MONOCAL date properties
   */

  convert: function(n) {
    let year = n.getFullYear(),
        nth = Monocal.getNthDay(n),
        quarter = Monocal.getQuarter(nth),
        month = Monocal.getMonth(nth),
        week = Monocal.getWeek(nth),
        date = Monocal.getDate(nth),
        day = Monocal.getDay(nth)

    return {
      year: year,
      quarter: Monocal.quarters[quarter],
      quarterAlt: Monocal.quartersAlt[quarter],
      month: Monocal.months[month],
      week: week,
      date: date,
      day: Monocal.days[day]
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
   * @return {number} the day of the week (0 - 6)
   */

  getDay: function() {
    return (new Date()).getDay()
  },

  /**
   * Gets the Monocal date
   * @param {number} n - the Gregorian date (nth day)
   * @return {number} the Monocal date
   */

  getDate: function(n) {
    return (n + 1) - (28 * Math.floor(n / 28))
  },

  /**
   * Gets the week number
   * @param {number} n - the Gregorian date (nth day)
   * @return {number} the week number
   */

  getWeek: function(n) {
    return Math.floor(n / 7)
  },

  /**
   * Gets the Monocal month number
   * @param {number} n - the Gregorian date (nth day)
   * @return {number} the Monocal month (0 - 12)
   */

  getMonth: function(n) {
    return Math.ceil(n / 28)
  },

  /**
   * Gets the Monocal quarter number
   * @param {number} n - the Gregorian date (nth day)
   * @return {number} the Monocal quarter (0 - 3)
   */

  getQuarter: function(n) {
    return Math.ceil(Monocal.getWeek(n) / 13) - 1
  }
}

function abbr(t) {
  return t.substring(0, 3).toUpperCase()
}

var cal = Monocal.convert((new Date()))

document.getElementsByTagName("span")[0].innerHTML=abbr(cal.day) + " " + cal.date + " " + abbr(cal.month) + " " + cal.year.toString().substr(-2)
document.getElementById("q").innerHTML=cal.quarter + " (" + cal.quarterAlt + ")"
document.getElementById("m").innerHTML=cal.month
document.getElementById("w").innerHTML=cal.week
document.getElementById("d").innerHTML=cal.day
