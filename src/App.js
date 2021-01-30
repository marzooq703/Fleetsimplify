import { Container } from "react-bootstrap";
import "./App.css";
import Inbox from "./Pages/Inbox";
import { ViewportProvider } from "./Components/ViewPort";

function App() {
	return (
		<ViewportProvider>
			<Container fluid className='body-container'>
				<Inbox />
			</Container>
		</ViewportProvider>
	);
}

export default App;
