const fs = require("fs");
const { promises: fsPromises } = fs;
const path = require("path");

function isSvg(file) {
    return path.extname(file) === ".svg";
}

const OUT_FOLDER = "./src";
let ICON_PATH = "../@audi/audi-icon/dist/svg/static";

function capitalize(text) {
    return [ text[0].toUpperCase(), text.substr(1, text.length) ].join("");
}

if(fs.existsSync("node_modules")) {
    ICON_PATH = "node_modules/@audi/audi-icon/dist/svg/static";
}

async function loadFiles() {
    let names = [];
    try {
        const files = await fsPromises.readdir(ICON_PATH);
        const svgs = files.filter(isSvg);
        try {
            await fsPromises.mkdir(OUT_FOLDER);
            await fsPromises.mkdir("./dist");
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
            content = content.replace(filename, "{{title}}");

            const template = `<template>
${content}</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ${name} extends Vue {
    @Prop({default: ${size}}) width!:number;
    @Prop({default: ${size}}) height!:number;
    @Prop({default: '${filename}'}) title!:string;
}
</script>`;
            names.push(name);
            await fsPromises.writeFile(path.join(OUT_FOLDER, `${name}.vue`), template);
        }
        let index = "";

        names.forEach(name => index += `import ${name} from './${OUT_FOLDER}/${name}.vue';\n`);
        index += `export { ${names.join(",\n")} }`;
        await fsPromises.writeFile("./index.d.ts", index);
    } catch (error) {
        console.error(error);
    }

}

loadFiles();
