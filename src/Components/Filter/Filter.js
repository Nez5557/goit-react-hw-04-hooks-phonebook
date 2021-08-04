import shortid from "shortid";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

function Filter({ onChange, value }) {
  function changeHandler(evt) {
    onChange(evt.target.value);
  }

  const inputId = shortid.generate();
  return (
    <label className={styles.filterLabel} htmlFor={inputId}>
      Search
      <input
        id={inputId}
        type="text"
        name="filter"
        value={value}
        onChange={changeHandler}
      />
    </label>
  );
}

Filter.defaultProps = {
  value: "",
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default Filter;
