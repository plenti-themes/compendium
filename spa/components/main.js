/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_component,
	claim_element,
	claim_space,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from '../web_modules/svelte/internal/index.mjs';

import Aside from './aside.js';

// Cards component for all posts.
import Cards from './cards_posts.js';

import Pagination from './paginate.js';

function create_fragment(ctx) {
	let section;
	let div4;
	let div2;
	let div0;
	let cards;
	let t0;
	let div1;
	let pagination;
	let t1;
	let div3;
	let aside;
	let current;

	cards = new Cards({
			props: {
				allPosts: /*allPosts*/ ctx[0],
				postRangeHigh: /*postRangeHigh*/ ctx[3],
				postRangeLow: /*postRangeLow*/ ctx[4],
				tagsList: /*tagsList*/ ctx[1],
				catgList: /*catgList*/ ctx[2]
			}
		});

	pagination = new Pagination({
			props: {
				currentPage: /*currentPage*/ ctx[5],
				totalPages: /*totalPages*/ ctx[6]
			}
		});

	aside = new Aside({
			props: {
				allPosts: /*allPosts*/ ctx[0],
				socialLinks: /*socialLinks*/ ctx[7],
				tagsList: /*tagsList*/ ctx[1],
				catgList: /*catgList*/ ctx[2]
			}
		});

	return {
		c() {
			section = element("section");
			div4 = element("div");
			div2 = element("div");
			div0 = element("div");
			create_component(cards.$$.fragment);
			t0 = space();
			div1 = element("div");
			create_component(pagination.$$.fragment);
			t1 = space();
			div3 = element("div");
			create_component(aside.$$.fragment);
			this.h();
		},
		l(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div4 = claim_element(section_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div2 = claim_element(div4_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(cards.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach);
			t0 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(pagination.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t1 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			claim_component(aside.$$.fragment, div3_nodes);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			section_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "grid grid-cols-1 lg:grid-cols-2 gap-6 md:pr-10");
			attr(div1, "class", "row mt-8 md:pr-10 mb-6 sm:mb-0");
			attr(div2, "class", "w-full md:w-9/12 mb-lg-0 px-0");
			attr(div3, "class", "w-full md:w-3/12 mb-lg-0 px-0");
			attr(div4, "class", "row md:flex md:flex-wrap");
			attr(section, "class", "mt-6 sm:mt-16");
		},
		m(target, anchor) {
			insert(target, section, anchor);
			append(section, div4);
			append(div4, div2);
			append(div2, div0);
			mount_component(cards, div0, null);
			append(div2, t0);
			append(div2, div1);
			mount_component(pagination, div1, null);
			append(div4, t1);
			append(div4, div3);
			mount_component(aside, div3, null);
			current = true;
		},
		p(ctx, [dirty]) {
			const cards_changes = {};
			if (dirty & /*allPosts*/ 1) cards_changes.allPosts = /*allPosts*/ ctx[0];
			if (dirty & /*postRangeHigh*/ 8) cards_changes.postRangeHigh = /*postRangeHigh*/ ctx[3];
			if (dirty & /*postRangeLow*/ 16) cards_changes.postRangeLow = /*postRangeLow*/ ctx[4];
			if (dirty & /*tagsList*/ 2) cards_changes.tagsList = /*tagsList*/ ctx[1];
			if (dirty & /*catgList*/ 4) cards_changes.catgList = /*catgList*/ ctx[2];
			cards.$set(cards_changes);
			const pagination_changes = {};
			if (dirty & /*currentPage*/ 32) pagination_changes.currentPage = /*currentPage*/ ctx[5];
			if (dirty & /*totalPages*/ 64) pagination_changes.totalPages = /*totalPages*/ ctx[6];
			pagination.$set(pagination_changes);
			const aside_changes = {};
			if (dirty & /*allPosts*/ 1) aside_changes.allPosts = /*allPosts*/ ctx[0];
			if (dirty & /*tagsList*/ 2) aside_changes.tagsList = /*tagsList*/ ctx[1];
			if (dirty & /*catgList*/ 4) aside_changes.catgList = /*catgList*/ ctx[2];
			aside.$set(aside_changes);
		},
		i(local) {
			if (current) return;
			transition_in(cards.$$.fragment, local);
			transition_in(pagination.$$.fragment, local);
			transition_in(aside.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(cards.$$.fragment, local);
			transition_out(pagination.$$.fragment, local);
			transition_out(aside.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(section);
			destroy_component(cards);
			destroy_component(pagination);
			destroy_component(aside);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { allPosts } = $$props,
		{ content } = $$props,
		{ tagsList } = $$props,
		{ catgList } = $$props;

	let { postRangeHigh } = $$props,
		{ postRangeLow } = $$props,
		{ currentPage } = $$props,
		{ totalPages } = $$props;

	let socialLinks = content.fields.socialLinks;

	$$self.$$set = $$props => {
		if ("allPosts" in $$props) $$invalidate(0, allPosts = $$props.allPosts);
		if ("content" in $$props) $$invalidate(8, content = $$props.content);
		if ("tagsList" in $$props) $$invalidate(1, tagsList = $$props.tagsList);
		if ("catgList" in $$props) $$invalidate(2, catgList = $$props.catgList);
		if ("postRangeHigh" in $$props) $$invalidate(3, postRangeHigh = $$props.postRangeHigh);
		if ("postRangeLow" in $$props) $$invalidate(4, postRangeLow = $$props.postRangeLow);
		if ("currentPage" in $$props) $$invalidate(5, currentPage = $$props.currentPage);
		if ("totalPages" in $$props) $$invalidate(6, totalPages = $$props.totalPages);
	};

	return [
		allPosts,
		tagsList,
		catgList,
		postRangeHigh,
		postRangeLow,
		currentPage,
		totalPages,
		socialLinks,
		content
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			allPosts: 0,
			content: 8,
			tagsList: 1,
			catgList: 2,
			postRangeHigh: 3,
			postRangeLow: 4,
			currentPage: 5,
			totalPages: 6
		});
	}
}

export default Component;