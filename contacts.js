const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const contactsPath = path.join(__dirname, "./db/contacts.json");

//Show contacts list
function listContacts() {
  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) throw err;
    console.table(data);
  });
}

// Get contacts by id
function getContactById(contactId) {
  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) throw err;
    const dataContacts = JSON.parse(data).find(
      (contact) => contact.id === contactId
    );
    console.log(dataContacts);
  });
}

//Make new contact
function addContact(name, email, phone) {
  const newContact = require(contactsPath);
  const contactList = [
    ...newContact,
    {
      id: uuidv4(),
      name: name,
      email: email,
      phone: phone,
    },
  ];
  fs.writeFile(contactsPath, JSON.stringify(contactList), (err) => {
    if (err) throw err;
  });
  console.log(contactList);
}

//Remove contact by id
function removeContact(contactId) {
  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) throw err;
    const findContact = JSON.parse(data).filter(
      (contact) => contact.id !== contactId
    );
    fs.writeFile(contactsPath, JSON.stringify(findContact), (err) => {
      if (err) throw err;
    });
    console.log(findContact);
  });
}

module.exports = { listContacts, getContactById, addContact, removeContact };
