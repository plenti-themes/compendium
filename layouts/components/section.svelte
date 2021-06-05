<script>
  export let cards, categories, tags, social;
</script>

<section class="section">
  <div class="container">
    <div class="row">
      <!-- Loop through the posts into cards -->
      <div class="col-lg-8 mb-5 mb-lg-0">
        <div class="row">
          {#each cards as { image, post, meta, button }}
            <div class="col-md-6">
              <article class="card mb-6 border-0">
                <div class="featured-post-content">
                  <img
                    loading="lazy"
                    class="img-fluid w-100rounded-lg rounded-lg"
                    src={image.url}
                    alt="post-thumb"
                  />
                </div>

                <div class="card-body mb-6">
                  <h3 class="h4 content">
                    <a class="post-title" href={post.url}>{post.title}</a>
                  </h3>
                  <ul class="list-inline post-meta mb-4 content-meta">
                    <li class="list-inline-item">
                      <i class="fas fa-user mr-2" />
                      <a href={meta.author.url}>{meta.author.name}</a>
                    </li>
                    <li class="list-inline-item">Date : {meta.date}</li>
                    <li class="list-inline-item">
                      Categories :
                      <a href="/sveltebook/categories/photography" class="ml-1"
                        >Photography
                      </a>
                    </li>
                    <li class="list-inline-item">
                      Tags :
                      <a href="/sveltebook/tags/photo" class="ml-1">Photo </a>
                      ,<a href="/sveltebook/tags/image" class="ml-1">Image </a>
                    </li>
                  </ul>
                  <p class="mb-6">
                    {post.body} …
                  </p>
                  <a href={button.url} class="btn-outline mb-6"
                    >{button.title}</a
                  >
                </div>
              </article>
            </div>
          {/each}
        </div>

        <ul class="pagination ">

          <!-- <li class="page-item page-item active ">
            <a href="/sveltebook/" class="page-link"> 1 </a>
          </li>
          <li class="page-item">
            <a href="/sveltebook/page/2/" class="page-link"> 2 </a>
          </li>
          <li class="page-item">
            <a href="/sveltebook/page/2/" class="page-link"> » </a>
          </li> -->
        </ul>
      </div>

      <!-- Set the aside as the last column in the row -->
      <aside class="col-lg-4 content">
        <div class="pl-0 pl-lg-4">
          <!-- Search -->

          <div class="widget">
            <h4 class="widget-title"><span>Search</span></h4>
            <form action="/sveltebook/search" class="widget-search">
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

          <!-- categories -->
          <div class="widget">
            <h5 class="widget-title"><span>Categories</span></h5>
            <ul class="list-unstyled widget-list">
              <li>
                <a href="/sveltebook/categories/four-seasons" class="d-flex"
                  >Four seasons
                  <small class="ml-auto">(1)</small></a
                >
              </li>
              <li>
                <a href="/sveltebook/categories/newyork-city" class="d-flex"
                  >Newyork city
                  <small class="ml-auto">(2)</small></a
                >
              </li>
              <li>
                <a href="/sveltebook/categories/photobooth" class="d-flex"
                  >Photobooth
                  <small class="ml-auto">(1)</small></a
                >
              </li>
              <li>
                <a href="/sveltebook/categories/photography" class="d-flex"
                  >Photography
                  <small class="ml-auto">(2)</small></a
                >
              </li>
              <li>
                <a href="/sveltebook/categories/videography" class="d-flex"
                  >Videography
                  <small class="ml-auto">(1)</small></a
                >
              </li>
            </ul>
          </div>

          <!-- latest post -->
          <div class="widget">
            <h5 class="widget-title"><span>Latest Article</span></h5>
            <!-- post-item -->
            <ul class="list-unstyled widget-list mb-0">
              <li class="media widget-post align-items-center my-4">
                <a
                  href="https://demo.gethugothemes.com/sveltebook/post/elements/"
                >
                  <img
                    loading="lazy"
                    class="mr-3 rounded-full overflow-hidden "
                    src="https://demo.gethugothemes.com/sveltebook/images/post/post-6_hue652d174a668504e08bd47e88a7e152b_295919_60x60_resize_q75_box.jpg"
                    alt="post-thumb"
                  />
                </a>
                <div class="media-body">
                  <h5 class="h6 mb-0">
                    <a
                      href="https://demo.gethugothemes.com/sveltebook/post/elements/"
                      >Elements That You Can Use To Create A New Post On This
                      Template.</a
                    >
                  </h5>
                  <small>March 15, 2020</small>
                </div>
              </li>

              <li class="media widget-post align-items-center my-4">
                <a
                  href="https://demo.gethugothemes.com/sveltebook/post/post-1/"
                >
                  <img
                    loading="lazy"
                    class="mr-3 rounded-full overflow-hidden"
                    src="https://demo.gethugothemes.com/sveltebook/images/post/post-1_hu771f7caf30f5a18d8db2d2d1d07622b1_361879_60x60_resize_q75_box.jpg"
                    alt="post-thumb"
                  />
                </a>
                <div class="media-body">
                  <h5 class="h6 mb-0">
                    <a
                      href="https://demo.gethugothemes.com/sveltebook/post/post-1/"
                      >Cheerful Loving Couple Bakers Drinking Coffee</a
                    >
                  </h5>
                  <small>March 14, 2020</small>
                </div>
              </li>

              <li class="media widget-post align-items-center my-4">
                <a
                  href="https://demo.gethugothemes.com/sveltebook/post/post-2/"
                >
                  <img
                    loading="lazy"
                    class="mr-3 rounded-full overflow-hidden "
                    src="https://demo.gethugothemes.com/sveltebook/images/post/post-2_hu52d922f08eb8074328849650ddc4504d_195923_60x60_resize_q75_box.jpg"
                    alt="post-thumb"
                  />
                </a>
                <div class="media-body">
                  <h5 class="h6 mb-0">
                    <a
                      href="https://demo.gethugothemes.com/sveltebook/post/post-2/"
                      >Cheerful Loving Couple Bakers Drinking Coffee</a
                    >
                  </h5>
                  <small>March 14, 2020</small>
                </div>
              </li>
            </ul>
          </div>

          <!-- tags -->
          <div class="widget">
            <h5 class="widget-title"><span>Tags</span></h5>
            <ul class="list-inline widget-list-inline">
              <li class="list-inline-item">
                <a href="/sveltebook/tags/booth">Booth</a>
              </li>
              <li class="list-inline-item">
                <a href="/sveltebook/tags/city">City</a>
              </li>
              <li class="list-inline-item">
                <a href="/sveltebook/tags/image">Image</a>
              </li>
              <li class="list-inline-item">
                <a href="/sveltebook/tags/new">New</a>
              </li>
              <li class="list-inline-item">
                <a href="/sveltebook/tags/photo">Photo</a>
              </li>
              <li class="list-inline-item">
                <a href="/sveltebook/tags/video">Video</a>
              </li>
            </ul>
          </div>

          <!-- Social -->
          <div class="widget">
            <h4 class="widget-title"><span>Social Links</span></h4>
            <ul class="list-inline social-icons mb-3 text-2xl">
              <li class="list-inline-item">
                <a href="#top"><i class="fab fa-facebook" /></a>
              </li>

              <li class="list-inline-item">
                <a href="#top"><i class="fab fa-twitter" /></a>
              </li>

              <li class="list-inline-item">
                <a href="#top"><i class="fab fa-linkedin-in" /></a>
              </li>

              <li class="list-inline-item">
                <a href="#top"><i class="fab fa-github" /></a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  </div>
</section>
