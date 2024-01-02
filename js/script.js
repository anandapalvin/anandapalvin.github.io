let btnSubmit = document.getElementById("btnSubmit");

let carts = [];

function submitHandler() {
  let id;
  if (carts.length === 0) {
    id = 1;
  } else {
    id = carts[carts.length - 1].id + 1;
  }
  let BarangValue = document.getElementById("Barang").value;
  let HargaValue = document.getElementById("Harga").value;
  let NamaValue = document.getElementById("Nama").value;

  let tempObj = {
    id,
    Nama: BarangValue,
    Harga: +HargaValue,
  };
  document.getElementById("namaCarts").innerHTML = NamaValue;
  carts.push(tempObj);
  getCarts();
  //   console.log(carts);
}

function getCarts() {
  let tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  carts.forEach((cart) => {
    tbody.innerHTML += `<tr>
        <td>${cart.id}</td>
        <td>${cart.Nama}</td>
        <td>${cart.Harga}</td>
        </tr>`;
  });
}

let BtnPrint = document.getElementById("btnPrint");

btnSubmit.addEventListener("click", submitHandler);

function printHandler() {
  //   console.log("Cetak");
  document.querySelector(".form-box").style.display = "none";
  BtnPrint.style.display = "none";
  window.print();
}

BtnPrint.addEventListener("click", printHandler);
