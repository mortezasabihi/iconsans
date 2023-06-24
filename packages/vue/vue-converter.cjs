const fs = require("fs");
const path = require("path");
const prettier = require("prettier");
const { DOMParser, XMLSerializer } = require("xmldom");

const ICONS_DIRECTORY = path.join(__dirname, "../../icons");
const EXPORT_DIRECTORY = path.join(__dirname, "./src/components");

function addSizeAttributes(svgString, width, height) {
  const closingTagIndex = svgString.indexOf(">");
  const openingTag = svgString.slice(0, closingTagIndex);
  const closingTag = svgString.slice(closingTagIndex);
  const sizeAttributes = ` :width="${width}" :height="${height}"`;
  const newOpeningTag = openingTag + sizeAttributes;
  return newOpeningTag + closingTag;
}

function generateVueComponent(componentName, svgString) {
  const vueComponent = `
    <template>
      ${addSizeAttributes(svgString, "width", "height")}
    </template>
    
    <script lang="ts">
    import { defineComponent } from 'vue'
    
    export default defineComponent({
      name: '${componentName}',
      props: {
        width: {
          required: false,
          type: [Number, String],
          default: () => 16
        },
        height: {
          required: false,
          type: [Number, String],
          default: () => 16
        }
      }
    })
    </script>
  `;
  return prettier.format(vueComponent, {
    parser: "vue",
  });
}

function createFolderStructure(inputDir, outputDir) {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const directories = fs
    .readdirSync(inputDir, { withFileTypes: true })
    .filter((item) => item.isDirectory());

  directories.forEach((dir) => {
    const inputPath = path.join(inputDir, dir.name);
    const outputPath = path.join(outputDir, dir.name);

    createFolderStructure(inputPath, outputPath);
  });
}

function findFiles(dir, ext, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findFiles(filePath, ext, fileList);
    } else if (path.extname(file) === ext) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

function createIndexFile(directory) {
  const vueFiles = findFiles(directory, ".vue");
  const iconComponents = vueFiles.map((file) => {
    const componentName = path.parse(file).name;
    return `export { default as ${componentName.replace(
      /-/g,
      ""
    )} } from './${componentName}.vue';`;
  });

  const indexPath = path.join(directory, "index.ts");
  const indexContent = iconComponents.join("\n");

  fs.writeFileSync(indexPath, indexContent);
}

function createIndexFilesRecursively(directory) {
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      createIndexFilesRecursively(filePath);
      createIndexFile(filePath);
    }
  });
}

(() => {
  createFolderStructure(ICONS_DIRECTORY, EXPORT_DIRECTORY);

  const svgFiles = findFiles(ICONS_DIRECTORY, ".svg");

  svgFiles.forEach((file) => {
    const parsedPath = path.parse(file);
    const componentName = parsedPath.name
      .replaceAll("-", "")
      .replaceAll(/ /g, "");
    const componentPath = path.join(
      EXPORT_DIRECTORY,
      parsedPath.dir.split("/").pop(),
      componentName + ".vue"
    );
    const svgData = fs.readFileSync(file, "utf8");

    const parser = new DOMParser();
    const doc = parser.parseFromString(svgData, "image/svg+xml");

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(doc.documentElement);

    const formattedVueComponent = generateVueComponent(
      componentName,
      svgString
    );

    fs.writeFile(componentPath, formattedVueComponent, function (err) {
      if (err) {
        console.error(err);
        return;
      }

      console.log(`Converted ${file} to ${componentName}.vue`);
    });
  });

  createIndexFilesRecursively(EXPORT_DIRECTORY);
})();
