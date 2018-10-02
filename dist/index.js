"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Transformer", {
  enumerable: true,
  get: function get() {
    return _Tranformer.default;
  }
});
Object.defineProperty(exports, "Reverser", {
  enumerable: true,
  get: function get() {
    return _Reverser.default;
  }
});
exports.reverse = exports.transform = exports.encodeString = exports.decodeString = void 0;

var _Parser = _interopRequireDefault(require("./lib/Parser"));

var _Tranformer = _interopRequireDefault(require("./lib/Tranformer"));

var _Reverser = _interopRequireDefault(require("./lib/Reverser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var decodeString = _Parser.default.decodeString;
exports.decodeString = decodeString;
var encodeString = _Parser.default.encodeString;
exports.encodeString = encodeString;

var transform = function transform(data, secureKey) {
  return _Tranformer.default.create(secureKey).transform(data);
};

exports.transform = transform;

var reverse = function reverse(data, secureKey) {
  return _Reverser.default.create(secureKey).reverse(data);
};

exports.reverse = reverse;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJkZWNvZGVTdHJpbmciLCJQYXJzZXIiLCJlbmNvZGVTdHJpbmciLCJ0cmFuc2Zvcm0iLCJkYXRhIiwic2VjdXJlS2V5IiwiVHJhbnNmb3JtZXIiLCJjcmVhdGUiLCJyZXZlcnNlIiwiUmV2ZXJzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7OztBQU9PLElBQU1BLFlBQVksR0FBR0MsZ0JBQU9ELFlBQTVCOztBQUNBLElBQU1FLFlBQVksR0FBR0QsZ0JBQU9DLFlBQTVCOzs7QUFFQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQWlCQyxTQUFqQixFQUErQztBQUNwRSxTQUFxQkMsb0JBQVlDLE1BQVosQ0FBbUJGLFNBQW5CLENBQWQsQ0FBNkNGLFNBQTdDLENBQXVEQyxJQUF2RCxDQUFQO0FBQ0gsQ0FGTTs7OztBQUlBLElBQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNKLElBQUQsRUFBaUJDLFNBQWpCLEVBQStDO0FBQ2xFLFNBQW1CSSxrQkFBU0YsTUFBVCxDQUFnQkYsU0FBaEIsQ0FBWixDQUF3Q0csT0FBeEMsQ0FBZ0RKLElBQWhELENBQVA7QUFDSCxDQUZNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhcnNlciBmcm9tICcuL2xpYi9QYXJzZXInO1xyXG5pbXBvcnQgeyBTZWN1cmVLZXlUeXBlIH0gZnJvbSAnLi9saWIvU2VjdXJlJztcclxuaW1wb3J0IFRyYW5zZm9ybWVyIGZyb20gJy4vbGliL1RyYW5mb3JtZXInO1xyXG5pbXBvcnQgUmV2ZXJzZXIgZnJvbSAnLi9saWIvUmV2ZXJzZXInO1xyXG5cclxuZXhwb3J0IHR5cGUgRGF0YVR5cGUgPSB7IFt4OiBzdHJpbmddOiBhbnkgfTtcclxuXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHJhbnNmb3JtZXIgfSBmcm9tICcuL2xpYi9UcmFuZm9ybWVyJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZXZlcnNlciB9IGZyb20gJy4vbGliL1JldmVyc2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBkZWNvZGVTdHJpbmcgPSBQYXJzZXIuZGVjb2RlU3RyaW5nO1xyXG5leHBvcnQgY29uc3QgZW5jb2RlU3RyaW5nID0gUGFyc2VyLmVuY29kZVN0cmluZztcclxuXHJcbmV4cG9ydCBjb25zdCB0cmFuc2Zvcm0gPSAoZGF0YTogRGF0YVR5cGUsIHNlY3VyZUtleT86IFNlY3VyZUtleVR5cGUpID0+IHtcclxuICAgIHJldHVybiAoPFRyYW5zZm9ybWVyPlRyYW5zZm9ybWVyLmNyZWF0ZShzZWN1cmVLZXkpKS50cmFuc2Zvcm0oZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXZlcnNlID0gKGRhdGE6IERhdGFUeXBlLCBzZWN1cmVLZXk/OiBTZWN1cmVLZXlUeXBlKSA9PiB7XHJcbiAgICByZXR1cm4gKDxSZXZlcnNlcj4gUmV2ZXJzZXIuY3JlYXRlKHNlY3VyZUtleSkpLnJldmVyc2UoZGF0YSk7XHJcbn0iXX0=