 var spreadsheetID = "1V28nUAIA21opDe3b8EHgpVIPtALHljaba7crPVQHNac";
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/1/public/values?alt=json";

  $(document).ready(function(){
    var wins = $(".wins");
    var pics = $(".pics");
    wins.hide();
    setInterval(function(){$.getJSON(url, function(data) {

   var entry =  data.feed.entry;
 for (var i = 0; i < entry.length; i++) {

 (function (i) {
  setTimeout(function () {
   var ping =  data.feed.entry[i].gsx$ping.$t;
   var title = data.feed.entry[i].gsx$title.$t;
   var done =  $(".completed").text();

    if (ping === 'X' && done.indexOf(title) === -1) {
       pics.hide();
       wins.show();
      $(".title").html('');
      $(".amount").html('');
      $(".seller").html('');
      $(".am").html('');
      $(".mp").html('');
      $(".lead").html('');
      $(".writer").html('');
      $(".sp").html('');
      $(".pm").html('');
      $(".rl").html('');
      $(".reason").html('');

      $(".title").prepend(title);
      $(".amount").prepend(data.feed.entry[i].gsx$amount.$t);
      $(".seller").prepend(data.feed.entry[i].gsx$seller.$t);
      $(".am").prepend(data.feed.entry[i].gsx$am.$t);
      $(".mp").prepend(data.feed.entry[i].gsx$mp.$t);
      $(".lead").prepend(data.feed.entry[i].gsx$lead.$t);
      $(".writer").prepend(data.feed.entry[i].gsx$writer.$t);
      $(".sp").prepend(data.feed.entry[i].gsx$sp.$t);
      $(".pm").prepend(data.feed.entry[i].gsx$pm.$t);
      $(".rl").prepend(data.feed.entry[i].gsx$rl.$t);
      $(".reason").prepend(data.feed.entry[i].gsx$reason.$t);

      var audio = new Audio(data.feed.entry[i].gsx$song.$t);

      $(".completed").prepend(title);

    setTimeout(function(){wins.hide();
    pics.show(); }, 29000);
   }

 }, 30000*i);
 })(i);
};
   });
 }, 30000);
});
