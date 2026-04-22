
let list = [
    { Tensach: "Nà ná na na", soluong: 1, gia: 1000 },
    { Tensach: "A Chị Mèo", soluong: 2, gia: 12000 }
];

let ctlist = [
       {anh: "../img/adomixi.jpg", tacgia: "hơm biec, hơm nhớ", date: "30/2/2026", tomtat: "Nhạc ấn độ cực hay", ten: "Nà ná na na"}
]

let tbody = document.getElementById("list");
function render() {
    tbody.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        tbody.innerHTML += `
            <tr class="listsach">
                <td>${i+1}</td>
                <td>${list[i].Tensach}</td>
                <td>${list[i].soluong}</td>
                <td>${list[i].gia}</td>
                <td>
                    <label class="checkbox-container">
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                </td>
            </tr>`
            for(let j = 0; j < ctlist.length; j++){
                if(ctlist[j].ten === list[i].Tensach){
                    tbody.innerHTML += 
                `<tr class="detail">
                    <td colspan="4">
                        <div class="info">
                            <img class="anh" src="${ctlist[j].anh}">
                            <ul>
                                <li><strong>Tác giả:</strong> ${ctlist[j].tacgia}</li>
                                <li><strong>Ngày:</strong> ${ctlist[j].date}</li>
                                <li><strong>Tóm tắt:</strong> ${ctlist[j].tomtat}</li>
                            </ul>
                        </div>
                    </td>
                </tr>`
                }
        }
     }
}

render();

function attachEvents() {
    let rows = document.querySelectorAll(".listsach");

    rows.forEach(row => {
        row.addEventListener("click", () => {
            let next = row.nextElementSibling;

            if (next && next.classList.contains("detail")) {
                next.classList.toggle("active");
            }
        });
    });
}

attachEvents();