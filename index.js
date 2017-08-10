var sentence = 'hello world my name is john doe, goodbye forever world'
document.addEventListener('DOMContentLoaded', function(){
   
   
var div= document.createElement('div')
var button= document.createElement('button')
var inner= document.createTextNode("create alert")
button.appendChild(inner)
button.addEventListener('click', function(){
    
    alert('You clicked the crap outta that button')
})


document.body.appendChild(div)
div.className= 'middle'
div.appendChild(button)

var but2 = document.getElementById('btn2')
but2.addEventListener('click', function(){
    alert(document.getElementById('id1').value)
});

var div3 = document.getElementById('work')
div3.addEventListener('mouseenter', function(){
    div3.style.backgroundColor= 'red'
});
div3.addEventListener('mouseout', function(){
    div3.style.backgroundColor= 'green'
})


var thing= document.getElementById('para')
thing.addEventListener('click', function(){
    thing.style.color= getRandomColor()
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

var thing2 = document.getElementById('btn3')
thing2.addEventListener('click', function(){
    var p= document.createElement('p');
    var text=document.createTextNode("Dylan")
    p.appendChild(text)
    thing2.appendChild(p)
})


var friends=['bob', 'carl', 'tammy', 'dwayne', 'wanda', 'ruth', 'ruphus', 'larry', ' lewis', 'clark']
var addList= document.getElementById('list')
var bnt4 = document.getElementById('btn4')
btn4.addEventListener('click', function(){
for(i=0; i<friends.length; i++){
var li= document.createElement('li')
li.innerHTML=friends[i]
addList.appendChild(li)
}
})

 var res = sentence.split(" ");
 console.log(res)
 var addList= document.getElementById('list')
var btn5= document.getElementById('btn5')
var lis= document.getElementsByTagName('li')
btn5.addEventListener('click',function(){
    for(i=0; i<friends.length; i++){
lis[i].innerHTML=res[i]
// addList.appendChild(lis)
}
})



 });










