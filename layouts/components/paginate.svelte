<script>
  export let currentPage, totalPages;
</script>

<ul class="pagination items-center justify-center">
  {#if currentPage - 1 > 0}
    <li class="btn-round w-10 h-10">
      <a href="/" class="page-link" aria-label="First"
        ><span aria-hidden="true">««</span></a
      >
    </li>
    <li class="btn-round w-10 h-10">
      <a href="posts/{currentPage - 1}" class="page-link" aria-label="Previous"
        ><span aria-hidden="true">«</span></a
      >
    </li>
  {:else}
    <li class="btn-round w-10 h-10 disabled">
      <a href="/" class="page-link" aria-label="First"
        ><span aria-hidden="true">««</span></a
      >
    </li>
    <li class="btn-round w-10 h-10 disabled">
      <a href="posts/{currentPage - 1}" class="page-link" aria-label="Previous"
        ><span aria-hidden="true">«</span></a
      >
    </li>
  {/if}
  {#each Array(totalPages) as _, i}
    {#if currentPage == i + 1}
      <li class="btn-round w-10 h-10 active">
        <a class="page-link" href="/posts/{i + 1}">{i + 1}</a>
      </li>
    {:else}
      <li class="btn-round w-10 h-10">
        <a class="page-link" href="/posts/{i + 1}">{i + 1}</a>
      </li>
    {/if}
  {/each}
  {#if currentPage + 1 <= totalPages}
    <li class="btn-round w-10 h-10">
      <a href="posts/{currentPage + 1}" class="page-link" aria-label="Next"
        ><span aria-hidden="true">»</span></a
      >
    </li>
    <li class="btn-round w-10 h-10">
      <a href="posts/{totalPages}" class="page-link" aria-label="Last"
        ><span aria-hidden="true">»»</span></a
      >
    </li>
  {:else}
    <li class="btn-round w-10 h-10 disabled">
      <a href="posts/{currentPage + 1}" class="page-link" aria-label="Next"
        ><span aria-hidden="true">»</span></a
      >
    </li>
    <li class="btn-round w-10 h-10 disabled">
      <a href="posts/{totalPages}" class="page-link" aria-label="Last"
        ><span aria-hidden="true">»»</span></a
      >
    </li>
  {/if}
</ul>
