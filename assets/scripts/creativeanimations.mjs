import {gsap} from './node_modules/gsap/all.js';
import {ScrollTrigger} from './gsap-premium/src/ScrollTrigger.js';
import {SplitText} from './gsap-premium/src/SplitText.js';


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#sample',
        pin: true,
        start: 0,
        end: '+=300',
        scrub: 1,
        snap: {
            snapTo: 'labels',
            duration: { min: .2, max: 3},
            delay: .2,
            ease: 'power1.inOut'
        }
    }
});

var splitAnd = new SplitText("#split-and", {type: "chars", charsClass: "char++"});
var splitFellOut = new SplitText("#split-fell-out", {type: "chars", charsClass: "char++"});
var splitHadAcetone = new SplitText("#split-had-acetone", {type: "chars", charsClass: "char++", lineThreshold: .5});
var splitISo = new SplitText("#split-i-so", {type: "chars", charsClass: "char++"});
var splitLike = new SplitText("#split-like", {type: "chars", charsClass: "char++"});

tl.addLabel('and')
    .from(splitAnd.chars, {
        duration: 1, 
        x: -100, 
        autoAlpha: 0, 
        stagger: 0.05
      })
    .addLabel('underline-one')
    .fromTo('.underline-one', 
            0.5,
            {scaleX: 0}, 
            {scaleX: 1, transformOrigin: '0% 100%'}
        )
    .addLabel('fell-out')
    .from(splitFellOut.chars, {
        duration: 1, 
        x: -100, 
        autoAlpha: 0, 
        stagger: 0.05
    })
    .addLabel('underline-two')
    .fromTo('.underline-two', 
            0.5,
            {scaleX: 0}, 
            {scaleX: 1, transformOrigin: '0% 100%'}
        )
    .addLabel('had-acetone')
    .from(splitHadAcetone.chars, {
        duration: 1, 
        x: -100, 
        autoAlpha: 0, 
        stagger: 0.05
    })
    .addLabel('i-so')
    .from(splitISo.chars, {
        duration: 1, 
        x: -100, 
        autoAlpha: 0, 
        stagger: 0.05
    })
    .addLabel('underline-three')
    .fromTo('.underline-three', 
            0.5,
            {scaleX: 0}, 
            {scaleX: 1, transformOrigin: '0% 100%'}
        )
    .addLabel('like')
    .from(splitLike.chars, {
        duration: 1, 
        x: -100, 
        autoAlpha: 0, 
        stagger: 0.05
    });

// scrolltrigger