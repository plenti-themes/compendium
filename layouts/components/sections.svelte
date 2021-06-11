<script>
  export let allPosts, postRangeHigh, postRangeLow;
</script>

<section class="pb-10 mt-16">
  <div class="row md:flex md:flex-wrap">
    <div class="w-full md:w-9/12 mb-5 mb-lg-0 px-0">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 md:pr-10">
        {#each allPosts as post, i}
          {#if i >= postRangeLow && i < postRangeHigh}
            <!--Card -->
            <div class="rounded-lg overflow-hidden shadow-lg">
              <img
                class="w-full md:h-52 lg:h-60 object-cover"
                src="/assets/{post.fields.image.src}"
                alt={post.fields.image.alt}
              />
              <div class="px-5 py-4">
                <div class="content font-bold text-lg mb-2">
                  <a class="post-title" href={post.path}>{post.fields.title}</a>
                </div>
                <ul class="content flex flex-wrap post-meta mb-4 content-meta">
                  <li class="px-1">
                    <i class="icofont-user" />
                    <a href={post.fields.author.url}
                      >{post.fields.author.name}</a
                    >
                  </li>
                  <li class="px-1">Date : {post.fields.date}</li>
                  <li class="px-1">
                    Categories :
                    {#each post.fields.categories as catg, i}
                      <a href="/categories/{catg}" class="ml-1"
                        >{catg}{#if i < post.fields.categories.length - 1},
                        {/if}</a
                      >
                    {/each}
                  </li>
                  <li class="px-1">
                    Tags :
                    {#each post.fields.tags as tag, i}
                      <a href="/tags/{tag}" class="ml-1"
                        >{tag}{#if i < post.fields.tags.length - 1}, {/if}</a
                      >
                    {/each}
                  </li>
                </ul>
                <p class="text-gray-700 text-base">
                  {post.fields.body.substring(0, 175)} …
                </p>
                <article class="border-0">
                  <div class="mb-4">
                    <p class="mb-6" />
                    <a href={post.path} class="btn-outline hover:white"
                      >Continue Reading</a
                    >
                  </div>
                </article>
              </div>
            </div>
          {/if}
        {/each}
      </div>
    </div>

    <!-- Set the aside as the last column in the row -->
    <aside class="w-full md:w-3/12 px-0">
      <div class="pl-0 pl-lg-4">
        <!-- Search -->
        <div class="row">
          <h4 class="font-bold"><span>Search</span></h4>
          <form action="/search" class="widget-search">
            <input
              id="search-query"
              name="s"
              type="search"
              placeholder="Type &amp; Hit Enter..."
            />
            <button type="submit" class="btn-round" aria-label="Search Post">
              <i class="icofont-search-2" /></button
            >
          </form>
        </div>

        <!-- Social -->
        <div class="row">
          <h4 class="font-bold">Social Links</h4>
          <ul class="content-meta mb-4">
            <li class="btn-round inline-block">
              <a href="#top"><i class="icofont-facebook hover:text-white" /></a>
            </li>
            <li class="btn-round inline-block">
              <a href="#top"><i class="icofont-twitter hover:text-white" /></a>
            </li>
            <li class="btn-round inline-block">
              <a href="#top"
                ><i class="icofont-linkedin hover:text-white" /></a
              >
            </li>
            <li class="btn-round inline-block">
              <a href="#top"><i class="icofont-github hover:text-white" /></a>
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
  </div>
</section>
