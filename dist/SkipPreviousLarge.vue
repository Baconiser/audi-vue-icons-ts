<template>
<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        skip-previous-large
    </title>
    <path d="M9.5,39.5 L9.5,8.5 L9.5,39.5 Z M38.5,9.2 L16.9,24 L38.5,38.8 L38.5,9.2 L38.5,9.2 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	
	@Component
	export default class SkipPreviousLarge extends Vue {
		@Prop({default: 48}) width!:number;
		@Prop({default: 48}) height!:number;
	}
</script> 