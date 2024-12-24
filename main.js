const generalEnqueryRadio = document.querySelector(`#generalEnquiryDiv`);
const supportRequestRadio = document.querySelector(`#supportRequestDiv`);
const form = document.querySelector(`form`);

//ALL Input in Form
const firstNameInput = document.querySelector(`#firstNameInput`);
const lastNameInput = document.querySelector(`#lastNameInput`);
const emailInput = document.querySelector(`#emailInput`);
const radioInputs = document.querySelectorAll(`fieldset input[type="radio"]`);
const isChecked = Array.from(radioInputs).some(radioInput => radioInput.checked);
const messageInput = document.querySelector(`#messageTextarea`);
const consentInput = document.querySelector(`#consentCheckbox`);

generalEnqueryRadio.addEventListener(`click`, () => {
    document.querySelector(`#generalEnquiryInput`).checked = true;
})

supportRequestRadio.addEventListener(`click`, () => {
    document.querySelector(`#supportRequestInput`).checked= true;
})

form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    
    // Interact with client for First Name when the input is empty
    if (firstNameInput.value.trim() === ``){
        firstNameInput.nextElementSibling.style.visibility = `visible`;
        firstNameInput.style.borderColor = `hsl(0, 66%, 54%)`
    }else{
        firstNameInput.nextElementSibling.style.visibility = `hidden`;
    };

    // Interact with client for Last Name when the input is empty
    if (lastNameInput.value.trim() === ``){
        lastNameInput.nextElementSibling.style.visibility = `visible`;
        lastNameInput.style.borderColor = `hsl(0, 66%, 54%)`
    }else{
        lastNameInput.nextElementSibling.style.visibility = `hidden`;
    };

    // Interact with client for Email when the input is empty
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!pattern.test(emailInput.value)){
        emailInput.nextElementSibling.style.visibility = `visible`;
        emailInput.style.borderColor = `hsl(0, 66%, 54%)`
    }else{
        emailInput.nextElementSibling.style.visibility = `hidden`;
    };


    // Interact with client for Query (radio button) when the input is empty
    if (!isChecked){
        document.querySelector(`fieldset`).nextElementSibling.style.visibility = `visible`;
    }else {
        document.querySelector(`fieldset`).nextElementSibling.style.visibility = `hidden`;
    };

    // Interact with client for Message Box when the input is empty
    if (messageInput.value.trim() === ``){
        messageInput.nextElementSibling.style.visibility = `visible`;
        messageInput.style.borderColor = `hsl(0, 66%, 54%)`
    }else{
        messageInput.nextElementSibling.style.visibility = `hidden`;
    };

    // Interact with client for Consent when the input is empty
    if (!consentInput.checked){
        consentInput.parentElement.nextElementSibling.style.visibility = `visible`;
    }else {
        consentInput.parentElement.nextElementSibling.style.visibility = `hidden`;
    };

    if (firstNameInput.value.trim() !== `` && lastNameInput.value.trim() !== `` && pattern.test(emailInput.value) && messageInput.value.trim() !== `` && consentInput.checked){
        document.querySelector(`article`).style.visibility = `visible`;

        document.querySelector(`form`).reset();
    };
    

})

firstNameInput.addEventListener(`click`, () => {
    firstNameInput.style.borderColor = `hsl(169, 82%, 27%)`;
    firstNameInput.nextElementSibling.style.visibility = `hidden`;
});

lastNameInput.addEventListener(`click`, () => {
    lastNameInput.style.borderColor = `hsl(169, 82%, 27%)`;
    lastNameInput.nextElementSibling.style.visibility = `hidden`;
});

emailInput.addEventListener(`click`, () => {
    emailInput.style.borderColor = `hsl(169, 82%, 27%)`;
    emailInput.nextElementSibling.style.visibility = `hidden`;
});

if (isChecked) {
    document.querySelector(`fieldset`).nextElementSibling.style.visibility = `hidden`;
};

messageInput.addEventListener(`click`, () => {
    messageInput.style.borderColor = `hsl(169, 82%, 27%)`;
    messageInput.nextElementSibling.style.visibility = `hidden`;
});

consentInput.addEventListener(`click`, () => {
    consentInput.parentElement.nextElementSibling.style.visibility = `hidden`;
})
