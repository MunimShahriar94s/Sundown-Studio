import React, { useState, useEffect, useRef } from "react";
import styles from "./ScrollThumb.module.css";  // Import the CSS Module

const ScrollThumb = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const thumbRef = useRef(null);
  let scrollTimeout = null;

  useEffect(() => {
    const handleScroll = () => {
      if (!isDragging) {
        setScrollPosition(window.scrollY);
      }
      setIsVisible(true);

      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsVisible(false), 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDragging]);

  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const maxScroll = documentHeight - windowHeight;

  const thumbHeight = 0.16 * window.innerHeight; // Height of the scroll thumb
  const trackHeight = windowHeight - thumbHeight; // The available track space

  const scrollPercentage = scrollPosition / (maxScroll);
  const thumbPosition = scrollPercentage * trackHeight; // Moves 1:1 with scrolling

  // --- Dragging Logic ---
  const handleMouseDown = (event) => {
    setIsDragging(true);
    document.body.style.userSelect = "none"; // Prevent text selection while dragging
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    // Calculate new scroll position based on cursor position in viewport
    let newScrollY = ((event.clientY - thumbHeight / 2) / trackHeight) * maxScroll;
    newScrollY = Math.max(0, Math.min(newScrollY, maxScroll)); // Clamp within bounds

    window.scrollTo({ top: newScrollY, behavior: "auto" });
    setScrollPosition(newScrollY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.userSelect = "auto"; // Re-enable text selection
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={thumbRef}
      className={`${styles.scrollThumb} ${isVisible ? styles.scrollThumbVisible : styles.scrollThumbHidden}`}
      style={{ top: `${thumbPosition}px` }} // Matches cursor movement exactly
      onMouseDown={handleMouseDown}
    >
      <div></div>
    </div>
  );
};

export default ScrollThumb;
