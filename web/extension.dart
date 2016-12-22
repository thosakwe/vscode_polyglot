
import 'package:js/js.dart';
import 'package:vscode/vscode.dart' as vs;
import 'exports.dart';

main() {
  exports
    ..activate = allowInterop(activate)
    ..deactivate = allowInterop(deactivate);
}

void activate(vs.ExtensionContext context) {
  print('Ok');
}

void deactivate() {}
