const btnLihatPengajuan = document.getElementById("lihat-pengajuan");
const btnKembaliLayanan = document.getElementById("kembali-layanan");

btnLihatPengajuan.addEventListener("click", function () {
  // Redirect to pengesahan-ta.html
  window.location.href = "./pengesahan-ta.html";
});

btnKembaliLayanan.addEventListener("click", function () {
  // Redirect to layanan-administrasi.html
  window.location.href = "./layanan-administrasi.html";
});
