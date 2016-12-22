@JS()
library exports;

import 'package:js/js.dart';

@JS()
class Exports {
  external set activate(fn);
  external set deactivate(fn);
}

@JS()
external Exports get exports;