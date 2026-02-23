import { useState } from "react";
export default function CreateNote() {
	// Contains button for user to create notes
	// Allows user to add section, and name for notes
	// Sort the note into the section
	const [clicked, setClicked] = useState(false);

	return (
		<div>
			{!clicked ? (
				<button onClick={() => setClicked(true)}>Create Notes</button>
			) : (
				<div>
					<label>Section</label>
					<input type="text" />
					<button>Create</button>
					<button onClick={() => setClicked(false)}>Cancel</button>
				</div>
			)}
		</div>
	);
}
