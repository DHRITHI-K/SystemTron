// script.js
function bookTickets() {
    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const quantity = document.getElementById('quantity').value;
    const output = document.getElementById('output');

    if (!name || !date || !quantity) {
        output.innerHTML = `<p style="color: red;">Please fill all the fields.</p>`;
        return;
    }

    const bookingDetails = `
        <h2>Booking Confirmed</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Ticket Type:</strong> ${capitalize(type)}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Number of Tickets:</strong> ${quantity}</p>
        <p style="color: green; font-weight: bold;">Thank you for booking with us!</p>
    `;
    output.innerHTML = bookingDetails;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
