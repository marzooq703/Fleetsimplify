import React, { useState, useEffect, useRef } from "react";
import infoIcon from "../Asserts/info-icon.png";
const PopUp = (props) => {
	const [isActive, setIsActive] = useState(false);
	const myRef = useRef();
	console.log("active", isActive);
	const handleOutsideClick = (e) => {
		if (myRef.current?.contains(e.target)) {
			// inside click
			console.log("inside");
			return;
		}
		// outside click
		console.log("outside");
		setIsActive(false);
	};
	// setIsActive(props.active);
	useEffect(() => {
		if (isActive) {
			// add when mounted
			document.addEventListener("mousedown", handleOutsideClick);
			// return function to be called when unmounted
			return () => {
				document.removeEventListener("mousedown", handleOutsideClick);
			};
		}
	}, [document.addEventListener("mousedown", handleOutsideClick)]);
	useEffect(() => {
		return () => {
			setIsActive(props);
		};
	}, [props.active]);
	return isActive ? (
		<div className={props.class ? props.class : "popup-container"} ref={myRef}>
			{props.title ? (
				<div className='popup-header'>
					<p>
						{props.contactIcon ? (
							<img className='mr-2 mb-2 ' src={infoIcon} alt='info-icon' />
						) : (
							""
						)}
						{props.title}
					</p>
				</div>
			) : (
				""
			)}
			<div className='pop-up-children'>{props.children}</div>
		</div>
	) : (
		""
	);
};

export default PopUp;
