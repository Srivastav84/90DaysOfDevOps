import { useEffect, useRef } from 'react';

export default function SpiderWeb() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = 0, height = 0, raf = 0;
    let points = [];
    const pointer = { x: -1000, y: -1000 };
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth; height = window.innerHeight;
      canvas.width = width * dpr; canvas.height = height * dpr;
      canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const spacing = width < 700 ? 62 : 82;
      points = [];
      for (let y = -spacing; y < height + spacing; y += spacing) {
        for (let x = -spacing; x < width + spacing; x += spacing) {
          points.push({ x: x + (Math.random() - .5) * 25, y: y + (Math.random() - .5) * 25, ox: x, oy: y, phase: Math.random() * Math.PI * 2 });
        }
      }
    };
    const move = e => { pointer.x = e.clientX; pointer.y = e.clientY; };
    const touch = e => { if (e.touches[0]) move(e.touches[0]); };
    const draw = time => {
      ctx.clearRect(0, 0, width, height);
      const reach = width < 700 ? 100 : 135;
      for (const p of points) {
        const dx = pointer.x - p.x, dy = pointer.y - p.y, d = Math.hypot(dx, dy);
        const influence = Math.max(0, 1 - d / reach);
        p.x = p.ox + Math.sin(time * .00025 + p.phase) * 5 - dx * influence * .09;
        p.y = p.oy + Math.cos(time * .00022 + p.phase) * 5 - dy * influence * .09;
      }
      ctx.lineWidth = .7;
      for (let i = 0; i < points.length; i++) {
        const a = points[i];
        for (let j = i + 1; j < points.length; j++) {
          const b = points[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < reach * .72) {
            const near = Math.max(0, 1 - d / (reach * .72));
            const pointerNear = Math.max(0, 1 - Math.min(Math.hypot(pointer.x-a.x,pointer.y-a.y), Math.hypot(pointer.x-b.x,pointer.y-b.y)) / reach);
            ctx.strokeStyle = `rgba(92, 211, 255, ${.045 + near * .09 + pointerNear * .22})`;
            ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
          }
        }
      }
      for (const p of points) {
        const d = Math.hypot(pointer.x-p.x, pointer.y-p.y);
        ctx.fillStyle = d < reach ? 'rgba(160,235,255,.55)' : 'rgba(105,164,206,.20)';
        ctx.beginPath(); ctx.arc(p.x,p.y,d < reach ? 1.7 : .8,0,Math.PI*2); ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    resize(); raf = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('touchmove', touch, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); window.removeEventListener('pointermove', move); window.removeEventListener('touchmove', touch); };
  }, []);
  return <canvas className="spider-web" ref={canvasRef} aria-hidden="true" />;
}
