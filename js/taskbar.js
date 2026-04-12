// 🧙‍♀️ Code magic within

import Wnd from './wnd.js';

export const Taskbar = {

    // A stack of Wnds, the last minimized on on top
    minimizedWnds: [],

    config: {
        version: "0.1.0",
        name: "taskbar",
        debug: true
    },

    async init() {

    },

    async admitOne(wnd) {
        if (!(wnd instanceof Wnd)) {
            console.error('Only Wnd instances can be admitted to the taskbar');
            return;
        }

    },

    async removeOne(wnd) {
        if (!(wnd instanceof Wnd)) {
            console.error('Only Wnd instances can be removed from the taskbar');
            return;
        }
    }
};

// Auto-initialize on page load
document.addEventListener('DOMContentLoaded', () => Taskbar.init());

// Export for global access
window.Taskbar = Taskbar;

// Default export
export default Taskbar;