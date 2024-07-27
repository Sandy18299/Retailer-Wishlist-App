document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('myform');
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    const phoneNumber = document.getElementById('retailerID');
    const errorMessage = document.getElementById('error-message');
    const selectedProducts = document.getElementById('selectedProducts');
    const egyptianPhoneNumberPattern = /^(010|011|012|015)\d{8}$/;

    // Validate phone number in real-time
    phoneNumber.addEventListener('input', function() {
        if (!egyptianPhoneNumberPattern.test(phoneNumber.value)) {
            errorMessage.textContent = 'رقم الهاتف غير صحيح';
        } else {
            errorMessage.textContent = '';
        }
    });

    // Update textarea with selected products
    function updateSelectedProducts() {
        const selectedValues = [];
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                selectedValues.push(checkbox.value);
            }
        });
        selectedProducts.value = selectedValues.join(" , ");
    }

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', updateSelectedProducts);
    });

    form.addEventListener('submit', function(event) {
        // Validate phone number
        if (!egyptianPhoneNumberPattern.test(phoneNumber.value)) {
            errorMessage.textContent = 'رقم الهاتف غير صحيح';
            event.preventDefault();
            return;
        } else {
            errorMessage.textContent = '';
        }

        // Validate checkboxes
        let checkedCount = 0;
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                checkedCount++;
            }
        });

        if (checkedCount < 3) {
            event.preventDefault();
            alert('يجب اختيار على الأقل 3 منتجات.');
            return;
        }

        // Process selected values and retailer ID
        const selectedValues = [];
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                selectedValues.push(checkbox.value);
            }
        });

        const textString = selectedValues.join(" , ");
        const retailerIDValue = phoneNumber.value;


    });

    // Initial update of selected products textarea
    updateSelectedProducts();
});