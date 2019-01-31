package hu.bp.add;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin()
public class Add extends Plugin {

    @PluginMethod()
    public void add(PluginCall call) {
        Double a = call.getDouble("a", 0D);
        Double b = call.getDouble("b", 0D);

        JSObject ret = new JSObject();
        ret.put("value", a + b);
        call.success(ret);
    }
}
