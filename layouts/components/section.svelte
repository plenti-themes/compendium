<script>
  export let cards;
  //   export let categories, tags, social;
</script>

<section class="flex flex-wrap align-top pb-10">
  <div class="w-0 md:w-1/12 xl:w-2/12" />
  <!-- Loop through the posts into cards -->
  <div class="w-0 md:w-7/12 xl:w-6/12 mb-5 mb-lg-0 px-2 md:px-0">
    <div class="pr-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
      {#each cards as { image, post, author, date, categories, tags, button }}
        <!--Card 1-->
        <div class="rounded-lg overflow-hidden shadow-lg">
          <img class="w-full" src={image.url} alt={image.alt} />
          <div class="px-5 py-4">
            <div class="content font-bold text-lg mb-2">
              <a class="post-title" href={post.url}>{post.title}</a>
            </div>
            <ul class="content flex flex-wrap post-meta mb-4 content-meta">
              <li class="px-1">
                <i class="fas fa-user" />
                <a href={author.url}>{author.name}</a>
              </li>
              <li class="px-1">Date : {date}</li>
              <li class="px-1">
                Categories :
                {#each categories as catg, i}
                  <a href="/categories/{catg}" class="ml-1"
                    >{catg}{#if i < categories.length - 1}, {/if}</a
                  >
                {/each}
              </li>
              <li class="px-1">
                Tags :
                {#each tags as tag, i}
                  <a href="/tags/{tag}" class="ml-1"
                    >{tag}{#if i < tags.length - 1}, {/if}</a
                  >
                {/each}
              </li>
            </ul>
            <p class="text-gray-700 text-base">
              {post.body} …
            </p>
            <article class="border-0">
              <div class="mb-4">
                <p class="mb-6" />
                <a href={button.url} class="btn-outline hover:color"
                  >{button.title}</a
                >
              </div>
            </article>
          </div>
        </div>
      {/each}
    </div>

    <ul class="pagination ">
      <!-- <li class="page-item page-item active ">
            <a href="/" class="page-link"> 1 </a>
          </li>
          <li class="page-item">
            <a href="/page/2/" class="page-link"> 2 </a>
          </li>
          <li class="page-item">
            <a href="/page/2/" class="page-link"> » </a>
          </li> -->
    </ul>
  </div>

  <!-- Set the aside as the last column in the row -->
  <aside class="w-0 md:w-3/12 xl:w-2/12 px-0">
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
          <button type="submit" class="btn-round" aria-label="Search Post"
            ><i class="fas fa-search" /></button
          >
        </form>
      </div>

      <!-- Social -->
      <div class="row">
        <h4 class="font-bold">Social Links</h4>
        <ul class="content-meta mb-4 text-2xl">
          <li class="inline-block mx-1">
            <a href="#top"><i class="fab fa-facebook" /></a>
          </li>
          <li class="inline-block mx-1">
            <a href="#top"><i class="fab fa-twitter" /></a>
          </li>
          <li class="inline-block mx-1">
            <a href="#top"><i class="fab fa-linkedin-in" /></a>
          </li>
          <li class="inline-block mx-1">
            <a href="#top"><i class="fab fa-github" /></a>
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
  <div class="w-0 md:w-1/12 xl:w-2/12" />
</section>
