"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      once: true, // Animation happens only once while scrolling down
      duration: 600, // Animation duration in milliseconds
      easing: "ease-out-cubic", // Easing function
      delay: 0, // Global delay
      offset: 120, // Offset from the original trigger point (lower = triggers sooner)
      anchorPlacement: "top-bottom", // When element's top hits window's bottom
      disable: false, // Never disable animations
    });

    // Refresh AOS on route changes or dynamic content
    const refreshAOS = () => {
      AOS.refresh();
    };

    // Listen for any dynamic content changes
    window.addEventListener('load', refreshAOS);
    
    return () => {
      window.removeEventListener('load', refreshAOS);
    };
  }, []);

  return null;
}
