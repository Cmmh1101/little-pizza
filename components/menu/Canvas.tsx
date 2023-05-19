import React, { useEffect, useRef } from "react";

type Props = {};

const Canvas = (props: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d'); 
        if (context) {
            const image = new Image();
            image.src = "../assets/images/menus/menu.png";
          //   let ctx = canvasCtxRef.current;
            image.onload = () => {
              context?.drawImage(image, 0, 0, 1200, 1200);
            };
        }
      
    }
  }, []);

  return (
    // <div className="w-screen">
<canvas className="w-screen" ref={canvasRef} width="1986" height="1284"></canvas>
    // </div>
    )
};

export default Canvas;
