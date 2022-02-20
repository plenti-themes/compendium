const allContent = [{
"pager": 1,
"path": "404",
"type": "404",
"filename": "404.json",
"fields": {
  "title": "Sometimes we get lost, but that's okay.",
  "articleBody": "The page you were looking for does not exist!",
  "image": {
    "src": "ethan-sykes-iISyBKOT2D0-unsplash.jpg",
    "alt": "Unsplash Photo",
    "citation": "Photo by <a href='https://unsplash.com/@e_sykes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Ethan Sykes</a> on <a href='https://unsplash.com/s/photos/lost?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  }
}

},{
"pager": 1,
"path": "categories/design",
"type": "catgs",
"filename": "design.json",
"fields": {
  "name": "Design",
  "route": "categories/design"
}
},{
"pager": 1,
"path": "categories/photography",
"type": "catgs",
"filename": "photography.json",
"fields": {
  "name": "Photography",
  "route": "categories/photography"
}
},{
"pager": 1,
"path": "/",
"type": "index",
"filename": "index.json",
"fields": {
  "name": "Compendium",
  "site": "www.example.net",
  "logo": "logo.svg",
  "title": "Compendium | Blog Template",
  "description": "A personal blog template for creating JAMStack sites with Plenti of Svelte",
  "SEO": {
    "locale": "en_US",
    "twitteruser": "@mytag",
    "author": "Jo Doe",
    "author_site": "",
    "image": "logo.png"
  },
  "socialLinks": [
    {
      "src": "https://www.linkedin.com/",
      "ico": "lab la-linkedin-in",
      "enabled": true
    },
    {
      "src": "https://github.com/",
      "ico": "lab la-github-alt",
      "enabled": true
    },
    {
      "src": "https://about.gitlab.com/",
      "ico": "lab la-gitlab",
      "enabled": true
    },
    {
      "src": "https://twitter.com/",
      "ico": "lab la-twitter",
      "enabled": false
    },
    {
      "src": "https://keybase.io/",
      "ico": "lab la-keybase",
      "enabled": true
    },
    {
      "src": "https://www.reddit.com/",
      "ico": "lab la-reddit",
      "enabled": true
    },
    {
      "src": "https://www.instagram.com/",
      "ico": "lab la-instagram",
      "enabled": false
    },
    {
      "src": "https://www.facebook.com/",
      "ico": "lab la-facebook-f",
      "enabled": false
    },
    { "src": "", "ico": "", "enabled": false }
  ],
  "theme": {
    "postsPerPage": 6,
    "projsPerPage": 3,
    "projsSort": "Date",
    "projsSortValues": "Date, Name",
    "tagsPerPage": 12,
    "mathTypesetting": true,
    "codeHighlighting": true,
    "featuredPage": "Frame",
    "featuredPageValues": "Bleed, Frame, None",
    "colorScheme": "Earthliness",
    "colorSchemeValues": "Earthliness, Simplicity, Technobeat"
  }
}

},{
"pager": 1,
"path": "pages/about",
"type": "pages",
"filename": "about.json",
"fields": {
  "title": "About Me",
  "enabled": true,
  "menu": true,
  "author": {
    "name": "Ro Doe",
    "url": "pages/about"
  },
  "image": {
    "src": "omid-ghobadi-sjoqjY9faJE-unsplash.jpg",
    "alt": "Post Image",
    "citation": "Photo by <a href='https://unsplash.com/@omidghaf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Omid Ghobadi</a> on <a href='https://unsplash.com/@omidghaf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  "splash": {
    "src": "oliver-plattner-Plt0vHDRb9U-unsplash.jpg",
    "alt": "Post Image",
    "citation": "Photo by <a href='https://unsplash.com/@oplattner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Oliver Plattner</a> on <a href='https://unsplash.com/s/photos/san-francisco?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  "dateCreated": "1/8/2020",
  "dateModified": "1/8/2020",
  "hero": {
    "pre": "Hi! I'm ",
    "accent": "Jo",
    "post": "the data wisperer",
    "tagline": "I do x with y"
  },
  "articleBody": "I was born in the land of Oz, and had always dreamed that a hurricane would take me somewhere afar. Eventually I actually ended up working abroad, where I began traveling throughout Asia. After discovering the world of low-cost airlines, I started seeing the world every weekend.<br/><br/>Once I stayed in the 15th country I had visited, I realized that I had enough experience and knowledge to share. Here you will find useful tips, my travel experiences, life hacks and the usual daily thoughts about everything that surrounds me."
}

},{
"pager": 1,
"path": "pages/contact",
"type": "pages",
"filename": "contact.json",
"fields": {
	"title": "Contact Us",
	"enabled": true,
	"menu": true,
	"articleBody": "Swing by for a cup of coffee, or leave us a message:"
}
},{
"pager": 1,
"path": "posts/post-01",
"type": "posts",
"filename": "post-01.json",
"fields": {
  "title": "Lorem ipsum dolor sit amet",
  "postsGroup": "Lorem One",
  "image": {
    "src": "nick-morrison-FHnnjk1Yj7Y-unsplash.jpg",
    "alt": "Post Image",
    "citation": "Photo by <a href='https://unsplash.com/@nickmorrison?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Nick Morrison</a> on <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  "author": { "name": "Ro Doe", "url": "/pages/about" },
  "dateCreated": "1/8/2021",
  "dateModified": "7/5/2021",
  "categories": ["Photography"],
  "tags": ["Art", "Image", "Random"],
  "featured": true,
  "draft": true,
  "articleBody": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis purus vitae ipsum imperdiet condimentum. Nunc vel vehicula augue. Vestibulum luctus nulla nisl, at congue augue maximus et. Mauris eget massa dui. Cras sagittis accumsan lacus.<h2 id=install>Install</h2><p>An <strong>example</strong> JavaScript code.<pre class=language-js><code class=language-js><span class=\"token keyword\">const</span> srcPath <span class=\"token operator\">=</span> <span class=\"token string\">\"./articles/\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> dstPath <span class=\"token operator\">=</span> <span class=\"token string\">\"./content/posts/\"</span><span class=\"token punctuation\">;</span>\n\nfs<span class=\"token punctuation\">.</span><span class=\"token property-access function method\">watch</span><span class=\"token punctuation\">(</span>srcPath<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> persistent<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">event<span class=\"token punctuation\">,</span> filename</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword control-flow\">if</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>event <span class=\"token operator\">=</span> <span class=\"token string\">\"change\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> srcFile <span class=\"token operator\">=</span> filename<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> dstFile <span class=\"token operator\">=</span> srcFile<span class=\"token punctuation\">.</span><span class=\"token property-access function method\">split</span><span class=\"token punctuation\">(</span><span class=\"token string\">\".\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span> <span class=\"token operator\">+</span> <span class=\"token string\">\".json\"</span><span class=\"token punctuation\">;</span>\n\n    processor<span class=\"token punctuation\">.</span><span class=\"token property-access function method\">process</span><span class=\"token punctuation\">(</span>\n      toVFile<span class=\"token punctuation\">.</span><span class=\"token property-access function method\">readSync</span><span class=\"token punctuation\">(</span>srcPath <span class=\"token operator\">+</span> srcFile<span class=\"token punctuation\">,</span> <span class=\"token string\">\"utf8\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">error<span class=\"token punctuation\">,</span> file</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword control-flow\">if</span> <span class=\"token punctuation\">(</span>error<span class=\"token punctuation\">)</span> <span class=\"token keyword control-flow\">throw</span> error<span class=\"token punctuation\">;</span>\n        <span class=\"token class-name console\">console</span><span class=\"token punctuation\">.</span><span class=\"token property-access function method\">error</span><span class=\"token punctuation\">(</span><span class=\"token function\">reporter</span><span class=\"token punctuation\">(</span>error <span class=\"token operator\">||</span> file<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n        <span class=\"token keyword\">let</span> jsonOutput <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n          schema<span class=\"token operator\">:</span> file<span class=\"token punctuation\">.</span><span class=\"token property-access\">data</span><span class=\"token punctuation\">.</span><span class=\"token property-access\">frontmatter</span><span class=\"token punctuation\">,</span>\n          body<span class=\"token operator\">:</span> file<span class=\"token punctuation\">.</span><span class=\"token property-access\">contents</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n        <span class=\"token keyword\">let</span> article <span class=\"token operator\">=</span> <span class=\"token class-name known-class-name\">JSON</span><span class=\"token punctuation\">.</span><span class=\"token property-access function method\">stringify</span><span class=\"token punctuation\">(</span>jsonOutput<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token property-access function method\">replace</span><span class=\"token punctuation\">(</span><span class=\"token regex\"><span class=\"token regex-delimiter\">/</span><span class=\"token language-regex regex-source\">\\n</span><span class=\"token regex-delimiter\">/</span><span class=\"token regex-flags\">g</span></span><span class=\"token punctuation\">,</span> <span class=\"token string\">\" \"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token comment\">// console.log(article);</span>\n        fs<span class=\"token punctuation\">.</span><span class=\"token property-access function method\">writeFileSync</span><span class=\"token punctuation\">(</span>dstPath <span class=\"token operator\">+</span> dstFile<span class=\"token punctuation\">,</span> article<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre><p>A <code>Python</code> code sample.<pre class=language-python><code class=language-python><span class=\"token keyword\">if</span> __name__ <span class=\"token operator\">==</span> <span class=\"token string\">\"__main__\"</span><span class=\"token punctuation\">:</span>\n  <span class=\"token keyword\">import</span> doctest\n\n  doctest<span class=\"token punctuation\">.</span>testmod<span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n\n  network <span class=\"token operator\">=</span> Perceptron<span class=\"token punctuation\">(</span>\n    sample<span class=\"token operator\">=</span>samples<span class=\"token punctuation\">,</span> target<span class=\"token operator\">=</span>exit<span class=\"token punctuation\">,</span> learning_rate<span class=\"token operator\">=</span><span class=\"token number\">0.01</span><span class=\"token punctuation\">,</span> epoch_number<span class=\"token operator\">=</span><span class=\"token number\">1000</span><span class=\"token punctuation\">,</span> bias<span class=\"token operator\">=</span><span class=\"token operator\">-</span><span class=\"token number\">1</span>\n  <span class=\"token punctuation\">)</span>\n  network<span class=\"token punctuation\">.</span>training<span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n  <span class=\"token keyword\">print</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"Finished training perceptron\"</span><span class=\"token punctuation\">)</span>\n  <span class=\"token keyword\">print</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"Enter values to predict or q to exit\"</span><span class=\"token punctuation\">)</span>\n  <span class=\"token keyword\">while</span> <span class=\"token boolean\">True</span><span class=\"token punctuation\">:</span>\n    sample<span class=\"token punctuation\">:</span> <span class=\"token builtin\">list</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span>\n    <span class=\"token keyword\">for</span> i <span class=\"token keyword\">in</span> <span class=\"token builtin\">range</span><span class=\"token punctuation\">(</span><span class=\"token builtin\">len</span><span class=\"token punctuation\">(</span>samples<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">:</span>\n      user_input <span class=\"token operator\">=</span> <span class=\"token builtin\">input</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"value: \"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span>strip<span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n      <span class=\"token keyword\">if</span> user_input <span class=\"token operator\">==</span> <span class=\"token string\">\"q\"</span><span class=\"token punctuation\">:</span>\n        <span class=\"token keyword\">break</span>\n      observation <span class=\"token operator\">=</span> <span class=\"token builtin\">float</span><span class=\"token punctuation\">(</span>user_input<span class=\"token punctuation\">)</span>\n      sample<span class=\"token punctuation\">.</span>insert<span class=\"token punctuation\">(</span>i<span class=\"token punctuation\">,</span> observation<span class=\"token punctuation\">)</span>\n    network<span class=\"token punctuation\">.</span>sort<span class=\"token punctuation\">(</span>sample<span class=\"token punctuation\">)</span>\n</code></pre><h2 id=math>Math</h2><div class=\"math math-display\"><span class=katex-display><span class=katex><span class=katex-mathml><math display=block xmlns=http://www.w3.org/1998/Math/MathML><semantics><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ρ</mi><msup><mi>v</mi><mn>2</mn></msup><mi>S</mi><msub><mi>C</mi><mi>L</mi></msub></mrow><annotation encoding=application/x-tex>L = \\frac{1}{2} \\rho v^2 S C_L</annotation></semantics></math></span><span class=katex-html aria-hidden=true><span class=base><span class=strut style=height:.68333em;vertical-align:0></span><span class=\"mord mathnormal\">L</span><span class=mspace style=margin-right:.2777777777777778em></span><span class=mrel>=</span><span class=mspace style=margin-right:.2777777777777778em></span></span><span class=base><span class=strut style=height:2.00744em;vertical-align:-.686em></span><span class=mord><span class=\"nulldelimiter mopen\"></span><span class=mfrac><span class=\"vlist-t vlist-t2\"><span class=vlist-r><span class=vlist style=height:1.32144em><span style=top:-2.314em><span class=pstrut style=height:3em></span><span class=mord><span class=mord>2</span></span></span><span style=top:-3.23em><span class=pstrut style=height:3em></span><span class=frac-line style=border-bottom-width:.04em></span></span><span style=top:-3.677em><span class=pstrut style=height:3em></span><span class=mord><span class=mord>1</span></span></span></span><span class=vlist-s>​</span></span><span class=vlist-r><span class=vlist style=height:.686em><span></span></span></span></span></span><span class=\"nulldelimiter mclose\"></span></span><span class=\"mord mathnormal\">ρ</span><span class=mord><span class=\"mord mathnormal\"style=margin-right:.03588em>v</span><span class=msupsub><span class=vlist-t><span class=vlist-r><span class=vlist style=height:.8641079999999999em><span style=top:-3.113em;margin-right:.05em><span class=pstrut style=height:2.7em></span><span class=\"mtight reset-size6 size3 sizing\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord mathnormal\"style=margin-right:.05764em>S</span><span class=mord><span class=\"mord mathnormal\"style=margin-right:.07153em>C</span><span class=msupsub><span class=\"vlist-t vlist-t2\"><span class=vlist-r><span class=vlist style=height:.32833099999999993em><span style=top:-2.5500000000000003em;margin-left:-.07153em;margin-right:.05em><span class=pstrut style=height:2.7em></span><span class=\"mtight reset-size6 size3 sizing\"><span class=\"mord mathnormal mtight\">L</span></span></span></span><span class=vlist-s>​</span></span><span class=vlist-r><span class=vlist style=height:.15em><span></span></span></span></span></span></span></span></span></span></span></div><h2 id=license>License</h2><p>MIT"
}

},{
"pager": 1,
"path": "posts/post-02",
"type": "posts",
"filename": "post-02.json",
"fields": {
  "title": "Nunc non diam et nisi blandit",
  "postsGroup": "Lorem One",
  "image": {
    "src": "scott-graham-OQMZwNd3ThU-unsplash.jpg",
    "alt": "Post Image",
    "citation": "Photo by <a href='https://unsplash.com/@homajob?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Scott Graham</a> on <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  "author": {
    "name": "Ro Doe",
    "url": "pages/about"
  },
  "dateCreated": "1/9/2020",
  "dateModified": "1/8/2021",
  "categories": ["Photography"],
  "tags": ["Art", "Image", "Random"],
  "featured": false,
  "draft": true,
  "articleBody": "Nunc et porttitor est, vel pulvinar nibh. Suspendisse imperdiet at arcu eu molestie. Integer ut mauris tellus. Duis lectus lectus, finibus at libero eget, bibendum tempus purus. Curabitur vitae nisi sed nibh imperdiet accumsan non ut mi. Praesent commodo purus at aliquet accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent sagittis dapibus magna, eu vestibulum dui feugiat eget.<br/><br/>Nunc suscipit aliquet magna, quis mollis felis pellentesque quis. Vestibulum lorem nisl, luctus nec scelerisque vitae, commodo cursus tortor. Sed dapibus egestas mi. Cras tincidunt massa ut pharetra pretium. Duis porta eleifend metus, a accumsan metus euismod nec. Nulla interdum mattis quam non pharetra. Maecenas in leo vitae justo suscipit porttitor. Praesent auctor odio eget orci tristique pretium. Morbi at augue consectetur, mollis neque id, pretium leo. Sed ut viverra arcu. Nam luctus laoreet ex vitae faucibus. Duis vulputate magna ac tincidunt ullamcorper.<br/><br/>Nulla facilisi. Quisque dapibus elit vitae justo vulputate luctus. Duis sollicitudin enim est, ut auctor urna maximus quis. Donec feugiat vehicula condimentum. Nunc vitae nisi accumsan, volutpat orci sit amet, dictum est. Sed magna felis, sodales non dignissim sed, porta nec magna. Pellentesque et consequat risus. Duis eleifend, lacus vel mattis feugiat, augue mauris varius elit, vel aliquam ipsum neque in tortor. Donec porta mauris et odio scelerisque, ac viverra eros rutrum. Duis maximus eros ac maximus tincidunt. Curabitur quis vestibulum tellus.<br/><br/>Nulla in lectus et mauris euismod condimentum. Donec pulvinar sagittis massa vitae tristique. Cras fermentum ligula eget ipsum venenatis suscipit ac eu metus. Donec at varius ligula, in lacinia urna. In hac habitasse platea dictumst. Sed nec consectetur lacus. Nunc quis condimentum augue, in mollis purus. Cras bibendum nisi ac quam molestie, tempus laoreet enim cursus. Curabitur hendrerit, est eu suscipit elementum, ante nisi pharetra nibh, quis mattis lacus neque sed diam. Morbi congue non massa sit amet ornare. Quisque tincidunt vehicula ex quis consectetur. Ut quis lorem ullamcorper velit mollis mollis id quis est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum eros lacus, tincidunt id luctus et, egestas sit amet lorem. Etiam ipsum mi, venenatis vitae faucibus vel, sodales pharetra nibh. Cras nunc quam, tempus eget urna vitae, blandit scelerisque dui.<br/><br/>Phasellus rutrum dolor vel purus imperdiet convallis. Mauris a turpis elit. Donec vel semper dui. Praesent malesuada lacus vitae rhoncus luctus. Aliquam accumsan porta tellus, non hendrerit felis pellentesque nec. Fusce in sagittis quam. Nunc a laoreet tortor, ac imperdiet velit. Suspendisse a venenatis leo. Ut cursus dictum risus et gravida. Phasellus urna eros, finibus vitae lectus a, condimentum mollis augue. Etiam vulputate nulla at risus accumsan, vitae efficitur nunc elementum. Vivamus eu mauris diam."
}

},{
"pager": 1,
"path": "posts/post-03",
"type": "posts",
"filename": "post-03.json",
"fields": {
  "title": "Curabitur erat velit, vehicula ac arcu",
  "postsGroup": "",
  "image": {
    "src": "todd-diemer-p2yQQP-c72k-unsplash.jpg",
    "alt": "Post Image",
    "citation": "Photo by <a href='https://unsplash.com/@todd_diemer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Todd Diemer</a> on <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  "author": {
    "name": "Ro Doe",
    "url": "pages/about"
  },
  "dateCreated": "1/8/2020",
  "dateModified": "1/8/2021",
  "categories": ["Photography"],
  "tags": ["Art", "Image", "Random"],
  "featured": false,
  "draft": true,
  "articleBody": "Sed nisi orci, vestibulum eu ornare et, facilisis vitae dolor. Nunc neque turpis, egestas nec nisl sed, euismod lacinia nisl. Pellentesque sed risus eget nunc bibendum scelerisque. Duis egestas tempus orci eu pharetra. Proin aliquet eleifend posuere. Praesent tincidunt eleifend odio vehicula fermentum. Cras quis auctor neque. Aenean a tristique orci. Phasellus varius sit amet libero ut ornare.<br/><br/>Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam volutpat risus justo, et sodales arcu convallis dapibus. Nam aliquet, metus sit amet bibendum volutpat, est arcu feugiat ex, nec dictum nisl sem at dui. Praesent viverra odio orci, quis pretium ante egestas vitae. Ut quis viverra tortor. Mauris a imperdiet orci, sit amet tristique ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus eu mauris elementum, sodales arcu vitae, imperdiet sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin id accumsan orci, eu accumsan massa.<br/><br/>Curabitur eget sapien nunc. Suspendisse convallis turpis sed magna dignissim blandit. Cras in laoreet quam, in rhoncus erat. In orci neque, vulputate eu orci sit amet, finibus tincidunt nunc. Integer dictum tellus et felis tristique convallis sed nec libero. Donec lacinia ipsum sit amet felis posuere, eu vehicula massa scelerisque. Praesent rutrum molestie sollicitudin. Morbi venenatis purus luctus diam ultrices aliquam. Aliquam rutrum, nunc in pretium ultrices, dolor ante efficitur quam, sit amet consequat nibh risus non dui. Aliquam iaculis, leo at vehicula pretium, nisl purus tincidunt est, quis tempus ipsum risus in ante. In vitae nisl vulputate, vehicula est vitae, rhoncus nulla. Donec vitae porta ex, non faucibus massa. In hac habitasse platea dictumst. Suspendisse urna arcu, tincidunt sit amet bibendum id, auctor at urna. Pellentesque ligula mauris, tincidunt vel neque efficitur, vehicula feugiat lectus.<br/><br/>Nunc finibus risus a nisl hendrerit sollicitudin. Proin commodo leo sit amet tellus interdum, a ornare odio eleifend. In vel sagittis nibh. Ut rutrum id ipsum non suscipit. Vestibulum vel tellus rhoncus, mattis velit volutpat, finibus felis. Maecenas quis vehicula magna. Quisque vel massa a tortor ultricies vestibulum. Sed nisl sapien, elementum non leo sagittis, laoreet sodales nibh. Suspendisse scelerisque purus sed euismod vestibulum. Morbi ut posuere purus, in pretium metus. Suspendisse in aliquam sem. Maecenas non mi et nibh lacinia mattis nec lobortis mauris. Etiam lorem augue, dapibus eget nunc eu, pulvinar viverra nulla. Donec vitae dui diam. Vestibulum quis purus non urna sollicitudin fringilla."
}

},{
"pager": 1,
"path": "posts/post-04",
"type": "posts",
"filename": "post-04.json",
"fields": {
  "title": "Nam ullamcorper, mi in mattis accumsan",
  "postsGroup": "",
  "image": {
    "src": "camille-couvez-GnnVuPzQnxQ-unsplash.jpg",
    "alt": "Post Image",
    "citation": "Photo by <a href='https://unsplash.com/@camille_couvez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Camille Couvez</a> on <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  "author": {
    "name": "Ro Doe",
    "url": "pages/about"
  },
  "dateCreated": "1/10/2020",
  "dateModified": "1/8/2021",
  "categories": ["Design"],
  "tags": ["Art", "Graphic Design"],
  "featured": false,
  "draft": true,
  "articleBody": "Cras gravida dolor sit amet pulvinar lacinia. Mauris in luctus ex. Nunc id pretium nunc. Maecenas ut sollicitudin magna. Nunc dignissim quis orci in placerat. Cras accumsan tempor urna, eget aliquet nisi rutrum sit amet. Aenean fringilla ligula eu nisi interdum, ac cursus eros lacinia. Vestibulum bibendum mollis turpis et volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut elementum risus convallis odio tempus, id tincidunt quam imperdiet.<br/><br/>Aenean blandit euismod nulla eu blandit. Integer fringilla ex erat, eu vestibulum tellus lobortis quis. Nullam sit amet risus neque. Donec luctus risus sed lectus tincidunt, ut auctor purus pellentesque. Pellentesque id nibh eget justo eleifend molestie. Sed vitae facilisis quam. Quisque blandit in massa a finibus. Suspendisse sodales scelerisque scelerisque. Ut rhoncus commodo commodo. Vestibulum volutpat, augue ac varius faucibus, diam elit commodo magna, at tempus mi dui a mauris. Fusce eu auctor elit, eu tincidunt ex. Nullam maximus nisi eu purus suscipit ultrices. Sed ultrices eros id ipsum finibus tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus nec gravida diam.<br/><br/>Mauris interdum elit a tellus mollis, nec accumsan ipsum malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas consectetur, purus et imperdiet semper, nunc augue consectetur lectus, sit amet faucibus libero sapien vitae tortor. Aenean auctor ullamcorper sem ac imperdiet. In ullamcorper auctor varius. Sed non imperdiet metus. Duis blandit gravida maximus. Suspendisse luctus ac ipsum nec eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla nec laoreet libero, ut cursus metus. Praesent sagittis arcu eu urna hendrerit, in semper dolor efficitur. Sed interdum pharetra ultrices. Sed eget urna vel tellus lacinia maximus. Nulla pretium leo in velit feugiat lacinia. Fusce eu ornare ante, gravida pulvinar augue. Pellentesque faucibus dolor fringilla lectus imperdiet hendrerit.<br/><br/>Morbi eros odio, rhoncus ac metus ut, sagittis interdum nunc. Nullam vulputate elementum mi ut euismod. Nullam ac neque dictum, vulputate augue venenatis, pharetra mauris. Pellentesque egestas, magna a finibus fringilla, nibh ligula consectetur augue, eu blandit lacus ex vel massa. Nullam tincidunt ex eu varius laoreet. Quisque rhoncus vitae lacus non scelerisque. Vivamus eget bibendum nibh. Proin cursus ac tortor non sagittis. Sed iaculis consequat magna. Quisque vulputate erat at nibh interdum, nec faucibus urna gravida. In arcu turpis, imperdiet et tellus nec, ullamcorper aliquam lacus. Morbi maximus mollis iaculis. Praesent nec iaculis tortor. Fusce pulvinar sem ut nulla lobortis, eget cursus velit posuere. Aenean nunc arcu, consequat vel elit vel, iaculis cursus libero. In interdum finibus aliquam.<br/><br/>Nam sodales elementum nulla, ut elementum nisl malesuada sit amet. Fusce est nunc, eleifend sit amet dignissim at, dictum eget neque. Aenean quis tincidunt ante, in accumsan metus. Suspendisse viverra est ac odio scelerisque bibendum. Morbi pharetra lacinia justo at consequat. Donec id tristique est. Quisque in ante mollis, varius mi a, vehicula turpis. Suspendisse potenti. Phasellus ut magna est. Donec congue volutpat lorem, id rhoncus nisl ornare et.<br/><br/>Nulla tempor nisl non eros auctor feugiat. Nam a semper elit. Vivamus elementum ullamcorper metus id commodo. Phasellus nec rutrum lectus, a semper risus. Integer sed mi nec metus ultrices bibendum nec eu augue. Sed vitae eleifend neque, id scelerisque ex. Aliquam dignissim convallis metus, nec fringilla turpis dapibus a. Proin vitae erat vel ante tempor mattis. Cras vel ante a urna lacinia lacinia. Suspendisse potenti. Phasellus laoreet pulvinar nisi, vel rutrum urna lacinia et."
}

},{
"pager": 1,
"path": "posts/post-05",
"type": "posts",
"filename": "post-05.json",
"fields": {
  "title": "Curabitur vestibulum laoreet velit eget",
  "postsGroup": "Lorem Two",
  "image": {
    "src": "anastasiya-yilmaz-oBO_UCnkyXA-unsplash.jpg",
    "alt": "Post Image",
    "citation": "Photo by <a href='https://unsplash.com/@anastasiayilmaz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Anastasiya Yilmaz</a> on <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  "author": {
    "name": "Ro Doe",
    "url": "pages/about"
  },
  "dateCreated": "1/11/2020",
  "dateModified": "1/8/2021",
  "categories": ["Photography"],
  "tags": ["Image", "Graphic Design"],
  "featured": true,
  "draft": true,
  "articleBody": "Nulla libero elit, ultrices eget dolor eget, condimentum faucibus odio. In porta turpis ac purus gravida, nec venenatis erat molestie. In imperdiet mollis laoreet. Proin sed eleifend nulla, sed finibus enim. Fusce nec velit ac odio convallis accumsan quis ut eros. Suspendisse placerat nunc sit amet lacus sagittis, non viverra lacus gravida. Fusce tempus tellus nulla, ut maximus urna ornare a. Vestibulum nec pellentesque magna, bibendum facilisis orci. Donec consectetur ante non nunc pulvinar dapibus. Nam eleifend leo id turpis porta iaculis. Vivamus fermentum porttitor elit, et pellentesque erat sollicitudin ac. Aliquam euismod arcu et euismod lobortis. Praesent vitae augue at libero porttitor ultricies eu eu nulla. Integer ac neque et orci consectetur euismod dapibus vel augue.<br/><br/>Nunc eu volutpat erat. Quisque tempus augue neque. Mauris volutpat dolor ac enim hendrerit rutrum. Aenean feugiat orci nisl, vel pellentesque purus fringilla vel. Nam sit amet sapien massa. Vestibulum rutrum sagittis ex, quis semper sem gravida nec. Ut sapien est, varius ut mauris ac, commodo scelerisque neque.<br/><br/>Praesent facilisis ligula eget turpis mollis aliquam vel pellentesque tortor. Cras at porttitor metus. Pellentesque elementum id magna vel bibendum. Etiam nec mauris ligula. Etiam vitae convallis turpis. In dapibus rutrum auctor. Aliquam at ultricies tellus. Proin et bibendum tellus, iaculis sodales ipsum. Maecenas feugiat mi ligula, a pellentesque erat mattis eget. Aliquam in egestas neque, consequat varius ipsum. Cras sit amet urna non odio rutrum eleifend. Proin cursus nisl urna. Quisque a urna arcu. Mauris eu faucibus purus, et tristique est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/><br/>Donec a dui et dui sagittis blandit. Pellentesque vel euismod purus, id pharetra quam. Aliquam volutpat nisi et sollicitudin accumsan. Cras at sapien malesuada, tincidunt libero vitae, dictum turpis. Vivamus sem metus, rutrum nec velit sed, convallis eleifend ipsum. Maecenas dignissim ex quis massa pulvinar, et posuere libero facilisis. Fusce a ante leo. Fusce luctus justo id scelerisque tristique. Etiam commodo metus in est varius viverra in id tortor. Cras tristique neque at tellus egestas egestas. Fusce in tristique velit, sed aliquet eros. Etiam id metus suscipit, feugiat dolor eget, imperdiet nisl. Donec sit amet quam fringilla, sodales mauris at, imperdiet ipsum."
}

},{
"pager": 1,
"path": "posts/post-06",
"type": "posts",
"filename": "post-06.json",
"fields": {
  "title": "Curabitur nec ipsum pretium aliquam",
  "postsGroup": "Lorem Two",
  "image": {
    "src": "john-schnobrich-2FPjlAyMQTA-unsplash.jpg",
    "alt": "Post Image",
    "citation": "Photo by <a href='https://unsplash.com/@johnschno?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>John Schnobrich</a> on <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  "author": {
    "name": "Ro Doe",
    "url": "pages/about"
  },
  "dateCreated": "1/12/2020",
  "dateModified": "1/8/2021",
  "categories": ["Photography"],
  "tags": ["Random", "Graphic Design"],
  "featured": true,
  "draft": true,
  "articleBody": "Aenean aliquam, mi vel tempor volutpat, neque velit finibus libero, eu sagittis orci arcu non nisi. Sed rhoncus mi ornare vestibulum pretium. Fusce eget ullamcorper lectus. Donec in tortor sollicitudin dolor consequat tristique. Mauris rutrum nunc sit amet nisl ornare, eget volutpat tortor eleifend. Pellentesque eget neque sit amet arcu tincidunt porttitor. Nulla facilisi. Cras erat elit, hendrerit in orci ac, dignissim faucibus odio.<br/><br/>Integer augue ex, accumsan quis placerat ac, egestas in risus. Morbi elementum mi sit amet risus aliquet gravida. Duis interdum, lacus sed sagittis malesuada, purus ligula vulputate velit, quis posuere sem dolor sit amet erat. Vestibulum vestibulum justo nec pellentesque mattis. Quisque sit amet dignissim nunc. Donec mattis id erat vitae consectetur. Curabitur rhoncus interdum mauris, vitae vulputate augue tempor placerat. Morbi nunc mi, mollis et commodo quis, convallis et elit. Mauris id tellus semper, rhoncus lorem consequat, sagittis ex. Cras imperdiet arcu massa, et porttitor eros lobortis non.<br/><br/>Aliquam ac ex mi. Nullam cursus nunc quis eros scelerisque, eu porttitor lacus efficitur. Sed pharetra tempor ipsum, eget porta risus sollicitudin vitae. In iaculis velit ut magna eleifend, non dapibus purus dictum. Curabitur egestas orci eu purus fermentum, in elementum metus venenatis. Maecenas luctus ligula ac augue commodo, non sollicitudin dui luctus. Sed pharetra ex id magna accumsan congue. Sed quis aliquam elit, in faucibus elit. Nunc semper cursus sodales. Integer dictum ante eu tellus condimentum, et aliquam risus iaculis. Vivamus a odio rutrum, efficitur sapien ut, lobortis ex. Proin nisi ipsum, egestas id rutrum in, suscipit in libero. Aenean pharetra velit dolor, et mattis tortor ultrices vel. Maecenas non eros nec turpis porttitor rhoncus non a massa. Quisque consequat vitae justo a tincidunt.<br/><br/>Curabitur finibus viverra elit id interdum. In ac nisl in lorem convallis elementum in vel erat. Vivamus nulla nisi, consequat sit amet varius quis, vulputate hendrerit nulla. Fusce eu quam feugiat, egestas nisl a, iaculis augue. Vestibulum id lobortis tellus. Nunc eleifend quam nec lectus ultricies, non accumsan nibh ornare. Aenean dictum iaculis leo, nec sodales tortor semper in. Nulla facilisi. Vestibulum tristique tellus at iaculis tincidunt. Fusce congue tincidunt condimentum. Fusce vitae mattis odio, porttitor aliquam sem. Proin eu dolor eu ex imperdiet consectetur. Mauris rhoncus dui sit amet quam elementum, sit amet sodales ante pellentesque. Nam pretium elit id placerat congue.<br/><br/>Aenean vel felis congue, sagittis odio non, dapibus nisl. Vivamus dignissim diam et justo gravida tincidunt. Donec diam mauris, porttitor in tristique ac, congue et lorem. Vestibulum sit amet ipsum lacus. Sed fringilla urna at mi posuere cursus. Nunc in risus dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse eget metus in nulla egestas lacinia. Quisque vulputate lacus non mauris venenatis laoreet. Fusce vitae molestie libero. Pellentesque gravida nunc sed tempus euismod. Aenean malesuada tempus dui, id interdum nibh facilisis sed. Aliquam rutrum aliquam molestie. Ut id suscipit justo, a gravida dui. Mauris luctus erat tristique rutrum tristique. Integer pretium sem magna, a cursus nulla condimentum vitae.<br/><br/>Suspendisse eu ipsum risus. Morbi erat eros, scelerisque a sollicitudin non, rhoncus quis ante. Etiam in nulla eu mi volutpat sodales. In molestie sagittis nisi at egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi neque augue, mollis ut felis in, convallis feugiat dui. Maecenas sit amet posuere lacus. Suspendisse interdum porttitor ligula id suscipit. Sed in felis in tellus dictum molestie. Nunc hendrerit nunc leo, at euismod sem consectetur non. Mauris a tortor augue."
}

},{
"pager": 1,
"path": "posts/post-07",
"type": "posts",
"filename": "post-07.json",
"fields": {
  "title": "Donec odio risus, mattis a ligula",
  "postsGroup": "Lorem Two",
  "image": {
    "src": "antonio-rull-tMH2UgXW3c0-unsplash.jpg",
    "alt": "Post Image",
    "citation": "Photo by <a href='https://unsplash.com/@antoniorull?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Antonio Rull</a> on <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  "author": {
    "name": "Ro Doe",
    "url": "pages/about"
  },
  "dateCreated": "1/13/2020",
  "dateModified": "1/8/2021",
  "categories": ["Design"],
  "tags": ["Image", "Graphic Design"],
  "featured": false,
  "draft": true,
  "articleBody": "Phasellus fermentum felis ut magna hendrerit, ut egestas augue elementum. Aliquam pharetra sagittis mollis. Maecenas ut libero vestibulum, pharetra dolor sed, mollis turpis. Nulla sodales volutpat ex, eu viverra dolor pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque aliquet, nunc sit amet suscipit vestibulum, nisl tortor fringilla purus, et tristique ex massa eu risus. Donec sed viverra neque. Mauris hendrerit mattis purus sed pellentesque. Ut dignissim commodo massa, at pulvinar dolor ultrices sed. Nulla justo augue, vulputate eget mollis in, consectetur vitae lorem.<br/><br/>Suspendisse imperdiet eleifend mi vitae varius. Sed in interdum ante, vitae aliquet lorem. Vivamus a metus at enim lobortis rhoncus id sit amet dolor. Suspendisse dignissim arcu id odio cursus vulputate. Ut dictum finibus eros id lacinia. Proin in congue turpis, eu blandit sem. Proin gravida a est vitae suscipit. Donec mollis malesuada nibh a porta. Sed vel dignissim sem, et mattis dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse erat nisl, varius quis viverra quis, malesuada at arcu. Duis condimentum massa suscipit erat vestibulum, eu congue sapien commodo. Maecenas et egestas quam.<br/><br/>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel odio est. Etiam iaculis imperdiet massa, nec iaculis ante. Nullam dui nisl, euismod ut ante quis, vulputate commodo lorem. Donec bibendum euismod arcu sit amet dignissim. Ut rhoncus auctor cursus. Proin scelerisque eleifend tellus eu euismod. Aliquam cursus in ex vel efficitur. Pellentesque molestie neque quis massa finibus cursus. Mauris lacinia venenatis mattis.<br/><br/>Duis fermentum ac arcu eu gravida. Fusce faucibus, tortor at imperdiet ullamcorper, mi turpis ornare massa, eu viverra sapien quam in lorem. Donec sodales venenatis nisi, in dignissim sem ornare id. Sed sapien risus, condimentum id nibh ac, molestie malesuada ligula. In ut neque scelerisque, posuere nisl sit amet, maximus justo. Maecenas varius nisi id nulla scelerisque posuere. Maecenas quam eros, tincidunt ut turpis vitae, iaculis varius ipsum. Vestibulum elementum enim urna, a tristique nisl congue quis. Vivamus porttitor eleifend magna in consequat. Aliquam bibendum iaculis auctor. In consectetur eget justo et accumsan. Proin non suscipit leo, vel lacinia urna. Cras lobortis in eros et pulvinar."
}

},{
"pager": 1,
"path": "posts/post-08",
"type": "posts",
"filename": "post-08.json",
"fields": {
  "title": "Curabitur vestibulum laoreet velit eget",
  "postsGroup": "Lorem Three",
  "image": {
    "src": "anastasiya-yilmaz-oBO_UCnkyXA-unsplash.jpg",
    "alt": "Post Image",
    "citation": "Photo by <a href='https://unsplash.com/@anastasiayilmaz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Anastasiya Yilmaz</a> on <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  "author": {
    "name": "Ro Doe",
    "url": "pages/about"
  },
  "dateCreated": "1/11/2020",
  "dateModified": "1/8/2021",
  "categories": ["Photography"],
  "tags": ["Art", "Graphic Design"],
  "featured": true,
  "draft": true,
  "articleBody": "Nulla libero elit, ultrices eget dolor eget, condimentum faucibus odio. In porta turpis ac purus gravida, nec venenatis erat molestie. In imperdiet mollis laoreet. Proin sed eleifend nulla, sed finibus enim. Fusce nec velit ac odio convallis accumsan quis ut eros. Suspendisse placerat nunc sit amet lacus sagittis, non viverra lacus gravida. Fusce tempus tellus nulla, ut maximus urna ornare a. Vestibulum nec pellentesque magna, bibendum facilisis orci. Donec consectetur ante non nunc pulvinar dapibus. Nam eleifend leo id turpis porta iaculis. Vivamus fermentum porttitor elit, et pellentesque erat sollicitudin ac. Aliquam euismod arcu et euismod lobortis. Praesent vitae augue at libero porttitor ultricies eu eu nulla. Integer ac neque et orci consectetur euismod dapibus vel augue.<br/><br/>Nunc eu volutpat erat. Quisque tempus augue neque. Mauris volutpat dolor ac enim hendrerit rutrum. Aenean feugiat orci nisl, vel pellentesque purus fringilla vel. Nam sit amet sapien massa. Vestibulum rutrum sagittis ex, quis semper sem gravida nec. Ut sapien est, varius ut mauris ac, commodo scelerisque neque.<br/><br/>Praesent facilisis ligula eget turpis mollis aliquam vel pellentesque tortor. Cras at porttitor metus. Pellentesque elementum id magna vel bibendum. Etiam nec mauris ligula. Etiam vitae convallis turpis. In dapibus rutrum auctor. Aliquam at ultricies tellus. Proin et bibendum tellus, iaculis sodales ipsum. Maecenas feugiat mi ligula, a pellentesque erat mattis eget. Aliquam in egestas neque, consequat varius ipsum. Cras sit amet urna non odio rutrum eleifend. Proin cursus nisl urna. Quisque a urna arcu. Mauris eu faucibus purus, et tristique est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/><br/>Donec a dui et dui sagittis blandit. Pellentesque vel euismod purus, id pharetra quam. Aliquam volutpat nisi et sollicitudin accumsan. Cras at sapien malesuada, tincidunt libero vitae, dictum turpis. Vivamus sem metus, rutrum nec velit sed, convallis eleifend ipsum. Maecenas dignissim ex quis massa pulvinar, et posuere libero facilisis. Fusce a ante leo. Fusce luctus justo id scelerisque tristique. Etiam commodo metus in est varius viverra in id tortor. Cras tristique neque at tellus egestas egestas. Fusce in tristique velit, sed aliquet eros. Etiam id metus suscipit, feugiat dolor eget, imperdiet nisl. Donec sit amet quam fringilla, sodales mauris at, imperdiet ipsum."
}

},{
"pager": 1,
"path": "posts/post-09",
"type": "posts",
"filename": "post-09.json",
"fields": {
  "title": "Curabitur nec ipsum pretium aliquam",
  "postsGroup": "Lorem Three",
  "image": {
    "src": "john-schnobrich-2FPjlAyMQTA-unsplash.jpg",
    "alt": "Post Image",
    "citation": "Photo by <a href='https://unsplash.com/@johnschno?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>John Schnobrich</a> on <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  "author": {
    "name": "Ro Doe",
    "url": "pages/about"
  },
  "dateCreated": "1/12/2020",
  "dateModified": "1/8/2021",
  "categories": ["Design"],
  "tags": ["Random", "Graphic Design"],
  "featured": true,
  "draft": true,
  "articleBody": "Aenean aliquam, mi vel tempor volutpat, neque velit finibus libero, eu sagittis orci arcu non nisi. Sed rhoncus mi ornare vestibulum pretium. Fusce eget ullamcorper lectus. Donec in tortor sollicitudin dolor consequat tristique. Mauris rutrum nunc sit amet nisl ornare, eget volutpat tortor eleifend. Pellentesque eget neque sit amet arcu tincidunt porttitor. Nulla facilisi. Cras erat elit, hendrerit in orci ac, dignissim faucibus odio.<br/><br/>Integer augue ex, accumsan quis placerat ac, egestas in risus. Morbi elementum mi sit amet risus aliquet gravida. Duis interdum, lacus sed sagittis malesuada, purus ligula vulputate velit, quis posuere sem dolor sit amet erat. Vestibulum vestibulum justo nec pellentesque mattis. Quisque sit amet dignissim nunc. Donec mattis id erat vitae consectetur. Curabitur rhoncus interdum mauris, vitae vulputate augue tempor placerat. Morbi nunc mi, mollis et commodo quis, convallis et elit. Mauris id tellus semper, rhoncus lorem consequat, sagittis ex. Cras imperdiet arcu massa, et porttitor eros lobortis non.<br/><br/>Aliquam ac ex mi. Nullam cursus nunc quis eros scelerisque, eu porttitor lacus efficitur. Sed pharetra tempor ipsum, eget porta risus sollicitudin vitae. In iaculis velit ut magna eleifend, non dapibus purus dictum. Curabitur egestas orci eu purus fermentum, in elementum metus venenatis. Maecenas luctus ligula ac augue commodo, non sollicitudin dui luctus. Sed pharetra ex id magna accumsan congue. Sed quis aliquam elit, in faucibus elit. Nunc semper cursus sodales. Integer dictum ante eu tellus condimentum, et aliquam risus iaculis. Vivamus a odio rutrum, efficitur sapien ut, lobortis ex. Proin nisi ipsum, egestas id rutrum in, suscipit in libero. Aenean pharetra velit dolor, et mattis tortor ultrices vel. Maecenas non eros nec turpis porttitor rhoncus non a massa. Quisque consequat vitae justo a tincidunt.<br/><br/>Curabitur finibus viverra elit id interdum. In ac nisl in lorem convallis elementum in vel erat. Vivamus nulla nisi, consequat sit amet varius quis, vulputate hendrerit nulla. Fusce eu quam feugiat, egestas nisl a, iaculis augue. Vestibulum id lobortis tellus. Nunc eleifend quam nec lectus ultricies, non accumsan nibh ornare. Aenean dictum iaculis leo, nec sodales tortor semper in. Nulla facilisi. Vestibulum tristique tellus at iaculis tincidunt. Fusce congue tincidunt condimentum. Fusce vitae mattis odio, porttitor aliquam sem. Proin eu dolor eu ex imperdiet consectetur. Mauris rhoncus dui sit amet quam elementum, sit amet sodales ante pellentesque. Nam pretium elit id placerat congue.<br/><br/>Aenean vel felis congue, sagittis odio non, dapibus nisl. Vivamus dignissim diam et justo gravida tincidunt. Donec diam mauris, porttitor in tristique ac, congue et lorem. Vestibulum sit amet ipsum lacus. Sed fringilla urna at mi posuere cursus. Nunc in risus dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse eget metus in nulla egestas lacinia. Quisque vulputate lacus non mauris venenatis laoreet. Fusce vitae molestie libero. Pellentesque gravida nunc sed tempus euismod. Aenean malesuada tempus dui, id interdum nibh facilisis sed. Aliquam rutrum aliquam molestie. Ut id suscipit justo, a gravida dui. Mauris luctus erat tristique rutrum tristique. Integer pretium sem magna, a cursus nulla condimentum vitae.<br/><br/>Suspendisse eu ipsum risus. Morbi erat eros, scelerisque a sollicitudin non, rhoncus quis ante. Etiam in nulla eu mi volutpat sodales. In molestie sagittis nisi at egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi neque augue, mollis ut felis in, convallis feugiat dui. Maecenas sit amet posuere lacus. Suspendisse interdum porttitor ligula id suscipit. Sed in felis in tellus dictum molestie. Nunc hendrerit nunc leo, at euismod sem consectetur non. Mauris a tortor augue."
}

},{
"pager": 1,
"path": "posts/post-10",
"type": "posts",
"filename": "post-10.json",
"fields": {
  "title": "Donec odio risus, mattis a ligula",
  "postsGroup": "Lorem Four",
  "image": {
    "src": "antonio-rull-tMH2UgXW3c0-unsplash.jpg",
    "alt": "Post Image",
    "citation": "Photo by <a href='https://unsplash.com/@antoniorull?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Antonio Rull</a> on <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  "author": {
    "name": "Ro Doe",
    "url": "pages/about"
  },
  "dateCreated": "1/13/2020",
  "dateModified": "1/8/2021",
  "categories": ["Photography"],
  "tags": ["Image", "Graphic Design"],
  "featured": false,
  "draft": true,
  "articleBody": "Phasellus fermentum felis ut magna hendrerit, ut egestas augue elementum. Aliquam pharetra sagittis mollis. Maecenas ut libero vestibulum, pharetra dolor sed, mollis turpis. Nulla sodales volutpat ex, eu viverra dolor pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque aliquet, nunc sit amet suscipit vestibulum, nisl tortor fringilla purus, et tristique ex massa eu risus. Donec sed viverra neque. Mauris hendrerit mattis purus sed pellentesque. Ut dignissim commodo massa, at pulvinar dolor ultrices sed. Nulla justo augue, vulputate eget mollis in, consectetur vitae lorem.<br/><br/>Suspendisse imperdiet eleifend mi vitae varius. Sed in interdum ante, vitae aliquet lorem. Vivamus a metus at enim lobortis rhoncus id sit amet dolor. Suspendisse dignissim arcu id odio cursus vulputate. Ut dictum finibus eros id lacinia. Proin in congue turpis, eu blandit sem. Proin gravida a est vitae suscipit. Donec mollis malesuada nibh a porta. Sed vel dignissim sem, et mattis dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse erat nisl, varius quis viverra quis, malesuada at arcu. Duis condimentum massa suscipit erat vestibulum, eu congue sapien commodo. Maecenas et egestas quam.<br/><br/>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel odio est. Etiam iaculis imperdiet massa, nec iaculis ante. Nullam dui nisl, euismod ut ante quis, vulputate commodo lorem. Donec bibendum euismod arcu sit amet dignissim. Ut rhoncus auctor cursus. Proin scelerisque eleifend tellus eu euismod. Aliquam cursus in ex vel efficitur. Pellentesque molestie neque quis massa finibus cursus. Mauris lacinia venenatis mattis.<br/><br/>Duis fermentum ac arcu eu gravida. Fusce faucibus, tortor at imperdiet ullamcorper, mi turpis ornare massa, eu viverra sapien quam in lorem. Donec sodales venenatis nisi, in dignissim sem ornare id. Sed sapien risus, condimentum id nibh ac, molestie malesuada ligula. In ut neque scelerisque, posuere nisl sit amet, maximus justo. Maecenas varius nisi id nulla scelerisque posuere. Maecenas quam eros, tincidunt ut turpis vitae, iaculis varius ipsum. Vestibulum elementum enim urna, a tristique nisl congue quis. Vivamus porttitor eleifend magna in consequat. Aliquam bibendum iaculis auctor. In consectetur eget justo et accumsan. Proin non suscipit leo, vel lacinia urna. Cras lobortis in eros et pulvinar."
}

},{
"pager": 1,
"path": "projects",
"type": "projs",
"filename": "projs.json",
"fields": {
	"title": "Projects",
  "route": "projects",
	"enabled": true,
	"menu": true
}
},{
"pager": 1,
"path": "tags/art",
"type": "tags",
"filename": "art.json",
"fields": {
  "name": "Art",
  "route": "tags/art"
}
},{
"pager": 1,
"path": "tags/image",
"type": "tags",
"filename": "image.json",
"fields": {
  "name": "Image",
  "route": "tags/image"
}
},{
"pager": 1,
"path": "tags/graphic-design",
"type": "tags",
"filename": "other.json",
"fields": {
  "name": "Graphic Design",
  "route": "tags/graphic-design"
}
},{
"pager": 1,
"path": "tags/random",
"type": "tags",
"filename": "random.json",
"fields": {
  "name": "Random",
  "route": "tags/random"
}
},{
"pager": 1,
"path": "1",
"type": "index",
"filename": "index.json",
"fields": { "name": "Compendium", "site": "www.example.net", "logo": "logo.svg", "title": "Compendium | Blog Template", "description": "A personal blog template for creating JAMStack sites with Plenti of Svelte", "SEO": { "locale": "en_US", "twitteruser": "@mytag", "author": "Jo Doe", "author_site": "", "image": "logo.png" }, "socialLinks": [ { "src": "https://www.linkedin.com/", "ico": "lab la-linkedin-in", "enabled": true }, { "src": "https://github.com/", "ico": "lab la-github-alt", "enabled": true }, { "src": "https://about.gitlab.com/", "ico": "lab la-gitlab", "enabled": true }, { "src": "https://twitter.com/", "ico": "lab la-twitter", "enabled": false }, { "src": "https://keybase.io/", "ico": "lab la-keybase", "enabled": true }, { "src": "https://www.reddit.com/", "ico": "lab la-reddit", "enabled": true }, { "src": "https://www.instagram.com/", "ico": "lab la-instagram", "enabled": false }, { "src": "https://www.facebook.com/", "ico": "lab la-facebook-f", "enabled": false }, { "src": "", "ico": "", "enabled": false } ], "theme": { "postsPerPage": 6, "projsPerPage": 3, "projsSort": "Date", "projsSortValues": "Date, Name", "tagsPerPage": 12, "mathTypesetting": true, "codeHighlighting": true, "featuredPage": "Frame", "featuredPageValues": "Bleed, Frame, None", "colorScheme": "Earthliness", "colorSchemeValues": "Earthliness, Simplicity, Technobeat" } } 
},{
"pager": 2,
"path": "2",
"type": "index",
"filename": "index.json",
"fields": { "name": "Compendium", "site": "www.example.net", "logo": "logo.svg", "title": "Compendium | Blog Template", "description": "A personal blog template for creating JAMStack sites with Plenti of Svelte", "SEO": { "locale": "en_US", "twitteruser": "@mytag", "author": "Jo Doe", "author_site": "", "image": "logo.png" }, "socialLinks": [ { "src": "https://www.linkedin.com/", "ico": "lab la-linkedin-in", "enabled": true }, { "src": "https://github.com/", "ico": "lab la-github-alt", "enabled": true }, { "src": "https://about.gitlab.com/", "ico": "lab la-gitlab", "enabled": true }, { "src": "https://twitter.com/", "ico": "lab la-twitter", "enabled": false }, { "src": "https://keybase.io/", "ico": "lab la-keybase", "enabled": true }, { "src": "https://www.reddit.com/", "ico": "lab la-reddit", "enabled": true }, { "src": "https://www.instagram.com/", "ico": "lab la-instagram", "enabled": false }, { "src": "https://www.facebook.com/", "ico": "lab la-facebook-f", "enabled": false }, { "src": "", "ico": "", "enabled": false } ], "theme": { "postsPerPage": 6, "projsPerPage": 3, "projsSort": "Date", "projsSortValues": "Date, Name", "tagsPerPage": 12, "mathTypesetting": true, "codeHighlighting": true, "featuredPage": "Frame", "featuredPageValues": "Bleed, Frame, None", "colorScheme": "Earthliness", "colorSchemeValues": "Earthliness, Simplicity, Technobeat" } } 
},{
"pager": 1,
"path": "projects/1",
"type": "projs",
"filename": "projs.json",
"fields": { "title": "Projects", "route": "projects", "enabled": true, "menu": true }
},{
"pager": 2,
"path": "projects/2",
"type": "projs",
"filename": "projs.json",
"fields": { "title": "Projects", "route": "projects", "enabled": true, "menu": true }
},];

export default allContent;