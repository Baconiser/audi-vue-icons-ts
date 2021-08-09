const fs = require("fs").promises;
const path = require("path");

function isSvg(file) {
    return path.extname(file) === ".svg";
}

const out = "./dist";

function capitalize(text) {
    return [ text[0].toUpperCase(), text.substr(1, text.length) ].join("");
}

const ICON_PATH = "../@audi/audi-icon/dist/svg/static";

async function loadFiles() {
    let names = [];
    try {
        const files = await fs.readdir(ICON_PATH);
        const svgs = files.filter(isSvg);
        await new Promise((resolve => fs.mkdir("./dist", () => {
            resolve();
        })));
        for (var i = 0; i < svgs.length; i++) {
            const file = svgs[i];
            const filename = file.replace(".svg", "");
            const splittedName = filename.split("-");
            const name = splittedName.map(capitalize).join("");
            const size = splittedName.slice(-1).includes("large") ? 48 : 24;
            let content = await fs.readFile(path.join(ICON_PATH, file), "utf-8");
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
                            </script> `;
            names.push(name);
            await fs.writeFile(path.join(out, `${name}.vue`), template);
        }
        let index = "";

        names.forEach(name => {
            index += `import ${name} from './dist/${name}.vue';\n`;
        });
        names.forEach(name => index += `export ${name};`)
//        index += `export { ${names.join(",\n")} }`;
        await fs.writeFile("./index.d.ts", index);
    } catch (error) {
        console.error(error);
    }

}

loadFiles();
