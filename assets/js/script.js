// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});


// google maps

// let map;

// async function initMap() {
//   const { Map } = await google.maps.importLibrary("maps");

//   map = new Map(document.getElementById("map"), {
//     center: { lat: 40.9857619, lng: 29.051199 },
//     zoom: 8,
//   });
// }
// initMap();



function printIframe(iframeId) {
    var iframe = document.getElementById("printf");

    if (iframe) {
      // İframe içeriğini yazdırmak için yeni bir pencere aç
      var printWindow = window.open(iframe.src, '', 'height=600,width=800');

      if (printWindow) {
        printWindow.onload = function() {
          // PDF dosyasını yazdır
          printWindow.print();
        };
      } else {
        console.error("can't open new window.");
      }
    } else {
      console.error('iframe is not exist.');
    }
  }
