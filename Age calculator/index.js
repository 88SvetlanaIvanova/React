const btnEl = document.getElementById("btn");
const birthdayEl = document.
getElementById("birthday");
const resultEl = document.getElementById("result");




function calculateAge(){
  const birthdayValue = birthdayEl.value;
  if(birthdayValue === ""){
    alert("Please, enter your birthday");
  }else{
    const age = getAge(birthdayValue);
    resultEl.innerHTML = `Your age is 
    ${age} ${age > 1 ? "years" : "year"} old`;
  }
  
}
function getAge(birthdayValue){
  const currentDate = new Date();
  const birthDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const months = currentDate.getMonth() - birthDate.getMonth();
  
  if(
    months < 0 ||
     (months === 0 && currentDate.getDate() < birthDate.getDate())
    ){
      age--;
    }

    return age;

  
}

btnEl.addEventListener("click", 
calculateAge);