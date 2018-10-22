const rolodex = []

const CONTACTSUPERVISOR = Object.create(null, {
    "store": {
        value: function (contact) {
            rolodex.push(contact)
        }
    },
    "retrieve": {
        value: function (contactToFind) {
            return rolodex.find(contact => contact.name === contactToFind.name && contact.cell === contactToFind.cell)
        }
    },
    "inventory": {
        get: () => rolodex
    }
})

module.exports = CONTACTSUPERVISOR