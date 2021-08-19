/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	attr,
	check_outros,
	children,
	claim_component,
	claim_element,
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
	transition_in,
	transition_out
} from '../web_modules/svelte/internal/index.mjs';

function create_if_block(ctx) {
	let div;
	let switch_instance;
	let current;
	var switch_value = /*getComponent*/ ctx[13]();

	function switch_props(ctx) {
		return {
			props: {
				idxContent: /*idxContent*/ ctx[0],
				content: /*content*/ ctx[2],
				allPosts: /*allPosts*/ ctx[1],
				title: /*title*/ ctx[4],
				image: /*image*/ ctx[5],
				hero: /*hero*/ ctx[6],
				splash: /*splash*/ ctx[7],
				articleBody: /*articleBody*/ ctx[8],
				tagsMap: /*tagsMap*/ ctx[9],
				catgsMap: /*catgsMap*/ ctx[10],
				tagsList: /*tagsList*/ ctx[11],
				catgList: /*catgList*/ ctx[12]
			}
		};
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props(ctx));
	}

	return {
		c() {
			div = element("div");
			if (switch_instance) create_component(switch_instance.$$.fragment);
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (switch_instance) claim_component(switch_instance.$$.fragment, div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", "w-full py-6 sm:py-16");
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (switch_instance) {
				mount_component(switch_instance, div, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			const switch_instance_changes = {};
			if (dirty & /*idxContent*/ 1) switch_instance_changes.idxContent = /*idxContent*/ ctx[0];
			if (dirty & /*content*/ 4) switch_instance_changes.content = /*content*/ ctx[2];
			if (dirty & /*allPosts*/ 2) switch_instance_changes.allPosts = /*allPosts*/ ctx[1];
			if (dirty & /*title*/ 16) switch_instance_changes.title = /*title*/ ctx[4];
			if (dirty & /*image*/ 32) switch_instance_changes.image = /*image*/ ctx[5];
			if (dirty & /*hero*/ 64) switch_instance_changes.hero = /*hero*/ ctx[6];
			if (dirty & /*splash*/ 128) switch_instance_changes.splash = /*splash*/ ctx[7];
			if (dirty & /*articleBody*/ 256) switch_instance_changes.articleBody = /*articleBody*/ ctx[8];
			if (dirty & /*tagsMap*/ 512) switch_instance_changes.tagsMap = /*tagsMap*/ ctx[9];
			if (dirty & /*catgsMap*/ 1024) switch_instance_changes.catgsMap = /*catgsMap*/ ctx[10];
			if (dirty & /*tagsList*/ 2048) switch_instance_changes.tagsList = /*tagsList*/ ctx[11];
			if (dirty & /*catgList*/ 4096) switch_instance_changes.catgList = /*catgList*/ ctx[12];

			if (switch_value !== (switch_value = /*getComponent*/ ctx[13]())) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, div, null);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (switch_instance) destroy_component(switch_instance);
		}
	};
}

function create_fragment(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*enabled*/ ctx[3] && create_if_block(ctx);

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
			if (/*enabled*/ ctx[3]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*enabled*/ 8) {
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
	let { idxContent } = $$props,
		{ allLayouts } = $$props,
		{ allPosts } = $$props,
		{ content } = $$props,
		{ pageType } = $$props,
		{ enabled } = $$props,
		{ title } = $$props,
		{ image } = $$props,
		{ hero } = $$props,
		{ splash } = $$props,
		{ articleBody } = $$props,
		{ tagsMap } = $$props,
		{ catgsMap } = $$props,
		{ tagsList } = $$props,
		{ catgList } = $$props;

	const getComponent = function () {
		try {
			return allLayouts["layouts_components_page_" + pageType.toLowerCase() + "_svelte"];
		} catch(e) {
			return false;
		}
	};

	$$self.$$set = $$props => {
		if ("idxContent" in $$props) $$invalidate(0, idxContent = $$props.idxContent);
		if ("allLayouts" in $$props) $$invalidate(14, allLayouts = $$props.allLayouts);
		if ("allPosts" in $$props) $$invalidate(1, allPosts = $$props.allPosts);
		if ("content" in $$props) $$invalidate(2, content = $$props.content);
		if ("pageType" in $$props) $$invalidate(15, pageType = $$props.pageType);
		if ("enabled" in $$props) $$invalidate(3, enabled = $$props.enabled);
		if ("title" in $$props) $$invalidate(4, title = $$props.title);
		if ("image" in $$props) $$invalidate(5, image = $$props.image);
		if ("hero" in $$props) $$invalidate(6, hero = $$props.hero);
		if ("splash" in $$props) $$invalidate(7, splash = $$props.splash);
		if ("articleBody" in $$props) $$invalidate(8, articleBody = $$props.articleBody);
		if ("tagsMap" in $$props) $$invalidate(9, tagsMap = $$props.tagsMap);
		if ("catgsMap" in $$props) $$invalidate(10, catgsMap = $$props.catgsMap);
		if ("tagsList" in $$props) $$invalidate(11, tagsList = $$props.tagsList);
		if ("catgList" in $$props) $$invalidate(12, catgList = $$props.catgList);
	};

	return [
		idxContent,
		allPosts,
		content,
		enabled,
		title,
		image,
		hero,
		splash,
		articleBody,
		tagsMap,
		catgsMap,
		tagsList,
		catgList,
		getComponent,
		allLayouts,
		pageType
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			idxContent: 0,
			allLayouts: 14,
			allPosts: 1,
			content: 2,
			pageType: 15,
			enabled: 3,
			title: 4,
			image: 5,
			hero: 6,
			splash: 7,
			articleBody: 8,
			tagsMap: 9,
			catgsMap: 10,
			tagsList: 11,
			catgList: 12
		});
	}
}

export default Component;