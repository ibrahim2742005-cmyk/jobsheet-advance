/**
 * LATIHAN 2: FILTER PRODUK
 *
 * Deskripsi:
 * - Input: Array produk, kategori filter
 * - Output: Tampilkan produk sesuai kategori
 * - Konsep: Array.filter() untuk menyaring data
 */

// Data produk (Array of Objects)
const produkList = [
  {
    id: 1,
    nama: "Laptop",
    kategori: "elektronik",
    harga: 5000000,
    emoji: "💻",
  },
  {
    id: 2,
    nama: "Smartphone",
    kategori: "elektronik",
    harga: 3000000,
    emoji: "📱",
  },
  {
    id: 3,
    nama: "Headphone",
    kategori: "elektronik",
    harga: 500000,
    emoji: "🎧",
  },
  { id: 4, nama: "T-Shirt", kategori: "fashion", harga: 100000, emoji: "👕" },
  {
    id: 5,
    nama: "Celana Jeans",
    kategori: "fashion",
    harga: 200000,
    emoji: "👖",
  },
  { id: 6, nama: "Sepatu", kategori: "fashion", harga: 300000, emoji: "👟" },
  { id: 7, nama: "Pizza", kategori: "food", harga: 80000, emoji: "🍕" },
  { id: 8, nama: "Burger", kategori: "food", harga: 50000, emoji: "🍔" },
  { id: 9, nama: "Ice Cream", kategori: "food", harga: 30000, emoji: "🍦" },
];

// Variabel global untuk kategori aktif
let kategoriAktif = "semua";

// Fungsi format Rupiah
function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(angka);
}

// Fungsi Filter Produk
function filterProduk(kategori) {
  // LANGKAH 1: Simpan kategori yang dipilih
  kategoriAktif = kategori;

  // LANGKAH 2: Update button active
  updateButtonActive();

  // LANGKAH 3: Filter produk
  let produkTerfilter;

  if (kategori === "semua") {
    // Jika pilih "Semua", tampilkan semua produk
    produkTerfilter = produkList;
  } else {
    // Jika pilih kategori tertentu, gunakan .filter()
    produkTerfilter = produkList.filter(
      (produk) => produk.kategori === kategori,
    );
  }

  // LANGKAH 4: Tampilkan produk di HTML
  tampilkanProduk(produkTerfilter);

  // LANGKAH 5: Log ke console
  console.log("Filter kategori:", kategori);
  console.log("Jumlah produk:", produkTerfilter.length);
  console.table(produkTerfilter);
}

// Fungsi Tampilkan Produk di Grid
function tampilkanProduk(daftarProduk) {
  const grid = document.getElementById("produksGrid");
  const jumlahElement = document.getElementById("jumlahProduk");

  // Reset HTML grid
  grid.innerHTML = "";

  // Update jumlah produk
  jumlahElement.textContent = daftarProduk.length;

  // Jika tidak ada produk
  if (daftarProduk.length === 0) {
    grid.innerHTML =
      '<div class="empty-state"><p>Tidak ada produk dalam kategori ini</p></div>';
    return;
  }

  // LANGKAH 1: Loop setiap produk
  daftarProduk.forEach((produk) => {
    // LANGKAH 2: Buat HTML card untuk setiap produk
    const card = `
            <div class="product-card">
                <div class="product-image">${produk.emoji}</div>
                <div class="product-info">
                    <div class="product-name">${produk.nama}</div>
                    <span class="product-category">${produk.kategori}</span>
                    <div class="product-price">${formatRupiah(produk.harga)}</div>
                </div>
            </div>
        `;

    // LANGKAH 3: Tambahkan ke grid
    grid.innerHTML += card;
  });
}

// Fungsi Update Button Active
function updateButtonActive() {
  // Ambil semua button filter
  const buttons = document.querySelectorAll(".filter-btn");

  // Loop dan update class active
  buttons.forEach((button) => {
    button.classList.remove("active");

    // Jika text button sama dengan kategori aktif, tambah class active
    if (button.textContent.toLowerCase() === kategoriAktif) {
      button.classList.add("active");
    }

    // Khusus untuk button "Semua"
    if (kategoriAktif === "semua" && button.textContent === "Semua") {
      button.classList.add("active");
    }
  });
}

// Jalankan saat page load
window.addEventListener("load", function () {
  console.log("=== LATIHAN 2: FILTER PRODUK ===");
  console.log("Total produk:", produkList.length);
  console.table(produkList);

  // Tampilkan semua produk saat pertama kali load
  filterProduk("semua");
});
