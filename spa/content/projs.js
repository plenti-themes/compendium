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

import Aside from '../components/aside.js';
import Cards from '../components/cards_projs.js';
import Pagination from '../components/paginate.js';

function create_fragment(ctx) {
	let div8;
	let section;
	let div0;
	let t0;
	let div6;
	let div5;
	let div3;
	let div1;
	let cards;
	let t1;
	let div2;
	let pagination;
	let t2;
	let div4;
	let aside;
	let t3;
	let div7;
	let current;

	cards = new Cards({
			props: {
				projArry: /*projArry*/ ctx[9],
				uniqProjs: /*uniqProjs*/ ctx[10],
				allProjs: /*allProjs*/ ctx[7],
				projRangeHigh: /*projRangeHigh*/ ctx[5],
				projRangeLow: /*projRangeLow*/ ctx[6],
				tagsList: /*tagsList*/ ctx[2],
				catgList: /*catgList*/ ctx[3]
			}
		});

	pagination = new Pagination({
			props: {
				content: /*content*/ ctx[1],
				currentPage: /*currentPage*/ ctx[4],
				totalPages: /*totalPages*/ ctx[11]
			}
		});

	aside = new Aside({
			props: {
				allPosts: /*allPosts*/ ctx[0],
				socialLinks: /*socialLinks*/ ctx[8],
				tagsList: /*tagsList*/ ctx[2],
				catgList: /*catgList*/ ctx[3]
			}
		});

	return {
		c() {
			div8 = element("div");
			section = element("section");
			div0 = element("div");
			t0 = space();
			div6 = element("div");
			div5 = element("div");
			div3 = element("div");
			div1 = element("div");
			create_component(cards.$$.fragment);
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
			div8 = claim_element(nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			section = claim_element(div8_nodes, "SECTION", { class: true });
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
			claim_component(cards.$$.fragment, div1_nodes);
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
			div8_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "w-0 md:w-1/12 xl:w-2/12");
			attr(div1, "class", "grid grid-cols-1 gap-6 md:pr-10");
			attr(div2, "class", "row mt-8 md:pr-10 mb-6 sm:mb-0");
			attr(div3, "class", "w-full md:w-9/12 mb-lg-0 px-0");
			attr(div4, "class", "w-full md:w-3/12 mb-lg-0 px-0");
			attr(div5, "class", "row md:flex md:flex-wrap");
			attr(div6, "class", "w-full md:w-10/12 xl:w-8/12 px-2 md:px-0");
			attr(div7, "class", "w-0 md:w-1/12 xl:w-2/12");
			attr(section, "class", "w-full flex flex-wrap items-center justify-between");
			attr(div8, "class", "w-full py-6 sm:py-16");
		},
		m(target, anchor) {
			insert(target, div8, anchor);
			append(div8, section);
			append(section, div0);
			append(section, t0);
			append(section, div6);
			append(div6, div5);
			append(div5, div3);
			append(div3, div1);
			mount_component(cards, div1, null);
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
		p(ctx, [dirty]) {
			const cards_changes = {};
			if (dirty & /*projRangeHigh*/ 32) cards_changes.projRangeHigh = /*projRangeHigh*/ ctx[5];
			if (dirty & /*projRangeLow*/ 64) cards_changes.projRangeLow = /*projRangeLow*/ ctx[6];
			if (dirty & /*tagsList*/ 4) cards_changes.tagsList = /*tagsList*/ ctx[2];
			if (dirty & /*catgList*/ 8) cards_changes.catgList = /*catgList*/ ctx[3];
			cards.$set(cards_changes);
			const pagination_changes = {};
			if (dirty & /*content*/ 2) pagination_changes.content = /*content*/ ctx[1];
			if (dirty & /*currentPage*/ 16) pagination_changes.currentPage = /*currentPage*/ ctx[4];
			pagination.$set(pagination_changes);
			const aside_changes = {};
			if (dirty & /*allPosts*/ 1) aside_changes.allPosts = /*allPosts*/ ctx[0];
			if (dirty & /*tagsList*/ 4) aside_changes.tagsList = /*tagsList*/ ctx[2];
			if (dirty & /*catgList*/ 8) aside_changes.catgList = /*catgList*/ ctx[3];
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
			if (detaching) detach(div8);
			destroy_component(cards);
			destroy_component(pagination);
			destroy_component(aside);
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
		{ tagsList } = $$props,
		{ catgList } = $$props;

	let allProjs = allPosts.filter(content => content.fields?.project != "");
	let socialLinks = idxContent.socialLinks;
	let projsPerPage = idxContent.theme.projsPerPage;
	let projArry = [];
	let projList = [];

	// Sort project posts in ascending order
	allProjs.sort(function (a, b) {
		// var s = new Date(b.fields.dateModified).getTime() - new Date(a.fields.dateModified).getTime();
		var p = a.fields.project.localeCompare(b.fields.project);

		return p == 0 ? a.path.localeCompare(b.path) : p;
	});

	// create array of projects
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

	console.log(totalProjPages);

	$$self.$$set = $$props => {
		if ("idxContent" in $$props) $$invalidate(12, idxContent = $$props.idxContent);
		if ("allPosts" in $$props) $$invalidate(0, allPosts = $$props.allPosts);
		if ("content" in $$props) $$invalidate(1, content = $$props.content);
		if ("tagsList" in $$props) $$invalidate(2, tagsList = $$props.tagsList);
		if ("catgList" in $$props) $$invalidate(3, catgList = $$props.catgList);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*content*/ 2) {
			$: $$invalidate(4, currentPage = content.pager);
		}

		if ($$self.$$.dirty & /*currentPage*/ 16) {
			$: $$invalidate(5, projRangeHigh = currentPage * projsPerPage);
		}

		if ($$self.$$.dirty & /*projRangeHigh*/ 32) {
			$: $$invalidate(6, projRangeLow = projRangeHigh - projsPerPage);
		}
	};

	return [
		allPosts,
		content,
		tagsList,
		catgList,
		currentPage,
		projRangeHigh,
		projRangeLow,
		allProjs,
		socialLinks,
		projArry,
		uniqProjs,
		totalPages,
		idxContent
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			idxContent: 12,
			allPosts: 0,
			content: 1,
			tagsList: 2,
			catgList: 3
		});
	}
}

export default Component;