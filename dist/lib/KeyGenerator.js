"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KeyGenerator =
/*#__PURE__*/
function () {
  function KeyGenerator() {
    _classCallCheck(this, KeyGenerator);

    _defineProperty(this, "p", 0);

    _defineProperty(this, "q", 0);

    _defineProperty(this, "n", 0);

    _defineProperty(this, "e", 0);

    _defineProperty(this, "d", 0);

    _defineProperty(this, "phi", 0);
  }

  _createClass(KeyGenerator, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.initP();

              case 2:
                _context.next = 4;
                return this.initQ();

              case 4:
                if (!(this.p === 0 || this.q === 0)) {
                  _context.next = 9;
                  break;
                }

                _context.next = 7;
                return this.init();

              case 7:
                _context.next = 14;
                break;

              case 9:
                this.n = this.p * this.q;
                this.phi = (this.p - 1) * (this.q - 1);
                _context.next = 13;
                return this.initD();

              case 13:
                this.e = 1 / (this.d % this.phi);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }()
  }, {
    key: "initP",
    value: function initP() {
      var _this = this;

      return new Promise(function (resolve) {
        var isDone = false;

        var gen = _this.randomPremier();

        while (!isDone) {
          var next = gen.next();
          if (!next.done) _this.p = next.value;
          isDone = next.done;
          if (isDone) resolve();
        }
      });
    }
  }, {
    key: "initQ",
    value: function initQ() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var isDone = false;

        var gen = _this2.randomPremier(_this2.p * 2);

        while (!isDone) {
          var next = gen.next();
          if (!next.done) _this2.q = next.value;
          isDone = next.done;
          if (isDone) resolve();
        }
      });
    }
  }, {
    key: "initD",
    value: function () {
      var _initD = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _this3 = this;

        var pgcd, _loop;

        return regeneratorRuntime.wrap(function _callee2$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                pgcd = 0;
                this.d = this.p;
                _loop =
                /*#__PURE__*/
                regeneratorRuntime.mark(function _loop() {
                  var isFound;
                  return regeneratorRuntime.wrap(function _loop$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          isFound = false;
                          _context2.next = 3;
                          return new Promise(function (resolve) {
                            while (!isFound) {
                              if (_this3.p < _this3.d && _this3.q < _this3.d && _this3.d < _this3.phi) isFound = true;
                              _this3.d++;
                              if (isFound) resolve();
                            }
                          });

                        case 3:
                          _context2.next = 5;
                          return _this3.calculatePGCD(_this3.d, _this3.phi);

                        case 5:
                          pgcd = _context2.sent;

                        case 6:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _loop, this);
                });

              case 3:
                if (!(pgcd !== 1)) {
                  _context3.next = 7;
                  break;
                }

                return _context3.delegateYield(_loop(), "t0", 5);

              case 5:
                _context3.next = 3;
                break;

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee2, this);
      }));

      return function initD() {
        return _initD.apply(this, arguments);
      };
    }()
  }, {
    key: "calculatePGCD",
    value: function calculatePGCD(a, b) {
      return new Promise(function (resolve) {
        while (a !== b) {
          if (a > b) {
            a -= b;
          } else {
            b -= a;
          }

          if (a === b) {
            resolve(a);
          }
        }
      });
    }
  }, {
    key: "randomPremier",
    value:
    /*#__PURE__*/
    regeneratorRuntime.mark(function randomPremier() {
      var _this4 = this;

      var min,
          arrayOfValues,
          premier,
          result,
          _args4 = arguments;
      return regeneratorRuntime.wrap(function randomPremier$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              min = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : Date.now();
              arrayOfValues = new Array(min * 3 - min);
              premier = 0;

            case 3:
              if (!(premier === 0)) {
                _context4.next = 10;
                break;
              }

              result = arrayOfValues.map(function (_, index) {
                return index + min;
              }).find(function (value) {
                return _this4.isPremier(value);
              });
              premier = result !== undefined ? result : 0;
              _context4.next = 8;
              return premier;

            case 8:
              _context4.next = 3;
              break;

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, randomPremier, this);
    })
  }, {
    key: "isPremier",
    value: function isPremier(num) {
      return !new Array(Math.round(num / 2)).some(function (_, index) {
        return num % index === 0;
      });
    }
  }, {
    key: "keys",
    value: function keys() {
      return {
        encrypt: btoa(this.n.toString(16)) + '.' + btoa(this.e.toString(16)),
        decrypt: btoa(this.n.toString(16)) + '.' + btoa(this.d.toString(16))
      };
    }
  }], [{
    key: "getCoupleKey",
    value: function getCoupleKey(str) {
      if (str === undefined) return {
        n: 0,
        key: 0
      };
      var keys = str.split('.');
      return {
        n: parseInt(atob(keys[0]), 16),
        key: parseInt(atob(keys[1]), 16)
      };
    }
  }]);

  return KeyGenerator;
}();

exports.default = KeyGenerator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvS2V5R2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbIktleUdlbmVyYXRvciIsImluaXRQIiwiaW5pdFEiLCJwIiwicSIsImluaXQiLCJuIiwicGhpIiwiaW5pdEQiLCJlIiwiZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiaXNEb25lIiwiZ2VuIiwicmFuZG9tUHJlbWllciIsIm5leHQiLCJkb25lIiwidmFsdWUiLCJyZWplY3QiLCJwZ2NkIiwiaXNGb3VuZCIsImNhbGN1bGF0ZVBHQ0QiLCJhIiwiYiIsIm1pbiIsIkRhdGUiLCJub3ciLCJhcnJheU9mVmFsdWVzIiwiQXJyYXkiLCJwcmVtaWVyIiwicmVzdWx0IiwibWFwIiwiXyIsImluZGV4IiwiZmluZCIsImlzUHJlbWllciIsInVuZGVmaW5lZCIsIm51bSIsIk1hdGgiLCJyb3VuZCIsInNvbWUiLCJlbmNyeXB0IiwiYnRvYSIsInRvU3RyaW5nIiwiZGVjcnlwdCIsInN0ciIsImtleSIsImtleXMiLCJzcGxpdCIsInBhcnNlSW50IiwiYXRvYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtxQkEsWTs7Ozs7OytCQUVHLEM7OytCQUNBLEM7OytCQUNBLEM7OytCQUNBLEM7OytCQUNBLEM7O2lDQUNFLEM7Ozs7Ozs7Ozs7Ozs7O3VCQUdaLEtBQUtDLEtBQUwsRTs7Ozt1QkFDQSxLQUFLQyxLQUFMLEU7OztzQkFDSCxLQUFLQyxDQUFMLEtBQVcsQ0FBWCxJQUFnQixLQUFLQyxDQUFMLEtBQVcsQzs7Ozs7O3VCQUNwQixLQUFLQyxJQUFMLEU7Ozs7Ozs7QUFFTixxQkFBS0MsQ0FBTCxHQUFTLEtBQUtILENBQUwsR0FBUyxLQUFLQyxDQUF2QjtBQUNBLHFCQUFLRyxHQUFMLEdBQVcsQ0FBQyxLQUFLSixDQUFMLEdBQVMsQ0FBVixLQUFnQixLQUFLQyxDQUFMLEdBQVMsQ0FBekIsQ0FBWDs7dUJBQ00sS0FBS0ksS0FBTCxFOzs7QUFDTixxQkFBS0MsQ0FBTCxHQUFTLEtBQUss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RyxLQUFLVCxTQUFYLEVBQXNCLE9BQU87QUFBRS9CLFFBQUFBLENBQUMsRUFBRSxDQUFMO0FBQVF5QyxRQUFBQSxHQUFHLEVBQUU7QUFBYixPQUFQO0FBRXRCLFVBQU1DLElBQWMsR0FBR0YsR0FBRyxDQUFDRyxLQUFKLENBQVUsR0FBVixDQUF2QjtBQUNBLGFBQU87QUFDSDNDLFFBQUFBLENBQUMsRUFBRTRDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDSCxJQUFJLENBQUMsQ0FBRCxDQUFMLENBQUwsRUFBZ0IsRUFBaEIsQ0FEUjtBQUVIRCxRQUFBQSxHQUFHLEVBQUVHLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDSCxJQUFJLENBQUMsQ0FBRCxDQUFMLENBQUwsRUFBZ0IsRUFBaEI7QUFGVixPQUFQO0FBSUgiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdHlwZSBLZXlzVHlwZSA9IHtcclxuICAgIG46IG51bWJlcixcclxuICAgIGtleTogbnVtYmVyXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlHZW5lcmF0b3Ige1xyXG5cclxuICAgIHByaXZhdGUgcDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgbjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcGhpOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBhc3luYyBpbml0KCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdFAoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLmluaXRRKCk7XHJcbiAgICAgICAgaWYodGhpcy5wID09PSAwIHx8IHRoaXMucSA9PT0gMCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmluaXQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm4gPSB0aGlzLnAgKiB0aGlzLnE7XHJcbiAgICAgICAgICAgIHRoaXMucGhpID0gKHRoaXMucCAtIDEpICogKHRoaXMucSAtIDEpO1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmluaXREKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZSA9IDEgLyAodGhpcy5kICUgdGhpcy5waGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRQKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgbGV0IGlzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zdCBnZW4gPSB0aGlzLnJhbmRvbVByZW1pZXIoKTtcclxuICAgICAgICAgICAgd2hpbGUoIWlzRG9uZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dCA9IGdlbi5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICBpZighbmV4dC5kb25lKSB0aGlzLnAgPSBuZXh0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaXNEb25lID0gbmV4dC5kb25lO1xyXG4gICAgICAgICAgICAgICAgaWYoaXNEb25lKSByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRRKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29uc3QgZ2VuID0gdGhpcy5yYW5kb21QcmVtaWVyKHRoaXMucCAqIDIpO1xyXG4gICAgICAgICAgICB3aGlsZSghaXNEb25lKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0ID0gZ2VuLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIGlmKCFuZXh0LmRvbmUpIHRoaXMucSA9IG5leHQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpc0RvbmUgPSBuZXh0LmRvbmU7XHJcbiAgICAgICAgICAgICAgICBpZihpc0RvbmUpIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgaW5pdEQoKSB7XHJcbiAgICAgICAgbGV0IHBnY2QgPSAwO1xyXG4gICAgICAgIHRoaXMuZCA9IHRoaXMucDtcclxuICAgICAgICB3aGlsZShwZ2NkICE9PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBpc0ZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUoIWlzRm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZigodGhpcy5wIDwgdGhpcy5kKSAmJiAodGhpcy5xIDwgdGhpcy5kKSAmJiAodGhpcy5kIDwgdGhpcy5waGkpKSBpc0ZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmQrKztcclxuICAgICAgICAgICAgICAgICAgICBpZihpc0ZvdW5kKSByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwZ2NkID0gYXdhaXQgdGhpcy5jYWxjdWxhdGVQR0NEKHRoaXMuZCwgdGhpcy5waGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbGN1bGF0ZVBHQ0QoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgd2hpbGUoYSAhPT0gYikge1xyXG4gICAgICAgICAgICAgICAgaWYoYSA+IGIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhIC09IGI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGIgLT0gYTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGEgPT09IGIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlICpyYW5kb21QcmVtaWVyKG1pbjogbnVtYmVyID0gRGF0ZS5ub3coKSk6IEl0ZXJhYmxlSXRlcmF0b3I8bnVtYmVyPiB7XHJcbiAgICAgICAgY29uc3QgYXJyYXlPZlZhbHVlcyA9IG5ldyBBcnJheSgobWluICogMykgLSBtaW4pO1xyXG4gICAgICAgIGxldCBwcmVtaWVyOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIHdoaWxlKHByZW1pZXIgPT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXJyYXlPZlZhbHVlcy5tYXAoKF8sIGluZGV4KSA9PiBpbmRleCArIG1pbikuZmluZCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc1ByZW1pZXIodmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcHJlbWllciA9IHJlc3VsdCAhPT0gdW5kZWZpbmVkID8gcmVzdWx0IDogMDtcclxuICAgICAgICAgICAgeWllbGQgcHJlbWllcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc1ByZW1pZXIobnVtOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gIW5ldyBBcnJheShNYXRoLnJvdW5kKG51bSAvIDIpKS5zb21lKChfLCBpbmRleCkgPT4gbnVtICUgaW5kZXggPT09IDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBrZXlzKCk6IHsgZW5jcnlwdDogc3RyaW5nLCBkZWNyeXB0OiBzdHJpbmcgfSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZW5jcnlwdDogYnRvYSh0aGlzLm4udG9TdHJpbmcoMTYpKSArICcuJyArIGJ0b2EodGhpcy5lLnRvU3RyaW5nKDE2KSksXHJcbiAgICAgICAgICAgIGRlY3J5cHQ6IGJ0b2EodGhpcy5uLnRvU3RyaW5nKDE2KSkgKyAnLicgKyBidG9hKHRoaXMuZC50b1N0cmluZygxNikpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldENvdXBsZUtleShzdHI/OiBzdHJpbmcpOiBLZXlzVHlwZSB7XHJcbiAgICAgICAgaWYoc3RyID09PSB1bmRlZmluZWQpIHJldHVybiB7IG46IDAsIGtleTogMH07XHJcblxyXG4gICAgICAgIGNvbnN0IGtleXM6IHN0cmluZ1tdID0gc3RyLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgICAgIG46IHBhcnNlSW50KGF0b2Ioa2V5c1swXSksIDE2KSwgXHJcbiAgICAgICAgICAgIGtleTogcGFyc2VJbnQoYXRvYihrZXlzWzFdKSwgMTYpIFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iXX0=