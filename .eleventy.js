const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginNavigation = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const prettyData = require("pretty-data");
const htmlmin = require("html-minifier");
const linkedom = require("linkedom");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy('src/manifest.json');
	eleventyConfig.addPassthroughCopy("src/fonts");
	eleventyConfig.addPassthroughCopy({ "src/assets/*.{svg,jpg,png}": "assets" });
	eleventyConfig.addPassthroughCopy({ "src/assets/favicons/*.{svg,jpg,png,ico}": "assets/favicons" });
	eleventyConfig.addPassthroughCopy( "src/episodes/**/*.(gif|jpg|png|webp|svg)");
	eleventyConfig.addPassthroughCopy( "src/episodes/**/*.(mp3|m4a|wav|aac|ogg|aiff|wma|flac)");

	// Маркдаун
	let options = {
		html: true,
		breaks: true,
		linkify: true
	};
	eleventyConfig.setLibrary("md", markdownIt(options).disable("code"));

	// Навигация
	eleventyConfig.addPlugin(pluginNavigation);

	// RSS
	eleventyConfig.addPlugin(pluginRss);

	eleventyConfig.addTransform("xmlmin", function(content, outputPath) {
		if(outputPath && outputPath.endsWith(".xml")) {
			let result = prettyData.pd.xmlmin(content);
			return result;
		}
		return content;
	});

	// Даты
	eleventyConfig.addFilter("readableDate", (value) => {
		return value.toLocaleString("ru", {
			year: "numeric",
			month: "long",
			day: "numeric"
		}).replace(" г.", "");
	});

	eleventyConfig.addFilter("htmlDateString", (value) => {
		return value.toISOString();
	});

	// Сортировка
	eleventyConfig.addFilter("slice", (array, n) => {
		if( n < 0 ) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	eleventyConfig.addFilter("min", (...numbers) => {
		return Math.min.apply(null, numbers);
	});

	// Хэш файла для правильной работы кеша
	const assetHashes = {};

	eleventyConfig.addFilter("filehash", (url) => {
		const filePath = path.join(eleventyConfig.dir.input, url);

		if (!assetHashes[url]) {
			const fileBuffer = fs.readFileSync(filePath);
			const hashSum = crypto.createHash("md5");
			hashSum.update(fileBuffer);
			assetHashes[url] = hashSum.digest("hex");
		}

		return `${url}?v=${assetHashes[url]}`;
	});

	// Трансформации
	eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
		if(outputPath && outputPath.endsWith(".html")) {
			let result = htmlmin.minify(
				content, {
					removeComments: true,
					collapseWhitespace: true
				}
			);
			return result;
		}
		return content;
	});

	const htmlTransforms = [
		require('./src/transforms/title-id-transform.js')
	];

	eleventyConfig.addTransform('html-transform', async (content, outputPath) => {
		if (!outputPath || !outputPath.endsWith('.html')) {
			return content;
		}

		const window = linkedom.parseHTML(content);

		for (const transform of htmlTransforms) {
			await transform(window, content, outputPath);
		}

		return window.document.toString();
	})

	return {
		dir: {
			input: "src",
			output: "dist",
			includes: "_partials",
			layouts: "templates",
			data: "data",
		},
		dataTemplateEngine: "njk",
		markdownTemplateEngine: false,
		htmlTemplateEngine: "njk",
		passthroughFileCopy: true,
		templateFormats: [
			"md",
			"njk",
		],
	};
};
