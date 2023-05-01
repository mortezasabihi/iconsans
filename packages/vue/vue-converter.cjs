const fs = require("fs");
const path = require("path");
const prettier = require("prettier");
const { DOMParser, XMLSerializer } = require("xmldom");

const ICONS_DIRECTORY = path.join(__dirname, "../../icons");
const EXPORT_DIRECTORY = path.join(__dirname, "./components");

fs.readdir(ICONS_DIRECTORY, function (err, files) {
  if (err) {
    console.error(err);
    return;
  }

  const svgFiles = files.filter((file) => path.extname(file) === ".svg");

  svgFiles.forEach((file) => {
    const componentName = path.parse(file).name.replace(/\s/g, "-");
    const componentPath = path.join(EXPORT_DIRECTORY, componentName + ".vue");
    const svgData = fs.readFileSync(path.join(ICONS_DIRECTORY, file), "utf8");

    const parser = new DOMParser();
    const doc = parser.parseFromString(svgData, "image/svg+xml");

    // Replace width and height attributes values with 1em
    const widthAttr = doc.documentElement.getAttribute("width");
    if (widthAttr) {
      doc.documentElement.setAttribute("width", "1em");
    }

    const heightAttr = doc.documentElement.getAttribute("height");
    if (heightAttr) {
      doc.documentElement.setAttribute("height", "1em");
    }

    // Replace stroke attribute value with currentColor in root element
    const strokeAttr = doc.documentElement.getAttribute("stroke");
    if (strokeAttr) {
      doc.documentElement.setAttribute("stroke", "currentColor");
    }

    // Replace fill attribute value with currentColor if it's not "none"
    const fillAttr = doc.documentElement.getAttribute("fill");
    if (fillAttr && fillAttr !== "none") {
      doc.documentElement.setAttribute("fill", "currentColor");
    }

    // Replace stroke attribute value with currentColor in child elements
    const elements = doc.documentElement.getElementsByTagName("*");
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const strokeAttr = element.getAttribute("stroke");
      if (strokeAttr) {
        element.setAttribute("stroke", "currentColor");
      }
    }

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(doc.documentElement);

    const vueComponent = `
      <template>
        ${svgString}
      </template>

      <script lang="ts">
      import { defineComponent } from 'vue'
      export default defineComponent({
        name: '${componentName}',
      })
      </script>
    `;

    const formattedVueComponent = prettier.format(vueComponent, {
      parser: "vue",
    });

    if (!fs.existsSync(EXPORT_DIRECTORY)) {
      fs.mkdirSync(EXPORT_DIRECTORY);
    }

    fs.writeFile(componentPath, formattedVueComponent, function (err) {
      if (err) {
        console.error(err);
        return;
      }

      console.log(`Converted ${file} to ${componentName}.vue`);
    });
  });

  const iconFiles = fs
    .readdirSync(EXPORT_DIRECTORY)
    .filter((file) => /\.vue$/.test(file));

  const iconComponents = iconFiles.map((file) => {
    const componentName = path.parse(file).name;
    return `export { default as ${componentName.replace(
      /-/g,
      ""
    )} } from './${componentName}.vue';`;
  });

  fs.writeFileSync(
    path.join(EXPORT_DIRECTORY, "index.ts"),
    iconComponents.join("\n")
  );
});
