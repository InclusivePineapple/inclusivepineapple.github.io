window.addEventListener('load', () => {
	const player = document.getElementById('player');

	if (!player) return;

	if (player.networkState === HTMLMediaElement.NETWORK_LOADING) {
		player.addEventListener('loadedmetadata', () => handleTimecode(window.location.href))
	} else {
		handleTimecode(window.location.href);
	}

	window.addEventListener('hashchange', (event) => handleTimecode(event.newURL));
});

/**
 * Устанавливает позицию плеера на основе временной метки из фрагмента URL
 * 
 * @param {string} href
 * @returns {void}
 */
function handleTimecode(href) {
	const timecode = getTimeFromHash(href);

	if (!timecode) return;

	const time = parseTimecode(timecode);

	if (time < 0 || time > player.duration) return;

	player.currentTime = time;
}

/**
 * Преобразует временные метки вида `00:14:30` или `14:30` в количество секунд.
 * 
 * Заимствовано у <web-standards.ru> 
 * @see https://github.com/web-standards-ru/web-standards.ru/blob/main/src/scripts/modules/podcast.js#L20
 * 
 * @param {string} timecode
 * @returns {number}
 */
function parseTimecode(timecode) {
	return timecode.split(':').reduceRight((acc, item, index, items) => {
			return acc += parseFloat(item) * Math.pow(60, items.length - 1 - index);
	}, 0);
}

/**
 * Получает временную метку из фрагмента URL, если он есть
 * 
 * @param {string} href
 * @returns {string | null} 
 */
function getTimeFromHash(href) {
	const url = new URL(href);

	return url.hash ? url.hash.replace('#', '') : null;
}
