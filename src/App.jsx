import "./App.css";
import Sections from "./Components/Sections";
export default function App() {
	return (
		<div>
			<div className="app-header">
				<h1>Smart Notes</h1>
			</div>
			<div className="app-container">
				<Sections />
			</div>
		</div>
	);
}
