export default function NoteModal({
	note,
	onClose,
	onNext,
	onPrev,
	hasNext,
	hasPrev,
}) {
	return (
		<div>
			<div className="modal-overlay" onClick={onClose}>
				<div className="modal-content" onClick={(e) => e.stopPropagation()}>
					<h1>{note}</h1>
					<textarea defaultValue={note} className="modal-textarea" />
					<div className="modal-buttons">
						{hasPrev && <button onClick={onPrev}>Previous</button>}
						{hasNext && <button onClick={onNext}>Next</button>}
						<button onClick={onClose}>Close</button>
					</div>
				</div>
			</div>
		</div>
	);
}
