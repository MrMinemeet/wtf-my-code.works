/*
 * Copyright © 2025 - Alexander Voglsperger
 * This file is part of my personal website https://wtf-my-code.works
 */

// This file contains small utility functions that are used throughout the website

/// Updates the copyright year by appending the current year onto the "copyright-year".
function updateCopyrightYear() {
    const copyrightYearElement = document.getElementById('copyright-year');
	const currentYear = new Date().getFullYear();
    if (copyrightYearElement != null && !copyrightYearElement.textContent.includes(`${currentYear}`)) {
        copyrightYearElement.textContent += ` - ${currentYear}`;
    }
}