gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {

    // Animação para os cards do "Plano de Salvação"
    gsap.from(".quadro .card", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".quadro",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    // Animação para a grade "O que Jesus Faz Por Você"
    gsap.from(".grid-beneficios .card-box", {
        opacity: 0,
        scale: 0.9,
        y: 30,
        duration: 0.7,
        stagger: 0.15,
        ease: "back.out(1.2)",
        scrollTrigger: {
            trigger: ".grid-beneficios",
            start: "top 85%"
        }
    });

    // Animação para as citações das "Palavras de Jesus"
    gsap.from(".beneficios .card", {
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".beneficios",
            start: "top 80%"
        }
    });

});




