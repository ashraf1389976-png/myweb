gsap.registerPlugin(ScrollTrigger);

/* Text Animation */
document.querySelectorAll(".animate-text").forEach(text => {
  let words = text.innerText.split(" ");
  text.innerHTML = "";

  words.forEach(word => {
    let span = document.createElement("span");
    span.innerText = word + " ";
    span.style.display = "inline-block";
    text.appendChild(span);
  });

  gsap.from(text.children, {
    scrollTrigger: {
      trigger: text,
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    stagger: 0.05,
    duration: 0.8,
    ease: "power3.out"
  });
});

/* Items Animation (buttons, elements) */
gsap.utils.toArray(".animate-item").forEach(item => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 85%",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });
});
