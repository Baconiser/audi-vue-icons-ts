<template>
<svg :width="size" :height="size" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        arrow-right-light-small
    </title>
    <path d="M6.5,24 L6.5,14.8 C6.5,12.7 7.3,10.6 8.8,9.1 L16.5,1.5 M10,1.5 L16.5,1.5 L16.5,8" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	
	@Component
	export default class ArrowRightLightSmall extends Vue {
		@Prop({default: 24}) width!:number;
		@Prop({default: 24}) height!:number;
	}
</script> 