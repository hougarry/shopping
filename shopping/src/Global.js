exports.install = function (app) {
    app.config.globalProperties.$target = "http://localhost:3000/"; // 线上图片地址
    
    // 封装提示成功的弹出框
    app.config.globalProperties.notifySucceed = function (msg) {
      this.$notify({
        title: "成功",
        message: msg,
        type: "success",
        offset: 100
      });
    };
    // 封装提示失败的弹出框
    app.config.globalProperties.notifyError = function (msg) {
      this.$notify.error({
        title: "错误",
        message: msg,
        offset: 100
      });
    };
  }
  