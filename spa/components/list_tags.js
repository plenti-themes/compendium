/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	check_outros,
	children,
	claim_component,
	claim_element,
	claim_space,
	claim_text,
	create_component,
	destroy_component,
	destroy_each,
	detach,
	element,
	empty,
	group_outros,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	set_data,
	space,
	text,
	transition_in,
	transition_out
} from '../web_modules/svelte/internal/index.mjs';

import PostMeta from './post_meta.js';

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[5] = list[i];
	return child_ctx;
}

// (28:8) {#each Posts as post}
function create_each_block(ctx) {
	let div2;
	let img;
	let img_src_value;
	let img_alt_value;
	let t0;
	let div1;
	let h3;
	let a;
	let t1_value = /*post*/ ctx[5].title + "";
	let t1;
	let a_href_value;
	let t2;
	let div0;
	let postmeta;
	let t3;
	let current;

	postmeta = new PostMeta({
			props: {
				post: /*post*/ ctx[5],
				catgPosts: /*catgPosts*/ ctx[1],
				tagsPosts: /*tagsPosts*/ ctx[2],
				pm: /*pm*/ ctx[4]
			}
		});

	return {
		c() {
			div2 = element("div");
			img = element("img");
			t0 = space();
			div1 = element("div");
			h3 = element("h3");
			a = element("a");
			t1 = text(t1_value);
			t2 = space();
			div0 = element("div");
			create_component(postmeta.$$.fragment);
			t3 = space();
			this.h();
		},
		l(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			img = claim_element(div2_nodes, "IMG", { class: true, src: true, alt: true });
			t0 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h3 = claim_element(div1_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			a = claim_element(h3_nodes, "A", { href: true });
			var a_nodes = children(a);
			t1 = claim_text(a_nodes, t1_value);
			a_nodes.forEach(detach);
			h3_nodes.forEach(detach);
			t2 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true, role: true });
			var div0_nodes = children(div0);
			claim_component(postmeta.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t3 = claim_space(div2_nodes);
			div2_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(img, "class", "inline-block object-cover rounded-md w-28 h-28");
			if (img.src !== (img_src_value = "assets/posts/" + /*post*/ ctx[5].img_src)) attr(img, "src", img_src_value);
			attr(img, "alt", img_alt_value = /*post*/ ctx[5].img_alt);
			attr(a, "href", a_href_value = /*post*/ ctx[5].path);
			attr(h3, "class", "header my-0 text-xl md:text-2xl");
			attr(div0, "class", "text-meta flex flex-wrap");
			attr(div0, "role", "complementary");
			attr(div1, "class", "inline-block ml-2");
			attr(div2, "class", "flex items-center my-4");
		},
		m(target, anchor) {
			insert(target, div2, anchor);
			append(div2, img);
			append(div2, t0);
			append(div2, div1);
			append(div1, h3);
			append(h3, a);
			append(a, t1);
			append(div1, t2);
			append(div1, div0);
			mount_component(postmeta, div0, null);
			append(div2, t3);
			current = true;
		},
		p(ctx, dirty) {
			if (!current || dirty & /*Posts*/ 8 && img.src !== (img_src_value = "assets/posts/" + /*post*/ ctx[5].img_src)) {
				attr(img, "src", img_src_value);
			}

			if (!current || dirty & /*Posts*/ 8 && img_alt_value !== (img_alt_value = /*post*/ ctx[5].img_alt)) {
				attr(img, "alt", img_alt_value);
			}

			if ((!current || dirty & /*Posts*/ 8) && t1_value !== (t1_value = /*post*/ ctx[5].title + "")) set_data(t1, t1_value);

			if (!current || dirty & /*Posts*/ 8 && a_href_value !== (a_href_value = /*post*/ ctx[5].path)) {
				attr(a, "href", a_href_value);
			}

			const postmeta_changes = {};
			if (dirty & /*Posts*/ 8) postmeta_changes.post = /*post*/ ctx[5];
			if (dirty & /*catgPosts*/ 2) postmeta_changes.catgPosts = /*catgPosts*/ ctx[1];
			if (dirty & /*tagsPosts*/ 4) postmeta_changes.tagsPosts = /*tagsPosts*/ ctx[2];
			postmeta.$set(postmeta_changes);
		},
		i(local) {
			if (current) return;
			transition_in(postmeta.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(postmeta.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div2);
			destroy_component(postmeta);
		}
	};
}

// (23:6) {#key tag}
function create_key_block(ctx) {
	let h2;
	let span;
	let t0;
	let t1;
	let t2;
	let t3;
	let each_1_anchor;
	let current;
	let each_value = /*Posts*/ ctx[3];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			h2 = element("h2");
			span = element("span");
			t0 = text("Tag:");
			t1 = space();
			t2 = text(/*tag*/ ctx[0]);
			t3 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
			this.h();
		},
		l(nodes) {
			h2 = claim_element(nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			span = claim_element(h2_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t0 = claim_text(span_nodes, "Tag:");
			span_nodes.forEach(detach);
			t1 = claim_space(h2_nodes);
			t2 = claim_text(h2_nodes, /*tag*/ ctx[0]);
			h2_nodes.forEach(detach);
			t3 = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
			this.h();
		},
		h() {
			attr(span, "class", "accent");
			attr(h2, "class", "header text-xl md:text-2xl lg:text-3xl my-5");
		},
		m(target, anchor) {
			insert(target, h2, anchor);
			append(h2, span);
			append(span, t0);
			append(h2, t1);
			append(h2, t2);
			insert(target, t3, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each_1_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (!current || dirty & /*tag*/ 1) set_data(t2, /*tag*/ ctx[0]);

			if (dirty & /*Posts, catgPosts, tagsPosts, pm*/ 30) {
				each_value = /*Posts*/ ctx[3];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) detach(h2);
			if (detaching) detach(t3);
			destroy_each(each_blocks, detaching);
			if (detaching) detach(each_1_anchor);
		}
	};
}

function create_fragment(ctx) {
	let div2;
	let div1;
	let div0;
	let previous_key = /*tag*/ ctx[0];
	let current;
	let key_block = create_key_block(ctx);

	return {
		c() {
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");
			key_block.c();
			this.h();
		},
		l(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			key_block.l(div0_nodes);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "mx-2 md:mx-6 my-1");
			attr(div1, "class", "flex-none lg:flex");
			attr(div2, "class", "rounded-xl overflow-hidden shadow-md bg-secondary mb-6");
		},
		m(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div1);
			append(div1, div0);
			key_block.m(div0, null);
			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*tag*/ 1 && safe_not_equal(previous_key, previous_key = /*tag*/ ctx[0])) {
				group_outros();
				transition_out(key_block, 1, 1, noop);
				check_outros();
				key_block = create_key_block(ctx);
				key_block.c();
				transition_in(key_block);
				key_block.m(div0, null);
			} else {
				key_block.p(ctx, dirty);
			}
		},
		i(local) {
			if (current) return;
			transition_in(key_block);
			current = true;
		},
		o(local) {
			transition_out(key_block);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div2);
			key_block.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { tag } = $$props, { catgPosts } = $$props, { tagsPosts } = $$props;

	// Post Meta configuration values
	const pm = {
		author: false,
		date_modified: true,
		date_created: true,
		description: false,
		catg_tags: true,
		continue: false
	};

	let Posts;

	$$self.$$set = $$props => {
		if ("tag" in $$props) $$invalidate(0, tag = $$props.tag);
		if ("catgPosts" in $$props) $$invalidate(1, catgPosts = $$props.catgPosts);
		if ("tagsPosts" in $$props) $$invalidate(2, tagsPosts = $$props.tagsPosts);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*tagsPosts, tag*/ 5) {
			$: $$invalidate(3, Posts = Object.values(tagsPosts.filter(key => key.name == tag)[0].posts));
		}
	};

	return [tag, catgPosts, tagsPosts, Posts, pm];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { tag: 0, catgPosts: 1, tagsPosts: 2 });
	}
}

export default Component;