/* Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
*/

Vue.component("purple_background_cta_component_1723579691", {
    template: `
    <section id="cta-section-container" style="min-height: 630px">
        <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6 bg-yellow-300">
            <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-3xl overflow-hidden bg-yellow-400">
                <!-- Radial gradient -->
                <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                    <div id="radial-gradient-outer" class="absolute inset-0 translate-z-0 rounded-full blur-120 opacity-70 bg-yellow-500">
                    <div id="radial-gradient-inner" class="absolute w-1/4 h-1/4 translate-z-0 rounded-full blur-40 bg-yellow-400">
                    </div>
                </div>
                <!-- Blurred shape -->
                <div id="blurred-shape" class="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                        <defs><linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%"><stop offset="0%" :stop-color="stopColorPrimaryStyle" /><stop offset="100%" :stop-color="stopColorSecondaryStyle" stop-opacity="0" /></linearGradient></defs>
                        <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
                    </svg>
                </div>
                <!-- Content -->
                <div id="content" class="max-w-3xl mx-auto text-center">
                    <div id="content-subtitle" class="flex"><div id="content-subtitle-text" class="flex-1 font-medium bg-clip-text pb-3 text-yellow-800" :class="[transparentTextStyle, contentSubtitleStyle]">Cool Green Deals, Delivered to Your Door</div></div>
                    <div class="flex" id="content-title-container"><h2 id="content-title" class="flex-1 h2 bg-clip-text pb-4 text-yellow-900" :class="[transparentTextStyle, contentCtaTitleStyle]"> Roll into Savings: Your Toilet Paper Marketplace</h2></div>
                    <div class="flex" id="content-body-container"><p id="content-body" class="flex-1 text-lg mb-8 text-yellow-800" :class="[contentBodyStyle]">Discover the ultimate destination for all your toilet paper needs. From budget-friendly options to premium quilted luxury, we've got your bottom line covered.</p></div>
                    <a id="content-cta-button" href="#0" class="btn transition duration-150 ease-in-out group bg-yellow-500 text-yellow-900 hover:bg-yellow-600" :class="[contentCtaButtonPrimaryStyle, contentCtaButtonGradientStyle, contentCtaButtonGradientStyle, contentCtaButtonHoverStyle]">Get Started <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" :class="contentCtaArrowStyle">-&gt;</span></a>
                </div>
            </div>
        </div>
    </section>`,
        data() {
            return {
                expanded: false, 
                tab: null,
                radialGradientPrimaryStyle: "bg-yellow-500",
                radialGradientSecondaryStyle: "bg-yellow-400",
                stopColorPrimaryStyle: "#EAB308",
                stopColorSecondaryStyle: "#FACC15",
                transparentTextStyle: "text-transparent",
                contentSubtitleStyle: "bg-gradient-to-r from-yellow-600 to-yellow-400",
                contentCtaTitleStyle: "bg-gradient-to-r from-yellow-900/60 via-yellow-900 to-yellow-900/60",
                contentBodyStyle: "text-yellow-800",
                contentCtaButtonPrimaryStyle:"text-yellow-900",
                contentCtaButtonGradientStyle: "bg-gradient-to-r from-yellow-300/80 via-yellow-300 to-yellow-300/80",
                contentCtaButtonHoverStyle: "hover:bg-yellow-300",
                contentCtaArrowStyle: "text-yellow-700"
            };
        },
    });
                    