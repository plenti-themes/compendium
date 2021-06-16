<script>
  export let currentPage, totalPages;
</script>

<div class="flex pagination text-center justify-center">
  <!-- -------------------- -->
  <!-- Previous Buttons     -->
  <!-- -------------------- -->
  {#if currentPage - 1 > 0}
    <a href="/1" class="btn-round m-0.5" aria-label="First"
      ><i class="icofont-rounded-double-left" /></a
    >
    <a
      href="/{Math.max(currentPage - 1, 1)}"
      class="btn-round m-0.5"
      aria-label="Previous"><i class="icofont-rounded-left" /></a
    >
  {:else}
    <button class="btn-round m-0.5 disabled" aria-label="First"
      ><i class="icofont-rounded-double-left text-gray-300" /></button
    >
    <button class="btn-round m-0.5 disabled" aria-label="Previous"
      ><i class="icofont-rounded-left text-gray-300" /></button
    >
  {/if}

  <!-- -------------------- -->
  <!-- Number Buttons       -->
  <!-- -------------------- -->
  {#each Array(totalPages) as _, i}
    {#if currentPage == i + 1}
      <button class="btn-round-active m-0.5">{i + 1}</button>
    {:else}
      <a class="btn-round m-0.5" href="/{i + 1}">{i + 1}</a>
    {/if}
  {/each}

  <!-- -------------------- -->
  <!-- Next Buttons         -->
  <!-- -------------------- -->
  {#if currentPage + 1 <= totalPages}
    <a
      href="/{Math.min(currentPage + 1, totalPages)}"
      class="btn-round m-0.5"
      aria-label="Next"><i class="icofont-rounded-right" /></a
    >
    <a href="/{totalPages}" class="btn-round m-0.5" aria-label="Last"
      ><i class="icofont-rounded-double-right" /></a
    >
  {:else}
    <button class="btn-round m-0.5 disabled" aria-label="Next"
      ><i class="icofont-rounded-right text-gray-300" /></button
    >
    <button class="btn-round m-0.5 disabled" aria-label="Last"
      ><i class="icofont-rounded-double-right text-gray-300" /></button
    >
  {/if}
</div>
