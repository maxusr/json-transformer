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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Transformer =
/*#__PURE__*/
function (_Parser) {
  _inherits(Transformer, _Parser);

  function Transformer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Transformer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Transformer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "lastKeyIndex", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "lastValueIndex", 0);

    return _this;
  }

  _createClass(Transformer, [{
    key: "transform",
    value: function transform(data) {
      var secure = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.configuration.getSecure();
      var encode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.data = data;
      return this.getResponseData(this.handleTransform(data, secure, encode), secure, encode);
    }
  }, {
    key: "handleTransform",
    value: function handleTransform(data, secure, encode) {
      var _this2 = this;

      var transformed = {};

      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          var element = data[key];
          var newKey = this.transformKey(key);
          var isEncode = false;

          if (typeof encode === 'string') {
            isEncode = encode == key;
          }

          if (encode instanceof RegExp) {
            isEncode = !!encode.exec(key);
          }

          if (Array.isArray(element)) {
            transformed[newKey] = element.map(function (value) {
              return _this2.transform(value, secure, encode);
            });
          } else if (_typeof(element) === 'object') {
            transformed[newKey] = this.transform(element, secure, encode);
          } else {
            transformed[newKey] = this.transformValue(element, secure === 'all' || Array.isArray(secure) && secure.indexOf(key) !== -1, isEncode);
          }
        }
      }

      return transformed;
    }
  }, {
    key: "transformKey",
    value: function transformKey(keyValue) {
      if (typeof keyValue === 'number') keyValue = keyValue.toString();
      var transformedKey = '$' + this.lastKeyIndex; //returned key
      //Check if already exist

      for (var key in this.keys) {
        if (this.keys.hasOwnProperty(key)) {
          var element = this.keys[key];
          if (element === keyValue) return key;
        }
      }

      this.keys[transformedKey] = keyValue; //Assign the new key to the corresponding keyValue

      this.lastKeyIndex++; //Increment for the next

      return transformedKey;
    }
  }, {
    key: "transformValue",
    value: function transformValue(value, secure, encode) {
      var transformedKey = '$' + this.lastValueIndex; //returned key
      //Check if already exist

      for (var key in this.values) {
        if (this.values.hasOwnProperty(key)) {
          var element = this.values[key]; //If exist just return the key

          if (element === value) return key;
        }
      }

      if (typeof value === 'string' && secure && !!this.secure) {
        value = this.secure.encrypt(value);
      }

      if (encode && (typeof value === 'string' || typeof value === 'number')) value = _Parser2.default.encodeString(value); //If doesn't exist then add to the array

      this.values[transformedKey] = value; //Assign the new key to the corresponding value

      this.lastValueIndex++; //Increment for the next

      return transformedKey;
    }
  }]);

  return Transformer;
}(_Parser2.default);

exports.default = Transformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvVHJhbmZvcm1lci50cyJdLCJuYW1lcyI6WyJUcmFuc2Zvcm1lciIsImRhdGEiLCJzZWN1cmUiLCJjb25maWd1cmF0aW9uIiwiZ2V0U2VjdXJlIiwiZW5jb2RlIiwiZ2V0UmVzcG9uc2VEYXRhIiwiaGFuZGxlVHJhbnNmb3JtIiwidHJhbnNmb3JtZWQiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImVsZW1lbnQiLCJuZXdLZXkiLCJ0cmFuc2Zvcm1LZXkiLCJpc0VuY29kZSIsIlJlZ0V4cCIsImV4ZWMiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJ2YWx1ZSIsInRyYW5zZm9ybSIsInRyYW5zZm9ybVZhbHVlIiwiaW5kZXhPZiIsImtleVZhbHVlIiwidG9TdHJpbmciLCJ0cmFuc2Zvcm1lZEtleSIsImxhc3RLZXlJbmRleCIsImtleXMiLCJsYXN0VmFsdWVJbmRleCIsInZhbHVlcyIsImVuY3J5cHQiLCJQYXJzZXIiLCJlbmNvZGVTdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkZBRWMsQzs7NkZBRUUsQzs7Ozs7Ozs4QkFFaEJDLEksRUFBcUg7QUFBQSxVQUFyR0MsTUFBcUcsdUVBQWhGLEtBQUtDLGFBQUwsQ0FBbUJDLFNBQW5CLEVBQWdGO0FBQUEsVUFBaERDLE1BQWdELHVFQUEzQixJQUEyQjtBQUNsSSxXQUFLSixJQUFMLEdBQVlBLElBQVo7QUFDQSxhQUFPLEtBQUtLLGVBQUwsQ0FBcUIsS0FBS0MsZUFBTCxDQUFxQk4sSUFBckIsRUFBMkJDLE1BQTNCLEVBQW1DRyxNQUFuQyxDQUFyQixFQUFpRUgsTUFBakUsRUFBeUVHLE1BQXpFLENBQVA7QUFDSDs7O29DQUV1QkosSSxFQUFnQkMsTSxFQUFxQkcsTSxFQUEwQztBQUFBOztBQUNuRyxVQUFJRyxXQUFxQixHQUFHLEVBQTVCOztBQUNBLFdBQUssSUFBTUMsR0FBWCxJQUFr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QixNQUE3QixJQUF1QyxDQUFDLENBQUMsS0FBS0EsTUFBakQsRUFBeUQ7QUFDckRrQixRQUFBQSxLQUFLLEdBQUcsS0FBS2xCLE1BQUwsQ0FBWTZCLE9BQVosQ0FBb0JYLEtBQXBCLENBQVI7QUFDSDs7QUFDRCxVQUFHZixNQUFNLEtBQUssT0FBT2UsS0FBUCxLQUFpQixRQUFqQixJQUE2QixPQUFPQSxLQUFQLEtBQWlCLFFBQW5ELENBQVQsRUFBdUVBLEtBQUssR0FBR1ksaUJBQU9DLFlBQVAsQ0FBb0JiLEtBQXBCLENBQVIsQ0FiRSxDQWN6RTs7QUFDQSxXQUFLVSxNQUFMLENBQVlKLGNBQVosSUFBOEJOLEtBQTlCLENBZnlFLENBZXJDOztBQUNwQyxXQUFLUyxjQUFMLEdBaEJ5RSxDQWdCbEQ7O0FBRXZCLGFBQU9ILGNBQVA7QUFDSDs7OztFQTVFb0NNLGdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLic7XHJcbmltcG9ydCBQYXJzZXIgZnJvbSAnLi9QYXJzZXInO1xyXG5pbXBvcnQgQ29uZmlndXJhdGlvbiwgeyBTZWN1cmVUeXBlLCBFbmNvZGVUeXBlIH0gZnJvbSAnLi9Db25maWd1cmF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zZm9ybWVyIGV4dGVuZHMgUGFyc2VyIHtcclxuXHJcbiAgICBwcml2YXRlIGxhc3RLZXlJbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGxhc3RWYWx1ZUluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyB0cmFuc2Zvcm0oZGF0YTogRGF0YVR5cGUsIHNlY3VyZTogU2VjdXJlVHlwZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXRTZWN1cmUoKSwgZW5jb2RlOiBFbmNvZGVUeXBlID0gbnVsbCk6IHsgW3g6IHN0cmluZ106IGFueX0ge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVzcG9uc2VEYXRhKHRoaXMuaGFuZGxlVHJhbnNmb3JtKGRhdGEsIHNlY3VyZSwgZW5jb2RlKSwgc2VjdXJlLCBlbmNvZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlVHJhbnNmb3JtKGRhdGE6IERhdGFUeXBlLCBzZWN1cmU/OiBTZWN1cmVUeXBlLCBlbmNvZGU/OiBFbmNvZGVUeXBlKTogeyBbeDogc3RyaW5nXTogYW55fSB7XHJcbiAgICAgICAgbGV0IHRyYW5zZm9ybWVkOiBEYXRhVHlwZSA9IHt9O1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRhdGFba2V5XTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0tleSA9IHRoaXMudHJhbnNmb3JtS2V5KGtleSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXNFbmNvZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBlbmNvZGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNFbmNvZGUgPSBlbmNvZGUgPT0ga2V5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoZW5jb2RlIGluc3RhbmNlb2YgUmVnRXhwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNFbmNvZGUgPSAhIWVuY29kZS5leGVjKGtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtZWRbbmV3S2V5XSA9IGVsZW1lbnQubWFwKHZhbHVlID0+IHRoaXMudHJhbnNmb3JtKHZhbHVlLCBzZWN1cmUsIGVuY29kZSkpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtZWRbbmV3S2V5XSA9IHRoaXMudHJhbnNmb3JtKGVsZW1lbnQsIHNlY3VyZSwgZW5jb2RlKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybWVkW25ld0tleV0gPSB0aGlzLnRyYW5zZm9ybVZhbHVlKGVsZW1lbnQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cmUgPT09ICdhbGwnIHx8IChBcnJheS5pc0FycmF5KHNlY3VyZSkgJiYgc2VjdXJlLmluZGV4T2Yoa2V5KSAhPT0gLTEpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdHJhbnNmb3JtS2V5KGtleVZhbHVlOiBzdHJpbmd8bnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBpZih0eXBlb2Yga2V5VmFsdWUgPT09ICdudW1iZXInKSBrZXlWYWx1ZSA9IGtleVZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtZWRLZXkgPSAnJCcgKyB0aGlzLmxhc3RLZXlJbmRleDsgLy9yZXR1cm5lZCBrZXlcclxuICAgICAgICAvL0NoZWNrIGlmIGFscmVhZHkgZXhpc3RcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmtleXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMua2V5cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5rZXlzW2tleV07XHJcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50ID09PSBrZXlWYWx1ZSkgcmV0dXJuIGtleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5rZXlzW3RyYW5zZm9ybWVkS2V5XSA9IGtleVZhbHVlOyAvL0Fzc2lnbiB0aGUgbmV3IGtleSB0byB0aGUgY29ycmVzcG9uZGluZyBrZXlWYWx1ZVxyXG4gICAgICAgIHRoaXMubGFzdEtleUluZGV4Kys7IC8vSW5jcmVtZW50IGZvciB0aGUgbmV4dFxyXG5cclxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtZWRLZXk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0cmFuc2Zvcm1WYWx1ZSh2YWx1ZTogYW55LCBzZWN1cmU6IGJvb2xlYW4sIGVuY29kZTogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtZWRLZXkgPSAnJCcgKyB0aGlzLmxhc3RWYWx1ZUluZGV4OyAvL3JldHVybmVkIGtleVxyXG4gICAgICAgIC8vQ2hlY2sgaWYgYWxyZWFkeSBleGlzdFxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMudmFsdWVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy52YWx1ZXNba2V5XTtcclxuICAgICAgICAgICAgICAgIC8vSWYgZXhpc3QganVzdCByZXR1cm4gdGhlIGtleVxyXG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudCA9PT0gdmFsdWUpIHJldHVybiBrZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBzZWN1cmUgJiYgISF0aGlzLnNlY3VyZSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuc2VjdXJlLmVuY3J5cHQodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihlbmNvZGUgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykpIHZhbHVlID0gUGFyc2VyLmVuY29kZVN0cmluZyh2YWx1ZSk7XHJcbiAgICAgICAgLy9JZiBkb2Vzbid0IGV4aXN0IHRoZW4gYWRkIHRvIHRoZSBhcnJheVxyXG4gICAgICAgIHRoaXMudmFsdWVzW3RyYW5zZm9ybWVkS2V5XSA9IHZhbHVlIC8vQXNzaWduIHRoZSBuZXcga2V5IHRvIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlXHJcbiAgICAgICAgdGhpcy5sYXN0VmFsdWVJbmRleCsrOyAvL0luY3JlbWVudCBmb3IgdGhlIG5leHRcclxuXHJcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybWVkS2V5O1xyXG4gICAgfVxyXG59Il19