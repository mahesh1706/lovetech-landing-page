import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useGsapLandingAnimations() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // HERO entrance animation (mobile-first)
    const heroTl = gsap.timeline({
      defaults: { ease: "power3.out" }
    });
    
    heroTl.from(".msme-badge", { y: 18, opacity: 0, duration: 0.7 })
          .from(".hero-heading", { y: 30, opacity: 0, scale: 0.985, duration: 0.9 }, "-=0.45")
          .from(".hero-sub", { y: 20, opacity: 0, duration: 0.75 }, "-=0.6")
          .from(".hero-cta", { y: 18, opacity: 0, stagger: 0.08, duration: 0.6 }, "-=0.5")
          .from(".hero-stats", { y: 15, opacity: 0, duration: 0.6 }, "-=0.4");

    // Course cards sidebar animation (desktop only)
    gsap.matchMedia().add("(min-width: 1024px)", () => {
      gsap.from(".course-sidebar-card", {
        x: -40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.3
      });
    });

    // Mobile swiper slide animations
    gsap.matchMedia().add("(max-width: 1023px)", () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!prefersReduced) {
        // Observe swiper slides for active state changes
        const observer = new MutationObserver(() => {
          gsap.utils.toArray<HTMLElement>(".swiper-slide").forEach(slide => {
            const isActive = slide.classList.contains("swiper-slide-active");
            gsap.to(slide, { 
              scale: isActive ? 1.03 : 0.98, 
              duration: 0.35, 
              ease: "power2.out" 
            });
          });
        });
        
        const swiperWrapper = document.querySelector(".swiper-wrapper");
        if (swiperWrapper) {
          observer.observe(swiperWrapper, { 
            attributes: true, 
            subtree: true, 
            attributeFilter: ["class"] 
          });
        }
        
        return () => observer.disconnect();
      }
    });

    // Hero images animation
    gsap.from(".hero-image", {
      y: 30,
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.5
    });

    // NAV shrink on scroll
    ScrollTrigger.create({
      start: "top top+=60",
      onUpdate(self) {
        const nav = document.querySelector(".site-nav");
        if (!nav) return;
        if (self.scroll() > 60) {
          nav.classList.add("nav--compact");
        } else {
          nav.classList.remove("nav--compact");
        }
      }
    });

    // BATCH Feature cards (About section)
    ScrollTrigger.batch(".feature-card", {
      start: "top 85%",
      onEnter: batch => {
        gsap.fromTo(batch,
          { y: 36, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, stagger: 0.08, duration: 0.75, ease: "power3.out", overwrite: true }
        );
      },
      once: true
    });

    // Course tiles animation
    ScrollTrigger.batch(".course-tile", {
      start: "top 90%",
      onEnter: batch => {
        gsap.fromTo(batch,
          { y: 28, opacity: 0, scale: 0.995 },
          { y: 0, opacity: 1, scale: 1, stagger: 0.06, duration: 0.7, ease: "power3.out", overwrite: true }
        );
      },
      once: true
    });

    // Testimonials alternating slide-in
    gsap.utils.toArray<HTMLElement>(".testimonial").forEach((el, i) => {
      gsap.from(el, {
        x: i % 2 === 0 ? -32 : 32,
        rotation: i % 2 === 0 ? -0.6 : 0.6,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        }
      });
    });

    // Team cards animation
    ScrollTrigger.batch(".team-card", {
      start: "top 85%",
      onEnter: batch => {
        gsap.fromTo(batch,
          { y: 30, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, stagger: 0.12, duration: 0.8, ease: "power3.out", overwrite: true }
        );
      },
      once: true
    });

    // CTA section animation
    ScrollTrigger.create({
      trigger: ".cta-section",
      start: "top 80%",
      onEnter() {
        gsap.fromTo(".cta-section", 
          { y: 30, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        );
        
        // CTA button micro-pulse after visibility
        gsap.delayedCall(0.5, () => {
          gsap.fromTo(".cta-btn", 
            { scale: 0.98 }, 
            { scale: 1.02, duration: 0.6, yoyo: true, repeat: 1, ease: "sine.inOut" }
          );
        });
      },
      once: true
    });

    // Counters animation
    gsap.utils.toArray<HTMLElement>(".counter").forEach((el) => {
      const target = parseInt(el.dataset.target || "0", 10);
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter() {
          gsap.to({ val: 0 }, {
            val: target,
            duration: Math.max(0.8, Math.min(1.6, target / 1000)),
            ease: "power1.out",
            onUpdate: function() {
              el.innerText = Math.round(this.targets()[0].val).toString();
            }
          });
        },
        once: true
      });
    });

    // Parallax effect for hero background elements
    gsap.utils.toArray<HTMLElement>(".parallax-slow").forEach(el => {
      gsap.to(el, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6
        }
      });
    });

    // Footer animation
    ScrollTrigger.create({
      trigger: "footer",
      start: "top 90%",
      onEnter() {
        gsap.fromTo("footer", 
          { y: 20, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        );
      },
      once: true
    });

    // Respect reduced motion
    if (prefersReduced) {
      ScrollTrigger.getAll().forEach(t => t.disable());
      gsap.set("*", { clearProps: "all" });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      heroTl.kill();
      gsap.killTweensOf("*");
    };
  }, []);

  return rootRef;
}