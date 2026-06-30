// ======================
// JAM DAN TANGGAL
// ======================

function updateJam() {
    const sekarang = new Date();

    document.getElementById("tanggal").innerHTML =
        sekarang.toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });

    document.getElementById("jam").innerHTML =
        sekarang.toLocaleTimeString("id-ID");
}

setInterval(updateJam, 1000);
updateJam();

// ======================
// DATA PENGUNJUNG
// ======================

const dataPengunjung = [
120,135,140,120,160,
145,120,150,165,170,
120,155,160,140,130,
120,145,160,175,150,
120,165,170,180,120,
150,145,155,160,120
];

const tabel = document.getElementById("tabelPengunjung");

for(let i = 0; i < dataPengunjung.length; i++){

    tabel.innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td>${dataPengunjung[i]}</td>
        </tr>
    `;

}

// ======================
// HITUNG STATISTIK
// ======================

document.getElementById("btnHitung").addEventListener("click", function () {

    // Mean
    const total = dataPengunjung.reduce((a, b) => a + b, 0);
    const mean = total / dataPengunjung.length;

    // Median
    const dataUrut = [...dataPengunjung].sort((a, b) => a - b);
    const median = (dataUrut[14] + dataUrut[15]) / 2;

    // Modus
    const frekuensi = {};
    let modus = dataUrut[0];
    let maxFrekuensi = 0;

    dataPengunjung.forEach(nilai => {
        frekuensi[nilai] = (frekuensi[nilai] || 0) + 1;

        if (frekuensi[nilai] > maxFrekuensi) {
            maxFrekuensi = frekuensi[nilai];
            modus = nilai;
        }
    });

    // Tampilkan hasil
   document.getElementById("mean").textContent = mean.toFixed(2);
document.getElementById("median").textContent = median;
document.getElementById("modus").textContent = modus;

document.querySelector(".hasil").classList.add("muncul");

});

// ======================
// GRAFIK CHART.JS
// ======================

const ctx = document.getElementById("grafikPengunjung");

new Chart(ctx, {

    type: "bar",

    data: {

        labels: Array.from({length:30}, (_,i)=>"Hari "+(i+1)),

        datasets:[{

            label:"Jumlah Pengunjung",

            data:dataPengunjung,

            backgroundColor:"#28a745",

            borderColor:"#0b7dda",

            borderWidth:1

        }]

    },

    options:{

        responsive:true,

        scales:{

            y:{

                beginAtZero:true

            }

        }

    }

});
// ======================
// TOMBOL LIHAT DATA
// ======================

document.getElementById("btnData").addEventListener("click", function () {

    document.getElementById("data").scrollIntoView({

        behavior: "smooth"

    });

});