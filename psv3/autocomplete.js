$(function() {
  var availableTags = [


    "W0930",
    "W1230",
    "W1530",
    "W1830",
    "W2130",
    "W2430B",
    "W2730B",
    "W3030B",
    "W3330B",
    "W4230",
    "W3630B",
    "W4830B3",
    "W6030OPEN",
    "W0936",
    "W1236",
    "W1536",
    "W1836",
    "W2136",
    "W2436B",
    "W2736B",
    "W3036B",
    "W3336B",
    "W3636B",
    "W0942",
    "W1242",
    "W1542",
    "W1842",
    "W2142",
    "W2442B",
    "W2742B",
    "W3042B",
    "W3342B",
    "W3642B",
    "W3012B",
    "W3612B",
    "W361224B",
    "W2415B",
    "W3015B",
    "W301524B",
    "W3315B",
    "W331524B",
    "W3615B",

    "W361524B",
    "W2418B",
    "W3018B",
    "W301824B",
    "W3318B",
    "W331824B",
    "W3618B",
    "W361824B",
    "W2424B",
    "W3024B",
    "W302424B",
    "W3324B",
    "W332424B",
    "W3624B",
    "W362424B",


    "WDC2430",
    "WDC2436",
    "WDC2442",
    "WDC273615",
    "WDC274215",


    "WSQ2430",
    "WSQ2436",
    "WSQ2442",


    "BFP09",


    "W2D1848",
    "W2D1854",
    "W2D1860",


    "SB24",
    "SB27B",
    "SB30B",
    "SB33B",
    "SB36B",
    "SB42",
    "SB48D2",

    "SB60B",
    "W4830B3",
    "W6030OPEN",


    "WBLC30333030",
    "WBLC30333036",
    "WBLC30333042",
    "WBLC39423630",
    "WBLC39423636",
    "WBLC39423642",


    "B09",
    "B12",
    "B15",
    "B18",
    "B21",
    "B24B",
    "B27B",
    "B30B",
    "B33B",
    "B36B",
    "B42",
    "B48",


    "FSB36B",


    "B30MW30W",


    "DB123",
    "DB153",
    "DB183",
    "DB213",
    "DB243",
    "DB303",
    "DB363",




    "BBLC394236W",
    "BBLC424539W",
    "BBLC454842W",


    "BDCF36",
    "BDCF36KFL",


    "LS3309",
    "LS3612",


    "EZR3612",


    "OC3384B",
    "OC3390B",
    "OC3396B",
    "OM3384B",
    "OM3390B",
    "OM3396B",


    "WP1584",
    "WP1590",
    "WP1596",
    "WP1884",
    "WP1890",
    "WP1896",
    "WP2484B",
    "WP2490B",
    "WP2496B",


    "BTC12L",
    "BTC12R",


    "AW30",
    "AW36",
    "AW42",
    "AB24BASE",

    "WES530",
    "WES536",
    "WES542",


    "W3012BGD",
    "W1530GD",
    "W1530MGD",
    "W1830GD",
    "W1830MGD",
    "W3030BGD",
    "W3030BMGD",
    "W3630BGD",
    "W3630BMGD",
    "W3636BGD",
    "W3636BMGD",
    "WDC2430GD",
    "WDC2430MGD",
    "W1536GD",
    "W1536MGD",
    "W1836GD",
    "W1836MGD",
    "W3036BGD",
    "W3036BMGD",
    "WDC2436GD",
    "WDC2436MGD",
    "WDC273615GD",
    "WDC273615MGD",
    "W1542GD",
    "W1542MGD",
    "W1842GD",
    "W1842MGD",
    "W3042BGD",
    "W3042BMGD",
    "W3642BGD",
    "W3642BMGD",
    "WDC2442GD",
    "WDC2442MGD",
    "WDC274215GD",
    "WDC274215MGD",





    "EPW1230D",
    "EPW1236D",
    "EPW1242D",
    "EPB24D",
    "EPWP2484D",
    "EPWP2490D",
    "EPWP2496D",


    "SB30BNDSP",
    "SB33BNDSP",
    "SB36BNDSP",


    "AWH36",
    "CWH36",
    "DWH36",


    "W3018WR",
    "TCR212",
    "WC630",
    "WC636",
    "WC642",


    "MWO3018PM12",


    "RTDR15",
    "RTDR18",
    "RTDR24",
    "RTDR27",
    "RTDR30",
    "RTDR33",
    "RTDR36",


    "DWR33412",





    "REP248434",
    "REP249634",
    "REP2484334",
    "REP2496334",
    "REP3096334",


    "FBP4836141",
    "FBP3696141",
    "FBP4896141",
    "BP48341214",


    "TK8",


    "VAS48",
    "VAD3612",
    "VAD4212",
    "VAD4812",
    "VAL48B",
    "VAL54B",
    "VAL48S",
    "VAL54S",


    "SC13SM",
    "SC4ICM",
    "SC5OCM",


    "LRM8",
    "TLRM8",


    "CM96",
    "CM964",
    "CM96B4",
    "CM96C4",
    "CM96D4",
    "CM96E4",
    "CM96H4",
    "CM96K4",

    "TP3WF3412",
    "LEG28B3X3",
    "LEG75B3X3",
    "LEG81",
    "LEG82",
    "LEG83",
    "LEGSMALL51",
    "LEGSMALL52",
    "POLE28B3",
    "POLE28W330",
    "POLE28W336",
    "POLE28W342",
    "POLE28T384",
    "POLE28T390",
    "POLE28T396",
    "POLE75B3",
    "POLE75W330",
    "POLE75W336",
    "POLE75W342",
    "POLE75T384",
    "POLE75T390",
    "POLE75T396",



    "WF334",
    "WF33634",
    "WF34234",
    "WF38434",
    "WF39634",
    "WF634",
    "WF64234",
    "WF69634",
    "BF334",
    "BF634",
    "A30WF",
    "A36WF",
    "A42WF",
    "A3BF",
    "A6BF",
    "CLB33412",
    "CLW330",
    "CLW336",
    "CLW342",
    "CLW396",


    "OLF330",
    "OLF336",
    "OLF342",
    "OLF630",
    "OLF636",
    "OLF642",
    "OLF384",
    "OLF390",
    "OLF396",


    "CFC96",


    "BM41258",


    "DOA",
    "CORBEL54",
    "CORBEL55",
    "CORBEL56",
    "CORBEL57",
    "CORBEL58",
    "CORBEL59",
    "CORBEL60S",
    "CORBEL60L",
    "CORBEL75S",
    "CORBEL75M",
    "CORBEL75L",


    "S3021DL3412",
    "S3021DR3412",
    "S3621BDL3412",
    "S3621BDR3412",
    "S4821B12D3412",


    "S2421B30H",
    "S2421B3412",
    "S3021B3412",
    "S3621B3412",


    "SVB12213412",
    "SVB15213412",
    "SVDU30217",



  ];
  /*    $("#AddPosition").autocomplete({
          source: function(request, response) {
              var results = $.ui.autocomplete.filter(allPositions, request.term);
              response(results.slice(0, 10));
          }
      });*/
  $(".autocomplete").autocomplete({


    source: function(request, response) {
      var results = $.ui.autocomplete.filter(availableTags, request.term);
      response(results.slice(0, 10));
    }

  })
  .keyup(function(e) {
    if (e.which === 13) {
      $(".ui-menu-item").hide();
    }
  });
});
