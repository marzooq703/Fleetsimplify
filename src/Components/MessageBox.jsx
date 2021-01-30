import sendIcon from "../Asserts/send-icon.png";
import recievedIcon from "../Asserts/recieved-icon.png";
import seenIcon from "../Asserts/seen-icon.png";
const MessageBox = (props) => {
	return (
		<>
			<div
				className={
					props.sendByUser ? "sending-message-container" : "receiving-message-container"
				}
			>
				{props.data.message}
				<div
					className={
						props.sendByUser
							? "message-time message-time-sending"
							: "message-time message-time-recieving"
					}
				>
					{props.data.time}
					{props.sendByUser ? <img src={sendIcon} className='ml-1' alt='sendIcon' /> : ""}
				</div>
			</div>
		</>
	);
};

export default MessageBox;
