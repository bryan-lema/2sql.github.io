document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("mainImage");
  if (!img) { console.error("mainImage not found"); return; }

// Event listener so JS knows that when user hovers -> blur
  img.addEventListener("pointerenter", () => {
    console.log("hover start");
    img.style.filter = "blur(5px)";
  });

  img.addEventListener("pointerleave", () => {
    console.log("hover end");
    img.style.filter = "none";
  });
});