"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Secure = void 0;

var _KeyGenerator = _interopRequireDefault(require("./KeyGenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Secure =
/*#__PURE__*/
function () {
  function Secure(key) {
    _classCallCheck(this, Secure);

    _defineProperty(this, "encryptKey", void 0);

    _defineProperty(this, "decryptKey", void 0);

    this.encryptKey = _KeyGenerator.default.getCoupleKey(key.encrypt);
    this.decryptKey = _KeyGenerator.default.getCoupleKey(key.decrypt);
  }

  _createClass(Secure, [{
    key: "encrypt",
    value: function encrypt(message) {
      var _this = this;

      var ascii = this.stringToASCII(message);
      var encrypts = [];

      if (this.encryptKey !== null && !!this.encryptKey.key && !!this.encryptKey.n) {
        encrypts = ascii.map(function (value) {
          return Math.pow(value, _this.encryptKey.key) % _this.encryptKey.n;
        });
      } else {
        throw new ReferenceError('You must set the encrypt Key before');
      }

      return this.asciiToString(encrypts);
    }
  }, {
    key: "decrypt",
    value: function decrypt(message) {
      var _this2 = this;

      var ascii = this.stringToASCII(message);
      var decrypts = [];

      if (this.decryptKey !== null && !!this.decryptKey.key && !!this.decryptKey.n) {
        decrypts = ascii.map(function (value) {
          return typeof value != 'number' ? value : Math.pow(value, _this2.decryptKey.key) % _this2.decryptKey.n;
        });
      } else {
        throw new ReferenceError('You must set the decrypt Key before');
      }

      return this.asciiToString(decrypts);
    }
  }, {
    key: "stringToASCII",
    value: function stringToASCII(text) {
      return text.split('').map(function (char) {
        return isNaN(char.charCodeAt(0)) ? char : char.charCodeAt(0);
      });
    }
  }, {
    key: "asciiToString",
    value: function asciiToString(ascii) {
      return ascii.map(function (value) {
        return typeof value != 'number' ? value : String.fromCharCode(value);
      }).join('');
    }
  }]);

  return Secure;
}();

exports.Secure = Secure;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvU2VjdXJlLnRzIl0sIm5hbWVzIjpbIlNlY3VyZSIsImtleSIsImVuY3J5cHRLZXkiLCJLZXlHZW5lcmF0b3IiLCJnZXRDb3VwbGVLZXkiLCJlbmNyeXB0IiwiZGVjcnlwdEtleSIsImRlY3J5cHQiLCJtZXNzYWdlIiwiYXNjaWkiLCJzdHJpbmdUb0FTQ0lJIiwiZW5jcnlwdHMiLCJuIiwibWFwIiwidmFsdWUiLCJNYXRoIiwicG93IiwiUmVmZXJlbmNlRXJyb3IiLCJhc2NpaVRvU3RyaW5nIiwiZGVjcnlwdHMiLCJ0ZXh0Iiwic3BsaXQiLCJjaGFyIiwiaXNOYU4iLCJjaGFyQ29kZUF0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFPYUEsTTs7O0FBS1Qsa0JBQVlDLEdBQVosRUFBZ0M7QUFBQTs7QUFBQTs7QUFBQTs7QUFDNUIsU0FBS0MsVUFBTCxHQUFrQkMsc0JBQWFDLFlBQWIsQ0FBMEJILEdBQUcsQ0FBQ0ksT0FBOUIsQ0FBbEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCSCxzQkFBYUMsWUFBYixDQUEwQkgsR0FBRyxDQUFDTSxPQUE5QixDQUFsQjtBQUNIOzs7OzRCQUVjQyxPLEVBQXlCO0FBQUE7O0FBQ3BDLFVBQU1DLEtBQUssR0FBRyxLQUFLQyxhQUFMLENBQW1CRixPQUFuQixDQUFkO0FBQ0EsVUFBSUcsUUFBa0IsR0FBRyxFQUF6Qjs7QUFDQSxVQUFHLEtBQUtULFVBQUwsS0FBb0IsSUFBcEIsSUFBNEIsQ0FBQyxDQUFDLEtBQUtBLFVBQUwsQ0FBZ0JELEdBQTlDLElBQXFELENBQUMsQ0FBQyxLQUFLQyxVQUFMLENBQWdCVSxDQUExRSxFQUE2RTtBQUN6RUQsUUFBQUEsUUFBUSxHQUFHRixLQUFLLENBQUNJLEdBQU4sQ0FBVSxVQUFBQyxLQUFLO0FBQUEsaUJBQUlDLElBQUksQ0FBQ0MsR0FBTCxDQUFTRixLQUFULEVBQWdCLEtBQUksQ0FBQ1osVUFBTCxDQUFnQkQsR0FBaEMsSUFBdUMsS0FBSSxDQUFDQyxVQUFMLENBQWdCVSxDQUEzRDtBQUFBLFNBQWYsQ0FBWDtBQUNILE9BRkQsTUFFSztBQUNELGNBQU0sSUFBSUssY0FBSixDQUFtQixxQ0FBbkIsQ0FBTjtBQUNIOztBQUVELGFBQU8sS0FBS0MsYUFBTCxDQUFtQlAsUUFBbkIsQ0FBUDtBQUNIOzs7NEJBRWNILE8sRUFBeUI7QUFBQTs7QUFDcEMsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLGFBQUwsQ0FBbUJGLE9BQW5CLENBQWQ7QUFDQSxVQUFJVyxRQUFrQixHQUFHLEVBQXpCOztBQUNBLFVBQUcsS0FBS2IsVUFBTCxLQUFvQixJQUFwQixJQUE0QixDQUFDLENBQUMsS0FBS0EsVUFBTCxDQUFnQkwsR0FBOUMsSUFBcUQsQ0FBQyxDQUFDLEtBQUtLLFVBQUwsQ0FBZ0JNLENBQTFFLEVBQTZFO0FBQ3pFTyxRQUFBQSxRQUFRLEdBQUdWLEtBQUssQ0FBQ0ksR0FBTixDQUFVLFVBQUFDLEtBQUs7QUFBQSxpQkFBSSxPQUFPQSxLQUFQLElBQWdCLFFBQWhCLEdBQTJCQSxLQUEzQixHQUFtQ0MsSUFBSSxDQUFDQyxHQUFMLENBQVNGLEtBQVQsRUFBZ0IsTUFBSSxDQUFDUixVQUFMLENBQWdCTCxHQUFoQyxJQUF1QyxNQUFJLENBQUNLLFVBQUwsQ0FBZ0JNLENBQTlGO0FBQUEsU0FBZixDQUFYO0FBQ0gsT0FGRCxNQUVLO0FBQ0QsY0FBTSxJQUFJSyxjQUFKLENBQW1CLHFDQUFuQixDQUFOO0FBQ0g7O0FBRUQsYUFBTyxLQUFLQyxhQUFMLENBQW1CQyxRQUFuQixDQUFQO0FBQ0g7OztrQ0FFcUJDLEksRUFBcUI7QUFDdkMsYUFBT0EsSUFBSSxDQUFDQyxLQUFMLENBQVcsRUFBWCxFQUFlUixHQUFmLENBQW1CLFVBQUFTLElBQUk7QUFBQSxlQUFJQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsVUFBTCxDQUFnQixDQUFoQixDQUFELENBQUwsR0FBNEJGLElBQTVCLEdBQW1DQSxJQUFJLENBQUNFLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBdkM7QUFBQSxPQUF2QixDQUFQO0FBQ0g7OztrQ0FFcUJmLEssRUFBc0I7QUFDeEMsYUFBT0EsS0FBSyxDQUFDSSxHQUFOLENBQVUsVUFBQUMsS0FBSztBQUFBLGVBQUksT0FBT0EsS0FBUCxJQUFnQixRQUFoQixHQUEyQkEsS0FBM0IsR0FBbUNXLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQlosS0FBcEIsQ0FBdkM7QUFBQSxPQUFmLEVBQWtGYSxJQUFsRixDQUF1RixFQUF2RixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgS2V5R2VuZXJhdG9yLCB7IEtleXNUeXBlIH0gZnJvbSBcIi4vS2V5R2VuZXJhdG9yXCI7XHJcblxyXG5leHBvcnQgdHlwZSBTZWN1cmVLZXlUeXBlID0ge1xyXG4gICAgZW5jcnlwdDogc3RyaW5nLFxyXG4gICAgZGVjcnlwdDogc3RyaW5nXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgU2VjdXJlIHtcclxuXHJcbiAgICBwcml2YXRlIGVuY3J5cHRLZXk6IEtleXNUeXBlO1xyXG4gICAgcHJpdmF0ZSBkZWNyeXB0S2V5OiBLZXlzVHlwZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IFNlY3VyZUtleVR5cGUpIHtcclxuICAgICAgICB0aGlzLmVuY3J5cHRLZXkgPSBLZXlHZW5lcmF0b3IuZ2V0Q291cGxlS2V5KGtleS5lbmNyeXB0KTtcclxuICAgICAgICB0aGlzLmRlY3J5cHRLZXkgPSBLZXlHZW5lcmF0b3IuZ2V0Q291cGxlS2V5KGtleS5kZWNyeXB0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jcnlwdChtZXNzYWdlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGFzY2lpID0gdGhpcy5zdHJpbmdUb0FTQ0lJKG1lc3NhZ2UpO1xyXG4gICAgICAgIGxldCBlbmNyeXB0czogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICBpZih0aGlzLmVuY3J5cHRLZXkgIT09IG51bGwgJiYgISF0aGlzLmVuY3J5cHRLZXkua2V5ICYmICEhdGhpcy5lbmNyeXB0S2V5Lm4pIHtcclxuICAgICAgICAgICAgZW5jcnlwdHMgPSBhc2NpaS5tYXAodmFsdWUgPT4gTWF0aC5wb3codmFsdWUsIHRoaXMuZW5jcnlwdEtleS5rZXkpICUgdGhpcy5lbmNyeXB0S2V5Lm4pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoJ1lvdSBtdXN0IHNldCB0aGUgZW5jcnlwdCBLZXkgYmVmb3JlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5hc2NpaVRvU3RyaW5nKGVuY3J5cHRzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVjcnlwdChtZXNzYWdlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGFzY2lpID0gdGhpcy5zdHJpbmdUb0FTQ0lJKG1lc3NhZ2UpO1xyXG4gICAgICAgIGxldCBkZWNyeXB0czogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICBpZih0aGlzLmRlY3J5cHRLZXkgIT09IG51bGwgJiYgISF0aGlzLmRlY3J5cHRLZXkua2V5ICYmICEhdGhpcy5kZWNyeXB0S2V5Lm4pIHtcclxuICAgICAgICAgICAgZGVjcnlwdHMgPSBhc2NpaS5tYXAodmFsdWUgPT4gdHlwZW9mIHZhbHVlICE9ICdudW1iZXInID8gdmFsdWUgOiBNYXRoLnBvdyh2YWx1ZSwgdGhpcy5kZWNyeXB0S2V5LmtleSkgJSB0aGlzLmRlY3J5cHRLZXkubik7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcignWW91IG11c3Qgc2V0IHRoZSBkZWNyeXB0IEtleSBiZWZvcmUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmFzY2lpVG9TdHJpbmcoZGVjcnlwdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RyaW5nVG9BU0NJSSh0ZXh0OiBzdHJpbmcpOiBhbnlbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQuc3BsaXQoJycpLm1hcChjaGFyID0+IGlzTmFOKGNoYXIuY2hhckNvZGVBdCgwKSkgPyBjaGFyIDogY2hhci5jaGFyQ29kZUF0KDApKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzY2lpVG9TdHJpbmcoYXNjaWk6IGFueVtdKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYXNjaWkubWFwKHZhbHVlID0+IHR5cGVvZiB2YWx1ZSAhPSAnbnVtYmVyJyA/IHZhbHVlIDogU3RyaW5nLmZyb21DaGFyQ29kZSh2YWx1ZSkpLmpvaW4oJycpO1xyXG4gICAgfVxyXG59Il19