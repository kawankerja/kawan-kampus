function toggleRadioInput1() {
  const radioInputDiv = document.getElementById("radio-input1");
  radioInputDiv.classList.toggle("hidden");
}
function toggleRadioInput2() {
  const radioInputDiv = document.getElementById("radio-input2");
  radioInputDiv.classList.toggle("hidden");
}
function toggleRadioInput3() {
  const radioInputDiv = document.getElementById("radio-input3");
  radioInputDiv.classList.toggle("hidden");
}

function selectDosen1(radio) {
  const dosenInput = document.getElementById("dosen1");
  dosenInput.value = radio.value;
  toggleRadioInput1();
}

function selectDosen2(radio) {
  const dosenInput = document.getElementById("dosen2");
  dosenInput.value = radio.value;
  toggleRadioInput2();
}
function selectDosen3(radio) {
  const dosenInput = document.getElementById("dosen3");
  dosenInput.value = radio.value;
  toggleRadioInput3();
}

function updateFileName() {
  const input = document.getElementById("file");
  const fileName =
    input.files.length > 0
      ? input.files[0].name
      : "Belum ada file yang diunggah";
  document.getElementById("file-name").textContent = fileName;
}
