"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Configuration =
/*#__PURE__*/
function () {
  function Configuration() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Configuration.defaultConfig;

    _classCallCheck(this, Configuration);

    _defineProperty(this, "config", void 0);

    this.config = config;
  }

  _createClass(Configuration, [{
    key: "hasVersionProperty",
    value: function hasVersionProperty() {
      return this.config.hasOwnProperty(Configuration.fields.version);
    }
  }, {
    key: "hasSecureProperty",
    value: function hasSecureProperty() {
      return this.config.hasOwnProperty(Configuration.fields.secure);
    }
  }, {
    key: "hasEncodeProperty",
    value: function hasEncodeProperty() {
      return this.config.hasOwnProperty(Configuration.fields.encode);
    }
  }, {
    key: "getConfig",
    value: function getConfig() {
      return this.config ? this.config : Configuration.defaultConfig;
    }
  }, {
    key: "setConfig",
    value: function setConfig(config) {
      this.config = config;
    }
  }, {
    key: "getSecure",
    value: function getSecure() {
      return this.hasSecureProperty() ? this.config.s : Configuration.defaultConfig.s;
    }
  }, {
    key: "getVersion",
    value: function getVersion() {
      return this.hasSecureProperty() ? this.config.v : Configuration.defaultConfig.v;
    }
  }, {
    key: "getTransform",
    value: function getTransform() {
      return this.config.t;
    }
  }, {
    key: "getConfigPropertyValue",
    value: function getConfigPropertyValue(key) {
      return this.config[key];
    }
  }]);

  return Configuration;
}();

exports.default = Configuration;

_defineProperty(Configuration, "fields", {
  version: 'v',
  secure: 's',
  encode: 'e',
  transform: 't'
});

_defineProperty(Configuration, "defaultConfig", {
  v: '1M0B0',
  t: true,
  s: 'all'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvQ29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwiY29uZmlnIiwiZGVmYXVsdENvbmZpZyIsImhhc093blByb3BlcnR5IiwiZmllbGRzIiwidmVyc2lvbiIsInNlY3VyZSIsImVuY29kZSIsImhhc1NlY3VyZVByb3BlcnR5IiwicyIsInYiLCJ0Iiwia2V5IiwidHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFTcUJBLGE7OztBQWlCakIsMkJBQThEO0FBQUEsUUFBbERDLE1BQWtELHVFQUE3QkQsYUFBYSxDQUFDRSxhQUFlOztBQUFBOztBQUFBOztBQUMxRCxTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDSDs7Ozt5Q0FFb0M7QUFDakMsYUFBTyxLQUFLQSxNQUFMLENBQVlFLGNBQVosQ0FBMkJILGFBQWEsQ0FBQ0ksTUFBZCxDQUFxQkMsT0FBaEQsQ0FBUDtBQUNIOzs7d0NBRW1DO0FBQ2hDLGFBQU8sS0FBS0osTUFBTCxDQUFZRSxjQUFaLENBQTJCSCxhQUFhLENBQUNJLE1BQWQsQ0FBcUJFLE1BQWhELENBQVA7QUFDSDs7O3dDQUVtQztBQUNoQyxhQUFPLEtBQUtMLE1BQUwsQ0FBWUUsY0FBWixDQUEyQkgsYUFBYSxDQUFDSSxNQUFkLENBQXFCRyxNQUFoRCxDQUFQO0FBQ0g7OztnQ0FFOEI7QUFDM0IsYUFBTyxLQUFLTixNQUFMLEdBQWMsS0FBS0EsTUFBbkIsR0FBNEJELGFBQWEsQ0FBQ0UsYUFBakQ7QUFDSDs7OzhCQUVnQkQsTSxFQUFvQjtBQUNqQyxXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDSDs7O2dDQUU4QjtBQUMzQixhQUFPLEtBQUtPLGlCQUFMLEtBQTJCLEtBQUtQLE1BQUwsQ0FBWVEsQ0FBdkMsR0FBNENULGFBQWEsQ0FBQ0UsYUFBZCxDQUE0Qk8sQ0FBL0U7QUFDSDs7O2lDQUUyQjtBQUN4QixhQUFPLEtBQUtELGlCQUFMLEtBQTJCLEtBQUtQLE1BQUwsQ0FBWVMsQ0FBdkMsR0FBNENWLGFBQWEsQ0FBQ0UsYUFBZCxDQUE0QlEsQ0FBL0U7QUFDSDs7O21DQUU4QjtBQUMzQixhQUFPLEtBQUtULE1BQUwsQ0FBWVUsQ0FBbkI7QUFDSDs7OzJDQUVnQ0MsRyxFQUFjO0FBQzNDLGFBQU8sS0FBS1gsTUFBTCxDQUFZVyxHQUFaLENBQVA7QUFDSDs7Ozs7Ozs7Z0JBdkRnQlosYSxZQUVEO0FBQ1pLLEVBQUFBLE9BQU8sRUFBRSxHQURHO0FBRVpDLEVBQUFBLE1BQU0sRUFBRSxHQUZJO0FBR1pDLEVBQUFBLE1BQU0sRUFBRSxHQUhJO0FBSVpNLEVBQUFBLFNBQVMsRUFBRTtBQUpDLEM7O2dCQUZDYixhLG1CQVNrQjtBQUMvQlUsRUFBQUEsQ0FBQyxFQUFFLE9BRDRCO0FBRS9CQyxFQUFBQSxDQUFDLEVBQUUsSUFGNEI7QUFHL0JGLEVBQUFBLENBQUMsRUFBRTtBQUg0QixDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgU2VjdXJlVHlwZSA9ICdhbGwnIHwgJ25vbmUnIHwgc3RyaW5nW107XHJcbmV4cG9ydCB0eXBlIEVuY29kZVR5cGUgPSBzdHJpbmcgfCBSZWdFeHAgfCBudWxsO1xyXG5leHBvcnQgdHlwZSBLZXlUeXBlID0gJ3YnIHwgJ3QnIHwgJ3MnO1xyXG5leHBvcnQgdHlwZSBDb25maWdUeXBlID0ge1xyXG4gICAgdjogc3RyaW5nLFxyXG4gICAgdDogYm9vbGVhbixcclxuICAgIHM6IFNlY3VyZVR5cGVcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xyXG5cclxuICAgIHN0YXRpYyBmaWVsZHMgPSB7XHJcbiAgICAgICAgdmVyc2lvbjogJ3YnLFxyXG4gICAgICAgIHNlY3VyZTogJ3MnLFxyXG4gICAgICAgIGVuY29kZTogJ2UnLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3QnXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0Q29uZmlnOiBDb25maWdUeXBlID0ge1xyXG4gICAgICAgIHY6ICcxTTBCMCcsXHJcbiAgICAgICAgdDogdHJ1ZSxcclxuICAgICAgICBzOiAnYWxsJ1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlnVHlwZVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogQ29uZmlnVHlwZSA9IENvbmZpZ3VyYXRpb24uZGVmYXVsdENvbmZpZykge1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYXNWZXJzaW9uUHJvcGVydHkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmhhc093blByb3BlcnR5KENvbmZpZ3VyYXRpb24uZmllbGRzLnZlcnNpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYXNTZWN1cmVQcm9wZXJ0eSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuaGFzT3duUHJvcGVydHkoQ29uZmlndXJhdGlvbi5maWVsZHMuc2VjdXJlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzRW5jb2RlUHJvcGVydHkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmhhc093blByb3BlcnR5KENvbmZpZ3VyYXRpb24uZmllbGRzLmVuY29kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvbmZpZygpOiBDb25maWdUeXBlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZyA6IENvbmZpZ3VyYXRpb24uZGVmYXVsdENvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogQ29uZmlnVHlwZSkge1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTZWN1cmUoKTogU2VjdXJlVHlwZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzU2VjdXJlUHJvcGVydHkoKSA/IHRoaXMuY29uZmlnLnMgOiAgQ29uZmlndXJhdGlvbi5kZWZhdWx0Q29uZmlnLnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFZlcnNpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYXNTZWN1cmVQcm9wZXJ0eSgpID8gdGhpcy5jb25maWcudiA6ICBDb25maWd1cmF0aW9uLmRlZmF1bHRDb25maWcudjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VHJhbnNmb3JtKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy50O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRDb25maWdQcm9wZXJ0eVZhbHVlKGtleTogS2V5VHlwZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ1trZXldO1xyXG4gICAgfVxyXG59Il19