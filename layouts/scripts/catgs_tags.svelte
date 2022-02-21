<script context="module">
  export function catgs_tags(posts, content) {
    let tagsObj = [];
    let catgObj = [];
    let index = 0;
    let tagContent = [];
    let catContent = [];

    let catGroup = content.filter((key) => key.type == "catgs");
    let tagGroup = content.filter((key) => key.type == "tags");

    catGroup.forEach((cat) => {
      if (cat.path.split("/").length == 2) {
        catContent.push(cat);
      }
    });
    tagGroup.forEach((tag) => {
      if (tag.path.split("/").length == 2) {
        tagContent.push(tag);
      }
    });

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

    // console.log(tagsObj)

    // What: Group posts by tagContent
    // Why:  Use to populate tags for asides, posts metadata, and for
    //       generating tag pages
    // How:  Loop through tagContent to build object containing posts,
    //       names, paths, and quantity of posts.
    let tagsList = [];
    for (index = 0; index < tagContent.length; index++) {
      let obj = {
        name: tagContent[index].fields.name,
        path: tagContent[index].fields.route,
        posts: Object.values(tagsObj[tagContent[index].fields.name]),
        length: Object.keys(tagsObj[tagContent[index].fields.name]).length,
      };
      tagsList.push(obj);
    }

    // What: Group posts by catContent
    // Why:  To populate categories for asides, posts metadata, and for
    //       generating category pages
    // How:  Loop through catContent to build object containing posts,
    //       names, paths, and quantity of posts.
    let catgList = [];
    for (index = 0; index < catContent.length; index++) {
      let obj = {
        name: catContent[index].fields.name,
        path: catContent[index].fields.route,
        posts: Object.values(catgObj[catContent[index].fields.name]),
        length: Object.keys(catgObj[catContent[index].fields.name]).length,
      };
      catgList.push(obj);
    }

    return {
      tags: tagsList, // array of tag objects
      catgs: catgList, // array of catg objects
    };
  }
</script>
