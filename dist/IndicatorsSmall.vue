<template>
<svg :width="size" :height="size" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        indicators-small
    </title>
    <path d="M13.5,13.5 L13.5,9.5 L17.5,9.5 L17.5,5.5 L23.3,11.5 L17.5,17.5 L17.5,13.5 L13.5,13.5 Z M10.5,13.5 L10.5,9.5 L6.5,9.5 L6.5,5.5 L0.7,11.5 L6.5,17.5 L6.5,13.5 L10.5,13.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	
	@Component
	export default class IndicatorsSmall extends Vue {
		@Prop({default: 24}) width!:number;
		@Prop({default: 24}) height!:number;
	}
</script> 