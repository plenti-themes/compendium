<script>
  import Search from "../components/search.svelte";
  export let allPosts;
</script>

<aside class="w-full md:w-3/12 px-0">
  <div class="pl-0 pl-lg-4">
    <!-- Search -->
    <Search {allPosts} />

    <!-- Social -->
    <div class="row">
      <h4 class="font-bold">Social Links</h4>
      <div class="mb-4">
        <a href="#top" class="btn-round"><i class="icofont-facebook" /></a>
        <a href="#top" class="btn-round"><i class="icofont-twitter" /></a>
        <a href="#top" class="btn-round"><i class="icofont-linkedin" /></a>
        <a href="#top" class="btn-round"><i class="icofont-github" /></a>
      </div>
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
