const app = Vue.createApp({
    data: () => ({
        title: "Generador de degradados",
        fcolor: "#000000",
        scolor: "#ffffff",
        orientation: "right",
    }),
    computed: {
        setColor() {
            return `background: linear-gradient(to ${this.orientation}, ${this.fcolor}, ${this.scolor});`;
        },
    },
});