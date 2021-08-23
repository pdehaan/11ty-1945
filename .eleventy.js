module.exports = function (eleventyConfig) {
  // Copy image assets into output folder.
  eleventyConfig.addPassthroughCopy("input/images");
  
  return {
    dir: {
      input: "input",
      output: "site",
    },
  };
};
