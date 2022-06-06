const userName = document.querySelectorAll('.profi__item>h6');

let names=[];
fetch("https://fakestoreapi.com/users?limit=3")
  .then((res) => res.json())
  .then((json) => {
    for (const user of json) {
        names.push(user.name.firstname);   
    }
    userName.forEach((elem, i)=>elem.innerHTML+=names[i])
    localStorage.setItem('man', JSON.stringify(names))
  });

manName = JSON.parse(localStorage.getItem('man'));
userName.forEach((elem, i)=>elem.innerHTML+=manName[i])



















  
// https://codesandbox.io/s/ecstatic-mountain-u25tr?file=/src/index.js:0-401