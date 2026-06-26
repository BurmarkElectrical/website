export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");

  eleventyConfig.addFilter("capitalizeFirst", function(string) {
    if (!string) return string; // Handle empty or null strings
    return string.charAt(0).toUpperCase() + string.slice(1);
  });

  eleventyConfig.addLiquidFilter("urlActive", function(pageUrl, prefix) {
    if (!pageUrl || !prefix) return "";
    return pageUrl.startsWith(prefix) ? "active" : "";
  });
};