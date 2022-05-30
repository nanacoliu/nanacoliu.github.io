/* global AFRAME, THREE */
AFRAME.registerComponent("open-link", {
  schema: {
    url: { default: "" }
  },

  init: function() {
    var data = this.data;
    var el = this.el;

    el.addEventListener("click", function() {
      //在當前頁面開啟
      window.location.href = data.url;

      //開啟新分頁
      // window.open(data.url);
    });
  }
});