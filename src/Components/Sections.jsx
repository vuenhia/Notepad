import Notes from "./Notes";
import CreateNote from "./CreateNote";
export default function Sections() {
	// Separate different sections, and display notes based on where it was created in the section
	return (
		<div>
			<div className="section-container">
				<h2>Sections</h2>

				<CreateNote />
			</div>
			<div className="section-notes">
				<Notes />
			</div>
		</div>
	);
}
