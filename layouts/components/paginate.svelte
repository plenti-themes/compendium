<script>
  export let currentPage, totalPages, page;
</script>

<div class="flex pagination text-center justify-center">
  <!-- -------------------- -->
  <!-- Previous Buttons     -->
  <!-- -------------------- -->
  {#if currentPage - 1 > 0}
    <a
      href="{page == 'projects' ? 'projects/' : ''}1"
      class="btn-round m-0.5"
      aria-label="First"><i class="las la-angle-double-left font-black" /></a
    >
    <a
      href="{page == 'projects' ? 'projects/' : ''}{Math.max(
        currentPage - 1,
        1
      )}"
      class="btn-round m-0.5"
      aria-label="Previous"><i class="las la-angle-left font-black" /></a
    >
  {:else}
    <button class="btn-round-inactive m-0.5" aria-label="First"
      ><i class="las la-angle-double-left font-black" /></button
    >
    <button class="btn-round-inactive m-0.5" aria-label="Previous"
      ><i class="las la-angle-left font-black" /></button
    >
  {/if}

  <!-- -------------------- -->
  <!-- Number Buttons       -->
  <!-- -------------------- -->
  {#each Array(totalPages) as _, i}
    {#if currentPage == i + 1}
      <button class="btn-round-active m-0.5">{i + 1}</button>
    {:else}
      <a
        class="btn-round m-0.5"
        href="{page == 'projects' ? 'projects/' : ''}{i + 1}">{i + 1}</a
      >
    {/if}
  {/each}

  <!-- -------------------- -->
  <!-- Next Buttons         -->
  <!-- -------------------- -->
  {#if currentPage + 1 <= totalPages}
    <a
      href="{page == 'projects' ? 'projects/' : ''}{Math.min(
        currentPage + 1,
        totalPages
      )}"
      class="btn-round m-0.5"
      aria-label="Next"><i class="las la-angle-right font-black" /></a
    >
    <a
      href="{page == 'projects' ? 'projects/' : ''}{totalPages}"
      class="btn-round m-0.5"
      aria-label="Last"><i class="las la-angle-double-right font-black" /></a
    >
  {:else}
    <button class="btn-round-inactive m-0.5" aria-label="Next"
      ><i class="las la-angle-right font-black" /></button
    >
    <button class="btn-round-inactive m-0.5" aria-label="Last"
      ><i class="las la-angle-double-right font-black" /></button
    >
  {/if}
</div>

<style>
  .las {
    top: 0px;
  }
</style>
