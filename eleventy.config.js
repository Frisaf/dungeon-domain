import { DateTime } from "luxon";

export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("script");
	eleventyConfig.addPassthroughCopy("img");
	
	eleventyConfig.addFilter("formatDate", (dateObj, format = "MMMM dd, yyyy") => {
		return DateTime.fromJSDate(dateObj).toFormat(format)
	})

	eleventyConfig.addFilter("itemLimit", function(array, maximum) {
    	return array.slice(0, maximum);
	});

	return {
		markdownTemplateEngine: "njk",
	}
};