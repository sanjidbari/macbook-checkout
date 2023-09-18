// showing extra feature costs 

function extraCost(option, feature){
    const selectedOption = option + '';
    const selectedField = document.getElementById(feature + '-cost');
    let featureCost = 0;
    if(feature == 'memory'){
        switch(selectedOption) {
            case '8GB unified memory' :
                featureCost = 0;
                selectedField.innerText = featureCost;
                break;
            case '16GB unified memory' :
                featureCost = 180;
                selectedField.innerText = featureCost;
                break;
        }
    }
    else if(feature == 'storage'){
        switch(selectedOption) {
            case '256GB SSD storage' :
                featureCost = 0;
                selectedField.innerText = featureCost;
                break;
            case '512GB SSD storage' :
                featureCost = 100;
                selectedField.innerText = featureCost;
                break;
            case '1TB SSD storage' :
                featureCost = 180;
                selectedField.innerText = featureCost;
                break;
        }
    }
    else if(feature == 'delivery'){
        switch(selectedOption) {
            case 'Wednesday, Aug 25 FREE PRIME Delivery' :
                featureCost = 0;
                selectedField.innerText = featureCost;
                break;
            case 'Saturday, Aug 21 Delivery Charge $20' :
                featureCost = 20;
                selectedField.innerText = featureCost;
                break;
        }
    }
    
    totalPriceSum();
}

// total price calculation function 

function totalPriceSum(){
    
    let memoryCost = parseInt(document.getElementById('memory-cost').innerText);
    let storageCost = parseInt(document.getElementById('storage-cost').innerText);
    let deliveryCost = parseInt(document.getElementById('delivery-cost').innerText);

    let totalPrice = parseInt(document.getElementById('base-price').innerText);

    totalPrice = totalPrice + memoryCost + storageCost + deliveryCost;

    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('cupon-applied-price').innerText = totalPrice;
}
// extra memory cost 

document.getElementById('memory-option').addEventListener('click', function(event){
    const memoryOption = (event.target).innerText;
    extraCost(memoryOption, 'memory');
})

// extra storage cost 

document.getElementById('storage-option').addEventListener('click', function(event){
    const storageOption = (event.target).innerText;
    extraCost(storageOption, 'storage');
})

// delivery cost 

document.getElementById('delivery-option').addEventListener('click', function(event){
    const deliveryOption = (event.target).innerText;
    extraCost(deliveryOption, 'delivery');
})

// promo code apply 

document.getElementById('apply-button').addEventListener('click', function(){
    const cupon = document.getElementById('promo-code-cupon').value;
    if(cupon == 'stevekaku'){
        const previousPrice = parseFloat(document.getElementById("cupon-applied-price").innerText);
        const cuponPrice = previousPrice - (previousPrice * 0.2);
        document.getElementById('cupon-applied-price').innerText = cuponPrice;
    }
})