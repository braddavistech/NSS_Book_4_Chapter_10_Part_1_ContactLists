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
