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
	create_component,
	destroy_component,
	detach,
	element,
	empty,
	group_outros,
	init,
	insert,
	mount_component,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from '../web_modules/svelte/internal/index.mjs';

import Aside from '../components/aside.js';
import Groups from '../components/cardsProjects.js';
import Pagination from '../components/paginate.js';

function create_if_block(ctx) {
	let section;
	let div0;
	let t0;
	let div6;
	let div5;
	let div3;
	let div1;
	let groups;
	let t1;
	let div2;
	let pagination;
	let t2;
	let div4;
	let aside;
	let t3;
	let div7;
	let current;

	groups = new Groups({
			props: {
				projArry: /*projArry*/ ctx[8],
				uniqProjs: /*uniqProjs*/ ctx[9],
				allProjs: /*allProjs*/ ctx[6],
				projRangeHigh: /*projRangeHigh*/ ctx[3],
				projRangeLow: /*projRangeLow*/ ctx[4]
			}
		});

	pagination = new Pagination({
			props: {
				currentPage: /*currentPage*/ ctx[2],
				totalPages: /*totalPages*/ ctx[10],
				page: /*page*/ ctx[5],
				totalProjPages: /*totalProjPages*/ ctx[11]
			}
		});

	aside = new Aside({
			props: {
				allPosts: /*allPosts*/ ctx[0],
				socialLinks: /*socialLinks*/ ctx[7]
			}
		});

	return {
		c() {
			section = element("section");
			div0 = element("div");
			t0 = space();
			div6 = element("div");
			div5 = element("div");
			div3 = element("div");
			div1 = element("div");
			create_component(groups.$$.fragment);
			t1 = space();
			div2 = element("div");
			create_component(pagination.$$.fragment);
			t2 = space();
			div4 = element("div");
			create_component(aside.$$.fragment);
			t3 = space();
			div7 = element("div");
			this.h();
		},
		l(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div0 = claim_element(section_nodes, "DIV", { class: true });
			children(div0).forEach(detach);
			t0 = claim_space(section_nodes);
			div6 = claim_element(section_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div3 = claim_element(div5_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div1 = claim_element(div3_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(groups.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach);
			t1 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			claim_component(pagination.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t2 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			claim_component(aside.$$.fragment, div4_nodes);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t3 = claim_space(section_nodes);
			div7 = claim_element(section_nodes, "DIV", { class: true });
			children(div7).forEach(detach);
			section_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "w-0 md:w-1/12 xl:w-2/12");
			attr(div1, "class", "grid grid-cols-1 gap-6 md:pr-10");
			attr(div2, "class", "row mt-8 md:pr-10");
			attr(div3, "class", "w-full md:w-9/12 mb-5 mb-lg-0 px-0");
			attr(div4, "class", "w-full md:w-3/12 mb-5 mb-lg-0 px-0");
			attr(div5, "class", "row md:flex md:flex-wrap");
			attr(div6, "class", "w-full md:w-10/12 xl:w-8/12 px-2 md:px-0");
			attr(div7, "class", "w-0 md:w-1/12 xl:w-2/12");
			attr(section, "class", "w-full flex flex-wrap items-center justify-between  py-6 sm:py-16");
		},
		m(target, anchor) {
			insert(target, section, anchor);
			append(section, div0);
			append(section, t0);
			append(section, div6);
			append(div6, div5);
			append(div5, div3);
			append(div3, div1);
			mount_component(groups, div1, null);
			append(div3, t1);
			append(div3, div2);
			mount_component(pagination, div2, null);
			append(div5, t2);
			append(div5, div4);
			mount_component(aside, div4, null);
			append(section, t3);
			append(section, div7);
			current = true;
		},
		p(ctx, dirty) {
			const groups_changes = {};
			if (dirty & /*projRangeHigh*/ 8) groups_changes.projRangeHigh = /*projRangeHigh*/ ctx[3];
			if (dirty & /*projRangeLow*/ 16) groups_changes.projRangeLow = /*projRangeLow*/ ctx[4];
			groups.$set(groups_changes);
			const pagination_changes = {};
			if (dirty & /*currentPage*/ 4) pagination_changes.currentPage = /*currentPage*/ ctx[2];
			pagination.$set(pagination_changes);
			const aside_changes = {};
			if (dirty & /*allPosts*/ 1) aside_changes.allPosts = /*allPosts*/ ctx[0];
			aside.$set(aside_changes);
		},
		i(local) {
			if (current) return;
			transition_in(groups.$$.fragment, local);
			transition_in(pagination.$$.fragment, local);
			transition_in(aside.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(groups.$$.fragment, local);
			transition_out(pagination.$$.fragment, local);
			transition_out(aside.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(section);
			destroy_component(groups);
			destroy_component(pagination);
			destroy_component(aside);
		}
	};
}

function create_fragment(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*enabled*/ ctx[1] && create_if_block(ctx);

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
		p(ctx, [dirty]) {
			if (/*enabled*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*enabled*/ 2) {
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

function instance($$self, $$props, $$invalidate) {
	let currentPage;
	let projRangeHigh;
	let projRangeLow;

	let { idxContent } = $$props,
		{ allPosts } = $$props,
		{ content } = $$props,
		{ enabled } = $$props;

	let page = content.fields.page;
	let allProjs = allPosts.filter(content => content.fields?.project != "");
	let socialLinks = idxContent.socialLinks;
	let projsPerPage = idxContent.theme.projsPerPage;
	let projArry = [];
	let projList = [];

	allProjs.forEach(element => {
		projArry.push({
			proj: element.fields.project,
			title: element.fields.title
		});

		projList.push(element.fields.project);
	});

	let uniqProjs = [...new Set(projList)];
	let totalProjs = uniqProjs.length;
	let totalPages = Math.ceil(totalProjs / projsPerPage);

	// Setting variable for pagination logic.
	let totalProjPages = totalPages;

	$$self.$$set = $$props => {
		if ("idxContent" in $$props) $$invalidate(12, idxContent = $$props.idxContent);
		if ("allPosts" in $$props) $$invalidate(0, allPosts = $$props.allPosts);
		if ("content" in $$props) $$invalidate(13, content = $$props.content);
		if ("enabled" in $$props) $$invalidate(1, enabled = $$props.enabled);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*content*/ 8192) {
			$: $$invalidate(2, currentPage = content.pager);
		}

		if ($$self.$$.dirty & /*currentPage*/ 4) {
			$: $$invalidate(3, projRangeHigh = currentPage * projsPerPage);
		}

		if ($$self.$$.dirty & /*projRangeHigh*/ 8) {
			$: $$invalidate(4, projRangeLow = projRangeHigh - projsPerPage);
		}
	};

	return [
		allPosts,
		enabled,
		currentPage,
		projRangeHigh,
		projRangeLow,
		page,
		allProjs,
		socialLinks,
		projArry,
		uniqProjs,
		totalPages,
		totalProjPages,
		idxContent,
		content
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			idxContent: 12,
			allPosts: 0,
			content: 13,
			enabled: 1
		});
	}
}

export default Component;