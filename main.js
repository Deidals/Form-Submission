const generalEnqueryRadio = document.querySelector(`#generalEnquiryDiv`);
const supportRequestRadio = document.querySelector(`#supportRequestDiv`);
const form = document.querySelector(`form`);

generalEnqueryRadio.addEventListener(`click`, () => {
    document.querySelector(`#generalEnquiryInput`).checked = true;
})

supportRequestRadio.addEventListener(`click`, () => {
    document.querySelector(`#supportRequestInput`).checked= true;
})

form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const firstNameInput = document.querySelector(`#firstNameInput`);
    if (firstNameInput.value.trim() === ``){
        firstNameInput.nextElementSibling.style.visibility = `visible`
    }

})