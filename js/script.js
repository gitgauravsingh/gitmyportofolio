document.addEventListener("DOMContentLoaded", function () {
  const linebar = document.getElementById("linebar");
  const opennav = document.getElementById("opennav");
  linebar.addEventListener("click", function () {
    this.classList.toggle("active");
    if (opennav.style.width === "250px") {
      opennav.style.width = "0";
    } else {
      opennav.style.width = "250px";
    }
  });

  $(".nav ul li:first").addClass("active");
  $(".nav ul li").click(function () {
    $(".nav ul li").removeClass("active");
    $(this).addClass("active");
  });

  $(".nav1 ul li:first").addClass("active");
  $(".nav1 ul li").click(function () {
    $(".nav1 ul li").removeClass("active");
    $(this).addClass("active");
  });

  $(".imagesection").hide();
  $(".imagesection:first").show();
  $(".tabdata ul li:first").addClass("active");
  $(".tabdata ul li").click(function () {
    $(".tabdata ul li").removeClass("active");
    $(this).addClass("active");
    $(".imagesection").hide();
    let ShowTab = $(this).find("a").attr("href");
    $(ShowTab).fadeIn();
    return false;
  });
});
