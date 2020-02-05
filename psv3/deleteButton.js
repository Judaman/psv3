function deleteItem(rowId, currentId1, currentId2, currentId3, currentId4) {

  var parent = document.getElementById("pricesContainer");
  var child = rowId;


  try {
    total1 -= Number(currentId1.innerHTML);
    document.getElementById("total1Container").innerHTML = total1;
  } catch (err) {};
  try {
    total2 -= Number(currentId2.innerHTML);
    document.getElementById("total2Container").innerHTML = total2;
  } catch (err) {};
  try {
    total3 -= Number(currentId3.innerHTML);
    document.getElementById("total3Container").innerHTML = total3;
  } catch (err) {};
  try {
    total4 -= Number(currentId4.innerHTML);
    document.getElementById("total4Container").innerHTML = total4;
  } catch (err) {};



  parent.removeChild(child);
};
