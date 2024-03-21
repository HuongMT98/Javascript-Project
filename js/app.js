//                                      COUNT
const numCount = document.querySelector("#numcount");
const countTangNum = document.querySelector("#countTangNum");
const countGiamNum = document.querySelector("#countGiamNum");
const resetNumber = document.querySelector("#countResetNum");
let number = 0;

countTangNum.onclick = function () {
  number++;
  numCount.textContent = number;
};
countGiamNum.onclick = function () {
  number--;
  numCount.textContent = number;
};
resetNumber.onclick = function () {
  number = 0;
  numCount.textContent = number;
};

//                                      ĐÁNH ĐỀ

const soDe = document.querySelector("#soDe");
const btnDanhDe = document.querySelector("#btnDanhDe");
const btnResetDanhDe = document.querySelector("#btnResetDanhDe");

btnDanhDe.onclick = function () {
  let randomNum = Math.floor(Math.random() * 100) + 1;
  soDe.innerHTML = `Đánh con: ${randomNum} này đi`;
};
btnResetDanhDe.onclick = function () {
  soDe.innerHTML = "Đánh Đề Con Gì Đây";
};

//                                     NAVBAR
let a = document.querySelectorAll(".daddy");
a.forEach((e) => {
  e.addEventListener("click", () => {
    let b = e.querySelector(".child");
    b.classList.toggle("active");
  });
});

//                                     CHUYỂN NHIỆT ĐỘ
const textBox = document.querySelector("#textBox");
const sangDoF = document.querySelector("#sangDoF");
const sangDoC = document.querySelector("#sangDoC");
const ketQuaChuyen = document.querySelector("#ketQuaChuyen");

function chuyenSo() {
  let nhietDo;
  if (sangDoF.checked) {
    nhietDo = Number(textBox.value);
    nhietDo = (nhietDo * 9) / 5 + 32;
    ketQuaChuyen.innerHTML = nhietDo.toFixed(1) + "F";
  } else if (sangDoC.checked) {
    nhietDo = Number(textBox.value);
    nhietDo = (nhietDo - 32) * (5 / 9);
    ketQuaChuyen.innerHTML = nhietDo.toFixed(1) + "C";
  } else {
    ketQuaChuyen.innerHTML = "Vui lòng chọn loại độ nhiệt!";
  }
}

//                             TUNG XÚC XẮC

function tungXucXac() {
  const soXucXac = document.querySelector("#soXucXac").value;

  const ketQuaXucXac = document.querySelector("#ketQuaXucXac");

  const hinhAnhXucXac = document.querySelector("#hinhAnhXucXac");

  const ketQua = [];

  const hinhAnh = [];

  // Dùng for để lặp qua từng phần tử có trong input
  for (let i = 0; i < soXucXac; i++) {
    // Dùng hàm random tạo ra số ngẫu nhiên
    const randomXucXac = Math.floor(Math.random() * 6) + 1;

    // Dùng hàm push để đẩy kết quả vào mảng rỗng ketqua[]
    ketQua.push(randomXucXac);
    hinhAnh.push(`<img src="/diceImages/${randomXucXac}.png">`);
  }
  //In kết quả ra màng hình
  ketQuaXucXac.textContent = `Xúc xắc: ${ketQua.join(" - ")}`;

  hinhAnhXucXac.innerHTML = hinhAnh.join(" | ");
}

//                                 MÁY TÍNH BỎ TÚI
function addToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    document.getElementById("display").value = eval(
      document.getElementById("display").value
    );
  } catch (err) {
    document.getElementById("display").value = "Error";
  }
}
