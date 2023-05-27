const fs = require("fs");
const path = require("path");
const prettier = require("prettier");
const { DOMParser, XMLSerializer } = require("xmldom");

const ICONS_DIRECTORY = path.join(__dirname, "../../icons");
const EXPORT_DIRECTORY = path.join(__dirname, "./src/components");

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

    function addSizeAttributes(svgString) {
      const closingTagIndex = svgString.indexOf(">");
      const openingTag = svgString.slice(0, closingTagIndex);
      const closingTag = svgString.slice(closingTagIndex);
      const sizeAttributes = ` :width="width" :height="height"`;
      const newOpeningTag = openingTag + sizeAttributes;
      return newOpeningTag + closingTag;
    }

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(doc.documentElement);

    const vueComponent = `
      <template>
        ${addSizeAttributes(svgString)}
      </template>

      <script lang="ts">
      import { defineComponent } from 'vue'
      export default defineComponent({
        name: '${componentName}',
        props: {
          width: {
            required: false,
            type: Number,
            default: () => 16
          },
          height: {
            required: false,
            type: Number,
            default: () => 16
          }
        }
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
