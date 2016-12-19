import 'dart:html';
import 'dart:js';
import 'package:vscode/vscode.dart' as vs;

void activate(vs.ExtensionContext context) {
  window.alert('Hello!');
}

void deactivate() {

}