import { useState } from "react";
import { Row } from "react-bootstrap";
import dropDown from "../Asserts/dropDown.png";
function SideBarItems(props) {
	const [hovered, setHovered] = useState(props.active ? true : false);

	return (
		<>
			<Row
				className={hovered ? "icon-container icon-container-active" : "icon-container"}
				onMouseEnter={() => (props.active ? "" : setHovered(true))}
				onMouseLeave={() => (props.active ? "" : setHovered(false))}
			>
				<img
					src={props.icon}
					alt='Icon'
					height={props.height ? props.height : "30px"}
					className='icons'
				/>
				<p className='sidebar-text ml-2'>{props.text}</p>
				{props.dropdown ? (
					<img src={dropDown} alt='Drop Down' className='drop-down-icon' />
				) : (
					""
				)}
			</Row>
		</>
	);
}

export default SideBarItems;
