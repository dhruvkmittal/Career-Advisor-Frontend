import { useEffect, useRef } from "react";

export default function ParticleNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrameId;

    const mouse = {
      x: null,
      y: null,
      radius: 120,
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    class Particle {
      constructor(x, y, dx, dy, size) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        ctx.fillStyle = "rgba(167,139,250,0.9)";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#a78bfa";

        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.dx = -this.dx;
        }

        if (this.y > canvas.height || this.y < 0) {
          this.dy = -this.dy;
        }

        if (mouse.x && mouse.y) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            this.x += dx * 0.02;
            this.y += dy * 0.02;
          }
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
      }
    }

    const particleCount =
      window.innerWidth > 1200 ? 120 : window.innerWidth > 768 ? 70 : 35;

    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 2 + 1;

      particles.push(
        new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          (Math.random() - 0.5) * 0.4,
          (Math.random() - 0.5) * 0.4,
          size,
        ),
      );
    }

    function connectParticles() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;

          if (Math.abs(dx) > 120) continue;
          if (Math.abs(dy) > 120) continue;

          const distance = dx * dx + dy * dy;

          if (distance < 5000) {
            const opacity = 1 - distance / 5000;

            ctx.strokeStyle = `rgba(129,140,248,${opacity * 0.25})`;

            ctx.lineWidth = 1;

            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);

            ctx.lineTo(particles[b].x, particles[b].y);

            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
      });

      connectParticles();

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);

    window.addEventListener("mouseleave", handleMouseLeave);

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener("mousemove", handleMouseMove);

      window.removeEventListener("mouseleave", handleMouseLeave);

      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="
        absolute
        inset-0
        w-full
        h-full
        z-0
      "
    />
  );
}
