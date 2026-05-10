    let form = document.getElementById("contact-form");
    let UserName = document.getElementById("UserName");
    let MobileNumber = document.getElementById("MobileNumber");
    let Email = document.getElementById("Email");
    let message = document.getElementById("message");

    function showError(input, messageText) {
        let formcontrol = input.parentElement;
        formcontrol.className = "content-form-error";
        let span = formcontrol.querySelector("span");
        span.innerHTML = messageText;
        
    }

    function showInput(input) {
        let formcontrol = input.parentElement;
        formcontrol.className = "content-form";
        let span = formcontrol.querySelector("span");
        span.innerHTML = "";
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        let isValid = true;

        if (UserName.value.trim() === "") {
            showError(UserName, "User name is required");
            isValid = false;
        } else if (UserName.value.trim().length <= 2) {
            showError(UserName, "please enter a valid User name");
            isValid = false;
        } else {
            showInput(UserName);
        }

        if (MobileNumber.value.trim() === "") {
            showError(MobileNumber, "Mobile Number is required");
            isValid = false;
        } else if (MobileNumber.value.trim().length !== 11) {
            showError(MobileNumber, "enter a valid 11-digit Mobile Number");
            isValid = false;
        } else {
            showInput(MobileNumber);
        }

        if (Email.value.trim() === "") {
            showError(Email, "Email is required");
            isValid = false;
        } else {
            showInput(Email);
        }

        if (isValid) {
            form.submit();
        }
    });
function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('open');
}



