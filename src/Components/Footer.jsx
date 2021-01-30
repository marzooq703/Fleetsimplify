import footerImage from "../Asserts/footer.png";
import footerMobileImage from "../Asserts/footer-mobile.png";
import useViewport from "../Components/ViewPort";
const Footer = () => {
	const { width } = useViewport();
	const scrollBreakpoint = 992;
	return (
		<img
			src={width < scrollBreakpoint ? footerMobileImage : footerImage}
			className='footer'
			width='100%'
			alt='Footer'
		/>
	);
};

export default Footer;
