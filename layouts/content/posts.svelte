<script>
  import Aside from "../components/aside.svelte";
  import SEO from "../components/openGraph.svelte";

  export let allContent, title, image, body, author, date, categories, tags;
  
  let allPosts = allContent.filter((content) => content.type == "posts");
  let allSocial = allContent.filter((content) => content.path == "/")[0].fields.socialLinks;
  let site_name = allContent.filter((content) => content.path == "/")[0].fields.title;
  let path = allPosts.filter((content) => content.fields.title == title)[0].path;

  let desc_len = 110;
  let desc = body.substring(0,
    Math.min(desc_len, body.substring(0, desc_len).lastIndexOf(" "))
  )

  function scrollDown() {
    window.scrollTo({
      top: 65,
      left: 0,
      behavior: "smooth",
    });
  }
</script>

<section
  use:scrollDown
  class="section flex flex-wrap items-center justify-between py-16"
>
  <SEO {site_name} {title} {desc} {image} {path} />
  <div class="w-0 md:w-1/12 xl:w-2/12" />
  <div class="w-full md:w-10/12 xl:w-8/12 px-2 md:px-0">
    <div class="row flex flex-wrap">
      <div class="relative mb-10 w-full">
        <img
          class="rounded-lg overflow-hidden w-full h-screen-70 object-cover object-center"
          src="/assets/{image.src}"
          alt={image.alt}
        />
        <span class="text-meta"
          >{@html image.reference.replaceAll(
            "<a ",
            "<a target='blank' rel='noopener noreferrer'"
          )}</span
        >
      </div>
      <div class="w-full md:w-9/12 mb-5 sm:mb-0 px-0 md:pr-10">
        <h2 class="header mb-2">{title}</h2>
        <ul class="text-meta flex flex-wrap mb-4">
          <li class="px-1 inline-flex">
            <i class="las la-user-astronaut text-base relative" />
            <a href={author.url}>{author.name}</a>
          </li>
          <li class="px-1 inline-flex">Date : {date}</li>
          <li class="px-1 inline-flex">
            Categories:
            {#each categories as catg, i}
              <a href="/categories/{catg}" class="ml-1">
                {catg}{#if i < categories.length - 1}, {/if}
              </a>
            {/each}
          </li>
          <li class="px-1 inline-flex">
            Tags:
            {#each tags as tag, i}
              <a href="/tags/{tag}" class="ml-1">
                {tag}{#if i < tags.length - 1}, {/if}
              </a>
            {/each}
          </li>
        </ul>
        <p>
          {@html body}
        </p>
      </div>

      <!-- Aside  -->
      <div class="w-full md:w-3/12 mb-5 mb-lg-0 px-0">
        <Aside {allPosts} {allSocial} />
      </div>
    </div>
  </div>
  <div class="w-0 md:w-1/12 xl:w-2/12" />
</section>
