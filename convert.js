const fs = require("fs").promises;
const path = require("path");

function isSvg(file) {
    return path.extname(file) === ".svg";
}

const out = "./dist";

function capitalize(text) {
    return [text[0].toUpperCase(), text.substr(1, text.length)].join("");
}

async function loadFiles() {
    let names = [];
    try {
        const files = await fs.readdir("./svg");
        const svgs = files.filter(isSvg);

        for (var i = 0; i < svgs.length; i++) {
            const file = svgs[i];

            const name = file.replace(".svg", "").split("-").map(capitalize).join("");
            const content = await fs.readFile(path.join("./svg", file), "utf-8");
            const template = `<template>
${content}</template>
<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	@Component
	export default class ${name} extends Vue {}
</script> `;
            names.push(name);
            await fs.writeFile(path.join(out, `${name}.vue`), template);
        }
        let index = "";

        names.forEach(name => index += `import ${name} from './dist/${name}.vue';\n`);
        index += `export { ${names.join(",\n")} }`;
        await fs.writeFile("./index.ts", index);
    } catch (error) {
        console.error(error);
    }

}

loadFiles();
