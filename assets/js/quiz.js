var progressBars = [
    $(".jumbotron .progress-bar:first-of-type"),
    $(".jumbotron .progress-bar:last-of-type"),
    $("li .progress-bar:first-of-type"),
    $("li .progress-bar:last-of-type")
];
var marks = 100 / $(".question").length;

progressBars[2].hover(
  function() {
    $(this).css("width", "70%");
  }, function() {
    $(this).css("width", "50%");
  }
);

$("#start").on("click", function(){
    progressBars[0].css("width", "0");
    progressBars[1].css("width", "0");
    $(".rules").fadeOut(1000, function(){
        $(".question:first").fadeIn(1000);
    });
});

let prev= 0;
let next = 1;
let cprogress = 0;
let wprogress = 0;
for (var i = 0; i < $(".option").length; i++) {
    $(".option").eq(i).click(function(){
        wprogress += marks;
        progressBars[1].css("width", wprogress+"%");
        $(".question").eq(prev).fadeOut(1000, function(){
            $(".question").eq(next).fadeIn(1000);

            ending();
            prev += 1;
            next += 1;
        });
    });
}
for (var i = 0; i < $(".coption").length; i++) {
    $(".coption").eq(i).click(function(){
        cprogress += marks;
        progressBars[0].css("width", cprogress +"%");
        $(".question").eq(prev).fadeOut(1000, function(){
            $(".question").eq(next).fadeIn(1000);

            ending();
            prev += 1;
            next += 1;
        });
    });
}

function ending(){
    if(next == ($(".question").length)){
        $("section").fadeOut(1000, function(){
            if(cprogress > wprogress){
                document.querySelector(".ending h1 span").innerHTML = "WIN";
                document.querySelector(".ending h1").style.color = "#28a745";
            }
            else if(cprogress < wprogress){
                document.querySelector(".ending h1 span").innerHTML = "LOSE";                       
                document.querySelector(".ending h1").style.color = "#dc3545";                       
            }
            else{
                document.querySelector(".ending h1").innerHTML = "TIE <br><br> Better Luck next Time!";
                document.querySelector(".ending h1").style.color = "#ffff00";
            }
            $(".ending").fadeIn(1000);
        });
    }
}