<script context="module">
  export function catgs_tags(posts) {
    let tagsObj = [];
    let catgObj = [];
    let index = 0;

    // What: Store post metadata into catg and tag arrays 
    // Why:  Use arrays to build sorted key/value objects below
    // How:  Loop through each post to push them into  
    //       arrays indexed by category or tag
    posts.forEach((post) => {
      // Flag the post in question
      const postObj = {
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

      // Loop through each post tag
      post.fields.tags.forEach((tag) => {
        // Push each post into collection of tags
        tagsObj[tag] = tagsObj[tag] || [];
        tagsObj[tag].push(postObj);
      });

      // Loop through each post catg
      post.fields.categories.forEach((catg) => {
        // Push each post into collection of catgs
        catgObj[catg] = catgObj[catg] || [];
        catgObj[catg].push(postObj);
      });
    });

    // What: Alphabetically refactor array indexed by tags into
    //       array of key/value pairs
    // Why:  Use final objects to populate tags for asides and posts
    //       metadata, and to generate tag pages
    // How:  Loop through sorted tags to build object containing posts,
    //       by tag with pagination number, and quantity of posts.
    let tagKeys = Object.keys(tagsObj).sort();
    let tagsList = [];
    for (index = 0; index < tagKeys.length; index++) {
      let obj = {
        name: tagKeys[index],
        posts: Object.values(tagsObj[tagKeys[index]]),
        page: index + 1,
        length: Object.keys(tagsObj[tagKeys[index]]).length,
      };
      tagsList.push(obj);
    }

    // What: Alphabetically refactor arrays indexed by categories 
    //       into array of key/value pairs
    // Why:  Use ofinal bjects to populate categories for asides and posts 
    //       metadata, and to generate category pages
    // How:  Loop through sorted tags to build object containing posts,
    //       by category with pagination number, and quantity of posts.
    let catKeys = Object.keys(catgObj).sort();
    let catgList = [];
    for (index = 0; index < catKeys.length; index++) {
      let obj = {
        name: catKeys[index],
        posts: Object.values(catgObj[catKeys[index]]),
        page: index + 1,
        length: Object.keys(catgObj[catKeys[index]]).length,
      };
      catgList.push(obj);
    }

    return {
      tags: tagsList, // array of tag objects
      catgs: catgList, // array of catg objects
    };
  }
</script>
