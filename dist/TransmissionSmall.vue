<template>
<svg :width="size" :height="size" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        transmission-small
    </title>
    <path d="M22.5,5 L22.5,20 M15.5,5 L15.5,20 M8.5,5 L8.5,20 M1.5,5 L1.5,12.5 L22.5,12.5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	
	@Component
	export default class TransmissionSmall extends Vue {
		@Prop({default: 24}) width!:number;
		@Prop({default: 24}) height!:number;
	}
</script> 