gsap.registerPlugin(ScrollTrigger);

alert("Script carregado!"); // Se esse alerta aparecer no celular, o JS está funcionando.
gsap.registerPlugin(ScrollTrigger);
// ... restante do código

gsap.from(".quadro .card", {
    opacity: 0,
    x: -40,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".quadro",
        start: "top 85%",
        toggleActions: "play none none none"
    }
});

gsap.from(".grid-beneficios .card-box", {
    opacity: 0,
    x: -40,
    duration: 0.7,
    stagger: 0.12,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".grid-beneficios",
        start: "top 85%"
    }
});

gsap.from(".beneficios .card", {
    opacity: 0,
    x: -40,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".beneficios",
        start: "top 85%"
    }
});
