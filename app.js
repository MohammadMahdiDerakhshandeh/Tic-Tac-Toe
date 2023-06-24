one=document.getElementsByClassName('one')[0]
two=document.getElementsByClassName('two')[0]
three=document.getElementsByClassName('three')[0]
four=document.getElementsByClassName('four')[0]
five=document.getElementsByClassName('five')[0]
six=document.getElementsByClassName('six')[0]
seven=document.getElementsByClassName('seven')[0]
eight=document.getElementsByClassName('eight')[0]
nine=document.getElementsByClassName('nine')[0]
square =document.getElementsByClassName('square')
for (let i = 0; i < square.length; i++) {
    square[i].addEventListener('click',circle)
}
function circle(e){
    e.srcElement.innerText='O'
    e.srcElement.classList.remove('ok')
    e.srcElement.removeEventListener('click',circle)
    checkWinner()
    X()
}
function X(){
    okDiv=document.getElementsByClassName('ok')
    num=Math.floor(Math.random()*okDiv.length)
    okDiv[num].removeEventListener('click',circle)
    okDiv[num].innerText='X'
    okDiv[num].classList.remove('ok')
}
function checkWinner() {
    if (one.innerText=='O'&&two.innerText=='O'&&three.innerText=='O'||one.innerText=='X'&&two.innerText=='X'&&three.innerText=='X') {
        alert('x winner')
    }else if (four.innerText=='O'&&five.innerText=='O'&&six.innerText=='O'||four.innerText=='X'&&five.innerText=='X'&&six.innerText=='X') {
        
    }
}