import { useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import InfoButton from "./InfoButton";
import menuIconDots from "../Asserts/menu-icon-dots.png";
import attachmentIcon from "../Asserts/Attachment.png";
import audioMessagesIcon from "../Asserts/audio_messages.png";
import emojis from "../Asserts/emojis.png";
import sendMessageIcon from "../Asserts/send-message-icon.png";
import ChatId from "./ChatId";
import MessageBox from "./MessageBox";
import dummyMessages from "../DummyData/dummyMessages.json";
import PopUp from "./PopUp";
const ChatArea = (props) => {
	// const messagesEndRef = useRef(null);

	// const scrollToBottom = () => {
	// 	messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
	// };

	// useEffect(scrollToBottom, []);
	// const { data } = props.data;
	const [popUpActive, setPopUpActive] = useState(false);
	const [popUpActiveContact, setPopUpActiveContact] = useState(false);
	let isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1; //&& ua.indexOf("mobile");
	if (isAndroid) {
		document.write(
			'<meta name="viewport" content="width=device-width,height=' +
				window.innerHeight +
				', initial-scale=1.0">'
		);
	}
	return props.data ? (
		<div className='chat-area'>
			<div className='chat-header'>
				<div className='chat-user-container'>
					<div className='chat-profile'>
						<img
							src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=70'
							alt='User Profile'
						/>
					</div>
					<b>{props.data.name}</b> <br />
					<p className='user-name-chat'>{props.data.userId}</p>
				</div>
				<div className='chat-user-title'>
					<h5>{props.data.messageTitle}</h5>
				</div>
				<PopUp contactIcon title='Contact Info' active={popUpActive}>
					<Row className='contact-popup-container'>
						<Col md={6}>
							<p>Mobile Number</p>
						</Col>
						<Col md={6}>
							<div className='contact-popup-box'>
								<p>0733221133</p>
							</div>
						</Col>
					</Row>
					<Row className='contact-popup-container'>
						<Col md={6}>
							<p>Email Address</p>
						</Col>
						<Col md={6}>
							<div className='contact-popup-box'>
								<p>johndoe@gmail.com</p>
							</div>
						</Col>
					</Row>
				</PopUp>
				<PopUp class='menu-popup-container' contactIcon active={popUpActiveContact}>
					Hey
				</PopUp>
				<div className='chat-menus'>
					<InfoButton popUpActive={() => setPopUpActive(!popUpActive)} />
					<img
						src={menuIconDots}
						onClick={() => setPopUpActiveContact(!popUpActiveContact)}
						alt='menu Icon'
						className='menu-icon-dots ml-4'
					/>
				</div>
			</div>
			<ChatId data={props.data.chatID} chatArea={true} />
			<div className='chat-body'>
				{dummyMessages.map((a, i) => (
					<MessageBox sendByUser={a.sendByUser} data={a} key={i} />
				))}
				{/* <div ref={messagesEndRef}></div> */}
			</div>
			<div className='message-input-container'>
				<textarea type='text' className='message-input' placeholder='Type Your Message' />
				<div className='message-action-buttons'>
					<img src={attachmentIcon} alt='Attachments' className='icon ml-4' />
					<img src={emojis} alt='Attachments' className='icon ml-4' />
					<img src={audioMessagesIcon} alt='Attachments' className='icon ml-4' />
					<div className='send-message'>
						<img src={sendMessageIcon} alt='Send Message' height='20px' />
					</div>
				</div>
			</div>
		</div>
	) : (
		<div className='select-new-chat'>
			<p>Select a chat and start the Conversation!</p>
		</div>
	);
};
export default ChatArea;
