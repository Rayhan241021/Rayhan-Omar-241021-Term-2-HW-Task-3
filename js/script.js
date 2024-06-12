function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    if(name && email && message) {
        alert('Thank you, ' + name + '! Your message has been received.');
    } else {
        alert('Please fill out all fields before submitting.');
    }
}