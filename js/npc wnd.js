import Sheogorad from "./sheogorad.js";
import Wnd from "./wnd.js";
import Npc from "./npc.js";
import Public from "./public.js";

function formatNpcName(name) {
    return name.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
}

export default class NpcWnd {
    wnd = null;
    npc = null;
    constructor(npc) {
        if (!(npc instanceof Npc)) {
            throw new Error("Invalid NPC instance");
        }
        this.npc = npc;

        const mwMenuTemplate = document.getElementById('darkstone-npc-wnd-content-template');
        const clone = mwMenuTemplate.content.cloneNode(true);

        this.wnd = new Wnd(
            `${npc.icon} ${formatNpcName(npc.name)}`,
            `Details about ${formatNpcName(npc.name)}`,
        { width: 200, height: 100 });
    }
}