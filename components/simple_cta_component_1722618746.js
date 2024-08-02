/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722618746", {
    template: `
    <section id="cta-component" class="bg-gradient-to-br from-pink-400 to-purple-600 flex-1 min-h-screen flex items-center justify-center">
        <div id="cta-inner-container" class="max-w-screen-xl px-8 py-16 mx-auto lg:py-24 lg:px-12">
            <div id="cta-content" class="max-w-screen-md mx-auto text-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-8">
                <div id="cta-title-container" class="flex mb-6">
                    <h2 id="cta-title" class="flex-1 text-4xl font-extrabold leading-tight tracking-tight text-white">Unlock the Cosmic Power of Blockchain Analytics</h2>
                </div>

                <div id="cta-subtitle-container" class="flex mb-8">
                    <p id="cta-subtitle" class="flex-1 text-xl font-light text-pink-100 md:text-2xl">Journey through the celestial data and uncover emerging blockchain trends.</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-800 bg-pink-200 bg-opacity-70 hover:bg-opacity-90 focus:ring-4 focus:ring-pink-300 font-bold rounded-full text-lg px-8 py-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">Explore Cosmic Analytics</a>
                </div>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
