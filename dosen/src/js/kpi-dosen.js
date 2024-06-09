const btnAddDokumen = document.getElementById("add-dokumen");

let documentCount = 0;

btnAddDokumen.addEventListener("click", () => {
	documentCount++;

	const container = document.getElementById("documentsContainer");
	const template = document.getElementById("documentTemplate").content;
	const clone = document.importNode(template, true);

	const title = clone.querySelector(".title.text-base.font-bold");
	title.textContent = `Unggah Dokumen (${documentCount + 1})`;

	container.appendChild(clone);

	const removeButton =
		container.querySelectorAll(".remove-button")[documentCount - 1];
	const documentItem =
		container.querySelectorAll(".document-item")[documentCount - 1];

	// Add event listener to remove button
	removeButton.addEventListener("click", function () {
		documentItem.remove();
		updateDocumentTitles();
	});
});

function updateDocumentTitles() {
	const documentItems = document.querySelectorAll(".document-item");
	documentItems.forEach((item, index) => {
		const title = item.querySelector(".title.text-base.font-bold");
		title.textContent = `Unggah Dokumen (${index + 2})`;
	});
	documentCount = documentItems.length;
}
