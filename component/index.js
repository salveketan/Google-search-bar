// getting all required elements
var search_input = document.querySelector(".input");
var icon = search_input.querySelector(".icon");
var link = search_input.querySelector("a");
var input = search_input.querySelector("input");
var suggBox = search_input.querySelector(".box");
var website;

function select(e) {
    let selectData = e.textContent;
    input.value = selectData;
}

input.onkeyup = (e) => {
    let data = e.target.value;
    let bag = [];
    if (data) {
        icon.onclick = () => {
            website = `https://www.google.com/search`;
            link.setAttribute("href", website);
            link.click();
        }
        bag = countrys.filter((e) => {
            return e.countryName.toLocaleLowerCase().startsWith(data.toLocaleLowerCase());
        });
        bag = bag.map((e) => {
            return e = `<li>${e.countryName}</li>`;
        });
        search_input.classList.add("active");
        showList(bag);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {

            allList[i].setAttribute("onclick", "select(this)");
        }
    }
}
function showList(e) {
    let data;
    if (!e.length) {
        userValue = input.value;
        data = `<li>${userValue}</li>`;
    } else {
        data = e.join('');
    }
    suggBox.innerHTML = data;
}
