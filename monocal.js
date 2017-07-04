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
      gY = Math.floor((gD - gS) / (1000 * 60 * 60 * 24))

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

  var mM = toMonth(gY),
      mT = toDate(gY),
      mD = toDay(gY)

  a.getElementsByTagName("span")[0].innerHTML=abbr(mD) + " " + mT + " " + abbr(mM) + " " + gD.getFullYear().toString().substr(-2)
  a.getElementById("q").innerHTML=toQuarter(gY)
  a.getElementById("m").innerHTML=mM
  a.getElementById("w").innerHTML=toWeek(gY)
  a.getElementById("d").innerHTML=mD

})(this.document)
