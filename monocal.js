/*

  This is a JS implementation of @IanBattaglia's
  MONOCAL calendrical system. It converts ridiculous
  Gregorian dates

  Check it out:
  monochromatic.co/metachromatic/hub/2017/1/16/monocal-1

  https://github.com/joshavanier/monocal/

  Josh Avanier

*/

(function(a) {

  var MON = [
              "Chomsky Day", "Unumium", "Duomium", "Tresium", "Quattrium",
              "Quintium", "Sexium", "Septium", "Octium", "Nonium", "Decium",
              "Undecium", "Dudecium", "Tredecium"
            ],
      DAY = [
              "Monday", "Tuesday", "Wednesday", "Thursday",
              "Friday", "Saturday", "Sunday"
            ],
      QUR = ["i.", "ii.", "iii.", "iv."]

  // Get nth day of the year
  var gD = new Date(),
      gS = new Date(gD.getFullYear(), 0, 0),
      gF = gD - gS,
      gO = 1000 * 60 * 60 * 24,
      gY = Math.floor(gF / gO)

  // TODO: Manage leap years

  function toDay() {
    return DAY[(new Date()).getDay() - 1]
  }

  function toDate(n) {
    return (n + 1) - (28 * Math.floor(n / 28))
  }

  function toMonth(n) {
    return MON[Math.ceil(n / 28)]
  }

  function toWeek(n) {
    return Math.floor(n / 7)
  }

  function toQuarter(n) {
    return QUR[(toWeek(n) / 13) - 1]
  }

  function abbr(t) {
    return t.substring(0, 3).toUpperCase()
  }

  var mQ = toQuarter(gY),
      mM = toMonth(gY),
      mW = toWeek(gY),
      mT = toDate(gY),
      mD = toDay(gY),

      year = gD.getFullYear().toString().substr(-2),
      full = abbr(mD) + " " + mT + " " + abbr(mM) + " " + year

  a.getElementsByTagName("span")[0].innerHTML=full
  a.getElementById("quarter").innerHTML=mQ
  a.getElementById("month").innerHTML=mM
  a.getElementById("week").innerHTML=mW
  a.getElementById("day").innerHTML=mD

})(this.document)
