const DOM = require("./ContactForm")

const API = require("./ContactCollection")

const ME = require("./Contact")

const CONTACTLIST = require("./ContactList")

DOM.createForm();
ME.printMe();
API.getContact().then(contacts => CONTACTLIST.renderContacts(contacts));
$("#recordContact").click(DOM.recordForm);

