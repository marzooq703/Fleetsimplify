import { Col } from "react-bootstrap";
import "./NavBar.css";

const NavButton = (props) => {
	console.log(props);
	return (
		<Col>
			<div className={props.dark ? "nav-button nav-button-dark" : "nav-button"}>
				<p className='nav-button-text'>{props.value}</p>
			</div>
		</Col>
	);
};

export default NavButton;
