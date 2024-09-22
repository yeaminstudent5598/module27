// step 1 set event handler
document.getElementById('button-login').addEventListener('click', function(event){

    // step 3 prevent default behavior (prevent reloading browser)
    event.preventDefault();
 console.log('button clicked guys');
// step 3  get the phone number

const phoneNumber = document.getElementById('phone-number').value;
console.log(phoneNumber);

 
})
