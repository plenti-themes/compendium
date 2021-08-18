<script context="module">
  export function catgs_tags(posts) {
    let tagPost = {};
    let tagsObj = {};
    let catgObj = {};

    // Loop through each post
    posts.forEach((post) => {
      // Flag the post in question
      tagPost = {
        path: post.path,
        img_src: post.fields.image.src,
        img_alt: post.fields.image.alt,
        title: post.fields.title,
        author_url: post.fields.author.url,
        author_name: post.fields.author.name,
        dateCreated: post.fields.dateCreated,
        dateModified: post.fields.dateModified,
        tags: post.fields.tags,
        catgs: post.fields.categories,
      };

      // Loop through each post tag array
      post.fields.tags.forEach((element) => {
        // Push each post into collection of tags
        if (element in tagsObj) {
          tagsObj[element].push(tagPost);
        } else {
          tagsObj[element] = [tagPost];
        }
      });

      // Loop through each post tag array
      post.fields.categories.forEach((element) => {
        // Push each post into collection of catgs
        if (element in catgObj) {
          catgObj[element].push(tagPost);
        } else {
          catgObj[element] = [tagPost];
        }
      });
    });
    return {
      tagsObj: tagsObj,
      catgObj: catgObj,
    };
  }
</script>
