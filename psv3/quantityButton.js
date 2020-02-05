function quantityChanged(rowNumber, itemPrice1, itemPrice2, itemPrice3, itemPrice4, currentId1, currentId2, currentId3, currentId4) {

  try {
    total1 -= currentId1.innerHTML;
  } catch (err) {};
  try {
    total2 -= currentId2.innerHTML;
  } catch (err) {};
  try {
    total3 -= currentId3.innerHTML;
  } catch (err) {};
  try {
    total4 -= currentId4.innerHTML;
  } catch (err) {};


  var inputValue = rowNumber.value;

  try {
    currentId1.innerHTML = inputValue * itemPrice1;
  } catch (err) {};
  try {
    currentId2.innerHTML = inputValue * itemPrice2;
  } catch (err) {};
  try {
    currentId3.innerHTML = inputValue * itemPrice3;
  } catch (err) {};
  try {
    currentId4.innerHTML = inputValue * itemPrice4;
  } catch (err) {};


  //update totals
  try {
    total1 += Number(currentId1.innerHTML);
    document.getElementById("total1Container").innerHTML = total1;
  } catch (err) {};
  try {
    total2 += Number(currentId2.innerHTML);
    document.getElementById("total2Container").innerHTML = total2;
  } catch (err) {};
  try {
    total3 += Number(currentId3.innerHTML);
    document.getElementById("total3Container").innerHTML = total3;
  } catch (err) {};
  try {
    total4 += Number(currentId4.innerHTML);
    document.getElementById("total4Container").innerHTML = total4;
  } catch (err) {};



};
