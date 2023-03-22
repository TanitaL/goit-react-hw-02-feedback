import PropTypes from "prop-types";
import css from "./Notification.module.css"

const Notification = ({ message }) => {
  return <p className={css.notificationTitle}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification