function pageLoaded(){
    let inputNumber=document.getElementById("inputNumber");
    let inputLimit=document.getElementById("inputLimit");
    let button=document.getElementById("button");
    let output=document.getElementById("output");

    button.addEventListener("click", sendRequest);
    function sendRequest(){
        let requst=`https://picsum.photos/v2/list?page=${inputNumber.value}&limit=${inputLimit.value}}`;
        if ((inputNumber.value>10 && inputNumber.value<0) || isNaN(+inputNumber.value)) output.innerText = 'номер вне диапазона от 1 до 10';
        if  ((inputLimit.value>10 && inputLimit.value<0) || isNaN(+inputLimit.value)) output.innerText = 'страница вне диапазона от 1 до 10';
        if (((inputNumber.value>10 && inputNumber.value<1) || isNaN(+inputNumber.value)) && ((inputLimit.value>1 && inputLimit.value<10) || isNaN(+inputLimit.value))) output.innerText = 'номер и страница вне диапазона от 1 до 10';
        else fetch(requst)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
                writeOutput(formatOutput(data))
            })
    }
    function formatOutput(data) {
        let htmlString = [];
        for (let i=0; i<data.length;i++){
            htmlString[i] = `<img src="${data[i].download_url}" width="300" heigth="300"/>`;

        }
        return htmlString;

    }


    function writeOutput(message) {
        output.innerHTML = message;
    }
}
document.addEventListener("DOMContentLoaded", pageLoaded);