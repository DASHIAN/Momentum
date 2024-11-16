const age = parseInt(prompt("몇살이세요?"));


console.log(age);
console.log(isNaN(age));

if(isNaN(age) || age <= 0) {
    console.log("숫자를 입력하세요");
} else if (age < 18) {
    console.log("미성년자 입니다");
} else if (age >= 18 && age <= 50) {
    console.log("성년 인증 완료");
} else {
    console.log("성년 인증 완료2");
}

const title = document.querySelector(".title");
title.innerText = "GUO";
title.style.color = "blue";

function handleTitleClick(){
    title.classList.toggle("clicked");
}
title.addEventListener("click", handleTitleClick);

function clickclack() {
    console.log("clalclcl");
}

function handleqweqwe() {
    document.body.style.backgroundColor = "yellow";
}
//title.addEventListener("click", clickclack);
title.onclick = clickclack;
window.addEventListener("resize", handleqweqwe);