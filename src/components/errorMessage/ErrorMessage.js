import img from "../../resources/img/error.png";
import "./errorMessage.scss";

const ErrorMessage = () => {
  return <img className="error" src={img} alt="error" />;
};

export default ErrorMessage;
