/*!
 * es6-events v0.0.2
 * (c) 2016 lzhengms
 * Released under the MIT License.
 */
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

var CloudAtlas = function () {
  function e() {
    this.sessionList = [];this.eventList = [];this.errorList = [];this.merge = function (t) {
      if (t) {
        if (t.sessionList.length > 0) {
          var n = t.sessionList.length;for (var r = 0; r < n; r++) {
            var i = t.sessionList[r];if (i && i.id) {
              var s = e.apply(this, [i]);if (s === null) {
                this.sessionList.push(i);
              } else {
                if (i.end > s.end) {
                  s.end = i.end;
                }
              }
            }
          }
        }if (t.eventList && t.eventList.length > 0) {
          this.eventList = this.eventList.concat(t.eventList);
        }if (t.errorList && t.errorList.length > 0) {
          this.errorList = this.errorList.concat(t.errorList);
        }
      }
    };function e(e) {
      var t = this.sessionList.length;for (var n = 0; n < t; n++) {
        var r = this.sessionList[n];if (e.id === r.id) {
          return r;
        }
      }return null;
    }this.hasValidData = function () {
      return this.sessionList.length > 0 || this.eventList.length > 0 || this.errorList.length > 0;
    };
  }function t(e, t, n, r, i, s) {
    this.id = e;this.start = t;this.end = n;this.userId = r;this.appVer = i;this.ip = s;this.equals = function (e) {
      if (this === e) return true;if (e === null || this.constructor !== e.constructor) return false;if (this.id !== e.id) return false;if (this.start !== e.start) return false;if (this.end !== e.end) return false;if (this.userId !== e.userId) return false;if (this.appVer !== e.appVer) return false;return this.ip === e.ip;
    };
  }function n(e, t, n, r) {
    this.appVer = e;this.userId = t;this.sessionId = n;this.ip = r;
  }var r = "ca_label";var i = "ca_int_value";function s(e, t, n, r, i) {
    this.id = e;this.value = t;this.time = n;this.userId = r;this.appVer = i;this.equals = function (e) {
      if (this === e) return true;if (e === null || this.constructor !== e.constructor) return false;if (this.id !== e.id) return false;if (this.value !== e.value) return false;if (this.time !== e.time) return false;if (this.userId !== e.userId) return false;return this.appVer !== e.appVer;
    };
  }var o = 0;function a(e, t, n, r) {
    this.type = e;this.msg = t;this.time = n;this.appVer = r;this.equals = function (e) {
      if (this === e) return true;if (e === null || this.constructor !== e.constructor) return false;if (this.type !== e.type) return false;if (this.msg !== e.msg) return false;if (this.time !== e.time) return false;return this.appVer !== event.appVer;
    };
  }var u = false;function f(e) {
    u = e;
  }var l = false;var v = "[CloudAtlas] ";var c = console;function p(e) {
    l = e;
  }function d(e) {
    if (l) {
      c.log(v + e);
    }
  }function h(e) {
    if (l) {
      c.warn(v + e);
    }
  }function g(e, t) {
    c.error(v + e + (t ? "\nerror = " + t : ""));
  }var y = "sdk_ver";var I = "current";var w = "pending";var m = "sending";var L = "current_env";var x = "device_id";var b = localStorage;function S(e) {
    if (b) {
      b.setItem(y, e);
    }
  }function _() {
    if (b) {
      return b.getItem(y);
    } else {
      return null;
    }
  }function V(e) {
    if (b) {
      b.setItem(x, e);
    }
  }function F() {
    if (b) {
      return b.getItem(x);
    } else {
      return null;
    }
  }var T, M;function N(e, t) {
    T = e;M = t;
  }function O() {
    return M;
  }function D() {
    return T;
  }function q() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
      var t = Math.random() * 16 | 0,
          n = e == "x" ? t : t & 3 | 8;return n.toString(16);
    });
  }function A(e) {
    var t,
        n,
        r,
        i,
        s,
        o = e.length,
        a = 0;for (i = 0; i < o; i++) {
      n = e.charCodeAt(i);if ((n & 64512) === 55296 && i + 1 < o) {
        r = e.charCodeAt(i + 1);if ((r & 64512) === 56320) {
          n = 65536 + (n - 55296 << 10) + (r - 56320);i++;
        }
      }a += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
    }t = new Uint8Array(a);for (s = 0, i = 0; s < a; i++) {
      n = e.charCodeAt(i);if ((n & 64512) === 55296 && i + 1 < o) {
        r = e.charCodeAt(i + 1);if ((r & 64512) === 56320) {
          n = 65536 + (n - 55296 << 10) + (r - 56320);i++;
        }
      }if (n < 128) {
        t[s++] = n;
      } else if (n < 2048) {
        t[s++] = 192 | n >>> 6;t[s++] = 128 | n & 63;
      } else if (n < 65536) {
        t[s++] = 224 | n >>> 12;t[s++] = 128 | n >>> 6 & 63;t[s++] = 128 | n & 63;
      } else {
        t[s++] = 240 | n >>> 18;t[s++] = 128 | n >>> 12 & 63;t[s++] = 128 | n >>> 6 & 63;t[s++] = 128 | n & 63;
      }
    }return t;
  }var C;function E() {
    return C;
  }function j() {
    var e = F() || "{}";var t;try {
      t = JSON.parse(e);
    } catch (e) {
      g("Resolve deviceInfo failed", e);
    }if (t && t.deviceId) {
      C = t.deviceId;d("Resolve exist deviceId : " + C);
    } else {
      C = q();V(JSON.stringify({ deviceId: C }));d("No exist deviceId, generate one : " + C);
    }
  }function X() {
    var e = new Date();return e.getTime();
  }function R(e) {
    function t(e) {
      var t = Math.abs(Math.floor(e));return (t < 10 ? "0" : "") + t;
    }function n(e) {
      var n = -e;var r = n >= 0 ? "+" : "-";return r + t(e / 60) + t(e % 60);
    }return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + "T" + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds()) + "." + t(e.getMilliseconds()) + n(e.getTimezoneOffset());
  }var U = "bussiness_type";var z = "properties";var k = "user_id";var H = "device_id";var P = "create_time";var B = "session_ip";var J = "function_id";var K = "app_ver";var Y = "login";var G = "cloud-atlas-web-sdk";var Q = null;function W(e, t) {
    var n = e.length;var r = t.length;if (n !== r) {
      return false;
    }for (var i = 0; i < n; i++) {
      if (e[i] !== t[i]) {
        return false;
      }
    }return true;
  }function Z(e) {
    if (window.Uint8Array) {
      var t = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 0, 3, 75, 206, 201, 47, 77, 209, 77, 44, 201, 73, 44, 214, 45, 79, 77, 210, 45, 78, 201, 6, 0, 249, 255, 225, 61, 19, 0, 0, 0]);if (e) {
        var n = A(G);var r = e(n);if (W(t, r)) {
          Q = e;
        } else {
          throw "Invalid gzip function";
        }
      } else {
        d("Not to use gzip compress");
      }
    } else {
      d("Browser does not support the Unit8Array , will not to use gzip compress");
    }
  }function $() {
    if (Q) {
      return true;
    } else {
      return false;
    }
  }function ee(e) {
    var t = {};t["body"] = JSON.parse(e);var n = {};n["Content-type"] = "application/json";t["head"] = n;return JSON.stringify(t);
  }function te(e) {
    var t = e.length;var n = A(e);var r = Q(n);var i = r.length;d("origin: " + t + "，after compress：" + i);return r;
  }function ne(e) {
    var t = E();var n = [];var s = { data: n };var o = e.sessionList.length;for (var a = 0; a < o; a++) {
      var u = e.sessionList[a];var f = {};f[U] = Y;var l = {};l[J] = 21;l[P] = R(new Date(u.start));if (u.userId) {
        l[k] = u.userId;
      }l[K] = u.appVer;l[H] = t;l["session_id"] = u.id;if (u.ip) {
        l[B] = u.ip;
      }f[z] = l;n.push(f);if (u.end > 0) {
        var v = {};v[U] = Y;l = {};l[J] = 22;l[P] = R(new Date(u.end));if (u.userId) {
          l[k] = u.userId;
        }l[K] = u.appVer;l["session_id"] = u.id;l[H] = t;v[z] = l;n.push(v);
      }
    }o = e.eventList.length;for (var a = 0; a < o; a++) {
      var c = e.eventList[a];var p = {};p[U] = "custom_event_log";var l = {};l["event_tag"] = c.id;l["event_time"] = R(new Date(c.time));l[k] = c.userId;l[H] = t;if (c.appVer) {
        l["app_ver"] = c.appVer;
      }if (c.value) {
        if (c.value[r]) {
          l["event_label"] = c.value[r];delete c.value[r];
        }if (c.value[i]) {
          l["event_value"] = c.value[i];delete c.value[i];
        }var d = false;for (var h in c.value) {
          d = true;break;
        }if (d) {
          p["ext_properties"] = c.value;
        }
      }p[z] = l;n.push(p);
    }o = e.errorList.length;for (var a = 0; a < o; a++) {
      var g = e.errorList[a];var p = {};p[U] = "exception_log";var l = {};l["ex_type"] = g.type;l["ex_time"] = R(new Date(g.time));l["ex_msg"] = g.msg;if (g.appVer) {
        l["app_ver"] = g.appVer;
      }p[z] = l;n.push(p);
    }if (n.length === 0) {
      return null;
    } else {
      return JSON.stringify(s);
    }
  }var re = null;var ie = null;function se() {
    if (window.XMLHttpRequest) {
      re = new XMLHttpRequest();if (!("withCredentials" in re) && window.XDomainRequest) {
        if (window.location.protocol !== "http:") {
          d("sdk just support http protocol");return false;
        }re = new XDomainRequest();
      }
    } else if (window.ActiveXObject) {
      try {
        re = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        try {
          re = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
      }
    }if (re == null) {
      g("Can not create XMLHttpRequest object");return false;
    }return true;
  }function oe(e, t, n, r) {
    if (se()) {
      ie = n;if (r === undefined || r === null || r.constructor !== Boolean) {
        r = true;
      }if (window.XDomainRequest && re.constructor === XDomainRequest) {
        t = ee(t);re.onerror = ue;re.ontimeout = fe;re.onload = ae;re.open("POST", e);
      } else {
        re.onreadystatechange = le;re.open("POST", e, r);if ($()) {
          t = te(t);re.setRequestHeader("Content-Type", "application/gzip;");
        } else {
          re.setRequestHeader("Content-Type", "application/json;");
        }
      }re.send(t);
    } else {
      n.onFail("Fail to create request");
    }
  }function ae() {
    if (typeof re.responseText === "string" && re.responseText !== "") {
      d("Upload result = " + re.responseText);
    }if (ie && ie.onSuccess && typeof ie.onSuccess === "function") {
      ie.onSuccess();
    }
  }function ue() {
    if (ie && ie.onFail && typeof ie.onFail === "function") {
      ie.onFail("Unknown error");
    }
  }function fe() {
    if (ie && ie.onFail && typeof ie.onFail === "function") {
      ie.onFail("Time out");
    }
  }function le() {
    if (re.readyState == 4) {
      if (re.status == 200) {
        if (typeof re.responseText === "string" && re.responseText !== "") {
          d("Upload result = " + re.responseText);
        }if (ie && ie.onSuccess && typeof ie.onSuccess === "function") {
          ie.onSuccess();
        }
      } else {
        if (ie && ie.onFail && typeof ie.onFail === "function") {
          ie.onFail(re.responseText);
        }
      }
    } else {
      d("Upload processed, status = " + re.readyState);
    }
  }var ve = "http://cloud-atlas-collection.oth.web.sdp.101.com/";var ce = null,
      pe = null,
      de = null,
      he = null;var ge = 0;var ye = 5;function Ie() {
    ce = new n();
  }function we() {
    if (pe == null) {
      pe = new e();
    }return pe;
  }function me() {
    return ce;
  }function Le(t) {
    if (pe) {
      var n = pe;pe = null;if (t === undefined || t === null || t.constructor !== Boolean) {
        t = true;
      }if (!t) {
        var r = n.sessionList.length;if (r > 0) {
          pe = new e();pe.sessionList.push(n.sessionList.pop());
        }
      }if (de) {
        de.merge(n);
      } else {
        de = n;
      }
    }
  }function xe() {
    he = de;de = null;return he;
  }function be() {
    he = null;
  }function Se() {
    if (de !== null) {
      if (he != null) {
        de.merge(he);
      }
    } else {
      de = he;
    }he = null;
  }function _e() {
    ge++;if (ge >= ye) {
      Le(false);Oe();ge = 0;
    }
  }var Ve = 0;var Fe = false;var Te = { onSuccess: function onSuccess() {
      d("Upload success");be();Me();
    }, onFail: function onFail(e) {
      h("Upload failed, reason = " + (e ? e : "unknown reason"));Se();Me();
    } };function Me() {
    Fe = false;Ve--;if (Ve > 0) {
      Ne();
    }
  }function Ne(e) {
    var t = xe();if (t !== null && t.hasValidData()) {
      Fe = true;var n = ne(t);if (n !== null) {
        d("Upload = " + n);oe(ve + "v0.1/" + D() + "/action/collect", n, Te, e);
      } else {
        Te.onSuccess();
      }
    }
  }function Oe(e) {
    Ve++;if (!Fe) {
      Ne(e);
    }
  }var De = false;var qe = 15 * 1e3,
      Ae = 60 * 60 * 1e3;var Ce = qe;function Ee(e, t, n) {
    try {
      if (De) {
        h("Init too many times");
      } else {
        j();N(e, t);Ie();Z(n);De = true;
      }
    } catch (e) {
      g("Failed to init", e);if (u) {
        throw e;
      }
    }
  }function je() {
    try {
      if (De) {
        var e = X();Re(e);
      } else {
        g("Not allowed to open session before init");
      }
    } catch (e) {
      g("Failed to open session", e);if (u) {
        throw e;
      }
    }
  }function Xe() {
    try {
      if (De) {
        d("Close the page");var e = we();if (e.sessionList && e.sessionList.length > 0) {
          var t = X();var n = e.sessionList[e.sessionList.length - 1];n.end = t;be();Le();Oe(false);
        } else {
          g("No session when page close");
        }
      } else {
        g("Not allowed to close session before init");
      }
    } catch (e) {
      g("Failed to close session", e);if (u) {
        throw e;
      }
    }
  }function Re(e) {
    var t = we();var n = me();Ue(e, t, n, true);
  }function Ue(e, n, r, i) {
    var s = O();r.appVer = s;var o = r.userId;var a = q();var u = r.ip;if (i) {
      var f = new t(a, e, 0, o, s, u);n.sessionList.push(f);Le();Oe();
    } else {
      if (r.sessionId && n.sessionList.length > 0) {
        var l = null;var v = n.sessionList.length;for (var c = 0; c < v; c++) {
          var p = n.sessionList[c];if (p.id === r.sessionId) {
            l = p;break;
          }
        }if (l != null) {
          l.end = e;
        } else {
          g("No current session object found for sessionId " + r.sessionId);
        }
      }
    }r.sessionId = a;n = we();var d = new t(a, e, e, o, s, u);n.sessionList.push(d);
  }function ze(e) {
    try {
      if (De) {
        var t = X();var n = me();var r = n.userId;if (r === e) {
          h("Same user, no need to login again");return;
        }if (r) {
          ke();
        }n.userId = e;var i = we();Ue(t, i, n, false);_e();
      } else {
        g("Not allowed to sign in before init");
      }
    } catch (e) {
      g("Failed to sign in", e);if (u) {
        throw e;
      }
    }
  }function ke() {
    try {
      if (De) {
        var e = me();var t = e.userId;if (t) {
          e.userId = null;var n = X();var r = we();Ue(n, r, e, false);_e();
        } else {
          h("No user is login now, no need to logout, maybe something wrong with app");
        }
      } else {
        g("Not allowed to sign off before init");
      }
    } catch (e) {
      g("Failed to sign off", e);if (u) {
        throw e;
      }
    }
  }function He(e) {
    var t = e.eventId;var n = {};if (e.info) {
      for (var o in e.info) {
        n[o] = e.info[o];
      }
    }if (e.label) {
      n[r] = e.label;
    }if (e.value) {
      n[i] = e.value;
    }var a = X();var u = me();var f = u.userId;var l = u.appVer;var v = new s(t, n, a, f, l);var c = we();c.eventList.push(v);_e();
  }function Pe(e) {
    var t = X();var n = me();var r = n.appVer;var i = new a(o, e, t, r);var s = we();s.errorList.push(i);_e();
  }var Be = new Object();Be.init = function (e) {
    if (e === undefined || e === null || (typeof e === "undefined" ? "undefined" : _typeof(e)) !== "object") {
      g("Invalid params for init, type = " + (typeof e === "undefined" ? "undefined" : _typeof(e)) + ", value = " + e);return;
    }var t = e.appKey;if (t === undefined || t === null || t.constructor !== String) {
      g("Invalid appKey, type = " + (typeof t === "undefined" ? "undefined" : _typeof(t)) + ", value = " + t);return;
    }var n = e.appVer;if (n === undefined || n === null || n.constructor !== String) {
      g("Invalid appVer, type = " + (typeof n === "undefined" ? "undefined" : _typeof(n)) + ", value = " + n);return;
    }var r = e.isDebugMode;if (r !== undefined && r !== null && r.constructor !== Boolean) {
      g("Invalid isDebugMode, type = " + (typeof r === "undefined" ? "undefined" : _typeof(r)) + ", value = " + r);return;
    }var i = e.gzipFun;if (i !== undefined && i !== null && i.constructor !== Function) {
      g("Invalid gzipFun, type = " + (typeof i === "undefined" ? "undefined" : _typeof(i)) + ", value = " + i);return;
    }r = r || false;if (r) {
      f(r);
    }Ee(t, n, i);
  };Be.onOpen = function () {
    je();
  };Be.onClose = function () {
    Xe();
  };Be.onProfileSignIn = function (e) {
    if (e === undefined || e === null || e.constructor !== String) {
      g("Invalid params for onProfileSignIn, type = " + (typeof e === "undefined" ? "undefined" : _typeof(e)) + ", value = " + e);return;
    }ze(e);
  };Be.onProfileSignOff = function () {
    ke();
  };Be.onEvent = function (e) {
    if (e === undefined || e === null || (typeof e === "undefined" ? "undefined" : _typeof(e)) !== "object") {
      g("Invalid params for onEvent, type = " + (typeof e === "undefined" ? "undefined" : _typeof(e)) + ", value = " + e);return;
    }var t = e.eventId;if (t === undefined || t === null || t.constructor !== String) {
      g("Invalid params for onEvent, eventId type = " + (typeof t === "undefined" ? "undefined" : _typeof(t)) + ", value = " + t);return;
    }var n = e.label;if (n !== undefined && n !== null && n.constructor !== String) {
      g("Invalid params for onEvent, label type = " + (typeof n === "undefined" ? "undefined" : _typeof(n)) + ", value = " + n);return;
    }var r = e.info;if (r !== undefined && r !== null) {
      if ((typeof r === "undefined" ? "undefined" : _typeof(r)) !== "object") {
        g("Invalid params for onEvent, info type = " + (typeof r === "undefined" ? "undefined" : _typeof(r)) + ", value = " + r);return;
      } else {
        for (var i in r) {
          if (!r[i] || r[i].constructor !== String) {
            g("Invalid params for onEvent, type of info." + i + " = " + _typeof(r[i]) + ", value = " + r[i]);return;
          }
        }
      }
    }var s = e.value;if (s !== undefined && s !== null) {
      if (s.constructor !== Number) {
        g("Invalid params for onEvent, value type = " + (typeof s === "undefined" ? "undefined" : _typeof(s)) + ", value = " + s);return;
      } else {
        if (parseInt(s) !== s) {
          g("Invalid params for onEvent, value is not int : " + s);return;
        }
      }
    }He(e);
  };Be.reportError = function (e) {
    if (e === undefined || e === null || e.constructor !== String) {
      g("Invalid params for reportError, type = " + (typeof e === "undefined" ? "undefined" : _typeof(e)) + ", value = " + e);return;
    }Pe(e);
  };Be.setLogEnabled = function (e) {
    if (e === undefined || e === null || e.constructor !== Boolean) {
      g("Invalid params for setLogEnabled, type = " + (typeof e === "undefined" ? "undefined" : _typeof(e)) + ", value = " + e);return;
    }p(e);
  };Be.testSend = function () {
    this.setLogEnabled(true);var e = { appKey: "101ppt", appVer: "0.0.1", gzipFun: window.pako.gzip };this.init(e);ve = "http://cloud-atlas-collection.dev.web.nd/";this.onOpen();
  };return Be;
}();
window.CloudAtlas = CloudAtlas;
var cloudAtlasV1_3_0_min = CloudAtlas = CloudAtlas;

module.exports = cloudAtlasV1_3_0_min;