import { Row, Col } from "react-bootstrap";
import "./NavBar.css";
import logoImage from "../Asserts/logo-image.png";
import logoText from "../Asserts/logo-text.png";
import hamburgerMenu from "../Asserts/menu-icon.png";
import NavButton from "./NavButton";
const NavBar = () => {
	return (
		<Row md={12} className='nav-body'>
			<Col md={{ span: 3, offset: 1 }} className='mb-4'>
				<img src={logoImage} alt='Logo' />
				<img className='ml-2' src={logoText} alt='Logo text' />
			</Col>
			<Col md={8}>
				<Row>
					<NavButton value='Jobs' />
					<NavButton value='Get Social' />
					<NavButton value='James Keem' dark={true} />
					<Col>
						<Row className='mt-4'>
							<p className='menu-text'>Menu</p>
							<img src={hamburgerMenu} alt='Hamburger Menu' height='80%' />
						</Row>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default NavBar;
