function priceChanger(period) {
    let priceElements = document.querySelectorAll('.priceToChange');
    
    priceElements.forEach(function(element) {
        let normalPrice = parseFloat(element.dataset.normalPrice);
        let displayPrice;
        
        if (period === 'annually') {
            displayPrice = (normalPrice * 12) * 0.85;
            suffixTxt = '/año';
        } else if (period === 'monthly') {
            displayPrice = normalPrice;
            suffixTxt = '/mes';
        }
        element.textContent = displayPrice.toFixed(2).replace('.', ',') + "$ " + suffixTxt;
    });
}