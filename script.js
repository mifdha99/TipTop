
    // -------------------- DATA MENU (dari foto) --------------------
    const semuaMenu = {
      "Nasi": [
        { id: 1, nama: "Nasi Putih", harga: "Rp 6.000" },
        { id: 2, nama: "Nasi Goreng Ayam", harga: "Rp 35.000" },
        { id: 3, nama: "Nasi Goreng Spesial", harga: "Rp 40.000" },
        { id: 4, nama: "Nasi Goreng Sapi", harga: "Rp 40.000" },
        { id: 5, nama: "Nasi Goreng Kambing", harga: "Rp 40.000" },
        { id: 6, nama: "Nasi Goreng Pete", harga: "Rp 40.000" },
        { id: 7, nama: "Nasi Capcay Ayam", harga: "Rp 40.000" },
        { id: 8, nama: "Nasi Capcay Seafood", harga: "Rp 45.000" },
        { id: 9, nama: "Nasi Goreng Seafood", harga: "Rp 45.000" }
      ],
      "Bihun": [
        { id: 1, nama: "Bihun Ayam", harga: "Rp 18.000" },
        { id: 2, nama: "Bihun Ayam Bakso", harga: "Rp 23.000" },
        { id: 3, nama: "Bihun Ayam Pangsit Rebus", harga: "Rp 23.000" },
        { id: 4, nama: "Bihun Ayam Pangsit Goreng", harga: "Rp 26.000" },
        { id: 5, nama: "Bihun Ayam Bakso Pangsit Rebus", harga: "Rp 28.000" },
        { id: 6, nama: "Bihun Ayam Bakso Pangsit Goreng", harga: "Rp 31.000" },
        { id: 7, nama: "Bihun Goreng", harga: "Rp 35.000" },
        { id: 8, nama: "Bihun Goreng Spesial", harga: "Rp 40.000" },
        { id: 9, nama: "Bihun Masak Kuah", harga: "Rp 40.000" },
        { id: 10, nama: "Bihun Siram", harga: "Rp 40.000" },
        { id: 11, nama: "Bihun Goreng Seafood", harga: "Rp 45.000" }
      ],
      "Mie": [
        { id: 1, nama: "Mie Ayam", harga: "Rp 18.000" },
        { id: 2, nama: "Mie Ayam Bakso", harga: "Rp 23.000" },
        { id: 3, nama: "Mie Ayam Pangsit Rebus", harga: "Rp 23.000" },
        { id: 4, nama: "Mie Ayam Pangsit Goreng", harga: "Rp 26.000" },
        { id: 5, nama: "Mie Ayam Bakso Pangsit Rebus", harga: "Rp 28.000" },
        { id: 6, nama: "Mie Ayam Bakso Pangsit Goreng", harga: "Rp 31.000" },
        { id: 7, nama: "Mie Goreng", harga: "Rp 35.000" },
        { id: 8, nama: "Mie Goreng Spesial", harga: "Rp 40.000" },
        { id: 9, nama: "Mie Masak Kuah", harga: "Rp 40.000" },
        { id: 10, nama: "Mie Siram", harga: "Rp 40.000" },
        { id: 11, nama: "Mie Goreng Seafood", harga: "Rp 45.000" }
      ],
      "Kwetiau": [
        { id: 1, nama: "Kwetiau Ayam", harga: "Rp 18.000" },
        { id: 2, nama: "Kwetiau Ayam Bakso", harga: "Rp 23.000" },
        { id: 3, nama: "Kwetiau Ayam Pangsit Rebus", harga: "Rp 23.000" },
        { id: 4, nama: "Kwetiau Ayam Pangsit Goreng", harga: "Rp 26.000" },
        { id: 5, nama: "Kwetiau Ayam Bakso Pangsit Rebus", harga: "Rp 28.000" },
        { id: 6, nama: "Kwetiau Ayam Bakso Pangsit Goreng", harga: "Rp 31.000" },
        { id: 7, nama: "Kwetiau Goreng", harga: "Rp 35.000" },
        { id: 8, nama: "Kwetiau Goreng Spesial", harga: "Rp 40.000" },
        { id: 9, nama: "Kwetiau Masak Kuah", harga: "Rp 40.000" },
        { id: 10, nama: "Kwetiau Siram", harga: "Rp 40.000" },
        { id: 11, nama: "Kwetiau Goreng Seafood", harga: "Rp 45.000" }
      ],
      "Ayam": [
        { id: 1, nama: "Ayam Goreng Saos Mentega", harga: "Rp 55.000" },
        { id: 2, nama: "Ayam Goreng Kering", harga: "Rp 55.000" },
        { id: 3, nama: "Ayam Goreng Tepung", harga: "Rp 55.000" },
        { id: 4, nama: "Ayam Goreng Kecap", harga: "Rp 55.000" },
        { id: 5, nama: "Ayam Asam Manis", harga: "Rp 55.000" },
        { id: 6, nama: "Ayam Rica-Rica", harga: "Rp 55.000" },
        { id: 7, nama: "Ayam Nanking", harga: "Rp 55.000" },
        { id: 8, nama: "Ayam Lapis", harga: "Rp 45.000" },
        { id: 9, nama: "Ayam Kuluyuk", harga: "Rp 45.000" },
        { id: 10, nama: "Ayam Pete Kecap", harga: "Rp 45.000" },
        { id: 11, nama: "Ayam Cah Tauco", harga: "Rp 40.000" },
        { id: 12, nama: "Ayam Cah Kailan", harga: "Rp 40.000" },
        { id: 13, nama: "Ayam Cah Jamur", harga: "Rp 40.000" },
        { id: 14, nama: "Ayam Cah Kembang Kol", harga: "Rp 40.000" },
        { id: 15, nama: "Ayam Cah Jagung Muda", harga: "Rp 40.000" },
        { id: 16, nama: "Ayam Cah Sayur Asin", harga: "Rp 40.000" },
        { id: 17, nama: "Ayam Cah Brokoli", harga: "Rp 40.000" }
      ],
      "Sapi": [
        { id: 1, nama: "Sapi Lada Hitam", harga: "Rp 70.000" },
        { id: 2, nama: "Sapi Kuluyuk", harga: "Rp 50.000" },
        { id: 3, nama: "Sapi Pete Kecap", harga: "Rp 45.000" },
        { id: 4, nama: "Sapi Cah Tauco", harga: "Rp 45.000" },
        { id: 5, nama: "Sapi Cah Kailan", harga: "Rp 45.000" },
        { id: 6, nama: "Sapi Cah Jamur", harga: "Rp 45.000" },
        { id: 7, nama: "Sapi Cah Brokoli", harga: "Rp 45.000" },
        { id: 8, nama: "Sapi Cah Jagung Muda", harga: "Rp 45.000" },
        { id: 9, nama: "Sapi Cah Sayur Asin", harga: "Rp 45.000" },
        { id: 10, nama: "Sapi Cah Kembang Kol", harga: "Rp 45.000" },
        { id: 11, nama: "Sapi Cah Caisim", harga: "Rp 45.000" }
      ],
      "Bistik": [
        { id: 1, nama: "Bistik Sapi", harga: "Rp 70.000" },
        { id: 2, nama: "Bistik Udang", harga: "Rp 70.000" },
        { id: 3, nama: "Bistik Kakap", harga: "Rp 70.000" },
        { id: 4, nama: "Bistik Ayam", harga: "Rp 60.000" }
      ],
      "Gurame": [
        { id: 1, nama: "Gurame Asam Manis", harga: "Rp 90.000" },
        { id: 2, nama: "Gurame Tahu Tausi", harga: "Rp 90.000" },
        { id: 3, nama: "Gurame Saos Tiram", harga: "Rp 90.000" },
        { id: 4, nama: "Gurame Saos Padang", harga: "Rp 90.000" },
        { id: 5, nama: "Gurame Goreng Kering", harga: "Rp 90.000" },
        { id: 6, nama: "Gurame Kuah Sayur Asin", harga: "Rp 80.000" }
      ],
      "Kakap": [
        { id: 1, nama: "Kakap Asam Manis", harga: "Rp 85.000" },
        { id: 2, nama: "Kakap Lapis", harga: "Rp 60.000" },
        { id: 3, nama: "Kakap Angkep", harga: "Rp 50.000" },
        { id: 4, nama: "Kakap Kuah Sayur Asin", harga: "Rp 50.000" },
        { id: 5, nama: "Kakap Cah Brokoli", harga: "Rp 50.000" },
        { id: 6, nama: "Kakap Cah Jamur", harga: "Rp 50.000" },
        { id: 7, nama: "Kakap Cah Jagung Muda", harga: "Rp 50.000" },
        { id: 8, nama: "Kakap Cah Kailan", harga: "Rp 50.000" }
      ],
      "Cumi": [
        { id: 1, nama: "Cumi Goreng Saos Mentega", harga: "Rp 85.000" },
        { id: 2, nama: "Cumi Saos Padang", harga: "Rp 85.000" },
        { id: 3, nama: "Cumi Asam Manis", harga: "Rp 85.000" },
        { id: 4, nama: "Cumi Saos Tiram", harga: "Rp 85.000" },
        { id: 5, nama: "Cumi Goreng Tepung", harga: "Rp 80.000" },
        { id: 6, nama: "Cumi Cah Jamur", harga: "Rp 50.000" },
        { id: 7, nama: "Cumi Cah Jagung Muda", harga: "Rp 50.000" },
        { id: 8, nama: "Cumi Cah Kailan", harga: "Rp 50.000" },
        { id: 9, nama: "Cumi Cah Sayur Asin", harga: "Rp 50.000" },
        { id: 10, nama: "Cumi Cah Brokoli", harga: "Rp 50.000" }
      ],
      "Udang": [
        { id: 1, nama: "Udang Goreng Saos Mentega", harga: "Rp 85.000" },
        { id: 2, nama: "Udang Saos Padang", harga: "Rp 85.000" },
        { id: 3, nama: "Udang Asam Manis", harga: "Rp 85.000" },
        { id: 4, nama: "Udang Goreng Tepung", harga: "Rp 80.000" },
        { id: 5, nama: "Udang Lapis", harga: "Rp 40.000" },
        { id: 6, nama: "Udang Kuluyuk", harga: "Rp 40.000" },
        { id: 7, nama: "Udang Pete Kecap", harga: "Rp 40.000" },
        { id: 8, nama: "Udang Cah Tauco", harga: "Rp 50.000" },
        { id: 9, nama: "Udang Cah Jamur", harga: "Rp 50.000" },
        { id: 10, nama: "Udang Cah Jagung Muda", harga: "Rp 50.000" },
        { id: 11, nama: "Udang Cah Kailan", harga: "Rp 50.000" },
        { id: 12, nama: "Udang Cah Sayur Asin", harga: "Rp 50.000" },
        { id: 13, nama: "Udang Cah Brokoli", harga: "Rp 50.000" }
      ],
      "Lain-Lain": [
        { id: 1, nama: "Sapo Tahu Seafood", harga: "Rp 60.000" },
        { id: 2, nama: "Sapo Tahu Ayam", harga: "Rp 50.000" },
        { id: 3, nama: "Puyung Hay Seafood", harga: "Rp 50.000" },
        { id: 4, nama: "Puyung Hay", harga: "Rp 40.000" },
        { id: 5, nama: "Ifu Mie", harga: "Rp 45.000" },
        { id: 6, nama: "Lo Mie", harga: "Rp 45.000" },
        { id: 7, nama: "Ifu Mie Seafood", harga: "Rp 55.000" },
        { id: 8, nama: "Lo Mie Seafood", harga: "Rp 55.000" },
        { id: 9, nama: "Mun Tahu", harga: "Rp 50.000" },
        { id: 10, nama: "Mun Tahu Seafood", harga: "Rp 55.000" },
        { id: 11, nama: "Capcay Goreng Ayam", harga: "Rp 40.000" },
        { id: 12, nama: "Capcay Kuah Ayam", harga: "Rp 40.000" },
        { id: 13, nama: "Capcay Goreng Seafood", harga: "Rp 50.000" },
        { id: 14, nama: "Capcay Kuah Seafood", harga: "Rp 50.000" },
        { id: 15, nama: "Kangkung Cah Isi", harga: "Rp 40.000" },
        { id: 16, nama: "Kangkung Cah Polos", harga: "Rp 35.000" },
        { id: 17, nama: "Pangsit Cah", harga: "Rp 45.000" },
        { id: 18, nama: "Pangsit Kuah", harga: "Rp 35.000" },
        { id: 19, nama: "Pangsit Goreng", harga: "Rp 35.000" },
        { id: 20, nama: "Bakso Kuah", harga: "Rp 35.000" },
        { id: 21, nama: "Bakso Pangsit Kuah", harga: "Rp 35.000" }
      ],
      "Sedia": [
        { id: 1, nama: "Nasi Tim Ayam", harga: "Rp 25.000" },
        { id: 2, nama: "Sop Ayam", harga: "Rp 40.000" },
        { id: 3, nama: "Sop Bening", harga: "Rp 30.000" },
        { id: 4, nama: "Sop Asparagus Udang", harga: "Rp 45.000" }
      ]
    };

    // -------------------- STATE --------------------
    let keranjang = {};
    const daftarMenuEl = document.getElementById('daftar-menu');
    const filterBarEl = document.getElementById('filter-bar');
    const isiKeranjangEl = document.getElementById('isi-keranjang');
    const tabelKeranjangEl = document.getElementById('tabel-keranjang');
    const keranjangKosongEl = document.getElementById('keranjang-kosong');
    const totalContainerEl = document.getElementById('total-container');
    const totalKeseluruhanHargaEl = document.getElementById('total-keseluruhan-harga');
    const btnPesanEl = document.getElementById('btn-pesan');

    // Format display rupiah from number
    function formatRupiahNumber(num){
      return new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',minimumFractionDigits:0}).format(num);
    }
    
    // Parse harga string like "Rp 35.000" -> number 35000
    function parseHargaString(h){
      if(!h) return 0;
      try{
        return Number(String(h).replace(/[^0-9]/g,'')) || 0;
      }catch(e){return 0}
    }

    // Build filter buttons
    function buildFilterBar(){
      filterBarEl.innerHTML = '';
      const btnAll = document.createElement('button');
      btnAll.textContent = 'Semua';
      btnAll.className = 'filter-btn active';
      btnAll.dataset.cat = 'Semua';
      filterBarEl.appendChild(btnAll);

      Object.keys(semuaMenu).forEach(cat => {
        const b = document.createElement('button');
        b.className = 'filter-btn';
        b.textContent = cat;
        b.dataset.cat = cat;
        filterBarEl.appendChild(b);
      });

      filterBarEl.addEventListener('click', (e)=>{
        if(e.target && e.target.classList.contains('filter-btn')){
          const cat = e.target.dataset.cat;
          Array.from(filterBarEl.querySelectorAll('.filter-btn')).forEach(x=>x.classList.remove('active'));
          e.target.classList.add('active');
          applyFilter(cat);
        }
      });
    }

    // Render all categories and items
    function renderAllCategories(){
      daftarMenuEl.innerHTML = '';
      Object.entries(semuaMenu).forEach(([cat, items])=>{
        const section = document.createElement('div');
        section.className = 'category-section expanded';
        section.id = 'cat-' + cat.replace(/\s+/g,'_');

        const titleWrap = document.createElement('div');
        titleWrap.className = 'category-title';
        const h3 = document.createElement('h3');
        h3.textContent = '🍽️ ' + cat;
        titleWrap.appendChild(h3);

        const btnShow = document.createElement('button');
        btnShow.className = 'btn';
        btnShow.textContent = 'Lihat';
        btnShow.style.padding = '.35rem .6rem';
        btnShow.addEventListener('click', ()=>{
          if(section.classList.contains('expanded')){
            section.classList.remove('expanded');
            section.classList.add('collapsed');
            btnShow.textContent = 'Tutup';
            setTimeout(()=>{btnShow.textContent = 'Lihat';}, 400);
          } else {
            section.classList.remove('collapsed');
            section.classList.add('expanded');
          }
        });
        titleWrap.appendChild(btnShow);

        section.appendChild(titleWrap);

        // table of items
        const table = document.createElement('table');
        table.className = 'category-table';
        items.forEach(it=>{
          const tr = document.createElement('tr');
          const tdName = document.createElement('td');
          tdName.textContent = it.nama;
          const tdPrice = document.createElement('td');
          tdPrice.style.textAlign = 'right';
          tdPrice.textContent = it.harga;
          const tdBtn = document.createElement('td');
          tdBtn.style.width = '120px';
          tdBtn.style.textAlign = 'right';
          const addBtn = document.createElement('button');
          addBtn.className = 'btn btn-tambah';
          addBtn.textContent = '+ Tambah';
          addBtn.dataset.key = cat + '_' + it.id;
          addBtn.dataset.cat = cat;
          addBtn.dataset.nama = it.nama;
          addBtn.dataset.harga = it.harga;
          addBtn.addEventListener('click', ()=>{
            tambahKeKeranjang(addBtn.dataset.key, addBtn.dataset.nama, addBtn.dataset.harga);
          });
          tdBtn.appendChild(addBtn);

          tr.appendChild(tdName);
          tr.appendChild(tdPrice);
          tr.appendChild(tdBtn);
          table.appendChild(tr);
        });

        section.appendChild(table);
        daftarMenuEl.appendChild(section);
      });
    }

    function applyFilter(cat){
      if(cat === 'Semua'){
        document.querySelectorAll('.category-section').forEach(s=>{
          s.classList.remove('collapsed'); s.classList.add('expanded');
        });
        return;
      }
      document.querySelectorAll('.category-section').forEach(s=>{
        if(s.id === 'cat-' + cat.replace(/\s+/g,'_')){
          s.classList.remove('collapsed'); s.classList.add('expanded');
          s.scrollIntoView({behavior:'smooth',block:'start'});
        } else {
          s.classList.remove('expanded'); s.classList.add('collapsed');
        }
      });
    }

    // Cart functions
    function tambahKeKeranjang(key, nama, hargaStr){
      const jumlahLama = keranjang[key] ? keranjang[key].jumlah : 0;
      const hargaNum = parseHargaString(hargaStr);
      keranjang[key] = { nama: nama, harga: hargaNum, jumlah: jumlahLama + 1 };
      renderKeranjang();
    }

    function kurangiDariKeranjang(key){
      if(keranjang[key] && keranjang[key].jumlah > 1){
        keranjang[key].jumlah -= 1;
      } else {
        delete keranjang[key];
      }
      renderKeranjang();
    }

    function hapusDariKeranjang(key){
      delete keranjang[key];
      renderKeranjang();
    }

    function renderKeranjang(){
      isiKeranjangEl.innerHTML = '';
      const keys = Object.keys(keranjang);
      if(keys.length === 0){
        keranjangKosongEl.classList.remove('hidden');
        tabelKeranjangEl.classList.add('hidden');
        totalContainerEl.classList.add('hidden');
        btnPesanEl.disabled = true;
        return;
      }
      keranjangKosongEl.classList.add('hidden');
      tabelKeranjangEl.classList.remove('hidden');
      totalContainerEl.classList.remove('hidden');
      btnPesanEl.disabled = false;

      let total = 0;
      keys.forEach(k=>{
        const it = keranjang[k];
        const row = document.createElement('tr');
        
        // Nama menu
        const tdName = document.createElement('td'); 
        tdName.textContent = it.nama;
        
        // Jumlah dengan kontrol tambah/kurang
        const tdJumlah = document.createElement('td'); 
        tdJumlah.style.textAlign = 'center';
        
        const quantityControls = document.createElement('div');
        quantityControls.className = 'quantity-controls';
        
        const btnKurang = document.createElement('button');
        btnKurang.className = 'btn btn-kurang';
        btnKurang.textContent = '-';
        btnKurang.addEventListener('click', () => kurangiDariKeranjang(k));
        
        const quantityDisplay = document.createElement('span');
        quantityDisplay.className = 'quantity-display';
        quantityDisplay.textContent = it.jumlah;
        
        const btnTambah = document.createElement('button');
        btnTambah.className = 'btn btn-tambah';
        btnTambah.style.padding = '.4rem .8rem';
        btnTambah.textContent = '+';
        btnTambah.addEventListener('click', () => tambahKeKeranjang(k, it.nama, formatRupiahNumber(it.harga)));
        
        quantityControls.appendChild(btnKurang);
        quantityControls.appendChild(quantityDisplay);
        quantityControls.appendChild(btnTambah);
        tdJumlah.appendChild(quantityControls);
        
        // Harga satuan
        const tdHarga = document.createElement('td'); 
        tdHarga.style.textAlign = 'right'; 
        tdHarga.textContent = formatRupiahNumber(it.harga);
        
        // Total harga
        const tdTotal = document.createElement('td'); 
        tdTotal.style.textAlign = 'right'; 
        tdTotal.textContent = formatRupiahNumber(it.harga * it.jumlah);
        
        // Tombol hapus
        const tdAksi = document.createElement('td');
        tdAksi.style.textAlign = 'center';
        const btnHapus = document.createElement('button');
        btnHapus.className = 'btn btn-kurang';
        btnHapus.textContent = 'Hapus';
        btnHapus.addEventListener('click', () => hapusDariKeranjang(k));
        tdAksi.appendChild(btnHapus);

        row.appendChild(tdName);
        row.appendChild(tdJumlah);
        row.appendChild(tdHarga);
        row.appendChild(tdTotal);
        row.appendChild(tdAksi);
        isiKeranjangEl.appendChild(row);
        total += it.harga * it.jumlah;
      });
      totalKeseluruhanHargaEl.textContent = formatRupiahNumber(total);
    }

    function resetKeranjang(){
      keranjang = {};
      renderKeranjang();
    }

    // Pesan button behavior
    btnPesanEl.addEventListener('click', ()=>{
      if(Object.keys(keranjang).length === 0) {
        alert('Keranjang masih kosong!');
        return;
      }
      
      let detailPesanan = "Detail Pesanan:\n\n";
      Object.entries(keranjang).forEach(([key, item]) => {
        detailPesanan += `${item.nama} - ${item.jumlah} x ${formatRupiahNumber(item.harga)} = ${formatRupiahNumber(item.harga * item.jumlah)}\n`;
      });
      detailPesanan += `\nTotal: ${totalKeseluruhanHargaEl.textContent}`;
      
      if(confirm(`${detailPesanan}\n\nKonfirmasi pesanan?`)) {
        alert('Pesanan diterima! Terima kasih 😊\nPesanan akan segera diproses.');
        resetKeranjang();
      }
    });

    // Init
    buildFilterBar();
    renderAllCategories();
    renderKeranjang();
