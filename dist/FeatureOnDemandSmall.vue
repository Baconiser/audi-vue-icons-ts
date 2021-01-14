<template>
<svg :width="size" :height="size" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        feature-on-demand-small
    </title>
    <path d="M13.5,13.5 L21.5,13.5 L21.5,21.5 L13.5,21.5 L13.5,13.5 Z M2.5,13.5 L10.5,13.5 L10.5,21.5 L2.5,21.5 L2.5,13.5 Z M13.5,0.5 L23.5,0.5 L23.5,10.5 L13.5,10.5 L13.5,0.5 Z M2.5,2.5 L10.5,2.5 L10.5,10.5 L2.5,10.5 L2.5,2.5 Z M16,5.5 L21,5.5 M18.5,3 L18.5,8" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	
	@Component
	export default class FeatureOnDemandSmall extends Vue {
		@Prop({default: 24}) width!:number;
		@Prop({default: 24}) height!:number;
	}
</script> 