/**
 * LATIHAN 1: KALKULATOR DISKON
 *
 * Deskripsi:
 * - Input: Harga barang dan persentase diskon
 * - Output: Harga asli, potongan harga, dan harga akhir
 * - Formula: Potongan = Harga × (Diskon / 100)
 *           Harga Akhir = Harga - Potongan
 */

// Fungsi untuk format Rupiah
function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(angka);
}

// Fungsi utama untuk hitung diskon
function hitungDiskon() {
  // LANGKAH 1: Ambil nilai dari input di HTML
  const hargaInput = document.getElementById("harga").value;
  const diskonInput = document.getElementById("diskon").value;

  // LANGKAH 2: Validasi - cek apakah input kosong atau tidak valid
  if (hargaInput === "" || diskonInput === "") {
    alert("⚠️ Masukkan harga dan diskon terlebih dahulu!");
    return;
  }

  // LANGKAH 3: Ubah dari string ke angka
  const harga = parseFloat(hargaInput);
  const diskon = parseFloat(diskonInput);

  // LANGKAH 4: Cek apakah angka valid
  if (harga < 0 || diskon < 0) {
    alert("⚠️ Harga dan diskon tidak boleh negatif!");
    return;
  }

  if (diskon > 100) {
    alert("⚠️ Diskon tidak boleh lebih dari 100%!");
    return;
  }

  // LANGKAH 5: Hitung potongan harga
  const potongan = harga * (diskon / 100);

  // LANGKAH 6: Hitung harga akhir
  const hargaAkhir = harga - potongan;

  // LANGKAH 7: Tampilkan hasil di HTML
  document.getElementById("hasilHargaAsli").textContent = formatRupiah(harga);
  document.getElementById("hasilPotongan").textContent = formatRupiah(potongan);
  document.getElementById("hasilHargaAkhir").textContent =
    formatRupiah(hargaAkhir);

  // LANGKAH 8: Log ke console untuk debugging
  console.log("=== HASIL HITUNG DISKON ===");
  console.log("Harga Asli:", harga);
  console.log("Diskon:", diskon + "%");
  console.log("Potongan:", potongan);
  console.log("Harga Akhir:", hargaAkhir);
}

// Jalankan hitungDiskon saat page pertama kali load
window.addEventListener("load", function () {
  hitungDiskon();
});

// Bonus: Update otomatis ketika input berubah
document.getElementById("harga").addEventListener("change", hitungDiskon);
document.getElementById("diskon").addEventListener("change", hitungDiskon);
