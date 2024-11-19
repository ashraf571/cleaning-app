// react-tilt.d.ts
declare module 'react-tilt' {
    import { ComponentType } from 'react';
  
    interface TiltProps {
      options?: {
        max?: number;
        perspective?: number;
        scale?: number;
        speed?: number;
        transition?: boolean;
      };
      style?: React.CSSProperties;
      className?: string;
    }
  
    const ReactTilt: ComponentType<TiltProps>;
  
    export default ReactTilt;
  }
  