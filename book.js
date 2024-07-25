// storing the information on local storage or array
const existingAppointments = JSON.parse(localStorage.getItem("appoint")) || [];

displayAppointments(existingAppointments);

document.getElementById("forms").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("patient-name").value;
  const number = document.getElementById("patient-number").value;
  const email = document.getElementById("patient-email").value;
  const date = document.getElementById("appoin-date").value;
  const symptoms = document.getElementById("Symptoms").value;

  if (!name || !number || !email || !date || !symptoms) {
    alert("Please fill in all fields.");
    return;
  }
  if (number.length > 10 || number.length < 10) {
    alert("Phone digit must be 10");
    return;
  }
  if (isDateAvailable(date, existingAppointments)) {
    const appointment = {
      name,
      number,
      email,
      date,
      symptoms,
    };

    existingAppointments.push(appointment);
    // saving the information on local storage
    localStorage.setItem("appoint", JSON.stringify(existingAppointments));

    displayAppointments(existingAppointments);

    document.getElementById("forms").reset();
  } else {
    alert("This date is not available. Please choose another date.");
  }
});

function isDateAvailable(date, appointments) {
  return !appointments.some((appointment) => appointment.date === date);
}
// A function To display on the web
function displayAppointments(appointments) {
  const mainContainer = document.querySelector(".main-container");
  mainContainer.innerHTML = "";
  // displaying on the page
  appointments.forEach((appointment) => {
    const appointmentDiv = document.createElement("div");
    appointmentDiv.innerHTML = `
        <p class="appoint">Name: ${appointment.name}</p>
        <p class="appoint">Email: ${appointment.number}</p>
        <p class="appoint">Date: ${appointment.date}</p>
        <p class="appoint">Symptoms: ${appointment.symptoms}</p>
        <button class="delete-btn" onclick="deleteAppointment('${appointment.date}')"><i class="fa-solid fa-trash"></i> Delete</button>
      `;
    mainContainer.appendChild(appointmentDiv);
  });
}

function deleteAppointment(date) {
  const updatedAppointments = existingAppointments.filter(
    (appointment) => appointment.date !== date
  );
  localStorage.setItem("appoint", JSON.stringify(updatedAppointments));
  displayAppointments(updatedAppointments);
}
