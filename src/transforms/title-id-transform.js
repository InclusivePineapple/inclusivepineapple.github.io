const fs = require('node:fs');
const path = require('node:path');

const titleIdMap = JSON.parse(
	fs.readFileSync(path.join(process.cwd(), 'title-id-map.json'), { encoding: 'utf-8' })
);

/**
 * @param {Window} window
 * @param {string} content
 * @param {string} outputPath
 */
module.exports = function(window, content, outputPath) {
	const contentElement = window.document.querySelector('.main .post');

	if (!contentElement) {
		return;
	}

	const titles = contentElement.querySelectorAll('h2, h3, h4, h5, h6');

	for (const title of titles) {
		const titleText = title.textContent.trim().toLowerCase();
		const titleId = titleIdMap[titleText];
		if (titleId) {
			title.id = titleId;
		}
	}
}
