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
	safe_not_equal,
	set_data,
	space,
	text,
	transition_in,
	transition_out
} from '../web_modules/svelte/internal/index.mjs';

import Meta from './post_meta.js';

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	child_ctx[9] = i;
	return child_ctx;
}

// (10:2) {#if i >= postRangeLow && i < postRangeHigh}
function create_if_block(ctx) {
	let div1;
	let img;
	let img_src_value;
	let img_alt_value;
	let t0;
	let div0;
	let h3;
	let a;
	let t1_value = /*post*/ ctx[7].fields.title + "";
	let t1;
	let a_href_value;
	let t2;
	let meta;
	let t3;
	let current;

	meta = new Meta({
			props: {
				post: /*post*/ ctx[7],
				tagsList: /*tagsList*/ ctx[3],
				catgList: /*catgList*/ ctx[4],
				complete: /*complete*/ ctx[5],
				skipbody: /*skipbody*/ ctx[6]
			}
		});

	return {
		c() {
			div1 = element("div");
			img = element("img");
			t0 = space();
			div0 = element("div");
			h3 = element("h3");
			a = element("a");
			t1 = text(t1_value);
			t2 = space();
			create_component(meta.$$.fragment);
			t3 = space();
			this.h();
		},
		l(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			img = claim_element(div1_nodes, "IMG", { class: true, src: true, alt: true });
			t0 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h3 = claim_element(div0_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			a = claim_element(h3_nodes, "A", { href: true });
			var a_nodes = children(a);
			t1 = claim_text(a_nodes, t1_value);
			a_nodes.forEach(detach);
			h3_nodes.forEach(detach);
			t2 = claim_space(div0_nodes);
			claim_component(meta.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach);
			t3 = claim_space(div1_nodes);
			div1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(img, "class", "w-full md:h-52 lg:h-60 object-cover");
			if (img.src !== (img_src_value = "assets/posts/" + /*post*/ ctx[7].fields.image.src)) attr(img, "src", img_src_value);
			attr(img, "alt", img_alt_value = /*post*/ ctx[7].fields.image.alt);
			attr(a, "href", a_href_value = /*post*/ ctx[7].path);
			attr(h3, "class", "header mt-0 mb-2 text-xl md:text-2xl");
			attr(div0, "class", "px-5 py-4");
			attr(div1, "class", "rounded-lg overflow-hidden shadow-md bg-secondary");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, img);
			append(div1, t0);
			append(div1, div0);
			append(div0, h3);
			append(h3, a);
			append(a, t1);
			append(div0, t2);
			mount_component(meta, div0, null);
			append(div1, t3);
			current = true;
		},
		p(ctx, dirty) {
			if (!current || dirty & /*allPosts*/ 1 && img.src !== (img_src_value = "assets/posts/" + /*post*/ ctx[7].fields.image.src)) {
				attr(img, "src", img_src_value);
			}

			if (!current || dirty & /*allPosts*/ 1 && img_alt_value !== (img_alt_value = /*post*/ ctx[7].fields.image.alt)) {
				attr(img, "alt", img_alt_value);
			}

			if ((!current || dirty & /*allPosts*/ 1) && t1_value !== (t1_value = /*post*/ ctx[7].fields.title + "")) set_data(t1, t1_value);

			if (!current || dirty & /*allPosts*/ 1 && a_href_value !== (a_href_value = /*post*/ ctx[7].path)) {
				attr(a, "href", a_href_value);
			}

			const meta_changes = {};
			if (dirty & /*allPosts*/ 1) meta_changes.post = /*post*/ ctx[7];
			if (dirty & /*tagsList*/ 8) meta_changes.tagsList = /*tagsList*/ ctx[3];
			if (dirty & /*catgList*/ 16) meta_changes.catgList = /*catgList*/ ctx[4];
			if (dirty & /*complete*/ 32) meta_changes.complete = /*complete*/ ctx[5];
			if (dirty & /*skipbody*/ 64) meta_changes.skipbody = /*skipbody*/ ctx[6];
			meta.$set(meta_changes);
		},
		i(local) {
			if (current) return;
			transition_in(meta.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(meta.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div1);
			destroy_component(meta);
		}
	};
}

// (9:0) {#each allPosts as post, i}
function create_each_block(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*i*/ ctx[9] >= /*postRangeLow*/ ctx[2] && /*i*/ ctx[9] < /*postRangeHigh*/ ctx[1] && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (/*i*/ ctx[9] >= /*postRangeLow*/ ctx[2] && /*i*/ ctx[9] < /*postRangeHigh*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*postRangeLow, postRangeHigh*/ 6) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

function create_fragment(ctx) {
	let each_1_anchor;
	let current;
	let each_value = /*allPosts*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each_1_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*allPosts, tagsList, catgList, complete, skipbody, postRangeLow, postRangeHigh*/ 127) {
				each_value = /*allPosts*/ ctx[0];
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
			destroy_each(each_blocks, detaching);
			if (detaching) detach(each_1_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { allPosts } = $$props,
		{ postRangeHigh } = $$props,
		{ postRangeLow } = $$props,
		{ tagsList } = $$props,
		{ catgList } = $$props;

	let { complete = true } = $$props;
	let { skipbody = false } = $$props;

	$$self.$$set = $$props => {
		if ("allPosts" in $$props) $$invalidate(0, allPosts = $$props.allPosts);
		if ("postRangeHigh" in $$props) $$invalidate(1, postRangeHigh = $$props.postRangeHigh);
		if ("postRangeLow" in $$props) $$invalidate(2, postRangeLow = $$props.postRangeLow);
		if ("tagsList" in $$props) $$invalidate(3, tagsList = $$props.tagsList);
		if ("catgList" in $$props) $$invalidate(4, catgList = $$props.catgList);
		if ("complete" in $$props) $$invalidate(5, complete = $$props.complete);
		if ("skipbody" in $$props) $$invalidate(6, skipbody = $$props.skipbody);
	};

	return [allPosts, postRangeHigh, postRangeLow, tagsList, catgList, complete, skipbody];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			allPosts: 0,
			postRangeHigh: 1,
			postRangeLow: 2,
			tagsList: 3,
			catgList: 4,
			complete: 5,
			skipbody: 6
		});
	}
}

export default Component;