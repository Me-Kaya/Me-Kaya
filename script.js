const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
    if (close){
        bar.addEventListener('click', () => {
            nav.classList.remove('active');
        })
}
document.getElementById('signupButton').addEventListener('click', function() {
    // Get the email input value
    var email = document.getElementById('emailInput').value;

    // Notify the user that they have signed up
    alert('Thank you for signing up with ' + email + '!');

    // You can also use other notification methods such as displaying a message on the page or using a modal
});
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the name input value
    var name = document.getElementById('nameInput').value;

    // Notify the user that their message has been sent
    alert('Dear ' + name + ', your message has been sent!');

    // You can also use other notification methods such as displaying a message on the page or using a modal
});
function calculateSubtotal(input) {
    var price = 400; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;

    // Ask for email, address, and contact separately
    var email = prompt('You have bought General Chemistry for Engineers for ' + subtotal + '. Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it
}

function calculateSubtotal2(input) {
    var price = 169; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem2(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought Differential and Integral Calculus 6th edition  for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal3(input) {
    var price = 230; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem3(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought Differential and Integral Calculus 6th edition  for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal4(input) {
    var price = 230; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem4(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought Engineering Mechanics: Statics  for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal5(input) {
    var price = 210; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem5(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought Statics and Dynamics (3rd edition)  for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal6(input) {
    var price = 210; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem6(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought Fluid Mechanics and Hydraulics 4th Edition  for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal7(input) {
    var price = 199; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem7(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought Strength of Materials (4th Edition) for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal8(input) {
    var price = 169; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem8(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought Fundamentals of Vibration for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal9(input) {
    var price = 169; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem9(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought Design of Machine Elements (4th Edition)  for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal10(input) {
    var price = 149; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem10(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought Refrigeration and Air Conditioning (3rd edition)  for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal11(input) {
    var price = 169; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem11(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought Refrigeration and Air Conditioning  for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal12(input) {
    var price = 179; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem12(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought Engineering Economy (3rd edition)  for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}

function calculateSubtotal13(input) {
    var price = 149; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem13(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought Machine Design: A Simplified Approach  for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal14(input) {
    var price = 270; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem14(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought Prime’s Industrial Plant Engineering  for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}

///////
function calculateSubtotal15(input) {
    var price = 169; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem15(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought R.S. Capote, C.G. Duaso, J.A. Mandawe for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal16(input) {
    var price = 50; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem16(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought Electropneumati cs Basic Level  for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal17(input) {
    var price = 499; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem17(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought Power Plant Theory and Design, 2nd Edition  for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal18(input) {
    var price = 189; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem18(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought Power Plant Engineering Updated Versions  for ' + subtotal + 'Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal19(input) {
    var price = 189; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem19(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought Power Plant Engineering  for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal20(input) {
    var price = 50; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem20(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought Heat and Mass Transfer: 5th Edition	  for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal21(input) {
    var price =  10; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem21(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought 	Marks Standard Handbook for Engineers, 12th Editio  for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal22(input) {
    var price = 249; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem22(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought THERMODYNA MICS 2  for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal23(input) {
    var price =  249; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem23(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought THERMODYNA MICS 1 for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal24(input) {
    var price = 140; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem24(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought Canister Tube  for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal25(input) {
    var price = 250; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem25(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought LED Light Pad A for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal26(input) {
    var price = 70; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem26(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought Deli Compas for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal27(input) {
    var price = 35; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem27(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought Mechanical Pencil for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal28(input) {
    var price = 30; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem28(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought Scale (Ruler) for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal29(input) {
    var price = 10; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem29(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought Deli Protractor for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal30(input) {
    var price = 70; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem30(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought French curves for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal31(input) {
    var price = 40; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem31(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought Triangles for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}
function calculateSubtotal32(input) {
    var price = 2500; // Replace with the actual price from your data
    var quantity = input.value;
    var subtotal = price * quantity;
    input.parentNode.nextElementSibling.textContent = '₱ ' + subtotal;
}
function buyItem32(button) {
    var quantity = button.parentNode.previousElementSibling.previousElementSibling.textContent;
    var subtotal = button.parentNode.previousElementSibling.textContent;
    var email = prompt('You have bought Bundle3 for ' + subtotal + ' Thank you for shopping with us! Please enter your email:');
    var address = prompt('Please enter your address:');
    var contact = prompt('Please enter your contact number:');

    
    alert('Your oder is being processed!.                                                               You will receive an email when your items are shipped.');
    // Now you can use the email, address, and contact variables as needed
    // For example, you can send this information to a server or perform any other actions with it

}