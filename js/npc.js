import Sheogorad from "./sheogorad.js";
import Wnd from "./wnd.js";
import Public from "./public.js";
import NpcWnd from "./npc wnd.js";

function formatNpcName(name) {
	return name.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
}

export default class Npc {
	npcWnd = null;
	icon = '';
	constructor(name) {
		this.name = name;
		this.icon = Sheogorad.iconList.npcIcons[name] || '';

	}
	makeWnd() {
		this.npcWnd = new NpcWnd(this);
	}
}