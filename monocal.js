/*

  JS implementation of @IanBattaglia's MONOCAL calendrical system
  https://monochromatic.co/metachromatic/hub/2017/1/16/monocal-1

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

  function toDY()  { return DAY[(new Date()).getDay() - 1] }
  function toDT(n) { return (n + 1) - (28 * Math.floor(n / 28)) }
  function toMN(n) { return MON[Math.ceil(n / 28)] }
  function toWK(n) { return Math.floor(n / 7) }
  function toQR(n) { return QUR[(toWK(n) / 13) - 1] }
  function abbr(t) { return t.substring(0, 3).toUpperCase() }

  var mM = abbr(toMN(gY)),
      mT = toDT(gY),
      mD = abbr(toDY(gY))

  a.getElementsByTagName("span")[0].innerHTML=mD + " " + mT + " " + mM + " " + gD.getFullYear().toString().substr(-2)
  a.getElementById("q").innerHTML=toQR(gY)
  a.getElementById("m").innerHTML=mM
  a.getElementById("w").innerHTML=toWK(gY)
  a.getElementById("d").innerHTML=mD

})(this.document)
