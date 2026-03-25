export default function decorate(block) {
  // Move picture out of content div to be a direct child of .hero
  // so position:absolute on .hero picture anchors to .hero (not .hero > div)
  const pic = block.querySelector('picture');
  if (pic) {
    const picWrapper = pic.closest('p');
    block.prepend(pic);
    if (picWrapper && !picWrapper.textContent.trim()) picWrapper.remove();
  }
}
