module.exports = {
  plugins: [
    {
      name: "preset-default",
    },
    {
      name: "convertColors",
      params: {
        currentColor: true,
      },
    },
    {
      name: "removeDimensions",
    },
    {
      name: "convertPathData",
      params: { noSpaceAfterFlags: false },
    },
    {
      name: "mergePaths",
      params: { noSpaceAfterFlags: false },
    },
  ],
};
