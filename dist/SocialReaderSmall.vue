<template>
<svg :width="size" :height="size" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        social-reader-small
    </title>
    <path d="M5.5,5.5 L18.5,5.5 L18.5,18.5 L5.5,18.5 L5.5,5.5 Z M5.5,10.5 L9.5,10.5 L5.5,10.5 Z M14.5,12.5 L18.5,12.5 L14.5,12.5 Z M9.5,15.5 L14.5,15.5 L9.5,15.5 Z M9.5,18.5 L9.5,5.5 L9.5,18.5 Z M14.5,18.5 L14.5,5.5 L14.5,18.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	
	@Component
	export default class SocialReaderSmall extends Vue {
		@Prop({default: 24}) width!:number;
		@Prop({default: 24}) height!:number;
	}
</script> 