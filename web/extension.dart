import 'dart:html';
import 'dart:js';
import 'package:vscode/vscode.dart' as vs;

main() {
  print('Hi?');
  var module = context['module'];
  module['exports']['activate'] = activate;
  module['exports']['activate'] = deactivate;
  window.console.log(module['exports']);
}

void activate(vs.ExtensionContext context) {
  window.alert('Hello!');
}

void deactivate() {

}