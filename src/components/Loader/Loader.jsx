import React from "react";
import { BallTriangle } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        zIndex: '999',
      }}
    >
      <BallTriangle
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000}
      />
    </div>
  );
};