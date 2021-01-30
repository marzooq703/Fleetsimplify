import plusIcon from "../Asserts/plus.png";
export const StartChat = () => {
	return (
		<div className='start-new-button'>
			<img src={plusIcon} alt='Plus Icon' />
			<p>Start a new chat</p>
		</div>
	);
};

export const StartChatMobile = () => {
	return (
		<div className='start-new-button-floating'>
			<img src={plusIcon} alt='Plus Icon' className='floating-icon' height='40px' />
		</div>
	);
};

export default StartChat;
