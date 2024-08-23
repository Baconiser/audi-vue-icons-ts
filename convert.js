const fs = require("fs");
const {promises: fsPromises} = fs;
const path = require("path");

function isSvg(file) {
    return path.extname(file) === ".svg";
}

const SVG_FOLDER = "@audi/audi-icon/dist/svg";
const OUT_FOLDER = "./dist";
let ICON_PATH = path.join("..", SVG_FOLDER);

function capitalize(text) {
    return [text[0].toUpperCase(), text.substr(1, text.length)].join("");
}

if (fs.existsSync("node_modules")) {
    ICON_PATH = path.join("node_modules", SVG_FOLDER);
}

async function convert() {
    let names = [];
    try {
        const files = await fsPromises.readdir(ICON_PATH);
        const svgs = files.filter(isSvg);
        // remove everything from output folder
        fs.rmSync(OUT_FOLDER, {recursive: true, force: true});
        try {
            await fsPromises.mkdir(OUT_FOLDER);
        } catch (e) {
        }
        const tsConfig = `{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "Node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "declaration": true,                  // Generate .d.ts files
    "declarationDir": "./dist",           // Output directory for .d.ts files
    "outDir": "./dist",                   // Output directory for .js files
    "strict": true,
    "jsx": "preserve",
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true
  },
  "include": ["./*.ts", "./*.vue"],       // Include all .ts and .vue files in the root
  "exclude": ["node_modules", "dist"]     // Exclude output and dependencies
}`
        fsPromises.writeFile(path.join(OUT_FOLDER, "./tsconfig.json"), tsConfig);


        for (var i = 0; i < svgs.length; i++) {
            const file = svgs[i];
            const filename = file.replace(".svg", "");
            const splittedName = filename.split("-");
            let name = "Audi" + splittedName.map(capitalize).join("");


            let content = await fsPromises.readFile(path.join(ICON_PATH, file), "utf-8");
            const width = content.match(/width="(\d+)"/)[1];
            const height = content.match(/height="(\d+)"/)[1];
            content = content.replace(`width="${width}"`, ":width=\"width\"");
            content = content.replace(`height="${height}"`, ":height=\"height\"");
            content = content.replace(filename, "{{title}}");

            const template =
                `<template>${minify(content)}</template>
<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  width: { type: Number, default: ${width} },
  height: { type: Number, default: ${height} },
  title: { type: String, default: "" }
});

</script>`;


            names.push(name);
            await fsPromises.writeFile(path.join(OUT_FOLDER, `${name}.vue`), minify(template));
        }
        let index = "";

        names.forEach(name => index +=
            `export {default as ${name}} from './${name}.vue';\n`);
        await fsPromises.writeFile(path.join(OUT_FOLDER, "./index.ts"), index);
    } catch (error) {
        console.error(error);
    }

}

function minify(s) {
    return s.replace(/\n/g, "").replace(/\s{2,}/g, "");
}

convert();
