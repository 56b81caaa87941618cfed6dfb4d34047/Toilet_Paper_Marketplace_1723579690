/* Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
*/

Vue.component("purple_background_cta_component_1723579691", {
    template: `
    <section id="cta-section-container" style="min-height: 150px" >
        <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6 bg-red-900 relative">

            <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-3xl overflow-hidden bg-red-800">
                <!-- Radial gradient -->
                <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                    <div id="radial-gradient-outer" class="absolute inset-0 translate-z-0 rounded-full blur-120 opacity-70 bg-red-700">
                    <div id="radial-gradient-inner" class="absolute w-1/4 h-1/4 translate-z-0 rounded-full blur-40 bg-red-600">
                    </div>
                </div>
                <!-- Blurred shape -->
                <div id="blurred-shape" class="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                        <defs><linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%"><stop offset="0%" :stop-color="stopColorPrimaryStyle" /><stop offset="100%" :stop-color="stopColorSecondaryStyle" stop-opacity="0" /></linearGradient></defs>
                        <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
                    </svg>
                </div>
                <!-- Brown stars -->
                <div class="absolute inset-0 overflow-hidden pointer-events-none">
                    <div class="absolute top-1/4 left-1/4 text-purple-300 text-4xl">★</div>
                    <div class="absolute top-1/2 left-3/4 text-purple-300 text-3xl">★</div>
                    <div class="absolute top-3/4 left-1/2 text-purple-300 text-5xl">★</div>
                    <div class="absolute top-1/3 right-1/4 text-purple-300 text-2xl">★</div>
                    <div class="absolute bottom-1/4 right-1/3 text-purple-300 text-4xl">★</div>
                </div>
                <!-- Content -->

                <!-- Content -->
                <div id="content" class="max-w-3xl mx-auto text-center">
                    <div id="content-subtitle" class="flex"><div id="content-subtitle-text" class="flex-1 font-medium bg-clip-text pb-3 text-red-200" :class="[transparentTextStyle, contentSubtitleStyle]">Cool Green Deals, Delivered to Your Door</div></div>
                    <div class="flex" id="content-title-container"><h2 id="content-title" class="flex-1 h2 bg-clip-text pb-4 text-red-100" :class="[transparentTextStyle, contentCtaTitleStyle]"> Roll into Savings: Your Toilet Paper Marketplace</h2></div>
                    <div class="flex" id="content-body-container"><p id="content-body" class="flex-1 text-lg mb-8 text-red-200" :class="[contentBodyStyle]">Discover the ultimate destination for all your toilet paper needs. From budget-friendly options to premium quilted luxury, we've got your bottom line covered.</p></div>
                    <a id="content-cta-button" href="#0" class="btn transition duration-150 ease-in-out group bg-red-700 text-red-100 hover:bg-red-600" :class="[contentCtaButtonPrimaryStyle, contentCtaButtonGradientStyle, contentCtaButtonGradientStyle, contentCtaButtonHoverStyle]">Get Started <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" :class="contentCtaArrowStyle">-&gt;</span></a>
                </div>
            </div>
        </div>
    </section>`,
        data() {
            return {
                expanded: false, 
                tab: null,
                radialGradientPrimaryStyle: "bg-red-700",
                radialGradientSecondaryStyle: "bg-red-600",
                stopColorPrimaryStyle: "#991B1B",
                stopColorSecondaryStyle: "#B91C1C",
                transparentTextStyle: "text-transparent",
                contentSubtitleStyle: "bg-gradient-to-r from-red-400 to-red-200",
                contentCtaTitleStyle: "bg-gradient-to-r from-red-100/60 via-red-100 to-red-100/60",
                contentBodyStyle: "text-red-200",
                contentCtaButtonPrimaryStyle:"text-red-100",
                contentCtaButtonGradientStyle: "bg-gradient-to-r from-red-700/80 via-red-700 to-red-700/80",
                contentCtaButtonHoverStyle: "hover:bg-red-600",
                contentCtaArrowStyle: "text-red-300"
            };
        },
    });
                    