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
  ],
};
