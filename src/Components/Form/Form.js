import { useState } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

function Form({ sendData }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const inputHandler = (evt) => {
    switch (evt.target.name) {
      case "name":
        setName(evt.target.value);
        break;

      case "number":
        setNumber(evt.target.value);
        break;

      default:
        return;
    }
  };

  const submitHanlder = (evt) => {
    evt.preventDefault();
    sendData({ name, number });
    formReset();
  };

  const formReset = () => {
    setName("");
    setNumber("");
  };

  const IdName = shortid.generate();
  const IdNumber = shortid.generate();

  return (
    <form onSubmit={submitHanlder}>
      <label className={styles.formLabel} htmlFor={IdName}>
        Name
        <input
          id={IdName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={inputHandler}
          value={name}
          required
        />
      </label>

      <label className={styles.formLabel} htmlFor={IdNumber}>
        Number
        <input
          id={IdNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          onChange={inputHandler}
          value={number}
          required
        />
      </label>
      <button className={styles.submitBtn} type="submit">
        Add Contact
      </button>
    </form>
  );
}

Form.propTypes = {
  sendData: PropTypes.func.isRequired,
};

export default Form;
