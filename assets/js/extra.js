//Calendar loading
//calendar jQuery module: https://github.com/kthornbloom/Monthly/
$(window).load( function() {
        $('#mycalendar').monthly({
            stylePast: true,
            mode: 'event',
            dataType: 'xml',
            xmlUrl: 'events.xml'
        });
    });

//hide other members detail, and change image into highres
//Misaki

$("#Misaki").on("click",function(){
    $("#misakiimg").attr("src","images/misaki.jpg");
    $("#Okiru").hide();
    $("#Smany").hide();
    $("#misakiText").show();
    $("#backButton").show();
})
//Okiru
$("#Okiru").on("click",function(){
    $("#okiruimg").attr("src","images/okiru.jpg");
    $("#Misaki").hide();
    $("#Smany").hide();
    $("#okiruText").show();
    $("#backButton").show();
})
//Smany
$("#Smany").on("click",function(){
    $("#smanyimg").attr("src","images/smany.jpg");
    $("#Misaki").hide();
    $("#Okiru").hide();
    $("#smanyText").show();
    $("#backButton").show();
})

//Back button implementation
$("#backButton").on("click",function(){
    $("#misakiimg").attr("src","images/misaki_thumb.jpg");
    $("#okiruimg").attr("src","images/okiru_thumb.jpg");
    $("#smanyimg").attr("src","images/smany_thumb.jpg");
    $("#Misaki").show();
    $("#Okiru").show();
    $("#Smany").show();
    $("[id$=Text]").hide();
    $("#backButton").hide();
})