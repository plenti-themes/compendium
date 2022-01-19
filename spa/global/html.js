/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	add_flush_callback,
	append,
	assign,
	attr,
	bind,
	binding_callbacks,
	check_outros,
	children,
	claim_component,
	claim_element,
	claim_space,
	create_component,
	destroy_component,
	detach,
	element,
	get_spread_object,
	get_spread_update,
	group_outros,
	init,
	insert,
	mount_component,
	safe_not_equal,
	set_style,
	space,
	transition_in,
	transition_out
} from '../web_modules/svelte/internal/index.mjs';

import Head from './head.js';
import Navbar from './navbar.js';
import Footer from './footer.js';
import { catgs_tags } from '../scripts/catgs_tags.js';

function create_fragment(ctx) {
	let html;
	let head;
	let t0;
	let header;
	let navbar;
	let updating_isDark;
	let header_class_value;
	let t1;
	let body;
	let main;
	let switch_instance;
	let body_class_value;
	let t2;
	let footer1;
	let footer0;
	let footer1_class_value;
	let current;

	head = new Head({
			props: {
				idxContent: /*idxContent*/ ctx[5],
				allPages: /*allPages*/ ctx[6],
				content: /*content*/ ctx[2],
				env: /*env*/ ctx[4]
			}
		});

	function navbar_isDark_binding(value) {
		/*navbar_isDark_binding*/ ctx[11](value);
	}

	let navbar_props = {
		allPages: /*allPages*/ ctx[6],
		idxContent: /*idxContent*/ ctx[5]
	};

	if (/*isDark*/ ctx[0] !== void 0) {
		navbar_props.isDark = /*isDark*/ ctx[0];
	}

	navbar = new Navbar({ props: navbar_props });
	binding_callbacks.push(() => bind(navbar, "isDark", navbar_isDark_binding));

	const switch_instance_spread_levels = [
		/*content*/ ctx[2].fields,
		{ idxContent: /*idxContent*/ ctx[5] },
		{ allLayouts: /*allLayouts*/ ctx[1] },
		{ allPosts: /*allPosts*/ ctx[7] },
		{ catgPosts: /*catgPosts*/ ctx[8] },
		{ tagsPosts: /*tagsPosts*/ ctx[9] },
		{ content: /*content*/ ctx[2] },
		{ isDark: /*isDark*/ ctx[0] },
		{ env: /*env*/ ctx[4] }
	];

	var switch_value = /*layout*/ ctx[3];

	function switch_props(ctx) {
		let switch_instance_props = {};

		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
			switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
		}

		return { props: switch_instance_props };
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props(ctx));
	}

	footer0 = new Footer({});

	return {
		c() {
			html = element("html");
			create_component(head.$$.fragment);
			t0 = space();
			header = element("header");
			create_component(navbar.$$.fragment);
			t1 = space();
			body = element("body");
			main = element("main");
			if (switch_instance) create_component(switch_instance.$$.fragment);
			t2 = space();
			footer1 = element("footer");
			create_component(footer0.$$.fragment);
			this.h();
		},
		l(nodes) {
			html = claim_element(nodes, "HTML", { lang: true });
			var html_nodes = children(html);
			claim_component(head.$$.fragment, html_nodes);
			t0 = claim_space(html_nodes);
			header = claim_element(html_nodes, "HEADER", { class: true, style: true });
			var header_nodes = children(header);
			claim_component(navbar.$$.fragment, header_nodes);
			header_nodes.forEach(detach);
			t1 = claim_space(html_nodes);
			body = claim_element(html_nodes, "BODY", { class: true });
			var body_nodes = children(body);
			main = claim_element(body_nodes, "MAIN", {});
			var main_nodes = children(main);
			if (switch_instance) claim_component(switch_instance.$$.fragment, main_nodes);
			main_nodes.forEach(detach);
			body_nodes.forEach(detach);
			t2 = claim_space(html_nodes);
			footer1 = claim_element(html_nodes, "FOOTER", { class: true });
			var footer1_nodes = children(footer1);
			claim_component(footer0.$$.fragment, footer1_nodes);
			footer1_nodes.forEach(detach);
			html_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(header, "class", header_class_value = "" + ((/*isDark*/ ctx[0] ? "dk-theme" : "lt-theme") + " bg-primary sticky top-0 z-50"));
			set_style(header, "box-shadow", "0 0 10px 0 rgba(0, 0, 0, 0.10), 0 2px 4px 0 rgba(0, 0, 0, 0.20)");
			attr(body, "class", body_class_value = "" + ((/*isDark*/ ctx[0] ? "dk-theme" : "lt-theme") + " bg-main"));
			attr(footer1, "class", footer1_class_value = "" + ((/*isDark*/ ctx[0] ? "dk-theme" : "lt-theme border-t-2") + " bg-primary"));
			attr(html, "lang", "en");
		},
		m(target, anchor) {
			insert(target, html, anchor);
			mount_component(head, html, null);
			append(html, t0);
			append(html, header);
			mount_component(navbar, header, null);
			append(html, t1);
			append(html, body);
			append(body, main);

			if (switch_instance) {
				mount_component(switch_instance, main, null);
			}

			append(html, t2);
			append(html, footer1);
			mount_component(footer0, footer1, null);
			current = true;
		},
		p(ctx, [dirty]) {
			const head_changes = {};
			if (dirty & /*idxContent*/ 32) head_changes.idxContent = /*idxContent*/ ctx[5];
			if (dirty & /*allPages*/ 64) head_changes.allPages = /*allPages*/ ctx[6];
			if (dirty & /*content*/ 4) head_changes.content = /*content*/ ctx[2];
			if (dirty & /*env*/ 16) head_changes.env = /*env*/ ctx[4];
			head.$set(head_changes);
			const navbar_changes = {};
			if (dirty & /*allPages*/ 64) navbar_changes.allPages = /*allPages*/ ctx[6];
			if (dirty & /*idxContent*/ 32) navbar_changes.idxContent = /*idxContent*/ ctx[5];

			if (!updating_isDark && dirty & /*isDark*/ 1) {
				updating_isDark = true;
				navbar_changes.isDark = /*isDark*/ ctx[0];
				add_flush_callback(() => updating_isDark = false);
			}

			navbar.$set(navbar_changes);

			if (!current || dirty & /*isDark*/ 1 && header_class_value !== (header_class_value = "" + ((/*isDark*/ ctx[0] ? "dk-theme" : "lt-theme") + " bg-primary sticky top-0 z-50"))) {
				attr(header, "class", header_class_value);
			}

			const switch_instance_changes = (dirty & /*content, idxContent, allLayouts, allPosts, catgPosts, tagsPosts, isDark, env*/ 951)
			? get_spread_update(switch_instance_spread_levels, [
					dirty & /*content*/ 4 && get_spread_object(/*content*/ ctx[2].fields),
					dirty & /*idxContent*/ 32 && { idxContent: /*idxContent*/ ctx[5] },
					dirty & /*allLayouts*/ 2 && { allLayouts: /*allLayouts*/ ctx[1] },
					dirty & /*allPosts*/ 128 && { allPosts: /*allPosts*/ ctx[7] },
					dirty & /*catgPosts*/ 256 && { catgPosts: /*catgPosts*/ ctx[8] },
					dirty & /*tagsPosts*/ 512 && { tagsPosts: /*tagsPosts*/ ctx[9] },
					dirty & /*content*/ 4 && { content: /*content*/ ctx[2] },
					dirty & /*isDark*/ 1 && { isDark: /*isDark*/ ctx[0] },
					dirty & /*env*/ 16 && { env: /*env*/ ctx[4] }
				])
			: {};

			if (switch_value !== (switch_value = /*layout*/ ctx[3])) {
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
					mount_component(switch_instance, main, null);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}

			if (!current || dirty & /*isDark*/ 1 && body_class_value !== (body_class_value = "" + ((/*isDark*/ ctx[0] ? "dk-theme" : "lt-theme") + " bg-main"))) {
				attr(body, "class", body_class_value);
			}

			if (!current || dirty & /*isDark*/ 1 && footer1_class_value !== (footer1_class_value = "" + ((/*isDark*/ ctx[0] ? "dk-theme" : "lt-theme border-t-2") + " bg-primary"))) {
				attr(footer1, "class", footer1_class_value);
			}
		},
		i(local) {
			if (current) return;
			transition_in(head.$$.fragment, local);
			transition_in(navbar.$$.fragment, local);
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			transition_in(footer0.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(head.$$.fragment, local);
			transition_out(navbar.$$.fragment, local);
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			transition_out(footer0.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(html);
			destroy_component(head);
			destroy_component(navbar);
			if (switch_instance) destroy_component(switch_instance);
			destroy_component(footer0);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { isDark } = $$props;

	let { allContent } = $$props,
		{ allLayouts } = $$props,
		{ content } = $$props,
		{ layout } = $$props,
		{ env } = $$props;

	let { idxContent = allContent.filter(key => key.path == "/")[0].fields } = $$props;
	let { allPages = allContent.filter(key => key.type == "pages") } = $$props;
	let { allPosts = allContent.filter(key => key.type == "posts") } = $$props;

	// Create the list of posts by tags and categories
	let ctObj = catgs_tags(allPosts);

	let { catgPosts = Object(ctObj["catgs"]) } = $$props;
	let { tagsPosts = Object(ctObj["tags"]) } = $$props;

	function navbar_isDark_binding(value) {
		isDark = value;
		$$invalidate(0, isDark);
	}

	$$self.$$set = $$props => {
		if ("isDark" in $$props) $$invalidate(0, isDark = $$props.isDark);
		if ("allContent" in $$props) $$invalidate(10, allContent = $$props.allContent);
		if ("allLayouts" in $$props) $$invalidate(1, allLayouts = $$props.allLayouts);
		if ("content" in $$props) $$invalidate(2, content = $$props.content);
		if ("layout" in $$props) $$invalidate(3, layout = $$props.layout);
		if ("env" in $$props) $$invalidate(4, env = $$props.env);
		if ("idxContent" in $$props) $$invalidate(5, idxContent = $$props.idxContent);
		if ("allPages" in $$props) $$invalidate(6, allPages = $$props.allPages);
		if ("allPosts" in $$props) $$invalidate(7, allPosts = $$props.allPosts);
		if ("catgPosts" in $$props) $$invalidate(8, catgPosts = $$props.catgPosts);
		if ("tagsPosts" in $$props) $$invalidate(9, tagsPosts = $$props.tagsPosts);
	};

	return [
		isDark,
		allLayouts,
		content,
		layout,
		env,
		idxContent,
		allPages,
		allPosts,
		catgPosts,
		tagsPosts,
		allContent,
		navbar_isDark_binding
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			isDark: 0,
			allContent: 10,
			allLayouts: 1,
			content: 2,
			layout: 3,
			env: 4,
			idxContent: 5,
			allPages: 6,
			allPosts: 7,
			catgPosts: 8,
			tagsPosts: 9
		});
	}
}

export default Component;