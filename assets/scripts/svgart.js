defineSVGArrow();
function defineSVGArrow(){
    customElements.define("svg-arrow", class extends HTMLElement {
    connectedCallback() 
        {
            this.innerHTML = `<svg height="11" width="11">
                <path d="M1 1 L1 9 L9 9"></path>
                <path d="M1 9 L9 1"></path>
                <path d="M5 1 L9 1 L9 5"></path>
            </svg>`;
        }
    });
}

defineSVGArrowDown();
function defineSVGArrowDown(){
    customElements.define("svg-arrow-down", class extends HTMLElement {
    connectedCallback() 
        {
            this.innerHTML = `<svg height="11" width="11">
                <path d="M5 0 L5 11"></path>
                <path d="M1 5 L5 11"></path>
                <path d="M9 5 L5 11"></path>
            </svg>`;
        }
    });
}

const drawBorderOnDesktop = () =>
{  
    const mobile = $(window).innerWidth() <= 812;
    if (!mobile)
    {
        const   right = $(window).innerWidth(),
        loopSize = right/70,
        bottom = loopSize + 37.5;

        const path =    `M37.5, 0 
                        L37.5,${bottom - 37.5 + loopSize} 
                        l-${loopSize},0 
                        l0,-${loopSize} 
                        L${right - 37.5 + loopSize},${bottom - 37.5} 
                        l0,${loopSize} 
                        l-${loopSize},0
                        L${right - 37.5}, 0`;

        $('svg#border path').attr('d', path);
        $('svg#border').css('height', bottom);

        const frameHeight = $(window).innerHeight() - $('header').outerHeight() - bottom;
        $('#frame').css('height', frameHeight);
        $('#container_bg').css('margin', `0px ${loopSize}px`);
    }
}
$(document).ready(drawBorderOnDesktop);
$(window).on("resize", drawBorderOnDesktop);