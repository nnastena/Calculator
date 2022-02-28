let a=[]
let b=[]
let math = ''

const firstNum = document.getElementById("firstNum");
firstNum.innerHTML = ''
const secondNum = document.getElementById("secondNum");
secondNum.innerHTML = ''
const mathSign = document.getElementById("mathSign");
mathSign.innerHTML = ''
const mathResult = document.getElementById("mathResult");
mathResult.innerHTML = ''

function clearAll(){
    a=[]
    b=[]
    math=''
    firstNum.innerHTML = ''
    secondNum.innerHTML =''
    mathSign.innerHTML = ''
    mathResult.innerHTML = ''
}

function addSign(n){

    if(a.length == 0){
        alert("Сначала введите число")
    }
    else{
        math = n;
        mathSign.innerHTML = n;
        mathResult.innerHTML = ''
    }
}

function addNum(i){
    if(math==''){
        a.push(i)
        firstNum.innerHTML = a.join('')
    }else{
        b.push(i)
        secondNum.innerHTML = b.join('')
    }
    mathResult.innerHTML = ''
}

function deleteByOne(){
    if(b.length>0){
        b.pop()
        secondNum.innerHTML = b.join('')
    }
    else if(math!=''){
        math=''
        mathSign.innerHTML = ''
    }
    else if(a.length>0){
        a.pop()
        firstNum.innerHTML = a.join('')
    }
    mathResult.innerHTML = ''
}

function addPoint(){
    if(math=='' && a.includes('.')==false && a.length!=0){
        a.push('.')
        firstNum.innerHTML = a.join('')
    }
    if(math!='' && b.includes('.')==false && b.length!=0){
        b.push('.')
        secondNum.innerHTML = b.join('')
    }
}

function getResult(){
    
    if(math=='+'){
        mathResult.innerHTML = parseFloat(a.join('')) + parseFloat(b.join(''))
    }
    if(math=='-'){
        mathResult.innerHTML = parseFloat(a.join('')) - parseFloat(b.join(''))
    }
    if(math=='*'){
        mathResult.innerHTML = parseFloat(a.join('')) * parseFloat(b.join(''))
    }
    if(math=='/'){
        if(parseFloat(b.join(''))==0) 
        {   alert("На 0 делить нельзя")}
        else
        mathResult.innerHTML = parseFloat(a.join('')) / parseFloat(b.join(''))
    }

}