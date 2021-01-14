<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        line-large
    </title>
    <path d="M15 19.5L34 19.5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	
	@Component
	export default class LineLarge extends Vue {
		@Prop({default: 48}) width!:number;
		@Prop({default: 48}) height!:number;
	}
</script> 