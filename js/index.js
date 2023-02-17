

let serialNo = 0;
let tp=0

// first card
document.getElementById('btn-first-card').addEventListener('click', function () {

    serialNo += 1;

    // get data from html
    // const productName=document.getElementById('first-name').innerText;
    const productName = setInnerText('first-name');
    // console.log(productName);
    // const productPrice=document.getElementById('first-price').innerText;
    const productPrice = setInnerText("first-price");
    // console.log(productPrice);

    // const productQuantity=document.getElementById('first-quantity').innerText;
    const productQuantity = setInnerText('first-quantity');
    // calculation
    const productTotalPrice = parseInt(productPrice) * parseInt(productQuantity);
    tp=tp+productTotalPrice;
    
    displayData(serialNo, productName, productPrice, productQuantity, productTotalPrice);
    disableButton('btn-first-card');
    // console.log(typeof productTotalPrice);
    // console.log(productName,productPrice,productQuantity);

});

// second card
// using browser event element
document.getElementById("btn-second-card").addEventListener("click", function (e) {
    serialNo = serialNo + 1;
    
    const productName = (e.target.parentNode.parentNode.children[0].innerText);
    const productPrice = (e.target.parentNode.parentNode.children[2].children[0].innerText);
    const productQuantity = (e.target.parentNode.parentNode.children[3].children[0].innerText);
    // calculation plus
    const productTotalPrice = parseInt(productPrice) + parseInt(productQuantity);
    tp=tp+productTotalPrice;
    

    displayData(serialNo, productName, productPrice, productQuantity, productTotalPrice)
    disableButton('btn-second-card');
});


// third card
document.getElementById('btn-third-card').addEventListener('click', function () {
    serialNo = serialNo + 1;
    
    // get data rom html
    const productName = document.getElementById('third-name').innerText;
    const productPrice = document.getElementById('third-price').innerText;
    const productQuantity = document.getElementById('third-quantity').innerText;
    // calculation minus
    const productTotalPrice = parseInt(productPrice) - parseInt(productQuantity);
    tp=tp+productTotalPrice;
    

    displayData(serialNo, productName, productPrice, productQuantity, productTotalPrice);
    disableButton('btn-third-card');

});
// fourth card
document.getElementById('btn-fourth-card').addEventListener('click', function () {
    serialNo = serialNo + 1;
    
    // get data rom html
    const productName = document.getElementById('fourth-name').innerText;
    const productPrice = document.getElementById('fourth-price').innerText;
    const productQuantity = document.getElementById('fourth-quantity').innerText;
    // calculation divided
    const productTotalPriceFloat = parseInt(productPrice) / parseInt(productQuantity);
    
    // const productTotalPrice = parseFloat(productTotalPriceFloat).toFixed(2);
    const productTotalStr=parseFloat(productTotalPriceFloat).toFixed(2);
    const productTotalPrice=parseInt(productTotalStr);
    
    tp=tp+productTotalPrice;
    
    // grand total


    displayData(serialNo, productName, productPrice, productQuantity, productTotalPrice);
    disableButton('btn-fourth-card');
});

// fifth card
document.getElementById('btn-fifth-card').addEventListener('click', function () {
    serialNo = serialNo + 1;
    
    // get data rom html
    const productName = document.getElementById('fifth-name').innerText;
    // const productPrice=document.getElementById('fifth-price').value;
    const productPrice = getElementValue('fifth-price');
    // const productQuantity=document.getElementById('fifth-quantity').value;
    const productQuantity = getElementValue('fifth-quantity');
    // console.log(typeof productQuantity);
    // calculation minus
    const productTotalPrice = parseInt(productPrice) - parseInt(productQuantity);
    // const productTotalPrice = productTotalPriceFloat;
    tp=tp+productTotalPrice;
    document.getElementById('grand-total').innerText=tp;
    document.getElementById('no-of-product').innerText=serialNo;
    
    displayData(serialNo, productName, productPrice, productQuantity, productTotalPrice);
    // clear text field
    document.getElementById('fifth-price').value = '';
    document.getElementById('fifth-quantity').value = '';

    disableButton('btn-fifth-card');
});


// set innerText
function setInnerText(id) {
    return document.getElementById(id).innerText;

}
// set value
function getElementValue(id) {
    const elementValue = document.getElementById(id).value;
    return elementValue;

}

// function grandTotal() {
//     const gt=tp+productTotalPrice;
//     console.log(gt);
//     return gt;
// }


// display function common

function displayData(serialNo, productName, productPrice, productQuantity,productTotalPrice) {
    const tableContainer = document.getElementById('table-container');
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
        <td>${serialNo}</td>
        <td>${productName}</td>
        <td>${productPrice}</td>
        <td>${productQuantity}</td>
        <td>${productTotalPrice}</td>
        
    `;
    tableContainer.appendChild(tableRow);
    // let x=(productTotalPrice);
    // console.log(typeof x);
    

};
// const tblData = document.querySelector('table-container');
// console.log(tblData);

function disableButton(id) {
    document.getElementById(id).setAttribute('disabled', true)
        ;
}

// discount

document.getElementById('btn-discount').addEventListener('click',function(){
   
    const promocode=document.getElementById('promo-code').value;
    
    const grandTotalPriceStr=document.getElementById('grand-total').innerText;
    const gTotal= parseInt(grandTotalPriceStr) ;
    
    if (promocode==10){
        const discountValue=gTotal*.10;
        const disCountPrice= gTotal - discountValue;
        
        document.getElementById('discount').innerText=disCountPrice+' /- Taka';
        
        }
    else{
        alert('Invalid Discount Code')};

})
