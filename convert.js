const fs = require("fs").promises;
const path = require("path");

function isSvg(file) {
    return path.extname(file) === ".svg";
}

const out = "./dist";

function capitalize(text) {
    return [text[0].toUpperCase(), text.substr(1, text.length)].join("");
}

const names = [];

async function loadFiles() {
    try {
        const files = await fs.readdir("./svg");
        files.filter(isSvg).forEach(async (file) => {
            const name = file.replace(".svg", "").split("-").map(capitalize).join("");
            const content = await fs.readFile(file, "utf-8");
            const template = `<template>
${content}</template>
<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	@Component
	export default class ${name} extends Vue {}
</script> `;
            await fs.writeFile(path.join(out, `${name}.vue`), template);
            names.push(name);
        });
 


    } catch (error) {
        console.error(error);
    }

}

loadFiles();
