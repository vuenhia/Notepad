import Notes from "./Notes";
import CreateNote from "./CreateNote";
import { useState } from "react";

export default function Sections() {
	const [create, setCreate] = useState(false);
	const [newSectionName, setNewSectionName] = useState("");
	const [sections, setSections] = useState([]);

	const handleCreate = () => {
		if (!newSectionName.trim()) return;
		setSections((prev) => [
			...prev,
			{
				title: newSectionName,
				notes: [],
			},
		]);
		setNewSectionName("");
		setCreate(false);
	};

	const handleAddNote = (sectionIndex, newNote) => {
		setSections((prev) =>
			prev.map((section, i) =>
				i === sectionIndex
					? { ...section, notes: [...section.notes, newNote] }
					: section,
			),
		);
	};

	return (
		<div>
			<div className="section-container">
				<div className="section-left-side">
					<h2>Sections</h2>
					<button onClick={() => setCreate(true)}>➕</button>
				</div>
			</div>

			{sections.map((section, index) => (
				<div key={index}>
					<div className="section-container">
						<div className="section-left-side">
							<h2>{section.title}</h2>
						</div>
						<CreateNote onAddNote={(note) => handleAddNote(index, note)} />
					</div>
					<div className="section-notes">
						<Notes notes={section.notes} />
					</div>
				</div>
			))}

			{create && (
				<div className="section-input">
					<input
						type="text"
						value={newSectionName}
						onChange={(e) => setNewSectionName(e.target.value)}
						placeholder="Section Name"
					/>
					<div className="handle-buttons">
						<button onClick={handleCreate}>Add</button>
						<button onClick={() => setCreate(false)}>Cancel</button>
					</div>
				</div>
			)}
		</div>
	);
}
