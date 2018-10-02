"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Parser2 = _interopRequireDefault(require("./Parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Reverser =
/*#__PURE__*/
function (_Parser) {
  _inherits(Reverser, _Parser);

  function Reverser(secureKey) {
    _classCallCheck(this, Reverser);

    return _possibleConstructorReturn(this, _getPrototypeOf(Reverser).call(this, secureKey));
  }

  _createClass(Reverser, [{
    key: "reverse",
    value: function reverse(data) {
      this.data = data;
      this.populateConfiguration();

      if (this.isRegular()) {
        this.populate(data);
        return this.handleReverse(data[_Parser2.default.fields.data]);
      }

      return data;
    }
  }, {
    key: "handleReverse",
    value: function handleReverse(data) {
      var _this = this;

      var reversed = {};

      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          var element = data[key];

          if (Array.isArray(element)) {
            reversed[this.getReverseKey(key)] = element.map(function (value) {
              return _this.handleReverse(value);
            });
          } else if (_typeof(element) === 'object') {
            reversed[this.getReverseKey(key)] = this.handleReverse(element);
          } else {
            reversed[this.getReverseKey(key)] = this.getReverseValue(element);
          }
        }
      }

      return reversed;
    }
  }, {
    key: "getReverseKey",
    value: function getReverseKey(key) {
      return this.keys[key];
    }
  }, {
    key: "getReverseValue",
    value: function getReverseValue(value) {
      var decryptValue = this.values[value];
      if (typeof decryptValue === 'string' && !!this.secure && this.configuration.getSecure()) decryptValue = this.secure.decrypt(decryptValue);
      return decryptValue;
    }
  }, {
    key: "populate",
    value: function populate(data) {
      this.keys = data[_Parser2.default.fields.keys];
      this.values = data[_Parser2.default.fields.values];
    }
  }]);

  return Reverser;
}(_Parser2.default);

exports.default = Reverser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvUmV2ZXJzZXIudHMiXSwibmFtZXMiOlsiUmV2ZXJzZXIiLCJzZWN1cmVLZXkiLCJkYXRhIiwicG9wdWxhdGVDb25maWd1cmF0aW9uIiwiaXNSZWd1bGFyIiwicG9wdWxhdGUiLCJoYW5kbGVSZXZlcnNlIiwiUGFyc2VyIiwiZmllbGRzIiwicmV2ZXJzZWQiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImVsZW1lbnQiLCJBcnJheSIsImlzQXJyYXkiLCJnZXRSZXZlcnNlS2V5IiwibWFwIiwidmFsdWUiLCJnZXRSZXZlcnNlVmFsdWUiLCJrZXlzIiwiZGVjcnlwdFZhbHVlIiwidmFsdWVzIiwic2VjdXJlIiwiY29uZmlndXJhdGlvbiIsImdldFNlY3VyZSIsImRlY3J5cHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsUTs7Ozs7QUFFakIsb0JBQVlDLFNBQVosRUFBdUM7QUFBQTs7QUFBQSxpRkFDN0JBLFNBRDZCO0FBRXRDOzs7OzRCQUVjQyxJLEVBQXNDO0FBQ2pELFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFdBQUtDLHFCQUFMOztBQUNBLFVBQUcsS0FBS0MsU0FBTCxFQUFILEVBQXFCO0FBQ2pCLGFBQUtDLFFBQUwsQ0FBY0gsSUFBZDtBQUNBLGVBQU8sS0FBS0ksYUFBTCxDQUFtQkosSUFBSSxDQUFDSyxpQkFBT0MsTUFBUCxDQUFjTixJQUFmLENBQXZCLENBQVA7QUFDSDs7QUFDRCxhQUFPQSxJQUFQO0FBQ0g7OztrQ0FFdUJBLEksRUFBb0Q7QUFBQTs7QUFDeEUsVUFBTU8sUUFBNkIsR0FBRyxFQUF0Qzs7QUFDQSxXQUFLLElBQU1DLEdBQVgsSUFBa0JSLElBQWxCLEVBQXdCO0FBQ3BCLFlBQUlBLElBQUksQ0FBQ1MsY0FBTCxDQUFvQkQsR0FBcEIsQ0FBSixFQUE4QjtBQUMxQixjQUFNRSxPQUFPLEdBQUdWLElBQUksQ0FBQ1EsR0FBRCxDQUFwQjs7QUFDQSxjQUFHRyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsT0FBZCxDQUFILEVBQTJCO0FBQ3ZCSCxZQUFBQSxRQUFRLENBQUMsS0FBS00sYUFBTCxDQUFtQkwsR0FBbkIsQ0FBRCxDQUFSLEdBQW9DRSxPQUFPLENBQUNJLEdBQVIsQ0FBWSxVQUFBQyxLQUFLO0FBQUEscUJBQUksS0FBSSxDQUFDWCxhQUFMLENBQW1CVyxLQUFuQixDQUFKO0FBQUEsYUFBakIsQ0FBcEM7QUFDSCxXQUZELE1BRU0sSUFBRyxRQUFPTCxPQUFQLE1BQW1CLFFBQXRCLEVBQWdDO0FBQ2xDSCxZQUFBQSxRQUFRLENBQUMsS0FBS00sYUFBTCxDQUFtQkwsR0FBbkIsQ0FBRCxDQUFSLEdBQW9DLEtBQUtKLGFBQUwsQ0FBbUJNLE9BQW5CLENBQXBDO0FBQ0gsV0FGSyxNQUVDO0FBQ0hILFlBQUFBLFFBQVEsQ0FBQyxLQUFLTSxhQUFMLENBQW1CTCxHQUFuQixDQUFELENBQVIsR0FBb0MsS0FBS1EsZUFBTCxDQUFxQk4sT0FBckIsQ0FBcEM7QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsYUFBT0gsUUFBUDtBQUNIOzs7a0NBRXVCQyxHLEVBQXFCO0FBQ3pDLGFBQU8sS0FBS1MsSUFBTCxDQUFVVCxHQUFWLENBQVA7QUFDSDs7O29DQUV5Qk8sSyxFQUFvQjtBQUMxQyxVQUFJRyxZQUFZLEdBQUcsS0FBS0MsTUFBTCxDQUFZSixLQUFaLENBQW5CO0FBQ0EsVUFBRyxPQUFPRyxZQUFQLEtBQXdCLFFBQXhCLElBQW9DLENBQUMsQ0FBQyxLQUFLRSxNQUEzQyxJQUFxRCxLQUFLQyxhQUFMLENBQW1CQyxTQUFuQixFQUF4RCxFQUF3RkosWUFBWSxHQUFHLEtBQUtFLE1BQUwsQ0FBWUcsT0FBWixDQUFvQkwsWUFBcEIsQ0FBZjtBQUN4RixhQUFPQSxZQUFQO0FBQ0g7Ozs2QkFFa0JsQixJLEVBQWdCO0FBQy9CLFdBQUtpQixJQUFMLEdBQVlqQixJQUFJLENBQUNLLGlCQUFPQyxNQUFQLENBQWNXLElBQWYsQ0FBaEI7QUFDQSxXQUFLRSxNQUFMLEdBQWNuQixJQUFJLENBQUNLLGlCQUFPQyxNQUFQLENBQWNhLE1BQWYsQ0FBbEI7QUFDSDs7OztFQTlDaUNkLGdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLic7XHJcbmltcG9ydCBQYXJzZXIgZnJvbSAnLi9QYXJzZXInO1xyXG5pbXBvcnQgeyBTZWN1cmVLZXlUeXBlIH0gZnJvbSAnLi9TZWN1cmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV2ZXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNlY3VyZUtleT86IFNlY3VyZUtleVR5cGUpIHtcclxuICAgICAgICBzdXBlcihzZWN1cmVLZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXZlcnNlKGRhdGE6IERhdGFUeXBlKTogeyBbeDogc3RyaW5nXTogYW55IH0ge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUNvbmZpZ3VyYXRpb24oKTtcclxuICAgICAgICBpZih0aGlzLmlzUmVndWxhcigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGUoZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJldmVyc2UoZGF0YVtQYXJzZXIuZmllbGRzLmRhdGFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGhhbmRsZVJldmVyc2UoZGF0YTogeyBbeDogc3RyaW5nIF06IGFueSB9KTogeyBbeDogc3RyaW5nIF06IGFueSB9IHtcclxuICAgICAgICBjb25zdCByZXZlcnNlZDogeyBbeDogc3RyaW5nXTogYW55fSA9IHt9O1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRhdGFba2V5XTtcclxuICAgICAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXZlcnNlZFt0aGlzLmdldFJldmVyc2VLZXkoa2V5KV0gPSBlbGVtZW50Lm1hcCh2YWx1ZSA9PiB0aGlzLmhhbmRsZVJldmVyc2UodmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldmVyc2VkW3RoaXMuZ2V0UmV2ZXJzZUtleShrZXkpXSA9IHRoaXMuaGFuZGxlUmV2ZXJzZShlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZWRbdGhpcy5nZXRSZXZlcnNlS2V5KGtleSldID0gdGhpcy5nZXRSZXZlcnNlVmFsdWUoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldmVyc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRSZXZlcnNlS2V5KGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5rZXlzW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldFJldmVyc2VWYWx1ZSh2YWx1ZTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICBsZXQgZGVjcnlwdFZhbHVlID0gdGhpcy52YWx1ZXNbdmFsdWVdO1xyXG4gICAgICAgIGlmKHR5cGVvZiBkZWNyeXB0VmFsdWUgPT09ICdzdHJpbmcnICYmICEhdGhpcy5zZWN1cmUgJiYgdGhpcy5jb25maWd1cmF0aW9uLmdldFNlY3VyZSgpKSBkZWNyeXB0VmFsdWUgPSB0aGlzLnNlY3VyZS5kZWNyeXB0KGRlY3J5cHRWYWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGRlY3J5cHRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcG9wdWxhdGUoZGF0YTogRGF0YVR5cGUpIHtcclxuICAgICAgICB0aGlzLmtleXMgPSBkYXRhW1BhcnNlci5maWVsZHMua2V5c107XHJcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBkYXRhW1BhcnNlci5maWVsZHMudmFsdWVzXTtcclxuICAgIH1cclxufSJdfQ==