let firstname=document.getElementById("first-name");
let lastname=document.getElementById("last-name");
let bookid=document.getElementById("book-id");
let buttonget=document.getElementById("btn-get-authors");

const option={
    method:"POST",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({
     idBook: `${bookid.value}`,
     firstName: `${firstname.value}`,
     lastName: `${lastname.value}`
    })
}


buttonget.onclick=function (){
    fetch(`https://fakerestapi.azurewebsites.net/api/v1/Authors`).then (response => response.json()).
    then(result => {for(let i=0;i<1;i++){
        authors.insertAdjacentHTML("beforeend", `<div class="author">
        <h3>
        ${result[i].firstName},${result[i].lastName}
        </h3>
        <h4>
        ${result[i].idBook}
        </h4></div>`)}});
    buttonget.setAttribute("disabled",true);};
   

document.getElementsByTagName("button")[0].addEventListener("click",(event)=>{
    event.preventDefault();
    fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors',option).then(response =>{
    console.log(response.status)       
    if(response.status==200){   
    authors.insertAdjacentHTML("beforeend", `<div class="author">
        <h3>
        ${firstname.value},${lastname.value}
        </h3>
        <h4>
        ${bookid.value}
        </h4></div>`);
    }})
})
