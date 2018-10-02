"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Secure = require("./Secure");

var _Configuration = _interopRequireDefault(require("./Configuration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Parser =
/*#__PURE__*/
function () {
  function Parser(secureKey) {
    _classCallCheck(this, Parser);

    _defineProperty(this, "configuration", void 0);

    _defineProperty(this, "data", void 0);

    _defineProperty(this, "secureKey", void 0);

    _defineProperty(this, "secure", void 0);

    _defineProperty(this, "keys", {});

    _defineProperty(this, "values", {});

    this.secureKey = secureKey;
    if (secureKey) this.secure = new _Secure.Secure(secureKey);
    this.configuration = new _Configuration.default();
  }

  _createClass(Parser, [{
    key: "hasConfigProperty",
    value: function hasConfigProperty() {
      return !!this.data && this.data.hasOwnProperty('c');
    }
  }, {
    key: "populateConfiguration",
    value: function populateConfiguration() {
      if (!!this.data && this.hasConfigProperty()) {
        this.configuration.setConfig(this.data['c']);
      }
    }
  }, {
    key: "isRegular",
    value: function isRegular() {
      if (this.hasConfigProperty() && this.configuration.hasVersionProperty()) {
        var version = this.configuration.getVersion();

        if (version === _Configuration.default.defaultConfig.v && this.configuration.getTransform()) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "getResponseData",
    value: function getResponseData(data, secure, encode) {
      var _ref;

      return _ref = {}, _defineProperty(_ref, Parser.fields.config, Object.assign(_Configuration.default.defaultConfig, _defineProperty({}, _Configuration.default.fields.secure, secure))), _defineProperty(_ref, Parser.fields.keys, this.keys), _defineProperty(_ref, Parser.fields.values, this.values), _defineProperty(_ref, Parser.fields.data, data), _ref;
    }
  }], [{
    key: "encodeString",
    value: function encodeString(raw) {
      if (typeof raw === 'number') raw = raw.toString();
      return btoa(raw);
    }
  }, {
    key: "decodeString",
    value: function decodeString(encodedString) {
      return atob(encodedString);
    }
  }, {
    key: "create",
    value: function create(secureKey) {
      return new this(secureKey);
    }
  }]);

  return Parser;
}();

exports.default = Parser;

_defineProperty(Parser, "fields", {
  data: 'd',
  config: 'c',
  keys: 'k',
  values: 'v'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvUGFyc2VyLnRzIl0sIm5hbWVzIjpbIlBhcnNlciIsInNlY3VyZUtleSIsInNlY3VyZSIsIlNlY3VyZSIsImNvbmZpZ3VyYXRpb24iLCJDb25maWd1cmF0aW9uIiwiZGF0YSIsImhhc093blByb3BlcnR5IiwiaGFzQ29uZmlnUHJvcGVydHkiLCJzZXRDb25maWciLCJoYXNWZXJzaW9uUHJvcGVydHkiLCJ2ZXJzaW9uIiwiZ2V0VmVyc2lvbiIsImRlZmF1bHRDb25maWciLCJ2IiwiZ2V0VHJhbnNmb3JtIiwiZW5jb2RlIiwiZmllbGRzIiwiY29uZmlnIiwiT2JqZWN0IiwiYXNzaWduIiwia2V5cyIsInZhbHVlcyIsInJhdyIsInRvU3RyaW5nIiwiYnRvYSIsImVuY29kZWRTdHJpbmciLCJhdG9iIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7O0FBcUJqQixrQkFBWUMsU0FBWixFQUF1QztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBLGtDQUpHLEVBSUg7O0FBQUEsb0NBRkUsRUFFRjs7QUFDbkMsU0FBS0EsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxRQUFHQSxTQUFILEVBQWMsS0FBS0MsTUFBTCxHQUFjLElBQUlDLGNBQUosQ0FBV0YsU0FBWCxDQUFkO0FBQ2QsU0FBS0csYUFBTCxHQUFxQixJQUFJQyxzQkFBSixFQUFyQjtBQUNIOzs7O3dDQUVzQztBQUNuQyxhQUFPLENBQUMsQ0FBQyxLQUFLQyxJQUFQLElBQWUsS0FBS0EsSUFBTCxDQUFVQyxjQUFWLENBQXlCLEdBQXpCLENBQXRCO0FBQ0g7Ozs0Q0FFdUM7QUFDcEMsVUFBRyxDQUFDLENBQUMsS0FBS0QsSUFBUCxJQUFlLEtBQUtFLGlCQUFMLEVBQWxCLEVBQTRDO0FBQ3hDLGFBQUtKLGFBQUwsQ0FBbUJLLFNBQW5CLENBQTZCLEtBQUtILElBQUwsQ0FBVSxHQUFWLENBQTdCO0FBQ0g7QUFDSjs7O2dDQUU4QjtBQUMzQixVQUFHLEtBQUtFLGlCQUFMLE1BQTRCLEtBQUtKLGFBQUwsQ0FBbUJNLGtCQUFuQixFQUEvQixFQUF3RTtBQUNwRSxZQUFNQyxPQUFPLEdBQUcsS0FBS1AsYUFBTCxDQUFtQlEsVUFBbkIsRUFBaEI7O0FBQ0EsWUFBR0QsT0FBTyxLQUFLTix1QkFBY1EsYUFBZCxDQUE0QkMsQ0FBeEMsSUFBNkMsS0FBS1YsYUFBTCxDQUFtQlcsWUFBbkIsRUFBaEQsRUFBbUY7QUFDL0UsaUJBQU8sSUFBUDtBQUNIO0FBQ0o7O0FBRUQsYUFBTyxLQUFQO0FBQ0g7OztvQ0FFeUJULEksRUFBMkJKLE0sRUFBYWMsTSxFQUFhO0FBQUE7O0FBQzNFLDhDQUNLaEIsTUFBTSxDQUFDaUIsTUFBUCxDQUFjQyxNQURuQixFQUM0QkMsTUFBTSxDQUFDQyxNQUFQLENBQWNmLHVCQUFjUSxhQUE1QixzQkFBOENSLHVCQUFjWSxNQUFkLENBQXFCZixNQUFuRSxFQUE0RUEsTUFBNUUsRUFENUIseUJBRUtGLE1BQU0sQ0FBQ2lCLE1BQVAsQ0FBY0ksSUFGbkIsRUFFMEIsS0FBS0EsSUFGL0IseUJBR0tyQixNQUFNLENBQUNpQixNQUFQLENBQWNLLE1BSG5CLEVBRzRCLEtBQUtBLE1BSGpDLHlCQUlLdEIsTUFBTSxDQUFDaUIsTUFBUCxDQUFjWCxJQUpuQixFQUkwQkEsSUFKMUI7QUFNSDs7O2lDQUVtQmlCLEcsRUFBOEI7QUFDOUMsVUFBRyxPQUFPQSxHQUFQLEtBQWUsUUFBbEIsRUFBNEJBLEdBQUcsR0FBR0EsR0FBRyxDQUFDQyxRQUFKLEVBQU47QUFFNUIsYUFBT0MsSUFBSSxDQUFDRixHQUFELENBQVg7QUFDSDs7O2lDQUVtQkcsYSxFQUErQjtBQUMvQyxhQUFPQyxJQUFJLENBQUNELGFBQUQsQ0FBWDtBQUNIOzs7MkJBRWF6QixTLEVBQW1DO0FBQzdDLGFBQU8sSUFBSSxJQUFKLENBQVNBLFNBQVQsQ0FBUDtBQUNIOzs7Ozs7OztnQkFyRWdCRCxNLFlBRUQ7QUFDWk0sRUFBQUEsSUFBSSxFQUFFLEdBRE07QUFFWlksRUFBQUEsTUFBTSxFQUFFLEdBRkk7QUFHWkcsRUFBQUEsSUFBSSxFQUFFLEdBSE07QUFJWkMsRUFBQUEsTUFBTSxFQUFFO0FBSkksQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4nO1xyXG5pbXBvcnQgeyBTZWN1cmVLZXlUeXBlLCBTZWN1cmUgfSBmcm9tICcuL1NlY3VyZSc7XHJcbmltcG9ydCBDb25maWd1cmF0aW9uIGZyb20gJy4vQ29uZmlndXJhdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJzZXIge1xyXG5cclxuICAgIHN0YXRpYyBmaWVsZHMgPSB7XHJcbiAgICAgICAgZGF0YTogJ2QnLFxyXG4gICAgICAgIGNvbmZpZzogJ2MnLFxyXG4gICAgICAgIGtleXM6ICdrJyxcclxuICAgICAgICB2YWx1ZXM6ICd2J1xyXG4gICAgfTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZGF0YT86IERhdGFUeXBlO1xyXG5cclxuICAgIHByb3RlY3RlZCBzZWN1cmVLZXk/OiBTZWN1cmVLZXlUeXBlO1xyXG5cclxuICAgIHByb3RlY3RlZCBzZWN1cmU/OiBTZWN1cmU7XHJcblxyXG4gICAgcHJvdGVjdGVkIGtleXM6IHsgW3g6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcblxyXG4gICAgcHJvdGVjdGVkIHZhbHVlczogeyBbeDogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzZWN1cmVLZXk/OiBTZWN1cmVLZXlUeXBlKSB7XHJcbiAgICAgICAgdGhpcy5zZWN1cmVLZXkgPSBzZWN1cmVLZXk7XHJcbiAgICAgICAgaWYoc2VjdXJlS2V5KSB0aGlzLnNlY3VyZSA9IG5ldyBTZWN1cmUoc2VjdXJlS2V5KTtcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBoYXNDb25maWdQcm9wZXJ0eSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmhhc093blByb3BlcnR5KCdjJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHBvcHVsYXRlQ29uZmlndXJhdGlvbigpOiB2b2lkIHtcclxuICAgICAgICBpZighIXRoaXMuZGF0YSAmJiB0aGlzLmhhc0NvbmZpZ1Byb3BlcnR5KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnNldENvbmZpZyh0aGlzLmRhdGFbJ2MnXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBpc1JlZ3VsYXIoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYodGhpcy5oYXNDb25maWdQcm9wZXJ0eSgpICYmIHRoaXMuY29uZmlndXJhdGlvbi5oYXNWZXJzaW9uUHJvcGVydHkoKSkge1xyXG4gICAgICAgICAgICBjb25zdCB2ZXJzaW9uID0gdGhpcy5jb25maWd1cmF0aW9uLmdldFZlcnNpb24oKTtcclxuICAgICAgICAgICAgaWYodmVyc2lvbiA9PT0gQ29uZmlndXJhdGlvbi5kZWZhdWx0Q29uZmlnLnYgJiYgdGhpcy5jb25maWd1cmF0aW9uLmdldFRyYW5zZm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRSZXNwb25zZURhdGEoZGF0YTogeyBbeDogc3RyaW5nXTogYW55fSwgc2VjdXJlOiBhbnksIGVuY29kZTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgW1BhcnNlci5maWVsZHMuY29uZmlnXTogT2JqZWN0LmFzc2lnbihDb25maWd1cmF0aW9uLmRlZmF1bHRDb25maWcsIHsgW0NvbmZpZ3VyYXRpb24uZmllbGRzLnNlY3VyZV06IHNlY3VyZSAvKltDb25maWd1cmF0aW9uLmZpZWxkcy5lbmNvZGVdOiBlbmNvZGUqLyB9KSxcclxuICAgICAgICAgICAgW1BhcnNlci5maWVsZHMua2V5c106IHRoaXMua2V5cyxcclxuICAgICAgICAgICAgW1BhcnNlci5maWVsZHMudmFsdWVzXTogdGhpcy52YWx1ZXMsXHJcbiAgICAgICAgICAgIFtQYXJzZXIuZmllbGRzLmRhdGFdOiBkYXRhXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZW5jb2RlU3RyaW5nKHJhdzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBpZih0eXBlb2YgcmF3ID09PSAnbnVtYmVyJykgcmF3ID0gcmF3LnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBidG9hKHJhdyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlY29kZVN0cmluZyhlbmNvZGVkU3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBhdG9iKGVuY29kZWRTdHJpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGUoc2VjdXJlS2V5PzogU2VjdXJlS2V5VHlwZSk6IFBhcnNlciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzKHNlY3VyZUtleSk7XHJcbiAgICB9XHJcbn0iXX0=