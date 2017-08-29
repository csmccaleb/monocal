/*

  MONOCAL
  Ian Battaglia's calendar

  Josh Avanier
  MIT

*/

"use strict";

const MONO = {

  miy: 13,
  dim: 28,

  ydy: "Chomsky Day",
  ldy: "Leap Day",

  full: function(m) {
    if (m.dt == this.ydy || m.dt == this.ldy)
      return this.space([m.dt, m.yr])
    else
      return this.space([this.pad(m.dt), m.mn, m.yr])
  },

  short: function(m) {
    let y = m.yr.toString().substr(-2)
    if (m.dt == this.ydy || m.dt == this.ldy)
      return this.space([m.dt, y])
    else
      return this.space([this.pad(m.dt), this.abbr(m.mn), y])
  },

  shorter: function(m) {
    let y = m.yr.toString().substr(-2)
    if (m.dt == this.ydy || m.dt == this.ldy)
      return m.dt + y
    else
      return this.pad(m.dt) + this.abbr(m.mn) + y
  },

  standard: function(m) {
    if (m.dt == this.ydy || m.dt == this.ldy)
      return this.space([m.dt, m.yr])
    else
      return this.space([m.mn, o(m.dt), m.yr])

    function o(n) {
      return n + (['st', 'nd', 'rd'][(n + '').match(/1?\d\b/) - 1] || 'th')
    }
  },

  convert: function(n) {
    n = n || new Date()

    let yer = n.getFullYear(),
        nth = this.nth(n),
        dat = 0,
        wek = 0,
        mon = "",
        qrt = "",
        qlt = ""

    switch(nth) {
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
      yr: yer,
      q1: qrt,
      q2: qlt,
      mn: mon,
      wk: wek,
      dt: dat,
      dy: this.day(nth)
    }
  },

  nth: function(d) {
    d = d || new Date()
    return Math.floor((d - new Date(d.getFullYear(), 0, 1)) / 86400000)
  },

  day: function() {
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][(new Date()).getDay()]
  },

  dat: function(n) {
    n = n || this.nth((new Date()))
    let d = (n - (this.dim * Math.floor(n / this.dim)))
    if (d == 0) d = this.dim
    return d
  },

  wek: function(n) {
    n = n || this.nth((new Date()))
    return Math.floor(n / 7)
  },

  mon: function(n) {
    n = n || this.nth((new Date()))
    return ["Unumium", "Duomium", "Tresium", "Quattrium", "Quintium", "Sexium", "Septium", "Octium", "Nonium", "Decium", "Undecium", "Dudecium", "Tredecium"][Math.ceil(n / this.dim) - 1]
  },

  qua: function(n) {
    n = n || this.nth((new Date()))
    return ["i.", "ii.", "iii.", "iv."][Math.floor(this.wek(n) / this.miy)]
  },

  aqu: function(n) {
    n = n || this.nth((new Date()))
    return ["air", "water", "fire", "earth"][Math.floor(this.wek(n) / this.miy)]
  },

  // TODO: Make space(), pad(), & abbr() private

  space: function(a) {
    let s = ""
    for (let i = 0, l = a.length; i < l; i++) s += a[i] + " "
    return s.substring(0, s.length - 1)
  },

  pad: function(n) {
    return ('0' + n).substr(-2)
  },

  abbr: function(m) {
    return m.substring(0, m.length - 3).toUpperCase()
  }
}
