const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true
    // modifyVars: { "@primary-color": "#25b864" }
  })
);
