let produk = [
    {nama: "Laptop Lama", desk: "Haloo aku Laptop Lama", harga: "Rp 7.000.000"},
    {nama: "Laptop Baru", desk: "Haloo aku Laptop Baru", harga: "Rp 8.000.000"},
    {nama: "Laptop Sedang", desk: "Haloo aku Laptop Sedang", harga: "Rp 7.000.000"},
];

function renderCards() {
    const container = document.getElementById("produkgrid");
    container.innerHTML ="";

    produk.forEach((produk, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <h3>${produk.nama}</h3>
        <p>${produk.desk}</p>
        <p><strong>Harga:</strong> ${produk.harga}</p>
        <button onclick="hapusproduk(${index})">Hapus</button>
        `;
        container.appendChild(card);
    });
}

function tambahProduks() {
    const nama = document.getElementById("namaproduk").value.trim();
    const desk = document.getElementById("deskproduk").value.trim();
    const harga = document.getElementById("hargaproduk").value.trim();

    if(!nama ||!desk ||!harga) {
        Swal.fire({
            icon: `error`,
            tittle: `Gagal!`,
            text: `Semua field harus diisi.`,
        });
        return;
    }

    produk.push({nama, desk, harga});
    renderCards();

    document.getElementById("namaproduk").value = "",
    document.getElementById("deskproduk").value = "",
    document.getElementById("hargaproduk").value = "",

    Swal.fire({
        icon: `sukses`,
        tittle: `Berhasil`,
        text: `Produk berhasil ditambahkan`,
    });
}

function hapusproduk(index) {
    Swal.fire({
        title: 'Yakin?',
        text: "Produk akan dihapus!",
        icon: `warning`,
        showCancelButton: true,
        confirmButtonColor: `#d33`,
        cancelButtonColor: `#3085d6`,
        confirmButtonText: 'Ya, hapus!'
    }).then((result) => {
    if (result.isConfirmed) {
        products.splice(index, 1);
        renderCards();
        Swal.fire('Dihapus!', 'Produk telah dihapus.', 'success');
    }
    });
}

renderCards();

const detailbutton = document.getElementById("detailbutton");
const detailbox = document.getElementById("detaildeskripsi");

detailbutton.addEventListener("click", function() {
    const isVisible = detailbox.style.display === "block";

    if (isVisible) {
        detailbox.style.display = "none";
        detailbutton.textContent = "Lihat Detail";
    } else {
        detailbox.style.display = "block";
        detailbutton.textContent = "Sembunyikan Detail";
    }
});

