"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
require("./api/index.js");
require("./api/utils/index.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/cart/cart.js";
  "./pages/my/my.js";
  "./pages/cate/cate.js";
}
const _sfc_main = {
  __name: "App",
  setup(__props) {
    return () => {
    };
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/WeChat/start/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
