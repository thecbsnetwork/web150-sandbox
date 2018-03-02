/*Use 5+ jQuery methods to affect the page*/
$(document).ready(function(){
  //1. Toggle show info when h2 play title is clicked
    $("#red h2").toggle(
    function(){
        $(this).toggleClass("minus");
        $(this).next().slideDown(1000);
    },
        function(){
        $(this).toggleClass("minus");
        $(this).next().slideUp(1000);
    });
    
//2. Animates h1 page title when the page loads
    $("#red h1").animate({fontSize: "200%", opacity: 1, left: "+=375"}, 1000).animate({fontSize: "175%", left: "-=200"}, 1000);
    
//3. Fade in ticket info below button and reveal 'remove it all' option
    $("#purchase").click(function(){
        $("#tickets").fadeIn(2000);
        $("#remove").fadeIn(15000);
    });

//4. Click button to show taglines after the show info is revealed
    $("#info1").click(function(){
        $("#tagline1").append("<strong>The buddy system required by Row Yr Boat LLC means more than just friendship&mdash;to fight terrorists, Rose must get married.</strong>");
    });
    $("#info2").click(function(){
        $("#tagline2").append("<strong>When their group therapy ends prematurely, eight girls say goodbye with a &ldquo;safe space&rdquo; slumber party, only to find they have unfinished business with each other.</strong>");
    });
    
//5. Click text 'remove it all' to remove #shows section
    $("#remove").click(function(){
        $("section").remove(".shows");
    });
                  
}); //end document ready