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