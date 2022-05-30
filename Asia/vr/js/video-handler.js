AFRAME.registerComponent("video-handler", {
  init: function () {
    let vid = this.el.getAttribute("material").src;
    let el = this.el;
    // let vid = document.querySelector("#myvideo");
    // el.pause();
    el.addEventListener("mouseenter", function () {
      vid.play();
      console.log("clicked!");
    });
    el.addEventListener("mouseleave", function () {
      vid.pause();
      console.log("clicked!");
    });
  },
});
