

function validateName(){
    

    let fname = document.getElementById('contact-fname').value;
    let lname = document.getElementById('contact-lname').value;
    let email = document.getElementById('contact-email').value;
    let pword = document.getElementById('contact-password').valu0e;

    if (fname === '' ) {
    document.querySelector('.clr-Msg').style.display = "block";
    // return false;
} 
//     else {
//         document.querySelector('.clr-Msg').style.display = "none";
// }
}

// && lname === '' && email === '' && pword=== ''