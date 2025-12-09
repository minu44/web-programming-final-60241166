$(document).ready(function () {
  console.log("check");

  // Stroke 애니메이션(4초) + 정지(1초) = 총 6초 뒤 실행
  setTimeout(function () {
    // 1. 마스크(선)는 부드럽게 사라짐
    $(".human_mask, .android_mask").css("opacity", 0);

    // 2. 본체(wrapper)에 클래스를 추가하여 점멸 애니메이션 시작 + 텍스트 svg
    $(".human-wrapper, .android-wrapper, .asi, .new_int, .new_era").addClass(
      "power-on"
    );

    // 3. 텍스트 박스 트리거 ON
    $(".new_int_trigger, .new_era_trigger").css("pointer-events", "auto");
  }, 5000);

  // 점멸 애니메이션_2
  setTimeout(function () {
    $(".singularity, .etc").addClass("power-on");
  }, 6200);

  // 설명 텍스트 opacity
  setTimeout(function () {
    $(".description").css("filter", "opacity(1) blur(0px)");
  }, 6400);

  // 설명 텍스트 opacity
  setTimeout(function () {
    $(".background").css("opacity", 0.3);
  }, 6400);

  setTimeout(function () {
    // 2-1. wrapper를 즉시 보이게 함
    $(".semiconductor-wrapper").css("opacity", 1);

    // 2-2. 이미지 요소에 글리치 클래스 추가하여 애니메이션 시작
    $(".semiconductor-image").addClass("appear-glitch");

    // 2-3. 0.8초 동안 글리치 효과 재생 후 클래스 제거 (정상 상태 복귀)
    setTimeout(function () {
      $(".semiconductor-image").removeClass("appear-glitch");
    }, 800);
  }, 6500);

  const moveFactor = 25;
  const moveFactorLow = 18;

  $(document).on("mousemove", function (e) {
    let centerX = $(window).width() / 2;
    let centerY = $(window).height() / 2;

    let percentX = (e.pageX - centerX) / centerX;
    let percentY = (e.pageY - centerY) / centerY;

    let x = percentX * moveFactor;
    let y = percentY * moveFactor;

    let xLow = percentX * moveFactorLow;
    let yLow = percentY * moveFactorLow;

    $(".human_mask, .android_mask, .human-wrapper, .android-wrapper").css(
      "transform",
      `translate(${x}px, ${y}px)`
    );

    $(".semiconductor-wrapper").css(
      "transform",
      `translate(${xLow}px, ${yLow}px)`
    );
  });

  // 1. Human
  $(".human_mask").on("mouseenter", function () {
    $(".human").addClass("glitch-active");

    // 0.4초(800ms) 뒤에 클래스를 제거하여 원상복구 (CSS 애니메이션이 infinite여도 강제로 멈춤)
    setTimeout(function () {
      $(".human").removeClass("glitch-active");
    }, 400);
  });

  // 2. Android
  $(".android_mask").on("mouseenter", function () {
    $(".android").addClass("glitch-active");

    setTimeout(function () {
      $(".android").removeClass("glitch-active");
    }, 400);
  });

  /* 반도체 호버 이벤트 */
  /* wrapper에 마우스를 올리면 active-pulse 클래스 추가 */

  $(".semiconductor-wrapper").on("mouseenter", function () {
    $(".semiconductor-wrapper").addClass("active-pulse");
  });

  $(".semiconductor-wrapper").on("mouseleave", function () {
    $(".semiconductor-wrapper").removeClass("active-pulse");
  });

  // 2. 글리치 효과
  // 2-1. 글리치 클래스 추가
  $(".semiconductor-image").on("mouseenter", function () {
    $(".semiconductor-image").addClass("appear-glitch");
    // 2-2. 0.4초 뒤에 글리치만 끄기 (자동 복구)
    setTimeout(function () {
      $(".semiconductor-image").removeClass("appear-glitch");
    }, 400);
  });

  $(".asi").on("mouseenter", function () {
    $(".asi_glow").css("filter", "opacity(0.5) brightness(1.5) blur(5px)");
  });

  $(".asi").on("mouseleave", function () {
    $(".asi_glow").css("filter", "opacity(0) brightness(1.5) blur(5px)");
  });

  $(".new_int_trigger").on("mouseenter", function () {
    $(".new_int_glow").css("filter", "opacity(0.5) brightness(1.2) blur(10px)");
  });

  $(".new_int_trigger").on("mouseleave", function () {
    $(".new_int_glow").css("filter", "opacity(0) brightness(1.2) blur(10px)");
  });

  $(".new_era_trigger").on("mouseenter", function () {
    $(".new_era_glow").css("filter", "opacity(0.5) brightness(1.2) blur(10px)");
  });

  $(".new_era_trigger").on("mouseleave", function () {
    $(".new_era_glow").css("filter", "opacity(0) brightness(1.2) blur(10px)");
  });
});
