import Notes from "./Notes";
import CreateNote from "./CreateNote";
import { useState, useRef, useEffect } from "react";
import NoteModal from "./NoteModal";

export default function Sections() {
	const [create, setCreate] = useState(false);
	const [newSectionName, setNewSectionName] = useState("");
	const [sections, setSections] = useState([]);
	const inputRef = useRef(null);
	const [selectedSectionIndex, setSelectedSectionIndex] = useState(null);
	const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);

	useEffect(() => {
		if (create) {
			inputRef.current.focus();
		}
	}, [create]);
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
	const handleNoteClick = (sectionIndex, noteIndex) => {
		setSelectedSectionIndex(sectionIndex);
		setSelectedNoteIndex(noteIndex);
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
						<Notes
							notes={section.notes}
							onNoteClick={(noteIndex) => handleNoteClick(index, noteIndex)}
						/>
					</div>
				</div>
			))}

			{create && (
				<div className="section-input">
					<input
						type="text"
						ref={inputRef}
						value={newSectionName}
						onChange={(e) => setNewSectionName(e.target.value)}
						placeholder="Section Name"
						onKeyDown={(e) => {
							if (e.key == "Enter" && !e.shiftKey) {
								e.preventDefault();
								handleCreate(e);
							}
						}}
					/>
					<div className="handle-buttons">
						<button onClick={handleCreate}>Add</button>
						<button onClick={() => setCreate(false)}>Cancel</button>
					</div>
				</div>
			)}
			{selectedSectionIndex != null && selectedNoteIndex != null && (
				<NoteModal
					note={sections[selectedSectionIndex].notes[selectedNoteIndex]}
					onClose={() => {
						setSelectedSectionIndex(null);
						setSelectedNoteIndex(null);
					}}
					onNext={() => setSelectedNoteIndex((prev) => prev + 1)}
					onPrev={() => setSelectedNoteIndex((prev) => prev - 1)}
					hasNext={
						selectedNoteIndex < sections[selectedSectionIndex].notes.length - 1
					}
					hasPrev={selectedNoteIndex > 0}
				/>
			)}
		</div>
	);
}
