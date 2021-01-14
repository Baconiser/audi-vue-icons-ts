<template>
<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        bookmark-large
    </title>
    <path d="M36.5 44.5L23.5 31.5 10.5 44.5 10.5 3.5 36.5 3.5z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	
	@Component
	export default class BookmarkLarge extends Vue {
		@Prop({default: 48}) width!:number;
		@Prop({default: 48}) height!:number;
	}
</script> 