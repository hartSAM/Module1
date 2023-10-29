$(".slow").click(function (event) {
  event.preventDefault();
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top;
  $("html:not(:animated),body:not(:animated)").animate(
    { scrollTop: destination },
    800
  );
});
