import { Row } from "react-bootstrap";
import ChatId from "./ChatId";
const MessageList = (props) => {
	return (
		<Row
			className={
				props.active
					? "message-list message-list-active ml-2 mt-3 mb-4"
					: props.unRead
					? "message-list message-list-un-read ml-2 mt-3 mb-4"
					: "message-list ml-2 mt-3 mb-4"
			}
		>
			<div className='message-list-dp'>
				<Row>
					<div className='profile-picture'>
						<img
							src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=70'
							alt='User Profile'
						/>
					</div>
				</Row>
				<b className='user-name'>{props.data.name}</b>
				<p className='user-id'>{props.data.userId}</p>
			</div>
			<div className='message-list-content'>
				{/* <div className='chat-id'>
					Chat ID: <b>{props.data.chatID}</b>
				</div> */}
				<ChatId data={props.data.chatID} />
				<div className='message-list-heading'>
					<h2>{props.data.messageTitle}</h2>
				</div>
				<div className='message-list-paragraph'>
					<p>{props.data.lastMessage[props.data.lastMessage.length - 1]}</p>
				</div>
				<div className={props.unRead ? "bottom-area bottom-area-active" : "bottom-area"}>
					11:00 a.m
				</div>
			</div>
			{props.unRead ? (
				<div className='un-read-message-total'>{props.data.numberOfUnread}</div>
			) : (
				""
			)}
		</Row>
	);
};

export default MessageList;
