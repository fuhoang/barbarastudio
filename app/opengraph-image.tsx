import { ImageResponse } from "next/og";

export const alt = "Barbara Studio | Pestañas, Cejas y Uñas";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background: "linear-gradient(135deg, #faf7f5 0%, #f7f2ee 45%, #f3eeea 100%)",
          color: "#1c1c1c",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            border: "3px solid #c9a24f",
            borderRadius: "32px",
            padding: "34px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "18px",
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(244, 216, 223, 0.7), transparent 45%), radial-gradient(circle at 85% 75%, rgba(244, 238, 233, 0.9), transparent 40%)",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              fontSize: 38,
              fontWeight: 600,
              letterSpacing: "0.08em",
              opacity: 0.75,
            }}
          >
            BARBARA STUDIO
          </div>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1,
              color: "#b67381",
              fontWeight: 700,
            }}
          >
            El Arte de la Belleza
          </div>
          <div style={{ color: "#6b6b6b", fontSize: 30 }}>Pestañas • Cejas • Uñas</div>
          <div style={{ marginTop: "18px", color: "#6b6b6b", fontSize: 24, maxWidth: "780px" }}>
            Cuidado estético de confianza, suave y sofisticado para rasgos naturales.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
