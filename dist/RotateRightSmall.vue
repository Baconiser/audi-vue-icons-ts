<template>
<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        rotate-right-small
    </title>
    <path d="M17.6,11.5 L14.6,15.4 L18.7,18.4 M14.9,15.3 C19.3,14.8 22.5,13.3 22.5,11.5 C22.5,9.3 17.8,7.5 12,7.5 C6.2,7.5 1.5,9.3 1.5,11.5 C1.5,13.1 4.1,14.6 7.9,15.2" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	
	@Component
	export default class RotateRightSmall extends Vue {
		@Prop({default: 24}) width!:number;
		@Prop({default: 24}) height!:number;
	}
</script> 