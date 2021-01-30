import React, { useState, forwardRef } from "react";
import PopUp from "./PopUp";
import SearchBlack from "../Asserts/search-black.png";
import filterIcon from "../Asserts/filter.png";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import popUpDeopDown from "../Asserts/popUpdropDown.png";
// import StartChat from "./";
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
	<div
		className='pop-up-select'
		ref={ref}
		onClick={(e) => {
			e.preventDefault();
			onClick(e);
		}}
	>
		{children}
	</div>
));
const CustomMenu = React.forwardRef(
	({ children, style, className, "aria-labelledby": labeledBy, setActive }, ref) => {
		const [value, setValue] = useState("");

		return (
			<div ref={ref} style={style} className={className} aria-labelledby={labeledBy}>
				<ul className='list-unstyled'>
					<li
						onClick={(e) => {
							// console.log(setActive);
							setValue(e.target.innerText);
							setActive(e.target.innerText);
						}}
					>
						{children}
					</li>
					{/* {React.Children.toArray(children).filter(
						(child) => !value || child.props.children.toLowerCase().startsWith(value)
					)} */}
				</ul>
			</div>
		);
	}
);

const SearchBox = () => {
	const [popUpActive, setPopUpActive] = useState(false);
	const [activeSelect, setActiveSelect] = useState("Message statuses");
	const [activeSelect1, setActiveSelect1] = useState("Time of messages");
	console.log(popUpActive);
	// setPopUpActive(true);
	return (
		<>
			<div className='search-box'>
				<img src={SearchBlack} alt='Search Icon' />
				<input
					type='text'
					className='search-input'
					placeholder="Search users, messages or chat id's"
				/>
			</div>
			<PopUp title='Filters' active={popUpActive}>
				<Dropdown>
					<Dropdown.Toggle as={CustomToggle}>{activeSelect}</Dropdown.Toggle>
					<Dropdown.Menu setActive={(e) => setActiveSelect(e)} as={CustomMenu}>
						<Dropdown.Item eventKey='1'>Read messages</Dropdown.Item>
						<Dropdown.Item eventKey='2'>Unread messages</Dropdown.Item>
						<Dropdown.Item eventKey='3'>Opened but not responded</Dropdown.Item>
						<Dropdown.Item eventKey='4'>Ongoing discussion</Dropdown.Item>
						<Dropdown.Item eventKey='5'>Ended discussion</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown>
					<Dropdown.Toggle as={CustomToggle}>{activeSelect1}</Dropdown.Toggle>
					<Dropdown.Menu setActive={(e) => setActiveSelect1(e)} as={CustomMenu}>
						<Dropdown.Item eventKey='1'>Last hour</Dropdown.Item>
						<Dropdown.Item eventKey='2'>12 hrs ago</Dropdown.Item>
						<Dropdown.Item eventKey='3'>Today</Dropdown.Item>
						<Dropdown.Item eventKey='4'>This week</Dropdown.Item>
						<Dropdown.Item eventKey='5'>This month</Dropdown.Item>
						<Dropdown.Item eventKey='6'>This year</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<div className='start-new-button1'>
					<p>Apply Filters</p>
				</div>
			</PopUp>
			<img
				src={filterIcon}
				alt='Filter Icon'
				height='25px'
				className='filter-icon'
				onClick={() => setPopUpActive(!popUpActive)}
			/>
		</>
	);
};

export default SearchBox;
