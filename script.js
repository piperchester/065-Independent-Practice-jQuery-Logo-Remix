$(".board").hide();

// Slide down the board on clicking Start
$(".start").click(function() {
   $(".board").slideDown();
});

// Slide up the board
$(".end").click(function() {
   $(".board").slideUp();    
});

// solid, blue, 5px border around the image when the user hovers
$("img").hover(function() {
   $("img").css('border', '5px solid blue');    
});

// Now apply a different color 
$("img").mouseover(function() {
   $("img").css('border', '5px solid black');    
});


$("img").dblclick(function() {
   $(".company-slogan").text('Connecting Communities.Creating Opportunities');    
});

$("img").mouseout(function() {
   $(".company-slogan").text('');    
});
