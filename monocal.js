/*

  This is a JS implementation of @IanBattaglia's
  MONOCAL calendrical system. It converts ridiculous
  Gregorian dates

  Check it out:
  monochromatic.co/metachromatic/hub/2017/1/16/monocal-1


  Josh Avanier

*/

(function(a) {

  var MON = [
    "Chomsky Day",
    "Unumium", "Duomium", "Tresium", "Quattrium",
    "Quintium", "Sexium", "Septium", "Octium",
    "Nonium", "Decium", "Undecium", "Dudecium",
    "Tredecium"
  ],
      QUR = ["i.", "ii.", "iii.", "iv."],
      DAY = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  // Get nth day of the year
  var gD = new Date(),
      gS = new Date(gD.getFullYear(), 0, 0),
      gF = gD - gS,
      gO = 1000 * 60 * 60 * 24,
      gY = Math.floor(gF / gO)

  // TODO: Manage leap years

  function convert(d) {
    var quarter = getQuarter(d),
        month = getMonth(d),
        week = getWeek(d),
        date = getDate(d),
        day = getDay(d)

    return [quarter, month, week, date, day]
  }

  // Not sure if this is even necessary
  function getDay(d) {
    var c = d / 7
    return DAY[((Math.round(c * 7)) / c) - 1]
  }

  function getDate(d) {
    var c = d / 28
    return (Math.round(c * 28)) / c
  }

  function getMonth(d) {
    return MON[Math.ceil((d - 1) / 28)]
  }

  function getWeek(d) {
    return Math.floor(d / 7)
  }

  function getQuarter(d) {
    return QUR[(getWeek(d) / 13) - 1]
  }

  function abbr(t) {
    return t.substring(0, 3).toUpperCase()
  }

  var res = convert(gY),
      mQ = res[0],
      mM = res[1],
      mW = res[2],
      mT = res[3],
      mD = res[4],

      year = gD.getFullYear().toString().substr(-2),

      shortForm = abbr(mD) + " " + mT + " " + abbr(mM) + " " + year

  a.getElementsByTagName("span")[0].innerHTML=shortForm

  a.getElementById("quarter").innerHTML=mQ
  a.getElementById("month").innerHTML=mM
  a.getElementById("week").innerHTML=mW
  a.getElementById("day").innerHTML=mD

})(this.document)
