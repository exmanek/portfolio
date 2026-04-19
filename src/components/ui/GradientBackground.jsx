import { useEffect, useRef } from 'react';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

const GradientBackground = () => {
  const wrapperRef = useRef(null);

useEffect(() => {
  const el = wrapperRef.current;
  if (!el) return;

  const header = el.closest('header') || el.parentElement;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        el.classList.remove('animate');
        void el.offsetWidth;
        el.classList.add('animate');
      } else {
        el.classList.remove('animate');
      }
    });
  }, { threshold: 0.1 });

  observer.observe(header);
  return () => observer.disconnect();
}, []);

  return (
    <div ref={wrapperRef} className="shader-wrapper" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <ShaderGradientCanvas style={{ position: 'absolute', top: 0 }}>
        <ShaderGradient
          animate="on"
          axesHelper="off"
          brightness={0.8}
          cAzimuthAngle={180}
          cDistance={2.8}
          cPolarAngle={80}
          cameraZoom={9.1}
          color1="#51587d"
          color2="#00c0ca"
          color3="#212121"
          destination="onCanvas"
          embedMode="off"
          envPreset="city"
          format="gif"
          fov={45}
          frameRate={10}
          gizmoHelper="hide"
          grain="on"
          lightType="3d"
          pixelDensity={1}
          positionX={0}
          positionY={0}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.1}
          rotationX={50}
          rotationY={0}
          rotationZ={-60}
          shader="defaults"
          type="waterPlane"
          uAmplitude={0}
          uDensity={1.5}
          uFrequency={0}
          uSpeed={0.3}
          uStrength={0.5}
          uTime={8}
          wireframe={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
};

export default GradientBackground;