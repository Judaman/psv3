var total1 = 0;
var total2 = 0;
var total3 = 0;
var total4 = 0;
var rowIdString = "rowId";
var rowIdNum = 0;
var node1 = "";
var node2 = "";
var node3 = "";
var node4 = "";
var para1 = "";
var para2 = "";
var para3 = "";
var para4 = "";
var priceCount = 0;

var itemPrice1 = "";
var itemPrice2 = "";
var itemPrice3 = "";
var itemPrice4 = "";




//execute addItem on "Enter"
var wage = document.getElementById("inputBox");
wage.addEventListener("keydown", function(e) {
  if (e.keyCode === 13) {
    addItem(e);
  }
});

function addItem(e) {
  //var validInput = false;
  var item = document.getElementById("inputBox").value;
  item = item.toUpperCase();

  var validInput = false;
  var tag;

  for (tag in availableTags) {
    if (item == availableTags[tag]) {
      var validInput = true;
    }

  }


  if (validInput == true && styleSelected == true) {

    if (discount == 1) {
      document.getElementById("discountButton").innerHTML = "List Price";
    }

    document.getElementById("doorStyleButton").style.display = "none";
    document.getElementById("discountButton").disabled = true;
    document.getElementById("excellExportButton").disabled = false;

    //clear input box
    document.getElementById("inputBox").value = "";

    var rowId = String(rowIdString + rowIdNum);
    var priceContainerWrapper = document.createElement("div");
    priceContainerWrapper.className = "row";
    priceContainerWrapper.id = rowId;

    priceContainerWrapper.style = "padding:15px; border-bottom: solid 1px; border-bottom-color: #e5e5e5;";
    var getPricesContainer = document.getElementById("pricesContainer");
    getPricesContainer.appendChild(priceContainerWrapper);

    try {

      var paraQ = document.createElement("div");
      paraQ.className = "d-none d-sm-block col-sm-1";
      var getPricesContainer = document.getElementById("pricesContainer");
      priceContainerWrapper.appendChild(paraQ);
    } catch (err) {
      var paraQ = document.createElement("div");
      paraQ.innerHTML = "<div class='priceContainer'></div>";
      var nodeQ = document.createTextNode("N/A");
      paraQ.className = "d-none d-sm-block col-sm-1";
      paraQ.appendChild(nodeQ);
      var getPricesContainer = document.getElementById("pricesContainer");
      priceContainerWrapper.appendChild(paraQ);

    }

    try {
      var currentRow = "item" + rowIdNum;
      var para = document.createElement("div");
      para.innerHTML = "<div class='priceContainer' id='" + currentRow + "'></div>";

      para.className = "col-4 col-sm-2";

      var getPricesContainer = document.getElementById("pricesContainer");
      priceContainerWrapper.appendChild(para);
      document.getElementById(currentRow).innerHTML = item;

    } catch (err) {
      var para = document.createElement("div");
      para.innerHTML = "<div class='priceContainer'></div>";
      var node = document.createTextNode("N/A");
      para.className = "col-4 col-sm-2";
      para.appendChild(node);
      var getPricesContainer = document.getElementById("pricesContainer");
      priceContainerWrapper.appendChild(para);

    }


    //price 1

    try {

      var para1 = document.createElement("div");
      var currentId1 = "price1" + priceCount;
      para1.innerHTML = "<div class='priceContainer' id='" + currentId1 + "'></div>";
      var itemPrice1 = window[selectedStyles[0]][item];
      itemPrice1 = Math.round(itemPrice1 * discount);
      para1.className = "col-4 col-sm-2";
      priceContainerWrapper.appendChild(para1);
      document.getElementById(currentId1).innerHTML = itemPrice1;
    } catch (err) {
      var para1 = document.createElement("div");
      para1.innerHTML = "<div class='priceContainer'></div>";
      node1 = document.createTextNode("N/A");
      para1.className = "col-4 col-sm-2";
      para1.appendChild(node1);

      priceContainerWrapper.appendChild(para1);

      //price 2

    }
    if (selectedStyles.length >= 2) {
      try {
        var para2 = document.createElement("div");
        var currentId2 = "price2" + priceCount;
        para2.innerHTML = "<div class='priceContainer' id='" + currentId2 + "'></div>";
        var itemPrice2 = window[selectedStyles[1]][item];
        itemPrice2 = Math.round(itemPrice2 * discount);
        para2.className = "col-4 col-sm-2";
        var getPricesContainer = document.getElementById("pricesContainer");
        priceContainerWrapper.appendChild(para2);
        document.getElementById(currentId2).innerHTML = itemPrice2;
      } catch (err) {
        var para2 = document.createElement("div");
        para2.innerHTML = "<div class='priceContainer'></div>";
        node2 = document.createTextNode("N/A");
        para2.className = "col-4 col-sm-2";
        para2.appendChild(node2);
        var getPricesContainer = document.getElementById("pricesContainer");
        priceContainerWrapper.appendChild(para2);
      }
    }

    //price 3
    if (selectedStyles.length >= 3) {
      try {
        var para3 = document.createElement("div");
        var currentId3 = "price3" + priceCount;
        para3.innerHTML = "<div class='priceContainer' id='" + currentId3 + "'></div>";
        var itemPrice3 = window[selectedStyles[2]][item];
        itemPrice3 = Math.round(itemPrice3 * discount);

        para3.className = "d-none d-sm-block col-sm-2";
        var getPricesContainer = document.getElementById("pricesContainer");
        priceContainerWrapper.appendChild(para3);
        document.getElementById(currentId3).innerHTML = itemPrice3;
      } catch (err) {
        var para3 = document.createElement("div");
        para3.innerHTML = "<div class='priceContainer'></div>";
        node3 = document.createTextNode("N/A");
        para3.className = "d-none d-sm-block col-sm-2";
        para3.appendChild(node3);
        var getPricesContainer = document.getElementById("pricesContainer");
        priceContainerWrapper.appendChild(para3);
      }
    }
    //price 4
    if (selectedStyles.length >= 4) {
      try {
        var para4 = document.createElement("div");
        var currentId4 = "price4" + priceCount;
        para4.innerHTML = "<div class='priceContainer' id='" + currentId4 + "'></div>";
        var itemPrice4 = window[selectedStyles[3]][item];
        itemPrice4 = Math.round(itemPrice4 * discount);

        para4.className = "d-none d-sm-block col-sm-2";
        var getPricesContainer = document.getElementById("pricesContainer");
        priceContainerWrapper.appendChild(para4);
        document.getElementById(currentId4).innerHTML = itemPrice4;
      } catch (err) {
        var para4 = document.createElement("div");
        para4.innerHTML = "<div class='priceContainer'></div>";
        node4 = document.createTextNode("N/A");
        para4.className = "d-none d-sm-block col-sm-2";
        para4.appendChild(node4);
        var getPricesContainer = document.getElementById("pricesContainer");
        priceContainerWrapper.appendChild(para4);
      }
    }
    //quantity box must be here because itemprices are not defined yet
    paraQ.innerHTML = "<input type='number' value='1' id='quantityInput" + rowIdNum + "' oninput='quantityChanged(" + 'quantityInput' + rowIdNum + ',' + itemPrice1 + ',' + itemPrice2 + ',' + itemPrice3 + ',' + itemPrice4 + ',' + currentId1 + ',' + currentId2 + ',' + currentId3 + ',' + currentId4 + ")' style='width:40px;'>";

    // delete button

    //  try {


    var deleteButttonDiv = document.createElement("div");
    deleteButttonDiv.innerHTML = '<button class="deleteButton btn d-print-none" onclick="deleteItem(' + rowId + "," + currentId1 + "," + currentId2 + "," + currentId3 + "," + currentId4 + ')">Delete</button>';
    deleteButttonDiv.className = "d-none d-sm-block col-sm-1";
    priceContainerWrapper.appendChild(deleteButttonDiv);

    rowIdNum += 1;
    priceCount += 1;
    /*  } catch (err) {
        console.log("error");
      }*/


    //totalS


    if (Number.isInteger(Number(itemPrice1))) {
      total1 += Number(itemPrice1);
      document.getElementById("total1Container").innerHTML = total1;
    }

    if (Number.isInteger(Number(itemPrice2))) {
      total2 += Number(itemPrice2);
      document.getElementById("total2Container").innerHTML = total2;
    }


    if (Number.isInteger(Number(itemPrice3))) {
      total3 += Number(itemPrice3);
      document.getElementById("total3Container").innerHTML = total3;
    }

    if (Number.isInteger(Number(itemPrice4))) {
      total4 += Number(itemPrice4);
      document.getElementById("total4Container").innerHTML = total4;
    }




    window.scrollTo(0, document.body.scrollHeight);
  } else if (styleSelected == false && validInput == true || styleSelected == false && validInput == false) {
    alert("Please Select a style")
  } else if (validInput == false && styleSelected == true) {
    alert("Invalid item")
  }

}
