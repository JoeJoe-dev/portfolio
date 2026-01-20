import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Joseph Kalu Logo';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      // This is where we "style" the favicon to be a black circle
      <div
        style={{
          fontSize: 18,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
          borderRadius: '50%', // This makes it circular
          fontWeight: 'bold',
          border: '1px solid black' // Optional: adds a thin border
        }}
      >
        JK
      </div>
    ),
    { ...size }
  );
}