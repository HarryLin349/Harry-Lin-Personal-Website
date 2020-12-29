$(".box").hide();
$(".box").fadeIn();
$(".intro1").hide();
$(".intro2").hide();
$("#sectskills").hide();
$("#sectprojects").hide();
$("#sectcontact").hide();

setTimeout(function() {
  $(".intro1").fadeIn();
}, 500);
setTimeout(function() {
  $(".intro2").fadeIn();
}, 1000);

setTimeout(function() {
  $("#sectskills").slideDown();
}, 1500);

setTimeout(function() {
  $("#sectprojects").slideDown();
}, 2000);

setTimeout(function() {
  $("#sectcontact").slideDown();
}, 2500);


jQuery($ => {
  // The speed of the scroll in milliseconds
  const speed = 600;

  $('a[href*="#"]')
    .filter((i, a) => a.getAttribute('href').startsWith('#sect') || a.href.startsWith(`${location.href}#`))
    .unbind('click.smoothScroll')
    .bind('click.smoothScroll', event => {
      const targetId = event.currentTarget.getAttribute('href').split('#')[1];
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: $(targetElement).offset().top
        }, speed);
      }
    });
});
