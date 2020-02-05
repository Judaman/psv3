function exportTableToExcel(tableID, filename = '') {

  //creat table for excell export
  var i = 0;
  var qty = "quantityInput" + i;
  var item = "item" + i;


  var itemPrice1 = "price1" + i;
  var itemPrice2 = "price2" + i;
  var itemPrice3 = "price3" + i;
  var itemPrice4 = "price4" + i;

  try {
    var syle1 = document.getElementById("style1").innerHTML;
  } catch (err) {
    var style1 = ""
  }

  try {
    var syle2 = document.getElementById("style2").innerHTML;
  } catch (err) {
    var style2 = ""
  }
  try {
    var syle3 = document.getElementById("style3").innerHTML;
  } catch (err) {
    var style3 = ""
  }
  try {
    var syle4 = document.getElementById("style4").innerHTML;
  } catch (err) {
    var style4 = ""
  }

  var tr = document.createElement("tr");
  tr.innerHTML = "<th>" + "Qty" + "</th>" + "<th>" + "Item" + "</th>" + "<th>" + syle1 + "</th>" + "<th>" + syle2 + "</th>" + "<th>" + syle3 + "</th>" + "<th>" + syle4 + "</th>";
  tableData.appendChild(tr);
  document.getElementById("tableData");


  for (i = 0; i < rowIdNum; i++) {

    qty = "quantityInput" + i;
    item = "item" + i;
    itemPrice1 = "price1" + i;
    itemPrice2 = "price2" + i;
    itemPrice3 = "price3" + i;
    itemPrice4 = "price4" + i;


    qty = document.getElementById(qty).value;
    item = document.getElementById(item).innerHTML;
    try {
      itemPrice1 = document.getElementById(itemPrice1).innerHTML;

    } catch (err) {
      itemPrice1 = "";
    }
    try {
      itemPrice2 = document.getElementById(itemPrice2).innerHTML;
    } catch (err) {
      itemPrice2 = "";
    }
    try {
      itemPrice3 = document.getElementById(itemPrice3).innerHTML;
    } catch (err) {

      itemPrice3 = "";
    }
    try {
      itemPrice4 = document.getElementById(itemPrice4).innerHTML;
    } catch (err) {
      itemPrice4 = "";
    }


    var tr = document.createElement("tr");
    tr.innerHTML = "<td>" + qty + "</td>" + "<td>" + item + "</td>" + "<td>" + itemPrice1 + "</td>" + "<td>" + itemPrice2 + "</td>" + "<td>" + itemPrice3 + "</td>" + "<td>" + itemPrice4 + "</td>";
    tableData.appendChild(tr);
    document.getElementById("tableData");

  }

  var total1 = document.getElementById("total1Container").innerHTML;
  var total2 = document.getElementById("total2Container").innerHTML;
  var total3 = document.getElementById("total3Container").innerHTML;
  var total4 = document.getElementById("total4Container").innerHTML;

  var tr = document.createElement("tr");
  tr.innerHTML = "<td>" + "" + "</td>" + "<td>" + "Total" + "</td>" + "<td>" + total1 + "</td>" + "<td>" + total2 + "</td>" + "<td>" + total3 + "</td>" + "<td>" + total4 + "</td>";
  tableData.appendChild(tr);
  document.getElementById("tableData");




  //
  var downloadLink;
  var dataType = 'application/vnd.ms-excel';
  var tableSelect = document.getElementById(tableID);
  var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20'); //dk
  filename = "Price Quote"; //dk


  // Create download link element
  downloadLink = document.createElement("a");

  document.body.appendChild(downloadLink);

  if (navigator.msSaveOrOpenBlob) {
    var blob = new Blob(['\ufeff', tableHTML], {
      type: dataType
    });
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    // Create a link to the file
    downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

    // Setting the file name
    downloadLink.download = filename;

    //triggering the function
    downloadLink.click();
  }
}
