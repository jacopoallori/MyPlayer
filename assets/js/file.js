$(document).ready(function () {
  $.ajax({
    url: "assets/json/media.json",
    //type: 'GET',
    dataType: "json",
    success: function (data) {
      //console.log(data);    //controllo nella console che arrivino
      $.each(data.audio, function (i, el) {
        var Title = el.title;
        var File = el.file;
        $(".listaAudio").append(
          "<li class='border list-unstyled'>" +
            '<a href="assets/audio/' +
            File +
            '" class ="mioLink text-decoration-none text-black p-1" >' +
            Title +
            "</a>" +
            "</li>"
        );
      });
      $(".mioLink").on("click", function (e) {
        e.preventDefault();
        var attributo = $(this).attr("href");
        console.log(attributo);
        $("audio").attr("src", attributo);
        document.getElementById("audio").play();
      });
      $.each(data.video, function (i, el) {
        var Title = el.title;
        var File = el.file;
        $("#listaVideo").append(
          "<li class='border list-unstyled'>" +
            '<a href="assets/video/' +
            File +
            '" class ="mioVideo text-decoration-none text-black p-1" >' +
            Title +
            "</a>" +
            "</li>"
        );
      });
      $(".mioVideo").on("click", function (e) {
        e.preventDefault();
        var attributo = $(this).attr("href");
        console.log(attributo);
        $("video").attr("src", attributo);
        document.getElementById("video").play();
      });
    },
  });
});
