// === Data Menu ===
const dataMenu = [
  { kategori: "Mie Goreng", nama: "Mie Goreng Original", harga: 15000 },
  { kategori: "Mie Goreng", nama: "Mie Goreng Pedas", harga: 16000 },
  { kategori: "Mie Goreng", nama: "Mie Goreng Seafood", harga: 20000 },
  { kategori: "Mie Kuah", nama: "Mie Kuah Ayam", harga: 17000 },
  { kategori: "Mie Kuah", nama: "Mie Kuah Bakso", harga: 18000 },
  { kategori: "Mie Kuah", nama: "Mie Kuah Seafood", harga: 21000 },
  { kategori: "Tambahan", nama: "Telur Ceplok", harga: 5000 },
  { kategori: "Tambahan", nama: "Bakso Tambahan", harga: 6000 },
  { kategori: "Tambahan", nama: "Kerupuk", harga: 3000 }
];

// === State ===
let keranjang = [];
let kategoriAktif = "Semua";

// === Elemen DOM ===
const daftarMenu = document.getElementById("daftar-menu");
const isiKeranjang = document.getElementById("isi-keranjang");
const totalKeseluruhan = document.getElementById("total-keseluruhan-harga");
const tabelKeranjang = document.getElementById("tabel-keranjang");
const keranjangKosong = document.getElementById("keranjang-kosong");
const totalContainer = document.getElementById("total-container");
const btnPesan = document.getElementById("btn-pesan");
const filterBar = document.getElementById("filter-bar");

// === Inisialisasi ===
document.addEventListener("DOMContentLoaded", () => {
  renderFilter();
  renderMenu();
  renderKeranjang();
});

// === Render Filter Kategori ===
function renderFilter() {
  const kategoriUnik = ["Semua", ...new Set(dataMenu.map(item => item.kategori))];
  filterBar.innerHTML = kategoriUnik
    .map(
      kategori => `
      <button class="filter-btn ${kategori === kategoriAktif ? "active" : ""}" 
        onclick="filterKategori('${kategori}')">${kategori}</button>
    `
    )
    .join("");
}

function filterKategori(kategori) {
  kategoriAktif = kategori;
  renderFilter();
  renderMenu();
}

// === Render Menu ===
function renderMenu() {
  let dataTampil = dataMenu;
  if (kategoriAktif !== "Semua") {
    dataTampil = dataMenu.filter(item => item.kategori === kategoriAktif);
  }

  const kategoriGroup = dataTampil.reduce((acc, item) => {
    if (!acc[item.kategori]) acc[item.kategori] = [];
    acc[item.kategori].push(item);
    return acc;
  }, {});

  daftarMenu.innerHTML = Object.keys(kategoriGroup)
    .map(kategori => {
      const rows = kategoriGroup[kategori]
        .map(
          (item, index) => `
          <tr>
            <td>${item.nama}</td>
            <td>Rp ${item.harga.toLocaleString()}</td>
            <td>
              <div class="quantity-controls">
                <button class="btn btn-kurang" onclick="ubahJumlah('${item.nama}', -1)">-</button>
                <span class="quantity-display">${ambilJumlah(item.nama)}</span>
                <button class="btn btn-tambah" onclick="ubahJumlah('${item.nama}', 1)">+</button>
              </div>
            </td>
          </tr>
        `
        )
        .join("");

      return `
        <div class="category-section expanded">
          <div class="category-title">
            <h3>${kategori}</h3>
          </div>
          <table class="category-table">${rows}</table>
        </div>
      `;
    })
    .join("");
}

// === Ubah Jumlah Pesanan ===
function ubahJumlah(namaMenu, delta) {
  const item = dataMenu.find(m => m.nama === namaMenu);
  if (!item) return;

  const existing = keranjang.find(i => i.nama === namaMenu);
  if (existing) {
    existing.jumlah += delta;
    if (existing.jumlah <= 0) {
      keranjang = keranjang.filter(i => i.nama !== namaMenu);
    }
  } else if (delta > 0) {
    keranjang.push({ ...item, jumlah: 1 });
  }

  renderMenu();
  renderKeranjang();
}

// === Ambil Jumlah dari Keranjang ===
function ambilJumlah(namaMenu) {
  const item = keranjang.find(i => i.nama === namaMenu);
  return item ? item.jumlah : 0;
}

// === Render Keranjang ===
function renderKeranjang() {
  if (keranjang.length === 0) {
    tabelKeranjang.classList.add("hidden");
    keranjangKosong.classList.remove("hidden");
    totalContainer.classList.add("hidden");
    btnPesan.disabled = true;
    return;
  }

  tabelKeranjang.classList.remove("hidden");
  keranjangKosong.classList.add("hidden");
  totalContainer.classList.remove("hidden");
  btnPesan.disabled = false;

  isiKeranjang.innerHTML = keranjang
    .map(
      item => `
      <tr>
        <td>${item.nama}</td>
        <td>${item.jumlah}</td>
        <td>Rp ${item.harga.toLocaleString()}</td>
        <td>Rp ${(item.harga * item.jumlah).toLocaleString()}</td>
        <td>
          <button class="btn btn-kurang" onclick="ubahJumlah('${item.nama}', -1)">-</button>
          <button class="btn btn-tambah" onclick="ubahJumlah('${item.nama}', 1)">+</button>
        </td>
      </tr>
    `
    )
    .join("");

  const totalHarga = keranjang.reduce((acc, i) => acc + i.harga * i.jumlah, 0);
  totalKeseluruhan.textContent = `Rp ${totalHarga.toLocaleString()}`;
}

// === Tombol Pesan ===
btnPesan.addEventListener("click", () => {
  const pesanWA = keranjang
    .map(i => `${i.nama} x${i.jumlah} = Rp ${(i.harga * i.jumlah).toLocaleString()}`)
    .join("\n");
  const total = keranjang.reduce((acc, i) => acc + i.harga * i.jumlah, 0);
  const teks = `Halo! Saya mau pesan:\n\n${pesanWA}\n\nTotal: Rp ${total.toLocaleString()}\n\nTerima kasih! 🙌`;
  const url = `https://wa.me/?text=${encodeURIComponent(teks)}`;
  window.open(url, "_blank");
});
