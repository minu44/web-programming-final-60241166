$(document).ready(function () {
  console.log("check");

  setTimeout(function () {
    $(".human_mask, .android_mask").css("opacity", 0);
    $(".human-wrapper, .android-wrapper").css("opacity", 1);
  }, 3500);

  const moveFactor = 25;

  $(document).on("mousemove", function (e) {
    let centerX = $(window).width() / 2;
    let centerY = $(window).height() / 2;

    let percentX = (e.pageX - centerX) / centerX;
    let percentY = (e.pageY - centerY) / centerY;

    let x = percentX * moveFactor;
    let y = percentY * moveFactor;

    $(".human_mask, .android_mask, .human-wrapper, .android-wrapper").css(
      "transform",
      `translate(${x}px, ${y}px)`
    );

    $(".human_mask").on("mouseenter", function () {
      $(".human-wrapper").find(".human").addClass("glitch-active");
    });
    $(".human_mask").on("mouseleave", function () {
      $(".human-wrapper").find(".human").removeClass("glitch-active");
    });

    $(".android_mask").on("mouseenter", function () {
      $(".android-wrapper").find(".android").addClass("glitch-active");
    });
    $(".android_mask").on("mouseleave", function () {
      $(".android-wrapper").find(".android").removeClass("glitch-active");
    });
  });
});
