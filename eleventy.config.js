import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("script")
	eleventyConfig.addPassthroughCopy("img")

	return {
		markdownTemplateEngine: "njk",
	}
};