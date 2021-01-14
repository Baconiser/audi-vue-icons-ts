<template>
<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        share-large
    </title>
    <path d="M28,16.5 L35.5,16.5 L35.5,40.5 L11.5,40.5 L11.5,16.5 L19,16.5 M23.5,29 L23.5,4.50253304 M17,11 L23.5,4.5 L30,11" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	
	@Component
	export default class ShareLarge extends Vue {
		@Prop({default: 48}) width!:number;
		@Prop({default: 48}) height!:number;
	}
</script> 