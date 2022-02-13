<script context="module">
    // What: Post excerpt to set as description
    // Why:  Excerpt artice body to describe what the post is about on
    //       "complementary" elements and SEO sites 
    // How:  Select the first paragraph in a post up to specified length
    export function get_excerpt(articleBody, desc_length) {
    let desc_start = articleBody.indexOf("<p>");
    let desc_end = desc_start + desc_length;
    let desc_text = articleBody.replace(/(<([^>]+)>)/gi, "")
    let desc =
    desc_text.substring(
        desc_start,
        Math.min(desc_end, desc_text.substring(0, desc_end).lastIndexOf(" "))
      ) + '<span class="font-bold"> ...</span>';

    return desc;
  }
</script>
