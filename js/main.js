gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate-text", {
  y: 50,
  opacity: 0,
  stagger: 0.2,
  duration: 1
});
