const path = require('node:path');
const fs = require('node:fs');
const musicmetadata = require('musicmetadata');

// получение длительности mp3-файла без чтения всего содержимого файла
function getAudioFileDuration(filePath) {
	return new Promise((resolve, reject) => {
		const fileStream = fs.createReadStream(filePath);
		fileStream.on('error', reject);
		musicmetadata(fileStream, { duration: true }, (error, metaData) => {
			fileStream.close();
			if (error) {
				reject(error);
				return;
			}
			resolve(metaData?.duration)
		})
	})
}

module.exports = {
	tags: 'episode',
	layout: 'episode.njk',
	cover: 'cover.jpg',
	eleventyComputed: {
		audioFilePath: function(data) {
			const {
				page: { inputPath },
				audio
			} = data;
			const episodeFolderPath = path.dirname(inputPath);
			const audioFilePath = path.join(episodeFolderPath, audio);
			return audioFilePath;
		},

		audioSize: async function(data) {
			const {
				audioFilePath
			} = data;
			if (!audioFilePath) {
				return;
			}
			const audioFileSize = (await fs.promises.stat(audioFilePath)).size;
			return audioFileSize;
		},

		duration: async function(data) {
			const {
				audioFilePath
			} = data;
			if (!audioFilePath) {
				return;
			}
			const durationInSeconds = Math.round(await getAudioFileDuration(audioFilePath))
			return durationInSeconds;
		}
	}
}
