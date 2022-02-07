/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	add_render_callback,
	append,
	attr,
	check_outros,
	children,
	claim_component,
	claim_element,
	claim_space,
	claim_text,
	create_bidirectional_transition,
	create_component,
	destroy_component,
	destroy_each,
	detach,
	element,
	empty,
	group_outros,
	init,
	insert,
	listen,
	mount_component,
	noop,
	run_all,
	safe_not_equal,
	set_data,
	set_style,
	space,
	text,
	transition_in,
	transition_out
} from '../web_modules/svelte/internal/index.mjs';

import { fade } from '../web_modules/svelte/transition/index.mjs';
import { sortByDate } from '../scripts/sort_by_date.js';
import Hoverable from '../scripts/hoverable.js';
import PostMeta from '../components/post_meta.js';

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	child_ctx[11] = i;
	return child_ctx;
}

// (128:8) {#if featuredPage == "Bleed"}
function create_if_block(ctx) {
	let button;
	let hoverable;
	let current;
	let mounted;
	let dispose;

	hoverable = new Hoverable({
			props: {
				$$slots: {
					default: [
						create_default_slot,
						({ hovering }) => ({ 12: hovering }),
						({ hovering }) => hovering ? 4096 : 0
					]
				},
				$$scope: { ctx }
			}
		});

	return {
		c() {
			button = element("button");
			create_component(hoverable.$$.fragment);
			this.h();
		},
		l(nodes) {
			button = claim_element(nodes, "BUTTON", { type: true, class: true, style: true });
			var button_nodes = children(button);
			claim_component(hoverable.$$.fragment, button_nodes);
			button_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(button, "type", "button");
			attr(button, "class", "absolute svelte-4h1fis");
			set_style(button, "bottom", "5%");
			set_style(button, "left", "50%");
			set_style(button, "transform", "translate(-50%)");
		},
		m(target, anchor) {
			insert(target, button, anchor);
			mount_component(hoverable, button, null);
			current = true;

			if (!mounted) {
				dispose = listen(button, "click", scrollDown);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			const hoverable_changes = {};

			if (dirty & /*$$scope, hovering*/ 12288) {
				hoverable_changes.$$scope = { dirty, ctx };
			}

			hoverable.$set(hoverable_changes);
		},
		i(local) {
			if (current) return;
			transition_in(hoverable.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(hoverable.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(button);
			destroy_component(hoverable);
			mounted = false;
			dispose();
		}
	};
}

// (135:12) <Hoverable let:hovering>
function create_default_slot(ctx) {
	let span;
	let i;
	let span_class_value;

	return {
		c() {
			span = element("span");
			i = element("i");
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			i = claim_element(span_nodes, "I", { class: true });
			children(i).forEach(detach);
			span_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(i, "class", "accent las la-chevron-circle-down text-5xl lg:text-6xl  rounded-full overflow-hidden bg-clip-content opacity-80 hover:opacity-100");
			attr(span, "class", span_class_value = "inline-block " + (/*hovering*/ ctx[12] ? "animate-bounce" : ""));
		},
		m(target, anchor) {
			insert(target, span, anchor);
			append(span, i);
		},
		p(ctx, dirty) {
			if (dirty & /*hovering*/ 4096 && span_class_value !== (span_class_value = "inline-block " + (/*hovering*/ ctx[12] ? "animate-bounce" : ""))) {
				attr(span, "class", span_class_value);
			}
		},
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

// (55:4) {#each sortByDate(allFeatures, "created") as post, i}
function create_each_block(ctx) {
	let div6;
	let div0;
	let img;
	let img_class_value;
	let img_src_value;
	let img_alt_value;
	let t0;
	let div4;
	let div1;
	let t1;
	let div2;
	let h2;
	let a;
	let t2_value = /*post*/ ctx[9].fields.title + "";
	let t2;
	let a_href_value;
	let t3;
	let ul;
	let postmeta;
	let ul_class_value;
	let t4;
	let div3;
	let t5;
	let div5;
	let span;
	let raw_value = /*post*/ ctx[9].fields.image.citation.replaceAll("<a ", "<a target='blank' rel='noopener'") + "";
	let t6;
	let button0;
	let i0;
	let t7;
	let i1;
	let t8;
	let button1;
	let i2;
	let t9;
	let t10;
	let div6_id_value;
	let div6_class_value;
	let current;
	let mounted;
	let dispose;

	postmeta = new PostMeta({
			props: {
				post: /*post*/ ctx[9],
				catgPosts: /*catgPosts*/ ctx[2],
				tagsPosts: /*tagsPosts*/ ctx[3],
				pm: /*pm*/ ctx[5]
			}
		});

	let if_block = /*featuredPage*/ ctx[1] == "Bleed" && create_if_block(ctx);

	return {
		c() {
			div6 = element("div");
			div0 = element("div");
			img = element("img");
			t0 = space();
			div4 = element("div");
			div1 = element("div");
			t1 = space();
			div2 = element("div");
			h2 = element("h2");
			a = element("a");
			t2 = text(t2_value);
			t3 = space();
			ul = element("ul");
			create_component(postmeta.$$.fragment);
			t4 = space();
			div3 = element("div");
			t5 = space();
			div5 = element("div");
			span = element("span");
			t6 = space();
			button0 = element("button");
			i0 = element("i");
			t7 = space();
			i1 = element("i");
			t8 = space();
			button1 = element("button");
			i2 = element("i");
			t9 = space();
			if (if_block) if_block.c();
			t10 = space();
			this.h();
		},
		l(nodes) {
			div6 = claim_element(nodes, "DIV", { id: true, class: true });
			var div6_nodes = children(div6);
			div0 = claim_element(div6_nodes, "DIV", { id: true, class: true });
			var div0_nodes = children(div0);

			img = claim_element(div0_nodes, "IMG", {
				class: true,
				style: true,
				src: true,
				alt: true
			});

			div0_nodes.forEach(detach);
			t0 = claim_space(div6_nodes);
			div4 = claim_element(div6_nodes, "DIV", { id: true, class: true });
			var div4_nodes = children(div4);
			div1 = claim_element(div4_nodes, "DIV", { class: true });
			children(div1).forEach(detach);
			t1 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			h2 = claim_element(div2_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			a = claim_element(h2_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t2 = claim_text(a_nodes, t2_value);
			a_nodes.forEach(detach);
			h2_nodes.forEach(detach);
			t3 = claim_space(div2_nodes);
			ul = claim_element(div2_nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			claim_component(postmeta.$$.fragment, ul_nodes);
			ul_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t4 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			children(div3).forEach(detach);
			div4_nodes.forEach(detach);
			t5 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			span = claim_element(div5_nodes, "SPAN", {});
			var span_nodes = children(span);
			span_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t6 = claim_space(div6_nodes);
			button0 = claim_element(div6_nodes, "BUTTON", { class: true, style: true });
			var button0_nodes = children(button0);
			i0 = claim_element(button0_nodes, "I", { class: true });
			children(i0).forEach(detach);
			t7 = claim_space(button0_nodes);
			i1 = claim_element(button0_nodes, "I", { class: true });
			children(i1).forEach(detach);
			button0_nodes.forEach(detach);
			t8 = claim_space(div6_nodes);
			button1 = claim_element(div6_nodes, "BUTTON", { type: true, class: true, style: true });
			var button1_nodes = children(button1);
			i2 = claim_element(button1_nodes, "I", { class: true });
			children(i2).forEach(detach);
			button1_nodes.forEach(detach);
			t9 = claim_space(div6_nodes);
			if (if_block) if_block.l(div6_nodes);
			t10 = claim_space(div6_nodes);
			div6_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(img, "class", img_class_value = "w-full " + (/*featuredPage*/ ctx[1] == "Frame"
			? "rounded-lg object-cover h-screen-70"
			: "object-cover h-screen"));

			set_style(img, "filter", "brightness(60%)");
			if (img.src !== (img_src_value = "assets/posts/" + /*post*/ ctx[9].fields.image.src)) attr(img, "src", img_src_value);
			attr(img, "alt", img_alt_value = /*post*/ ctx[9].fields.image.alt);
			attr(div0, "id", "featureImage");
			attr(div0, "class", "w-full");
			attr(div1, "class", "col-lg-2");
			attr(a, "href", a_href_value = /*post*/ ctx[9].path);
			attr(a, "class", " svelte-4h1fis");
			attr(h2, "class", "w-full text-center pb-3 md:pb-4 lg:pb-5 text-3xl sm:text-4xl md:text-5xl");

			attr(ul, "class", ul_class_value = "flex flex-wrap items-center justify-center text-sm md:text-md lg:text-lg " + (/*featuredPage*/ ctx[1] == "Frame"
			? "md:mb-10 sm:mb-5"
			: "mb-15") + " svelte-4h1fis");

			attr(div2, "class", "col-lg-8");
			attr(div3, "class", "col-lg-2");
			attr(div4, "id", "featureOverlayText");
			attr(div4, "class", "feature w-full absolute row m-0 px-16 svelte-4h1fis");
			attr(div5, "class", "citation text-meta absolute svelte-4h1fis");
			attr(i0, "class", "");
			attr(i1, "class", "accent las la-chevron-circle-left text-5xl lg:text-6xl  rounded-full overflow-hidden bg-clip-content opacity-80 hover:opacity-100");
			attr(button0, "class", "absolute m-2 left-2 svelte-4h1fis");
			set_style(button0, "top", "50%");
			attr(i2, "class", "accent las la-chevron-circle-right text-5xl lg:text-6xl  rounded-full overflow-hidden bg-clip-content opacity-80 hover:opacity-100");
			attr(button1, "type", "button");
			attr(button1, "class", "absolute m-2 right-2 svelte-4h1fis");
			set_style(button1, "top", "50%");
			attr(div6, "id", div6_id_value = /*i*/ ctx[11]);
			attr(div6, "class", div6_class_value = "w-full relative overflow-hidden \n\t\t    " + (/*featuredPage*/ ctx[1] == "Frame" ? " rounded-lg" : "") + " \n\t\t    " + (/*i*/ ctx[11] == /*featureIdx*/ ctx[4] ? "" : "hidden"));
		},
		m(target, anchor) {
			insert(target, div6, anchor);
			append(div6, div0);
			append(div0, img);
			append(div6, t0);
			append(div6, div4);
			append(div4, div1);
			append(div4, t1);
			append(div4, div2);
			append(div2, h2);
			append(h2, a);
			append(a, t2);
			append(div2, t3);
			append(div2, ul);
			mount_component(postmeta, ul, null);
			append(div4, t4);
			append(div4, div3);
			append(div6, t5);
			append(div6, div5);
			append(div5, span);
			span.innerHTML = raw_value;
			append(div6, t6);
			append(div6, button0);
			append(button0, i0);
			append(button0, t7);
			append(button0, i1);
			append(div6, t8);
			append(div6, button1);
			append(button1, i2);
			append(div6, t9);
			if (if_block) if_block.m(div6, null);
			append(div6, t10);
			current = true;

			if (!mounted) {
				dispose = [
					listen(button0, "click", /*clickPrev*/ ctx[6]),
					listen(button1, "click", /*clickNext*/ ctx[7])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (!current || dirty & /*featuredPage*/ 2 && img_class_value !== (img_class_value = "w-full " + (/*featuredPage*/ ctx[1] == "Frame"
			? "rounded-lg object-cover h-screen-70"
			: "object-cover h-screen"))) {
				attr(img, "class", img_class_value);
			}

			if (!current || dirty & /*allFeatures*/ 1 && img.src !== (img_src_value = "assets/posts/" + /*post*/ ctx[9].fields.image.src)) {
				attr(img, "src", img_src_value);
			}

			if (!current || dirty & /*allFeatures*/ 1 && img_alt_value !== (img_alt_value = /*post*/ ctx[9].fields.image.alt)) {
				attr(img, "alt", img_alt_value);
			}

			if ((!current || dirty & /*allFeatures*/ 1) && t2_value !== (t2_value = /*post*/ ctx[9].fields.title + "")) set_data(t2, t2_value);

			if (!current || dirty & /*allFeatures*/ 1 && a_href_value !== (a_href_value = /*post*/ ctx[9].path)) {
				attr(a, "href", a_href_value);
			}

			const postmeta_changes = {};
			if (dirty & /*allFeatures*/ 1) postmeta_changes.post = /*post*/ ctx[9];
			if (dirty & /*catgPosts*/ 4) postmeta_changes.catgPosts = /*catgPosts*/ ctx[2];
			if (dirty & /*tagsPosts*/ 8) postmeta_changes.tagsPosts = /*tagsPosts*/ ctx[3];
			postmeta.$set(postmeta_changes);

			if (!current || dirty & /*featuredPage*/ 2 && ul_class_value !== (ul_class_value = "flex flex-wrap items-center justify-center text-sm md:text-md lg:text-lg " + (/*featuredPage*/ ctx[1] == "Frame"
			? "md:mb-10 sm:mb-5"
			: "mb-15") + " svelte-4h1fis")) {
				attr(ul, "class", ul_class_value);
			}

			if ((!current || dirty & /*allFeatures*/ 1) && raw_value !== (raw_value = /*post*/ ctx[9].fields.image.citation.replaceAll("<a ", "<a target='blank' rel='noopener'") + "")) span.innerHTML = raw_value;;

			if (/*featuredPage*/ ctx[1] == "Bleed") {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*featuredPage*/ 2) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(div6, t10);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}

			if (!current || dirty & /*featuredPage, featureIdx*/ 18 && div6_class_value !== (div6_class_value = "w-full relative overflow-hidden \n\t\t    " + (/*featuredPage*/ ctx[1] == "Frame" ? " rounded-lg" : "") + " \n\t\t    " + (/*i*/ ctx[11] == /*featureIdx*/ ctx[4] ? "" : "hidden"))) {
				attr(div6, "class", div6_class_value);
			}
		},
		i(local) {
			if (current) return;
			transition_in(postmeta.$$.fragment, local);
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(postmeta.$$.fragment, local);
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div6);
			destroy_component(postmeta);
			if (if_block) if_block.d();
			mounted = false;
			run_all(dispose);
		}
	};
}

// (53:0) {#key featureIdx}
function create_key_block(ctx) {
	let div;
	let div_transition;
	let current;
	let each_value = sortByDate(/*allFeatures*/ ctx[0], "created");
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach);
		},
		m(target, anchor) {
			insert(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*featuredPage, featureIdx, scrollDown, hovering, clickNext, clickPrev, sortByDate, allFeatures, catgPosts, tagsPosts, pm*/ 4351) {
				each_value = sortByDate(/*allFeatures*/ ctx[0], "created");
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
						each_blocks[i].m(div, null);
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

			add_render_callback(() => {
				if (!div_transition) div_transition = create_bidirectional_transition(div, fade, {}, true);
				div_transition.run(1);
			});

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			if (!div_transition) div_transition = create_bidirectional_transition(div, fade, {}, false);
			div_transition.run(0);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_each(each_blocks, detaching);
			if (detaching && div_transition) div_transition.end();
		}
	};
}

function create_fragment(ctx) {
	let previous_key = /*featureIdx*/ ctx[4];
	let key_block_anchor;
	let current;
	let key_block = create_key_block(ctx);

	return {
		c() {
			key_block.c();
			key_block_anchor = empty();
		},
		l(nodes) {
			key_block.l(nodes);
			key_block_anchor = empty();
		},
		m(target, anchor) {
			key_block.m(target, anchor);
			insert(target, key_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*featureIdx*/ 16 && safe_not_equal(previous_key, previous_key = /*featureIdx*/ ctx[4])) {
				group_outros();
				transition_out(key_block, 1, 1, noop);
				check_outros();
				key_block = create_key_block(ctx);
				key_block.c();
				transition_in(key_block);
				key_block.m(key_block_anchor.parentNode, key_block_anchor);
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
			if (detaching) detach(key_block_anchor);
			key_block.d(detaching);
		}
	};
}

function scrollDown() {
	window.scrollTo({ top: 800, left: 0, behavior: "smooth" });
}

function instance($$self, $$props, $$invalidate) {
	let maxFeatures;

	let { allFeatures } = $$props,
		{ featuredPage } = $$props,
		{ catgPosts } = $$props,
		{ tagsPosts } = $$props;

	// Post Meta configuration values
	const pm = {
		author: true,
		date_modified: true,
		date_created: true,
		description: false,
		catg_tags: true,
		continue: false,
		feature: true
	};

	let featureIdx = 0;

	function clickPrev() {
		if (featureIdx == 0) {
			// block of code to be executed if the condition is true
			$$invalidate(4, featureIdx = maxFeatures - 1);
		} else {
			// block of code to be executed if the condition is false
			$$invalidate(4, featureIdx = (featureIdx - 1) % maxFeatures);
		}
	}

	function clickNext() {
		if (featureIdx == maxFeatures) {
			// block of code to be executed if the condition is true
			$$invalidate(4, featureIdx = 0);
		} else {
			// block of code to be executed if the condition is false
			$$invalidate(4, featureIdx = (featureIdx + 1) % maxFeatures);
		}
	}

	$$self.$$set = $$props => {
		if ("allFeatures" in $$props) $$invalidate(0, allFeatures = $$props.allFeatures);
		if ("featuredPage" in $$props) $$invalidate(1, featuredPage = $$props.featuredPage);
		if ("catgPosts" in $$props) $$invalidate(2, catgPosts = $$props.catgPosts);
		if ("tagsPosts" in $$props) $$invalidate(3, tagsPosts = $$props.tagsPosts);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*allFeatures*/ 1) {
			$: maxFeatures = allFeatures.length;
		}
	};

	return [
		allFeatures,
		featuredPage,
		catgPosts,
		tagsPosts,
		featureIdx,
		pm,
		clickPrev,
		clickNext
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			allFeatures: 0,
			featuredPage: 1,
			catgPosts: 2,
			tagsPosts: 3
		});
	}
}

export default Component;