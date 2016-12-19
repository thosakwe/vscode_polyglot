import 'dart:io';
import 'package:grinder/grinder.dart';
import "package:node_preamble/preamble.dart" as preamble;

main(args) => grind(args);

@DefaultTask()
build() async {
  var file = new File('./out/src/extension.js');

  await Process.run('dartdevc',
      ['--modules', 'common', '-o', file.path, 'web/extension.dart']);

  var contents = await file.readAsString();
  await file.writeAsString(preamble.getPreamble() + '\n' + contents);
}
