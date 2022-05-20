let Gadget = [];
let Hp = {
foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-872fSLU9V6gDTD67JGf_-Dt6EtWZHyDp-w&usqp=CAU",
kode: "BRG001",
harga:"22000000",
nama: "Iphone 13 Pro Max",
rating: "(9.0",
stock: "10",
}
Gadget.push(Hp)
Hp2={
foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDUaJ90efU9TiE68af6Rym-3u7TOX3xF-afg&usqp=CAU",
kode: "BRG002",
harga: "50000000",
nama: "Samsung galaxy A7 lite",
rating: "6.0",
stock: "20",
}
Gadget.push(Hp2)
Hp3={
foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQutnSk7mTEQQfVxqWZEV4H33L04lUo5H_OUA&usqp=CAU",
kode: "BRG003",
harga: "70000000",
nama: "Oppo Reno 9",
rating: "5.0",
stock: "100",
}
Gadget.push(Hp3)
Hp4={
foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzElEWq-S26185_GZoH2FSpmfzUmN1lAXylA&usqp=CAU",
kode: "BRG004",
harga: "50000000",
nama: "Xiaomi Redmi Note 11",
rating: "8.0",
stock: "1000",
}
Gadget.push(Hp4)
Hp5={
foto: "https://cf.shopee.co.id/file/8fb1e6b6e5dd367fe955357e55aecc13",
kode: "BRG005",
harga: "60000000",
nama: "Vivo V7",
rating: "9.0",
stock: "50",
}
Gadget.push(Hp5)
Hp6={
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhQrtFmUA_48sZ3P_htE3g5D_jkSESEtXyfw&usqp=CAU",
    kode: "BRG006",
    harga: "500000",
    nama: "Nokia",
    rating: "4.0",
    stock: "100",
    }
    Gadget.push(Hp6)
    Hp7={
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgWppyDhF_EXEQ4RIdqvx4yVRMgVDiCe7jg&usqp=CAU",
    kode: "BRG007",
    harga: "80000000",
    nama: "ROG Pro",
    rating: "10.0",
    stock: "5",
    }
    Gadget.push(Hp7)
    Hp8={
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQknzG4o7T7veeCzO5cKcQhb85rXC3x6q5Z4Q&usqp=CAU",
    kode: "BRG008",
    harga: "100000000",
    nama: "BLACK SHARK 4 PRO",
    rating: "9.0",
    stock: "6",
    }
    Gadget.push(Hp8)
    Hp9={
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGvEBCxzu1KkAtiVsDSzp0c8kFVTCVUSO8LQ&usqp=CAU",
    kode: "BRG009",
    harga: "70000000",
    nama: "RED MAGIC 6",
    rating: "7.0",
    stock: "7",
    }
    Gadget.push(Hp9)
    Hp10={
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd-RhY2sN9465Sudg73NnVNpU7bTEfbotZw&usqp=CAU",
        kode: "BRG0010",
        harga: "90000000",
        nama: "ASUS ZENFONE MAX 2",
        rating: "8.0",
        stock: "10",
        }
        Gadget.push(Hp10)
console.log(Gadget)

function CariGadget(nama){
for (index in Gadget){
    if(Gadget[index].nama==nama){
     return true;

    }
}

}

if(CariGadget(prompt("Masukkan nama Gadget"))){
alert("ketemu senpai :3");
} else {
    alert("tidak ketemu senpai,Gomen:(");
}
        