<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        indicators-large
    </title>
    <path d="M26.5,19.5 L26.5,27.5 L35.5,27.5 L35.5,35.5 L47.3,23.5 L35.5,11.5 L35.5,19.5 L26.5,19.5 Z M21.5,27.5 L21.5,19.5 L12.5,19.5 L12.5,11.5 L0.7,23.5 L12.5,35.5 L12.5,27.5 L21.5,27.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	
	@Component
	export default class IndicatorsLarge extends Vue {
		@Prop({default: 48}) width!:number;
		@Prop({default: 48}) height!:number;
	}
</script> 