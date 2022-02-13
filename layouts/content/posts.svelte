<script>
  // Aside component for search, categories, and tags
  import Aside from "../components/aside.svelte";
  import PostMeta from "../components/post_meta.svelte";

  // Values passed in from "html.svelte"
  export let idxContent, allPosts, catgPosts, tagsPosts;

  // Content field Values passed in via layout content {...content.fields}
  export let articleBody, title, image, author;
  export let dateCreated, dateModified, categories, tags;

  // Post Meta configuration values
  const pm = {
    author: true,
    date_modified: true,
    date_created: true,
    description: false,
    catg_tags: true,
    continue: false,
  };

  let socialLinks = idxContent.socialLinks;
  let post = {
    author_url: author.url,
    author_name: author.name,
    dateCreated: dateCreated,
    dateModified: dateModified,
    tags: tags,
    catgs: categories,
  };
</script>

<section
  class="section flex flex-wrap items-center justify-between py-6 sm:py-16"
>
  <div class="w-0 md:w-1/12 xl:w-2/12" />
  <div class="w-full md:w-10/12 xl:w-8/12 px-2 md:px-0">
    <div class="row flex flex-wrap">
      <div class="relative mb-8 w-full">
        <img
          class="rounded-lg overflow-hidden w-full h-screen-60 object-cover object-center"
          src="assets/posts/{image.src}"
          alt={image.alt}
        />
        <cite class="text-meta"
          >{@html image.citation.replaceAll(
            "<a ",
            "<a target='blank' rel='noopener' "
          )}</cite
        >
      </div>
      <div class="w-full md:w-9/12 mb-5 sm:mb-0 px-0 md:pr-10" role="article">
        <h1 class="header mb-2">{title}</h1>
        <div class="text-meta flex flex-wrap" role="complementary">
          <PostMeta {post} {catgPosts} {tagsPosts} {pm} />
        </div>
        <p class="mt-6" role="main">
          {@html articleBody}
        </p>
      </div>

      <!-- Aside  -->
      <div class="w-full md:w-3/12 mb-5 mb-lg-0 px-0">
        <Aside {allPosts} {catgPosts} {tagsPosts} {socialLinks} />
      </div>
    </div>
  </div>
  <div class="w-0 md:w-1/12 xl:w-2/12" />
</section>
