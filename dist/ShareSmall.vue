<template>
<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        share-small
    </title>
    <path d="M13.9820943,8.5 L17.5,8.5 L17.5,20.5 L5.5,20.5 L5.5,8.5 L9,8.5 M11.5,15 L11.5,2.50126652 M8,6 L11.5,2.5 L15,6" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	
	@Component
	export default class ShareSmall extends Vue {
		@Prop({default: 24}) width!:number;
		@Prop({default: 24}) height!:number;
	}
</script> 