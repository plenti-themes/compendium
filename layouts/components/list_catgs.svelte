<script>
  import Meta from "./post_meta.svelte";
  export let catgsMap, catg, tagsList, catgList;
  export let complete = true;
  export let skipbody = true;
  let Posts;
  
  $: Posts = catgsMap.get(catg);
</script>

<div class="rounded-xl overflow-hidden shadow-md bg-secondary mb-6">
  <div class="flex-none lg:flex">
    <div class="mx-2 md:mx-6 my-1">
      <h2 class="header text-xl md:text-2xl lg:text-3xl my-5">
        <span class="accent">Category:</span>
        {catg}
      </h2>
      {#each Posts as post}
        <div class="flex items-center my-4">
          <img
            class="inline-block object-cover rounded-md w-28 h-28"
            src="assets/posts/{post.img_src}"
            alt={post.img_alt}
          />
          <div class="inline-block ml-2">
            <h3 class="header my-0 text-xl md:text-2xl">
              <a href={post.path}>{post.title}</a>
            </h3>
            <Meta {post} {tagsList} {catgList} {complete} {skipbody} />
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
