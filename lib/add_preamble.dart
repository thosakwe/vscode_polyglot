import 'package:barback/barback.dart';
import 'package:node_preamble/preamble.dart' as preamble;

class PreambleTransformer extends Transformer {
  @override
  String get allowedExtensions => '.js .dart.js';

  PreambleTransformer.asPlugin();

  @override
  apply(Transform transform) async {
    var asset = transform.primaryInput;
    var contents = await asset.readAsString();
    transform.addOutput(new Asset.fromString(
        asset.id, preamble.getPreamble() + '\n' + contents));
  }
}
