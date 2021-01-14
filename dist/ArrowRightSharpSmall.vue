<template>
<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        arrow-right-sharp-small
    </title>
    <path d="M16.5,11.5 L6.5,1.5 L6.5,24 M16.5,5 L16.5,11.5 L10,11.5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	
	@Component
	export default class ArrowRightSharpSmall extends Vue {
		@Prop({default: 24}) width!:number;
		@Prop({default: 24}) height!:number;
	}
</script> 