$(function () {
  /**
   * Burger
   */

  $(".js-burger").on("click", function () {
    $(this).children().toggleClass("active");
    $(".js-menu").slideToggle();
    return false;
  });
});
