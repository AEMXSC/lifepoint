export default function decorate(block) {
  // Move picture out of content div to be a direct child of .hero
  // so position:absolute anchors to .hero (not .hero > div)
  const pic = block.querySelector('picture');
  if (pic) {
    const picWrapper = pic.closest('p');
    block.prepend(pic);
    if (picWrapper && !picWrapper.textContent.trim()) picWrapper.remove();
  }

  // Inject decorative circles SVG — matching production .hero-circle--home
  // Production uses outlined SVG circles (stroke, fill:none) in brand colors
  // positioned on the right side of the hero
  const ns = 'http://www.w3.org/2000/svg';
  const container = document.createElement('div');
  container.className = 'hero-circle';

  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', '0 0 500 500');
  svg.setAttribute('aria-hidden', 'true');

  // Overlapping brand-colored outlined circles — matching Lifepoint production
  const circles = [
    { cx: 250, cy: 250, r: 238, color: '#a51890', sw: 2 },   // magenta outer ring
    { cx: 290, cy: 210, r: 180, color: '#6f3aa0', sw: 2 },   // purple mid ring
    { cx: 200, cy: 300, r: 140, color: '#2b6bb2', sw: 1.5 }, // blue inner ring
    { cx: 340, cy: 160, r: 100, color: '#279989', sw: 1.5 }, // teal accent
    { cx: 150, cy: 380, r: 70,  color: '#53bf36', sw: 1.5 }, // green accent
  ];

  circles.forEach(({ cx, cy, r, color, sw }) => {
    const circle = document.createElementNS(ns, 'circle');
    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    circle.setAttribute('r', r);
    circle.setAttribute('stroke', color);
    circle.setAttribute('stroke-width', sw);
    circle.setAttribute('fill', 'none');
    svg.appendChild(circle);
  });

  container.appendChild(svg);
  block.appendChild(container);
}
