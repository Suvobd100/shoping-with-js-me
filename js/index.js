

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
    
    // get data from html
    const productName = document.getElementById('fourth-name').innerText;
    const productPrice = document.getElementById('fourth-price').innerText;
    const productQuantity = document.getElementById('fourth-quantity').innerText;
    
    // calculation divided
    const productTotalPriceFloat =productPrice/productQuantity;
    const productTotalStr=parseFloat(productTotalPriceFloat).toFixed(2);
    
    const productTotalPrice=parseFloat(productTotalStr);
    // console.log(typeof productTotalPrice);
    tp=tp+productTotalPrice;
    
   


    displayData(serialNo, productName, productPrice, productQuantity, productTotalPrice);
    disableButton('btn-fourth-card');
});

// fifth card
document.getElementById('btn-fifth-card').addEventListener('click', function () {
    serialNo = serialNo + 1;
    
    // get data rom html
    const productName = document.getElementById('fifth-name').innerText;
    // const productPrice=document.getElementById('fifth-price').value;
    const productPriceStr = getElementValue('fifth-price');
    const productPrice=parseInt(productPriceStr);
    console.log(typeof productPrice);
    if (isNaN(productPrice)){
        alert('Invalid input');

     // clear the input field
     document.getElementById('fifth-price').value = '';
     document.getElementById('fifth-quantity').value = '';    
        
     return;

    }
    else {
    // const productQuantity=document.getElementById('fifth-quantity').value;
    const productQuantity = getElementValue('fifth-quantity');
    
    // calculation minus
    const productTotalPrice = parseInt(productPrice) - parseInt(productQuantity);
    
    tp=tp+productTotalPrice;
    

    // display in table 
    displayData(serialNo, productName, productPrice, productQuantity, productTotalPrice);
    // clear text field
    document.getElementById('fifth-price').value = '';
    document.getElementById('fifth-quantity').value = '';

    disableButton('btn-fifth-card');
    }
});

// calculation btn of show grand total and serial
document.getElementById('btn-calculation').addEventListener('click',function(){

    document.getElementById('grand-total').innerText=tp;
    // setInnerText('grand-total')=tp;
    document.getElementById('no-of-product').innerText=serialNo;
    disableButton('btn-calculation');
  
});

// discount calculation

document.getElementById('btn-discount').addEventListener('click',function(){
   
    const promocode=document.getElementById('promo-code').value;
    // const promocode=setInnerText('promo-code');
    console.log(promocode) ;
    const grandTotalPriceStr=document.getElementById('grand-total').innerText;
    const gTotal= parseInt(grandTotalPriceStr) ;
    
    if (promocode==10){
        const discountValue=gTotal*.10;
        const disCountPrice= gTotal - discountValue;
        
        document.getElementById('discount').innerText=disCountPrice+' /- Taka';
        
        disableButton('btn-discount');
        }
    else{
        alert('Invalid Discount Code')};

})

// set innerText
function setInnerText(id) {
    return document.getElementById(id).innerText;

};
// set value
function getElementValue(id) {
    const elementValue = document.getElementById(id).value;
    return elementValue;

};

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


function disableButton(id) {
    document.getElementById(id).setAttribute('disabled', true)
        ;
}