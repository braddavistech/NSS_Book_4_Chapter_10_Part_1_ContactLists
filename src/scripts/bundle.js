(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

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
},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
const CREATECONTACT= require("./CreateContact")

const API = require("./ContactCollection")

const CONTACTLIST = require("./ContactList")

const DOM = {
  createForm() {
    let blankForm = `<form class="normalInput">
              <label for="name" class="labelName">Full Name</label>
              <input type="text" class="inputBox" name="name" id="name">
              <label for="street" class="labelName">Street Address</label>
              <input type="text" class="inputBox" name="street" id="street">
              <label for="city" class="labelName">City</label>
              <input type="text" class="inputBox" name="city" id="city">
              <label for="state" class="labelName">State</label>
              <input type="text" class="inputBox" name="state" id="state">
              <label for="zip" class="labelName">Zip</label>
              <input type="text" class="inputBox" name="zip" id="zip">
              <label for="cell" class="labelName">Phone Number</label>
              <input type="text" class="inputBox" name="cell" id="cell">
              <label for="email" class="labelName">Email</label>
              <input type="text" class="inputBox" name="email" id="email">
              <input type="button" id="recordContact" value="SAVE CONTACT">
            </form>`
    $("#form").html(blankForm);
  },
  recordForm() {
    let checkName = $("#name")[0];
    let tempName = checkName.value;
    let checkStreet = $("#street")[0];
    let tempStreet = checkStreet.value;
    let checkCity = $("#city")[0];
    let tempCity = checkCity.value;
    let checkState = $("#state")[0];
    let tempState = checkState.value;
    let checkZip = $("#zip")[0];
    let tempZip = checkZip.value;
    let checkCell = $("#cell")[0];
    let tempCell = checkCell.value;
    let checkEmail = $("#email")[0];
    let tempEmail = checkEmail.value;
    let temp = CREATECONTACT(tempName, tempStreet, tempCity, tempState, tempZip, tempCell, tempEmail)
    API.saveContact(temp).then(contacts => CONTACTLIST.renderContacts(contacts));
 }
}

module.exports = DOM

},{"./ContactCollection":2,"./ContactList":4,"./CreateContact":5}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
const CREATECONTACT = (name, street, city, state, zip, cell, email) => {
  const newContact = Object.create(null, {
    "name": {
      value: name,
      enumerable: true
    },
    "street": {
      value: street,
      enumerable: true
    },
    "city": {
      value: city,
      enumerable: true
    },
    "state": {
      value: state,
      enumerable: true
    },
    "zip": {
      value: zip,
      enumerable: true
    },
    "cell": {
      value: cell,
      enumerable: true
    },
    "email": {
      value: email,
      enumerable: true
    }
  })
return newContact
}



module.exports = CREATECONTACT
},{}],6:[function(require,module,exports){
const DOM = require("./ContactForm")

const API = require("./ContactCollection")

const ME = require("./Contact")

const CONTACTLIST = require("./ContactList")

DOM.createForm();
ME.printMe();
API.getContact().then(contacts => CONTACTLIST.renderContacts(contacts));
$("#recordContact").click(DOM.recordForm);


},{"./Contact":1,"./ContactCollection":2,"./ContactForm":3,"./ContactList":4}]},{},[6]);
