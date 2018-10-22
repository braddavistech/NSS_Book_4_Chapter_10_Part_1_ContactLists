
const ME = {
  printMe () { 
  let nameStore = `<div class="myInfo">
        <p>Name: &emsp; &nbsp; &nbsp; Brad Davis</p>
        <p>Address: &nbsp; &nbsp; &nbsp; 1445 Bern Drive<br> &emsp; &emsp; &emsp; &emsp; &nbsp; Spring Hill, TN 37174</p>
        <p>Phone: &emsp; &nbsp; &nbsp; 615-423-4972</p>
        <p>Email: &emsp; &nbsp; &nbsp; brad@braddavistech.com</p>
      </div>`
    $("#printMe").html(nameStore);
  }
  }

  module.exports = ME