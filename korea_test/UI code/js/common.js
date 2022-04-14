'use strict'

window.onload = function(){
    let outTemp = [32,28,35,27,26,32,38];
    let total = 0;
    let list="";
    let num = 0;
    
    for(let i=0; i<outTemp.length; i++){
        total += outTemp[i]
    }
    let tempAvg = Math.round(total / 7);
    
    list += "<table>"
    list += "<tr>"
    list += "<h1>NO 온도</h1>"
    for(let i=num; i<outTemp.length; i++){
        list += `<tr><td>${num+=1}</td><td>${outTemp[i]}</td></tr>`;
    }
    list += "</tr>"
    list += `<tr> <td> 평균 ${tempAvg} <td></tr>`
    list += "</table>"

    document.body.innerHTML = list
}
