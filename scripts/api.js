const userName = document.querySelectorAll('.profi__item>h6');
// console.log(userName);

const names=[];
fetch("https://fakestoreapi.com/users?limit=3")
  .then((res) => res.json())
  .then((json) => {
    for (const user of json) {
        names.push(user.name.firstname);   
    }
    userName.forEach((elem, i)=>elem.innerHTML+=names[i])
  });



























  
// https://codesandbox.io/s/ecstatic-mountain-u25tr?file=/src/index.js:0-401