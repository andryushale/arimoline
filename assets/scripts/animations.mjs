import {gsap} from "./node_modules/gsap/all.js";
import {TextPlugin} from "./node_modules/gsap/TextPlugin.js";

gsap.registerPlugin(TextPlugin);

var tl = gsap.timeline({repeat: -1, repeatDelay: 2, yoyo: true});
tl.to("#nameplate", {
    duration: 4,
    text: {
      value: `Ari <br/>   Moline`,
      newClass: 'animationFinished',
      // padSpace: true,
      preserveSpaces: true,
      rtl: true
    },
    ease: "bounce.out",
  });