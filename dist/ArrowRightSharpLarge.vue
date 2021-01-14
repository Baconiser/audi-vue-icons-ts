<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        arrow-right-sharp-large
    </title>
    <path d="M32.5,22.5 L16.5,6.5 L16.5,42 M32.5,15 L32.5,22.5 L25,22.5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	
	@Component
	export default class ArrowRightSharpLarge extends Vue {
		@Prop({default: 48}) width!:number;
		@Prop({default: 48}) height!:number;
	}
</script> 