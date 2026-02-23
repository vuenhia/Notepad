import { useState } from "react";

export default function CreateNote({ onAddNote }) {
	const [clicked, setClicked] = useState(false);
	const [newNote, setNewNote] = useState("");

	const handleNewNote = () => {
		if (!newNote.trim()) return;
		onAddNote(newNote); // sends note up to the specific section
		setClicked(false);
		setNewNote("");
	};

	return (
		<div>
			{!clicked ? (
				<button onClick={() => setClicked(true)}>Create Note</button>
			) : (
				<div>
					<label>Title</label>
					<input
						type="text"
						value={newNote}
						onChange={(e) => setNewNote(e.target.value)}
					/>
					<button onClick={handleNewNote}>Create</button>
					<button onClick={() => setClicked(false)}>Cancel</button>
				</div>
			)}
		</div>
	);
}
