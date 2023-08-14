import styles from "./App.module.scss";

function createMainTl() {

    const mainSection = "." + styles.main
    const heading = "." + styles.heading
    const player = "." + styles.player
    const subtext = "." + styles.subtext

    gsap.to([heading, player, subtext], 1, {
        y: -50,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: mainSection,
            start: 'top top',
            end: 'bottom top', 
            scrub: true,
            pin: true,
            pinSpacing: false,
            toggleActions: "play none reverse none",
            markers: false,
            snap: {
                snapTo: 1,
                duration: 1
            }
        }
    })
}

function createAboutTl() {
    // Get reference to container, text and map element
    const aboutSection = "." + styles.about;
    const intro = "." + styles.intro;
    const nusMap = "." + styles.nusMap;

    // Get reference to components of the map svg  
    const landArea = "#land_area"; // path length: 2833.47070 - set this for strokeDashArray
    const mainRoad = "#main_road"; // path length: 2296.13696
    const offroad = "#offroad"; // path length: 2808.89965
    const fass = gsap.utils.toArray(document.getElementById('fass').children);
    const engg = gsap.utils.toArray(document.getElementById('engg').children);
    const com = gsap.utils.toArray(document.getElementById('com').children);
    const nuh = gsap.utils.toArray(document.getElementById('nuh').children);
    const ylldent = gsap.utils.toArray(document.getElementById('ylldent').children);
    const utown = gsap.utils.toArray(document.getElementById('utown').children);
    const music = gsap.utils.toArray(document.getElementById('music').children);
    const filler = gsap.utils.toArray(document.getElementById('filler_1').children);
    const pin = document.getElementById('pin');
    
    // Set initial opacity is 0 for fade in
    gsap.set([intro, nusMap], {
        opacity: 0
    })

    gsap.set([landArea, fass, engg, com, nuh, ylldent, utown, music, filler, pin], {
        opacity: 0
    })

    gsap.set(landArea, {
        attr: {
            "stroke-dasharray": 2884,
            "stroke-dashoffset": 2834
        }
    })

    gsap.set(mainRoad, {
        attr: {
            "stroke-dasharray": 2297,
            "stroke-dashoffset": 2297
        }
    })

    gsap.set(offroad, {
        attr: {
            "stroke-dasharray": 2809,
            "stroke-dashoffset": 2809,
        }
    })

    const roadTl = gsap.timeline({
        scrollTrigger: {
            trigger: aboutSection,
            start: 'top top',
            end: 'bottom -=1600px',
            pin: false,
            scrub: true,
            snap: {
                snapTo: 1,
                duration: 4,
                inertia: true
            }
        }
    })

    roadTl.set(nusMap, {
        opacity: 1
    }).to(landArea, {
        opacity: 1,
        attr: {
            "stroke-dashoffset": 0
        }
    }).to(mainRoad, {
        attr: {
            "stroke-dashoffset": 0
        }
    }, "<+=0.1").to(offroad, {
        attr: {
            "stroke-dashoffset": 2300,
        }
    }, ">-=0.3")

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: aboutSection,
            start: 'top top',
            end: 'bottom -=1600px',
            pin: true,
            markers: false,
            scrub: true,
            snap: {
                snapTo: 1,
                duration: 4,
                inertia: true
            }
        }
    })

    // The actual animation 
    tl.to(intro, {
        opacity: 1, 
        y: -150
    }).fromTo(fass, {
        opacity: 0, 
        y: 50,
        scale: 0,
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "Back.easeOut.config(1.7)",
        stagger: 0.005
    }, "<+=0.2").fromTo(engg, {
        opacity: 0, 
        y: 50,
        scale: 0,
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "Back.easeOut.config(1.7)",
        stagger: 0.005
    }, "<+=0.2").fromTo(com, {
        opacity: 0, 
        y: 50,
        scale: 0,
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "Back.easeOut.config(1.7)",
        stagger: 0.005
    }, "<+=0.2").fromTo(nuh, {
        opacity: 0, 
        y: 50,
        scale: 0,
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "Back.easeOut.config(1.7)",
        stagger: 0.005
    }, "<+=0.2").fromTo(ylldent, {
        opacity: 0, 
        y: 50,
        scale: 0,
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "Back.easeOut.config(1.7)",
        stagger: 0.005
    }, "<+=0.2").fromTo(filler, {
        opacity: 0, 
        y: 50,
        scale: 0,
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "Back.easeOut.config(1.7)",
        stagger: 0.005
    }, "<+=0.2").fromTo(music, {
        opacity: 0, 
        y: 50,
        scale: 0,
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "Back.easeOut.config(1.7)",
        stagger: 0.005
    }, "<+=0.2").fromTo(utown, {
        opacity: 0, 
        y: 50,
        scale: 0,
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "Back.easeOut.config(1.7)",
        stagger: 0.005
    }, "<+=0.2").fromTo(pin, {
        opacity: 0,
        y: -150
    }, {
        opacity: 1, 
        y: 0
    })
}

function createProjectsTl() {
    const projectSection = "." + styles.projects;
    const header = document.querySelector(`.${styles.projectDesc} h1`).children;
    const manexIcon = document.getElementById('manex_icon');
    const appStoreIcon = document.getElementById('appstore_icon');
    const phoneLeft = document.getElementById('iphone_left');
    const phoneRight = document.getElementById('iphone_right');

    // Allows for different animations for desktop and mobile
    const mm = gsap.matchMedia(); 
    const conditions = {
        isDesktop: "(min-width: 901px)",
        isMobile: "(max-width: 900px)",
        reduceMotion: "(prefers-reduced-motion: reduce)"
    }
    mm.add(conditions, (context) => {
        let { isDesktop, isMobile, reduceMotion } = context.conditions
        
        const fadeInTl = gsap.timeline({
            scrollTrigger: {
                trigger: projectSection,
                start: 'top top',
                end: 'bottom -=1600px',
                scrub: 1,
                pin: true,
                pinSpacing: true,
                markers: false,
                snap: {
                    snapTo: 0.5,
                    duration: 4
                }
            }
        })
    
        fadeInTl.set([header, manexIcon, appStoreIcon, phoneLeft, phoneRight], {
            opacity: 0
        })
    
        fadeInTl.fromTo(header[0], {
            opacity: 0, 
            y: -100,
        }, {
            opacity: 1,
            y: 0,
        }).fromTo(phoneLeft, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: isDesktop ? 0 : "-25%"
        }, ">-=0.3").fromTo(phoneRight, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: isDesktop ? 0 : "-25%"
        }, "<+=0.1").fromTo(header[1], {
            opacity: 0,
        }, {
            opacity: 1,
        }, ">+=0.1").fromTo([manexIcon, appStoreIcon], {
            opacity: 0,
            x: -50
        }, {
            opacity: 1,
            x: 0,
            stagger: 0.1
        }, ">-=0.4")
        .to([phoneLeft, phoneRight], {
            y: -50,
            opacity: 0,
            stagger: 0.1,
            delay: 3
        }).to([header[0], header[1], manexIcon, appStoreIcon], {
            opacity: 0,
            x: -50,
            stagger: 0.05
        }, "<+=0.2")
    })
}

function createContactTl() {

    const contactSection = "." + styles.contact;
    const header = "." + styles.ctcHeader;
    const socialIcons = "." + styles.socials + " ul li";

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: contactSection,
            start: 'top top',
            end: 'top top',
            toggleActions: 'play none reverse none',
            markers: false,
        }
    })

    tl.set([header, socialIcons], {
        opacity: 0
    })

    tl.fromTo([header, socialIcons], {
        opacity: 0,
        y: -50
    }, {
        opacity: 1,
        y: 0,
        stagger: 0.2
    })

}

export { createMainTl, createAboutTl, createProjectsTl, createContactTl }