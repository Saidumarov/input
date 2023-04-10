

// qushuv
function ok() {
    let a = Number(document.getElementById("a").value)
    let b = Number(document.getElementById("b").value)
    let res = a + b;
    return alert("Natija =  "+ res)
}



//   yangi prompt ga chiqarish

function okk(){
    let ism = prompt("ismingizni kiriting" )
    let teskariism = "";

    for (let i = ism.length -1; i>=0; i--) {
     teskariism += ism[i];}
    
    return alert ("Natija =  "+ teskariism)


}


// inputga chiqarish

function ook(){
    let ism = String(document.getElementById ("c") .value)
    let teskariism = "";

    for (let i = ism.length -1; i>=0; i--) {
     teskariism += ism[i];}
    
    return alert ("Natija =  "+  teskariism)


}