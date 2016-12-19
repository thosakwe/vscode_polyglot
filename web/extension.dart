//import 'dart:html';
import 'dart:js';
import 'package:vscode/vscode.dart' as vs;

main() {
  var exports = context['module']['exports'];
  print(exports);
  exports['activate'] = (ctx) => activate(ctx);
  exports['deactivate'] = () => deactivate();
  print(exports);
}

void activate(vs.ExtensionContext context) {
  print('Hello!');
}

void deactivate() {

}