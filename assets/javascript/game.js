$(document).ready(function() {
    $(".stats").hide();
    let fighterChosen = false;
    let chosen = $(".fighter-wrapper").hasClass("chosen-one");
    let notChosen = !($(".fighter-wrapper").hasClass("chosen-one"));

    $(".fighter-wrapper").on("click", function () {
        if (fighterChosen === false) {
        $(".stats").show();
        $("#choose-char").text("Your Character");
        $(this).addClass("chosen-one");
        $(".enemies").append($('.fighter-wrapper:not(".chosen-one")'));
        fighterChosen = true;
        }
    });

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

