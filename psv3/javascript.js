
var manuOptions = document.getElementById('manuOptions');
manuOptions.style.display = "none";

function openManuOptions() {
manuOptions.style.display = "inline";

}

document.getElementById('tsgStyles').style.display = "none";
function tsgClicked() {
manuOptions.style.display = "none";
document.getElementById('tsgStyles').style.display = "inline";

}

document.getElementById('cncStyles').style.display = "none";
function cncClicked() {
  manuOptions.style.display = "none";
  document.getElementById('cncStyles').style.display = "inline";

}


document.getElementById('cubitacStyles').style.display = "none";
function cubitacClicked() {
  manuOptions.style.display = "none";
  document.getElementById('cubitacStyles').style.display = "inline";

}
