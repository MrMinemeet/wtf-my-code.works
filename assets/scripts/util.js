/*
 * Copyright © 2025 - Alexander Voglsperger
 * This file is part of my personal website https://wtf-my-code.works
 */

// This file contains small utility functions that are used throughout the website

/// Perform certain actions when the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", () => {
	const ldWorkBtn = document.getElementById('loadMoreWork');
	if (ldWorkBtn) {
		// Loads more work experience items when the "Load More" button is clicked.
		ldWorkBtn.addEventListener('click', () => {
			const hiddenWorkDivs = document.querySelectorAll('.work-experience-item.hidden');
			hiddenWorkDivs.forEach(div => div.classList.remove('hidden'));
			ldWorkBtn.style.display = 'none';
		});
	}
});

/// Updates the copyright year by appending the current year onto the "copyright-year".
function updateCopyrightYear() {
	const copyrightYearElement = document.getElementById('copyright-year');
	const currentYear = new Date().getFullYear();
	if (copyrightYearElement != null && !copyrightYearElement.textContent.includes(`${currentYear}`)) {
		copyrightYearElement.textContent += ` - ${currentYear}`;
	}
}