// components/ui/ShaderGradient.jsx
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

const GradientBackground = () => {
  return (
    <div className="shader-wrapper" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <ShaderGradientCanvas style={{ position: 'absolute', top: 0 }}>
        <ShaderGradient
          animate="on"
          axesHelper="off"
          brightness={0.5}
          cAzimuthAngle={180}
          cDistance={2.11}
          cPolarAngle={80}
          cameraZoom={9.1}
          color1="#00fff7"
          color2="#ff00ff"
          color3="#161617"
          destination="onCanvas"
          embedMode="off"
          envPreset="city"
          format="gif"
          fov={30}
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
          type="plane"
          uAmplitude={0}
          uDensity={1.5}
          uFrequency={0}
          uSpeed={0.3}
          uStrength={1.5}
          uTime={8}
          wireframe={false}
        />
      </ShaderGradientCanvas>
    </div>
  )
}

export default GradientBackground