import 'dart:io';
import 'package:grinder/grinder.dart';
import "package:node_preamble/preamble.dart" as preamble;

main(args) => grind(args);

@DefaultTask()
build() async {
  var sdk = new File('./web/dart_sdk.js');
  await sdk.copy('./build/web/dart_sdk.js');
  var file = new File('./build/web/extension.dart.js');

  await Process.run('dartdevc',
      ['--modules', 'common', '-o', file.path, 'web/extension.dart']);

  var contents = await file.readAsString();
  contents = contents.replaceAll("require('dart_sdk')", "require('./dart_sdk')");
  contents += 'exports.web__extension.main();\nmodule.exports = exports.web__extension';
  await file.writeAsString(preamble.getPreamble() + '\n' + contents);
}
