const path = require('node:path');
const fs = require('node:fs/promises');

module.exports = {
	tags: 'episode',
	layout: 'episode.njk',
	eleventyComputed: {
		audioSize: async function(data) {
			const {
				page: { inputPath },
				audio
			} = data;
			const episodeFolderPath = path.dirname(inputPath);
			const audioFilePath = path.join(episodeFolderPath, audio);
			const audioFileSize = (await fs.stat(audioFilePath)).size;
			return audioFileSize;
		}
	}
}
