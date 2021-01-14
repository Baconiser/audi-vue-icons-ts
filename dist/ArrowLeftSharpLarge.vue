<template>
<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        arrow-left-sharp-large
    </title>
    <path d="M30.5,42 L30.5,6.5 L14.5,22.5 M22,22.5 L14.5,22.5 L14.5,15" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	
	@Component
	export default class ArrowLeftSharpLarge extends Vue {
		@Prop({default: 48}) width!:number;
		@Prop({default: 48}) height!:number;
	}
</script> 