$(document).ready(function() {
    $(".stats").hide();
    let chosen = $(".fighter-wrapper").hasClass("chosen-one");
    let notChosen = !($(".fighter-wrapper").hasClass("chosen-one"));

    $(".fighter-wrapper").on("click", function () {
        $(".stats").show();
        $("#choose-char").text("Your Character");
        $(this).addClass("chosen-one");
        // console.log($(this).attr("title"));
        $(".enemies").append($('.fighter-wrapper:not(".chosen-one")'));


        

/*         $('.fighter-wrapper:not(".chosen-one")').appen
        if (chosen !== true) {
            $(".enemies").append($(".fighter-wra);
            console.log($(".fighter-wrapper").attr("title"));
            console.log($(".fighter-wrapper")); 
        }*/
        // $(".enemies").append($(".fighter-wrapper").attr("title", undefined));
/*         if(typeof attr == undefined || attr == false) {
            $(".enemies").append($(this));
        }  */
        // console.log($(".jiggly").attr("title"));
/*         if ($(".fighter-wrapper").data() !== "chosen-fighter") {
            $(".enemies").append($(".fighter-wrapper"));
        } */
    });


});

