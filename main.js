document.addEventListener('DOMContentLoaded', function() {
    const retailerID = localStorage.getItem('retailerIDValue');
    const products = localStorage.getItem('products');
  
    console.log('hello from page 2');
    console.log('Retailer ID:', retailerID);
    console.log('Products:', products);
  
    document.getElementById('displayRetailerID').textContent = retailerID;
    document.getElementById('displayProducts').textContent = products;}
   ) 
   