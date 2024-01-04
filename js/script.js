// Menampilkan halaman pertama saat halaman dimuat
showPage("page1");

function showPage(pageId) {
  // Menyembunyikan semua halaman
  var pages = document.querySelectorAll(".page");
  pages.forEach(function (page) {
    page.classList.remove("active");
  });

  // Menampilkan halaman yang dipilih
  var selectedPage = document.getElementById(pageId);
  selectedPage.classList.add("active");
}

function calculateArea() {
  var base = parseFloat(document.getElementById("base").value);
  var height = parseFloat(document.getElementById("height").value);

  if (!isNaN(base) && !isNaN(height)) {
    var area = 0.5 * base * height;
    document.getElementById("area").innerText = area;
  } else {
    alert("Masukkan angka yang valid untuk alas dan tinggi.");
  }
}

function resetArea() {
  // Reset nilai input
  document.getElementById("base").value = "";
  document.getElementById("height").value = "";

  // Reset nilai output
  document.getElementById("area").innerText = "....";
}

function calculatePerimeter() {
  var sideA = parseFloat(document.getElementById("sideA").value);
  var sideB = parseFloat(document.getElementById("sideB").value);
  var sideC = parseFloat(document.getElementById("sideC").value);

  if (isValidInput(sideA) && isValidInput(sideB) && isValidInput(sideC)) {
    var perimeter = sideA + sideB + sideC;
    document.getElementById("hasil").textContent =
      "Keliling segitiga tersebut adalah: " + perimeter;
  } else {
    document.getElementById("hasil").textContent =
      "Masukkan panjang sisi yang valid.";
  }
}

function resetPerimeter() {
  var sideA = (document.getElementById("sideA").value = "");
  var sideB = (document.getElementById("sideB").value = "");
  var sideC = (document.getElementById("sideC").value = "");

  document.getElementById("hasil").textContent =
    "Keliling segitiga tersebut adalah:....";
}

function isValidInput(value) {
  return !isNaN(value) && value > 0;
}
