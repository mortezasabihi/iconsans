const fs = require("fs");
const path = require("path");

const componentsDir = path.join(__dirname, "src/components");

fs.readdir(componentsDir, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach((file) => {
    if (path.extname(file) === ".tsx") {
      const filePath = path.join(componentsDir, file);
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          console.error(err);
          return;
        }

        const lines = data.split("\n");
        if (lines[0].startsWith('import * as React from "react";')) {
          lines.splice(0, 1);
          fs.writeFile(filePath, lines.join("\n"), (err) => {
            if (err) {
              console.error(err);
              return;
            }
          });
        }
      });
    }
  });
});
