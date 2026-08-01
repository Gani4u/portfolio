import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 14,
          background: "linear-gradient(to bottom right, #3b82f6, #6366f1, #a855f7)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: 8,
          fontWeight: "extrabold",
          fontFamily: "sans-serif",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        GC
      </div>
    ),
    {
      ...size,
    }
  );
}
