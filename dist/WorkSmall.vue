<template>
<svg :width="size" :height="size" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        work-small
    </title>
    <path d="M18.5,21.5 L13.5,21.5 L13.5,16.5 L10.5,16.5 L10.5,21.5 L5.5,21.5 L5.5,2.5 L18.5,2.5 L18.5,21.5 Z M13.5,5.5 L15.5,5.5 L15.5,7.5 L13.5,7.5 L13.5,5.5 Z M8.5,5.5 L10.5,5.5 L10.5,7.5 L8.5,7.5 L8.5,5.5 Z M13.5,11.5 L15.5,11.5 L15.5,13.5 L13.5,13.5 L13.5,11.5 Z M8.5,11.5 L10.5,11.5 L10.5,13.5 L8.5,13.5 L8.5,11.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	
	@Component
	export default class WorkSmall extends Vue {
		@Prop({default: 24}) width!:number;
		@Prop({default: 24}) height!:number;
	}
</script> 