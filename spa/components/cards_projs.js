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

import PostMeta from './post_meta.js';

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	child_ctx[9] = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[10] = list[i];
	child_ctx[12] = i;
	return child_ctx;
}

// (10:2) {#if i >= projRangeLow && i < projRangeHigh}
function create_if_block(ctx) {
	let div2;
	let div1;
	let div0;
	let t;
	let current;
	let each_value_1 = /*proj*/ ctx[7].posts;
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t = space();
			this.h();
		},
		l(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div0_nodes);
			}

			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t = claim_space(div2_nodes);
			div2_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "mx-2 md:mx-6 mb-2 md:mb-3 my-1");
			attr(div1, "class", "flex-none lg:flex");
			attr(div2, "class", "rounded-xl overflow-hidden shadow-md bg-secondary");
		},
		m(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div1);
			append(div1, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}

			append(div2, t);
			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*projList, catgPosts, tagsPosts, complete, skipbody, projTLDR*/ 121) {
				each_value_1 = /*proj*/ ctx[7].posts;
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(div0, null);
					}
				}

				group_outros();

				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value_1.length; i += 1) {
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
			if (detaching) detach(div2);
			destroy_each(each_blocks, detaching);
		}
	};
}

// (16:12) {#if p == 0}
function create_if_block_1(ctx) {
	let h2;
	let span;
	let t0;
	let t1;
	let t2_value = /*proj*/ ctx[7].name + "";
	let t2;
	let t3;
	let if_block_anchor;
	let if_block = projTLDR && create_if_block_2(ctx);

	return {
		c() {
			h2 = element("h2");
			span = element("span");
			t0 = text("Project:");
			t1 = space();
			t2 = text(t2_value);
			t3 = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
			this.h();
		},
		l(nodes) {
			h2 = claim_element(nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			span = claim_element(h2_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t0 = claim_text(span_nodes, "Project:");
			span_nodes.forEach(detach);
			t1 = claim_space(h2_nodes);
			t2 = claim_text(h2_nodes, t2_value);
			h2_nodes.forEach(detach);
			t3 = claim_space(nodes);
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
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
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*projList*/ 1 && t2_value !== (t2_value = /*proj*/ ctx[7].name + "")) set_data(t2, t2_value);
			if (projTLDR) if_block.p(ctx, dirty);
		},
		d(detaching) {
			if (detaching) detach(h2);
			if (detaching) detach(t3);
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (22:14) {#if projTLDR}
function create_if_block_2(ctx) {
	let p;
	let t_value = /*post*/ ctx[10].fields.articleBody.substring(/*post*/ ctx[10].fields.articleBody.indexOf("<p>") + 3, /*post*/ ctx[10].fields.articleBody.indexOf("<h2")) + "";
	let t;

	return {
		c() {
			p = element("p");
			t = text(t_value);
			this.h();
		},
		l(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t = claim_text(p_nodes, t_value);
			p_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(p, "class", "text-base mb-5");
		},
		m(target, anchor) {
			insert(target, p, anchor);
			append(p, t);
		},
		p(ctx, dirty) {
			if (dirty & /*projList*/ 1 && t_value !== (t_value = /*post*/ ctx[10].fields.articleBody.substring(/*post*/ ctx[10].fields.articleBody.indexOf("<p>") + 3, /*post*/ ctx[10].fields.articleBody.indexOf("<h2")) + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(p);
		}
	};
}

// (14:10) {#each proj.posts as post, p}
function create_each_block_1(ctx) {
	let t0;
	let div1;
	let img;
	let img_src_value;
	let img_alt_value;
	let t1;
	let div0;
	let h3;
	let a;
	let t2_value = /*post*/ ctx[10].fields.title + "";
	let t2;
	let a_href_value;
	let t3;
	let ul;
	let li;
	let i;
	let t4;
	let postmeta;
	let t5;
	let current;
	let if_block = /*p*/ ctx[12] == 0 && create_if_block_1(ctx);

	postmeta = new PostMeta({
			props: {
				post: /*post*/ ctx[10],
				catgPosts: /*catgPosts*/ ctx[3],
				tagsPosts: /*tagsPosts*/ ctx[4],
				complete: /*complete*/ ctx[5],
				skipbody: /*skipbody*/ ctx[6]
			}
		});

	return {
		c() {
			if (if_block) if_block.c();
			t0 = space();
			div1 = element("div");
			img = element("img");
			t1 = space();
			div0 = element("div");
			h3 = element("h3");
			a = element("a");
			t2 = text(t2_value);
			t3 = space();
			ul = element("ul");
			li = element("li");
			i = element("i");
			t4 = space();
			create_component(postmeta.$$.fragment);
			t5 = space();
			this.h();
		},
		l(nodes) {
			if (if_block) if_block.l(nodes);
			t0 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			img = claim_element(div1_nodes, "IMG", { class: true, src: true, alt: true });
			t1 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h3 = claim_element(div0_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			a = claim_element(h3_nodes, "A", { href: true });
			var a_nodes = children(a);
			t2 = claim_text(a_nodes, t2_value);
			a_nodes.forEach(detach);
			h3_nodes.forEach(detach);
			t3 = claim_space(div0_nodes);
			ul = claim_element(div0_nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			li = claim_element(ul_nodes, "LI", { class: true });
			var li_nodes = children(li);
			i = claim_element(li_nodes, "I", { class: true });
			children(i).forEach(detach);
			li_nodes.forEach(detach);
			t4 = claim_space(ul_nodes);
			claim_component(postmeta.$$.fragment, ul_nodes);
			ul_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t5 = claim_space(div1_nodes);
			div1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(img, "class", "inline-block object-cover rounded-md w-28 h-28");
			if (img.src !== (img_src_value = "assets/posts/" + /*post*/ ctx[10].fields.image.src)) attr(img, "src", img_src_value);
			attr(img, "alt", img_alt_value = /*post*/ ctx[10].fields.image.alt);
			attr(a, "href", a_href_value = /*post*/ ctx[10].path);
			attr(h3, "class", "header mt-0 mb-1 text-xl md:text-2xl");
			attr(i, "class", "las la-user-astronaut text-lg");
			attr(li, "class", "mx-0 -mt-1 text-meta inline-flex");
			attr(ul, "class", "text-meta flex flex-wrap");
			attr(div0, "class", "inline-block ml-2");
			attr(div1, "class", "flex items-center mb-3");
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, t0, anchor);
			insert(target, div1, anchor);
			append(div1, img);
			append(div1, t1);
			append(div1, div0);
			append(div0, h3);
			append(h3, a);
			append(a, t2);
			append(div0, t3);
			append(div0, ul);
			append(ul, li);
			append(li, i);
			append(ul, t4);
			mount_component(postmeta, ul, null);
			append(div1, t5);
			current = true;
		},
		p(ctx, dirty) {
			if (/*p*/ ctx[12] == 0) if_block.p(ctx, dirty);

			if (!current || dirty & /*projList*/ 1 && img.src !== (img_src_value = "assets/posts/" + /*post*/ ctx[10].fields.image.src)) {
				attr(img, "src", img_src_value);
			}

			if (!current || dirty & /*projList*/ 1 && img_alt_value !== (img_alt_value = /*post*/ ctx[10].fields.image.alt)) {
				attr(img, "alt", img_alt_value);
			}

			if ((!current || dirty & /*projList*/ 1) && t2_value !== (t2_value = /*post*/ ctx[10].fields.title + "")) set_data(t2, t2_value);

			if (!current || dirty & /*projList*/ 1 && a_href_value !== (a_href_value = /*post*/ ctx[10].path)) {
				attr(a, "href", a_href_value);
			}

			const postmeta_changes = {};
			if (dirty & /*projList*/ 1) postmeta_changes.post = /*post*/ ctx[10];
			if (dirty & /*catgPosts*/ 8) postmeta_changes.catgPosts = /*catgPosts*/ ctx[3];
			if (dirty & /*tagsPosts*/ 16) postmeta_changes.tagsPosts = /*tagsPosts*/ ctx[4];
			if (dirty & /*complete*/ 32) postmeta_changes.complete = /*complete*/ ctx[5];
			if (dirty & /*skipbody*/ 64) postmeta_changes.skipbody = /*skipbody*/ ctx[6];
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
			if (if_block) if_block.d(detaching);
			if (detaching) detach(t0);
			if (detaching) detach(div1);
			destroy_component(postmeta);
		}
	};
}

// (9:0) {#each projList as proj, i}
function create_each_block(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*i*/ ctx[9] >= /*projRangeLow*/ ctx[2] && /*i*/ ctx[9] < /*projRangeHigh*/ ctx[1] && create_if_block(ctx);

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
			if (/*i*/ ctx[9] >= /*projRangeLow*/ ctx[2] && /*i*/ ctx[9] < /*projRangeHigh*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*projRangeLow, projRangeHigh*/ 6) {
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
	let each_value = /*projList*/ ctx[0];
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
			if (dirty & /*projList, catgPosts, tagsPosts, complete, skipbody, projTLDR, projRangeLow, projRangeHigh*/ 127) {
				each_value = /*projList*/ ctx[0];
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

let projTLDR = false;

function instance($$self, $$props, $$invalidate) {
	let { projList } = $$props,
		{ projRangeHigh } = $$props,
		{ projRangeLow } = $$props,
		{ catgPosts } = $$props,
		{ tagsPosts } = $$props;

	let { complete = true } = $$props;
	let { skipbody = true } = $$props;

	$$self.$$set = $$props => {
		if ("projList" in $$props) $$invalidate(0, projList = $$props.projList);
		if ("projRangeHigh" in $$props) $$invalidate(1, projRangeHigh = $$props.projRangeHigh);
		if ("projRangeLow" in $$props) $$invalidate(2, projRangeLow = $$props.projRangeLow);
		if ("catgPosts" in $$props) $$invalidate(3, catgPosts = $$props.catgPosts);
		if ("tagsPosts" in $$props) $$invalidate(4, tagsPosts = $$props.tagsPosts);
		if ("complete" in $$props) $$invalidate(5, complete = $$props.complete);
		if ("skipbody" in $$props) $$invalidate(6, skipbody = $$props.skipbody);
	};

	return [
		projList,
		projRangeHigh,
		projRangeLow,
		catgPosts,
		tagsPosts,
		complete,
		skipbody
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			projList: 0,
			projRangeHigh: 1,
			projRangeLow: 2,
			catgPosts: 3,
			tagsPosts: 4,
			complete: 5,
			skipbody: 6
		});
	}
}

export default Component;