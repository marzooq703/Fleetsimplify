import useViewport from "../Components/ViewPort";
import infoIcon from "../Asserts/info-icon.png";

const InfoButton = (props) => {
	const mobileBreakpoint = 992;
	const { width } = useViewport();
	return (
		<button
			onClick={props.popUpActive}
			className={width > mobileBreakpoint ? "info-button" : "info-button-mobile"}
		>
			<img
				src={infoIcon}
				alt='info icon'
				className={width > mobileBreakpoint ? "mr-2" : ""}
			/>
			{width > mobileBreakpoint ? "Cotact Info" : ""}
		</button>
	);
};

export default InfoButton;
