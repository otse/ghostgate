export const Public = {
    canonList: {},
    iconList: {},

    async playClickSound() {
        const click = new Audio('sound/menu click.wav');
        click.play().catch(() => { });
    },
};

export default Public;