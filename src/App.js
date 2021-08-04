import { useState, useEffect } from "react";
import shortid from "shortid";

import ContactsList from "./Components/ContactsList/ContactsList";
import Form from "./Components/Form";
import Filter from "./Components/Filter";
import ListItem from "./Components/ContactsList/ListItem";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (localStorage.contacts) {
      const contactsFromLocalStorage = JSON.parse(
        localStorage.getItem("contacts")
      );
      setContacts(contactsFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const FilterHandler = (value) => {
    setFilter(value);
  };

  const addContact = (data) => {
    const namesToLowerCase = contacts.map((item) => item.name.toLowerCase());
    if (namesToLowerCase.find((item) => item === data.name.toLowerCase())) {
      return alert("please change name");
    }

    const newContact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };
    setContacts((prev) => [...prev, newContact]);
  };

  const deleteContact = (id) => {
    const newContacts = contacts.filter((item) => item.id !== id);
    setContacts(newContacts);
  };

  const filtredContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <Form sendData={addContact} />
      <Filter onChange={FilterHandler} value={filter} />
      <ContactsList>
        <ListItem contacts={filtredContacts} onClick={deleteContact} />
      </ContactsList>
    </div>
  );
}

export default App;
