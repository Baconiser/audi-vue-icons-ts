<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        documents-large
    </title>
    <path d="M12,38.5 L35,38.5 M12,32.5 L35,32.5 M12,26.5 L35,26.5 M29.5,2.5 L29.5,13.5 L40.5,13.5 M40.5,13.5 L40.5,45.5 L6.5,45.5 L6.5,2.5 L29.5,2.5 L40.5,13.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	
	@Component
	export default class DocumentsLarge extends Vue {
		@Prop({default: 48}) width!:number;
		@Prop({default: 48}) height!:number;
	}
</script> 