const fs = require("fs");
const { promises: fsPromises } = fs;
const path = require("path");

function isSvg(file) {
    return path.extname(file) === ".svg";
}

const SVG_FOLDER = "@audi/audi-icon/dist/svg/static";
const OUT_FOLDER = "./dist";
let ICON_PATH = path.join("..", SVG_FOLDER);

function capitalize(text) {
    return [ text[0].toUpperCase(), text.substr(1, text.length) ].join("");
}

if (fs.existsSync("node_modules")) {
    ICON_PATH = path.join("node_modules", SVG_FOLDER);
}

async function convert() {
    let names = [];
    try {
        const files = await fsPromises.readdir(ICON_PATH);
        const svgs = files.filter(isSvg);
        try {
            await fsPromises.mkdir(OUT_FOLDER);
        } catch (e) {
        }
        for (var i = 0; i < svgs.length; i++) {
            const file = svgs[i];
            const filename = file.replace(".svg", "");
            const splittedName = filename.split("-");
            const name = splittedName.map(capitalize).join("");
            const size = splittedName.slice(-1).includes("large") ? 48 : 24;
            let content = await fsPromises.readFile(path.join(ICON_PATH, file), "utf-8");
            content = content.replace(`width="${size}"`, ":width=\"width\"");
            content = content.replace(`height="${size}"`, ":height=\"height\"");
            content = content.replace(filename, name);

            const template =
                `<template>${minify(content)}</template>
<script lang="ts">
export default {
  name: "${name}",
  props: {
    width: { type: Number, default: ${size} },
    height: { type: Number, default: ${size} },
    filename: { type: String, default: ${size} }
  }
}
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
