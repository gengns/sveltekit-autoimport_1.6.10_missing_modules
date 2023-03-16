<!-- App.svelte -->

<script>
  // import { onMount } from 'svelte'

  /* Un comment next lines to see fly and vaadin-button working properly */
  // import { fly } from 'svelte/transition'
  // import '@vaadin/button'

  let txt = 'waiting onMount'
	let visible = true

  onMount(() => txt = 'onMount works!')
</script>


{txt}

<vaadin-button on:click={() => alert('Hello')}>Button</vaadin-button>

<label>
	<input type="checkbox" bind:checked={visible}>
	visible
</label>

{#if visible}
	<p in:fly={{ y: 200 }} out:fly={{ y: 200 }}>
		Fly in and out
	</p>
{/if}


<style>
  :global(body) {
    display: grid;
    gap: 15px;
  }

  vaadin-button {
    width: fit-content;
    cursor: pointer;
  }
</style>
