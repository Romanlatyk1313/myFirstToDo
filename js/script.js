const todoList = document.getElementById("todoList");
const send = document.getElementById("send");
const clear = document.getElementById("clear");

const inputMessage = document.getElementById("inputMessage");
addMessage();
function addMessage(){
  send.addEventListener('click', function(e){
e.preventDefault();
todoList.innerHTML +=`
<div class='addMessag'>
<div class='innerText'>${inputMessage.value} </div>
<a href='#'>X</a>
</div>
`
inputMessage.value = '';
  })
}
todoList.addEventListener('click', function(ev){
  if(ev.target.tagName === 'DIV') {
    ev.target.classList.toggle('marked');
  } else if(ev.target.tagName === "A") {
    var div = ev.target.parentNode;
    div.remove();
 }
}, false);
clear.addEventListener('click', function(e){
  e.preventDefault();
  todoList.innerText = '';
})


