import { Col } from "react-bootstrap";
import SideBarItems from "../Components/SideBarItems";
import employeeIcon from "../Asserts/carbon_user-profile.png";
import onboard from "../Asserts/onboard.png";
import search from "../Asserts/search.png";
import inbox from "../Asserts/inbox.png";
import recruitment from "../Asserts/recruitment.png";
import organisations from "../Asserts/organisations.png";
import rating from "../Asserts/rating.png";
import subscription from "../Asserts/subscription.png";
function Inbox() {
	return (
		<Col lg={2} className='side-bar'>
			<div className='side-bar-contents'>
				<SideBarItems icon={employeeIcon} text='Employer Profile' dropdown={true} />
				<SideBarItems icon={onboard} text='Onboard Your Vehicles' height='25px' />
				<SideBarItems icon={search} text='Search & Hire Drivers' />
				<SideBarItems icon={inbox} text='Inbox' height='23px' active />
				<SideBarItems icon={recruitment} text='Recruitment' height='25px' />
				<SideBarItems icon={organisations} text='My Organisations' />
				<SideBarItems icon={rating} text='Rate A Driver' />
				<SideBarItems icon={subscription} text='My Subscription' height='25px' />
			</div>
		</Col>
	);
}

export default Inbox;
