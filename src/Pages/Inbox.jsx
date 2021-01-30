import { useState, useRef } from "react";
import "./Inbox.css";
import { Row, Col } from "react-bootstrap";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import SearchBox from "../Components/SearchBox";
import MessageList from "../Components/MessageList";
import { StartChat, StartChatMobile } from "../Components/StartChat";
import ChatArea from "../Components/ChatArea";
import dummyData from "../DummyData/dummyData.json";
import useViewport from "../Components/ViewPort";
import Footer from "../Components/Footer";

const Inbox = () => {
	const { width } = useViewport();
	const scrollBreakpoint = 992;
	const [active, setActive] = useState();
	const messagesEndRef = useRef(null);
	const openMessage = (index) => {
		setActive(index);
		if (width < scrollBreakpoint) messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<>
			<NavBar />
			<Row className='nav-bottom'></Row>
			<Row>
				<SideBar />
				<Col lg={4}>
					<Row className='search-box-container ml-3 mt-4'>
						<SearchBox />
					</Row>
					<div className='message-list-container ml-3 mt-2'>
						{dummyData.map((data, index) => (
							<div onClick={() => openMessage(index)} key={index}>
								<MessageList
									data={data}
									active={active === index}
									unRead={data.unRead}
								/>
							</div>
						))}
					</div>
				</Col>
				<Col lg={6}>
					{width > scrollBreakpoint ? <StartChat /> : <StartChatMobile />}
					<ChatArea data={dummyData[active] ? dummyData[active] : dummyData[0]} />
					<div ref={messagesEndRef} />
				</Col>
			</Row>
			<Row>
				<Footer />
			</Row>
		</>
	);
};

export default Inbox;
