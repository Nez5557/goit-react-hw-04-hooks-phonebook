import PropTypes from "prop-types";
import styles from "./styles.module.css";

function ConctactsList({ children }) {
  return <ul className={styles.contactsList}>{children}</ul>;
}

ConctactsList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ConctactsList;
