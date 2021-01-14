<template>
<svg :width="size" :height="size" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        video-small
    </title>
    <path d="M0.5,4.5 L22.5,4.5 C23.1,4.5 23.5,4.9 23.5,5.5 L23.5,19.5 L1.5,19.5 C0.9,19.5 0.5,19.1 0.5,18.5 L0.5,4.5 Z M9.5,7 L16.1,11.4 L9.5,16 L9.5,7 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	
	@Component
	export default class VideoSmall extends Vue {
		@Prop({default: 24}) width!:number;
		@Prop({default: 24}) height!:number;
	}
</script> 