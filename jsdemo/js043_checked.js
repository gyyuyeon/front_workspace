let carZone = document.getElementById("carZone");

carZone.onclick = function() {
  if (event.target.type === "checkbox") {
    let checkbox = event.target;
    let totalPriceInput = document.getElementById("total");
    let totalPrice = parseInt(totalPriceInput.value);
    let priceChange = parseInt(checkbox.value);
    
    if (checkbox.checked) {
      totalPrice += priceChange;
    } else {
      totalPrice -= priceChange;
    }
    
    totalPriceInput.value = totalPrice;
  }
};

