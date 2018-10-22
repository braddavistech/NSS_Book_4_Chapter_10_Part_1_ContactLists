const API = {
  getContact() {
    return fetch("http://localhost:8088/contacts")
      .then(entries => entries.json())
  },
  saveContact(temp) {
    return fetch("http://localhost:8088/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(temp)
    })
    .then(entries => entries.json())
    .then(() => API.getContact())
  }
};

module.exports = API