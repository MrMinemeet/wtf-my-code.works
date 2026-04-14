/*
 * Copyright © 2025 - Alexander Voglsperger
 * This file is part of my personal website https://wtf-my-code.works
 */

// This file contains small utility functions that are used throughout the website

/// Toggle visibility of more work entries
function showMoreWork() {
	const ldWorkBtn = document.getElementById('loadMoreWork');
	const hiddenWorkDivs = document.querySelectorAll('.work-experience .list .item.hidden');
	hiddenWorkDivs?.forEach(div => div.classList.remove('hidden'));
	if (ldWorkBtn != null) {
		ldWorkBtn.style.display = 'none';
	}
}

/// Updates the copyright year by appending the current year onto the "copyright-year".
function updateCopyrightYear() {
	const cYearElem = document.getElementById('copyright-year');
	const curYear = new Date().getFullYear();
	if (cYearElem != null && !cYearElem.textContent.includes(`${curYear}`)) {
		cYearElem.textContent += ` - ${curYear}`;
	}
}

/// Utilizes the obfuscated email address to create a mailto link.
function mailTo() {
	const button = document.getElementById('mail-button');
	const user = button?.getAttribute('data-user');
	const domain = button?.getAttribute('data-domain');
	if (user != null && domain != null) {
		window.location.href = `mailto:${user}@${domain}`;
	}
}

/// Utilizes the obfuscated matrix address to create a matrix link.
function matrixTo() {
	const button = document.getElementById('matrix-button');
	const user = button?.getAttribute('data-user');
	const homeserver = button?.getAttribute('data-homeserver');
	if (user != null && homeserver != null) {
		window.open(`https://matrix.to/#/@${user}:${homeserver}`, '_blank', 'noopener,noreferrer');
	}
}