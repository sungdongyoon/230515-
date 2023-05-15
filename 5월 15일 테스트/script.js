let isStarted = false;
const numButton = document.querySelector(".num_button");
const result = document.querySelector(".result");

numButton.addEventListener("click", randomNum = () => {
  if(isStarted === false) {
    isStarted = true;
    let random = Math.floor(Math.random() * 1000000);
    let resultNum = String(random).padStart(6, "0");

    result.innerText = resultNum;

    let time = 180;
    document.querySelector(".complete_button").disabled = false;
    function timer() {
      if(time >= 0) {
        let min = Math.floor(time / 60);
        let sec = String(time%60).padStart(2, "0");
        document.querySelector(".time").innerText = `${min}:${sec}`;
        time = time - 1;
      } else {
        document.querySelector(".complete_button").disabled = true;
        isStarted = false;
      }
    }

    let completeButton = document.querySelector(".complete_button");
    completeButton.addEventListener("click", () => {
      alert("인증이 완료되었습니다");
    })

    setInterval(timer, 1000);
  } else {

  }
})


const changeFocus1 = () => {
  let phone1 = document.querySelector(".phone1").value;
  if(phone1.length === 3) {
    document.querySelector(".phone2").focus();
  }
}
const changeFocus2 = () => {
  let phone2 = document.querySelector(".phone2").value;
  if(phone2.length === 4) {
    document.querySelector(".phone3").focus();
  }
}
const changeFocus3 = () => {
  let phone1 = document.querySelector(".phone1").value;
  let phone2 = document.querySelector(".phone2").value;
  let phone3 = document.querySelector(".phone3").value;

  if(phone1 && phone2 && phone3) {
    numButton.disabled = false;
  } else {
    numButton.disabled = true;
  }
}
changeFocus1();
changeFocus2();
changeFocus3();




const joinBtn = document.querySelector(".join_btn");

joinBtn.addEventListener("click", () => {
  alert("회원가입을 축하합니다");
})