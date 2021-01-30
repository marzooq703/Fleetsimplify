const ChatId = (props) => {
	return (
		<div className={props.chatArea ? "chat-id-1" : "chat-id"}>
			Chat ID: <b>{props.data}</b>
		</div>
	);
};
export default ChatId;
