const fs = require("fs");
const path = require("path");

function replaceInFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const updated = content.replace(/map-get\(([^,]+),\s*'([^']+)'\)/g, "$1.get('$2')");
  fs.writeFileSync(filePath, updated, "utf8");
  console.log(`✔️ Actualizado: ${filePath}`);
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (file.endsWith(".scss")) {
      replaceInFile(fullPath);
    }
  });
}

walk(path.join(__dirname, "sass"));
