import 'package:barback/barback.dart';
import 'package:glob/glob.dart';

class IncludeTransformer extends Transformer {
  Glob _glob;
  final BarbackSettings settings;

  IncludeTransformer.asPlugin(this.settings) {
    _glob = new Glob(settings.configuration['glob']);
  }

  @override
  isPrimary(AssetId id) => _glob.matches(id.path);

  @override
  apply(Transform transform) {
    transform.addOutput(transform.primaryInput);
  }
}
