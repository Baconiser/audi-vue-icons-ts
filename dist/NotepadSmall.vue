<template>
<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        notepad-small
    </title>
    <path d="M19.5,7 L19.5,22.5 L3.5,22.5 L3.5,2.5 L15,2.5 L19.5,7 Z M14.5,2.5 L14.5,7.5 L19.5,7.5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	
	@Component
	export default class NotepadSmall extends Vue {
		@Prop({default: 24}) width!:number;
		@Prop({default: 24}) height!:number;
	}
</script> 