import { useEffect, useRef } from 'react';
import styles from './SmokeBackground.module.css';

const SmokeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false });
    let particles = [];
    let animationFrameId;
    let frame = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * 1.5; // Make canvas bigger than viewport
      canvas.height = window.innerHeight * 1.5;
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    class Particle {
      constructor() {
        // Random position along a wider area
        const spawnWidth = canvas.width * 1.5;
        const spawnOffset = -canvas.width * 0.25;
        this.x = Math.random() * spawnWidth + spawnOffset;
        this.y = canvas.height;
        
        // Varied sizes and speeds
        this.size = Math.random() * 250 + 150;
        this.speedY = -Math.random() * 2 - 1.5; // Faster upward movement
        this.speedX = (Math.random() - 0.5) * 2; // More horizontal drift
        
        // Movement patterns
        this.angle = Math.random() * Math.PI * 2;
        this.angleSpeed = (Math.random() - 0.5) * 0.002;
        this.curve = Math.random() * 100 - 50;
        
        // Visual properties
        this.life = 1;
        this.opacity = Math.random() * 0.3 + 0.15;
        this.decay = 0.003 + Math.random() * 0.002;
      }

      update() {
        // Update position with curved movement
        this.y += this.speedY;
        this.x += this.speedX;
        this.angle += this.angleSpeed;
        this.x += Math.sin(this.angle) * this.curve * 0.01;
        
        // Fade out based on position and life
        this.life -= this.decay;
        
        // Keep particle if it's still visible
        return this.life > 0;
      }

      draw() {
        const alpha = this.opacity * this.life;
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        );
        
        gradient.addColorStop(0, `rgba(0, 0, 0, ${alpha})`);
        gradient.addColorStop(0.4, `rgba(0, 0, 0, ${alpha * 0.6})`);
        gradient.addColorStop(0.7, `rgba(0, 0, 0, ${alpha * 0.2})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      // Start with more particles
      for (let i = 0; i < 15; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      frame++;
      
      // Smoother fade
      ctx.fillStyle = 'rgba(255, 255, 255, 0.97)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update particles
      particles = particles.filter(particle => particle.update());
      
      // Add new particles randomly
      if (frame % 2 === 0 && particles.length < 20) {
        particles.push(new Particle());
      }

      // Draw all particles
      particles.forEach(particle => particle.draw());

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={styles.container}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
};

export default SmokeBackground;
