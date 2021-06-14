<script>
  export let allPosts;

  let value = "";
</script>

<aside class="w-full md:w-3/12 px-0">
  <div class="pl-0 pl-lg-4">
    <!-- Search -->
    <div class="row">
      <h4 class="font-bold mb-2"><span>Search</span></h4>
      <span class="flex flex-wrap items-center">
        <form action="/search" class="widget-search">
          <input class="w-36" placeholder="Search content..." bind:value />
        </form>
        <button type="submit" class="-mt-4" aria-label="Search Post">
          <i class="icofont-search-2 btn-round inline-block ml-1" />
        </button>
      </span>
      <div class="row">
        <div class="content">
          {#if value.length >= 3}
            <!-- {#each allPosts as post} -->
            {#each allPosts as post, i}
              {#if post.fields.body.toLowerCase().includes(value.toLowerCase())}
                <div class="flex items-center mb-5">
                  <img
                    class="inline-block object-cover rounded-full w-16 h-16"
                    src="/assets/{post.fields.image.src}"
                    alt={post.fields.image.alt}
                  />
                  <div class="inline-block ml-2">
                    <a class="post-title font-bold" href={post.path}
                      >{post.fields.title}</a
                    >
                    <ul class="post-meta text-sm">
                      <li class="">
                        <i class="icofont-user" />
                        <a href={post.fields.author.url}
                          >{post.fields.author.name}</a
                        > - {post.fields.date}</li>
                    </ul>
                  </div>
                </div>
              {/if}
            {/each}
          {/if}
        </div>
      </div>
    </div>

    <!-- Social -->
    <div class="row">
      <h4 class="font-bold">Social Links</h4>
      <ul class="content-meta mb-4">
        <li class="btn-round inline-block">
          <a href="#top"><i class="text-lg hover:text-white icofont-facebook" /></a>
        </li>
        <li class="btn-round inline-block">
          <a href="#top"><i class="text-lg hover:text-white icofont-twitter" /></a>
        </li>
        <li class="btn-round inline-block">
          <a href="#top"><i class="text-lg hover:text-white icofont-linkedin" /></a>
        </li>
        <li class="btn-round inline-block">
          <a href="#top"><i class="text-lg hover:text-white icofont-github" /></a>
        </li>
      </ul>
    </div>

    <!-- categories -->
    <div class="row">
      <h4 class="font-bold"><span>Categories</span></h4>
      <ul class="content-meta mb-4">
        <li>
          <a href="/categories/four-seasons" class="d-flex"
            >Four seasons
            <small class="ml-auto">(1)</small></a
          >
        </li>
        <li>
          <a href="/categories/newyork-city" class="d-flex"
            >Newyork city
            <small class="ml-auto">(2)</small></a
          >
        </li>
        <li>
          <a href="/categories/photobooth" class="d-flex"
            >Photobooth
            <small class="ml-auto">(1)</small></a
          >
        </li>
        <li>
          <a href="/categories/photography" class="d-flex"
            >Photography
            <small class="ml-auto">(2)</small></a
          >
        </li>
        <li>
          <a href="/categories/videography" class="d-flex"
            >Videography
            <small class="ml-auto">(1)</small></a
          >
        </li>
      </ul>
    </div>

    <!-- latest post -->

    <!-- tags -->
    <div class="row">
      <h4 class="w-full flex font-bold">Tags</h4>
      <ul class="content-meta mb-4">
        <li class="list-inline-item">
          <a href="/tags/booth">Booth</a>
        </li>
        <li class="list-inline-item">
          <a href="/tags/city">City</a>
        </li>
        <li class="list-inline-item">
          <a href="/tags/image">Image</a>
        </li>
        <li class="list-inline-item">
          <a href="/tags/new">New</a>
        </li>
        <li class="list-inline-item">
          <a href="/tags/photo">Photo</a>
        </li>
        <li class="list-inline-item">
          <a href="/tags/video">Video</a>
        </li>
      </ul>
    </div>
  </div>
</aside>
