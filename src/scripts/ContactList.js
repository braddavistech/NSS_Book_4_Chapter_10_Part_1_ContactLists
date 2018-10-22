const CONTACTLIST = {
  renderContacts(contactStore) {
    let contactBlock = "";
    contactStore.forEach(temp => {
      contactBlock += `
      <div class="contactPrint">
        <p>Name: &emsp; &nbsp; &nbsp; ${temp.name}</p>
        <p>Address: &nbsp; &nbsp; &nbsp; ${temp.street}<br> &emsp; &emsp; &emsp; &emsp; &nbsp; ${temp.city}, ${temp.state} ${temp.zip}</p>
        <p>Phone: &emsp; &nbsp; &nbsp; ${temp.cell}</p>
        <p>Email: &emsp; &nbsp; &nbsp; ${temp.email}</p>
      </div>`
    })
    $("#contactStorage").html(contactBlock);
  }
}

module.exports = CONTACTLIST