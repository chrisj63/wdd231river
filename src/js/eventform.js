
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const dateInput = document.querySelector("#availableDate");
const commentInput = document.querySelector("#comment");
const output = document.querySelector("#output");
const closeButton = document.querySelector(".close-button");
const modal = document.querySelector("#modal");
const ticketForm = document.querySelector("#ticketform");
const modalResponse = document.querySelector("#modal-response");


// Ensure they choose a date later than the current date
// function isPastDate(value) {
//   const today = new Date();
//   today.setHours(0, 0, 0, 0);
//   const chosen = new Date(value);
//   return chosen < today;
// }

ticketForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const email = emailInput.value.trim();
  const availableDate = dateInput.value;
  const comment = commentInput.value.trim();

//   // Let the user know if they choose an invalid past date
//   if (isPastDate(availableDate)) {
//     output.textContent = "Please choose a later date.";
//     return;
//   }

  // Display the successful form submission output
    modalResponse.innerHTML =`
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Event Date:</strong> ${availableDate}</p>
        <p><strong>Comments:</strong> ${comment}</p>
        `;

        openModal();


  ticketForm.reset();
});


// ticketForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const formData = new FormData(ticketForm);

//     const firstName = formData.get("firstName");
//     const lastName = formData.get("lastName");
//     const email = formData.get("email");
//     const availableDate = formData.get("availableDate");
//     const comment = formData.get("comment");


// });




 function openModal() {
     modal.classList.add("open");
     modal.setAttribute("aria-hidden", "false");

     closeButton.focus();
     }

 function closeModal() {
     modal.classList.remove("open");
     modal.setAttribute("aria-hidden", "true");
 }   

// openButton.addEventListener("click", openModal);
 closeButton.addEventListener("click", closeModal);


 window.addEventListener("keydown", function(event) {
     if (event.key === "Escape") {
         closeModal();
     }
 });



 window.addEventListener("click", function(event) {
     if (event.target === modal) {
         closeModal();
     }
 });




