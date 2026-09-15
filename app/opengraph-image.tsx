import { ImageResponse } from "next/og"

export const alt = "Nomeh Unateze — One people, four ancestral villages, 37 sub-villages"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  const names = ["Uhuafor", "Amigbo", "Ime-ama", "Amukabi"]
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "radial-gradient(ellipse at 80% 30%, #1f6b70, #0f1a20 65%)",
          color: "#f3f8f8",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 8, color: "#f0a87a" }}>NKANU EAST · ENUGU STATE</div>
        <div style={{ fontSize: 130, fontWeight: 700, lineHeight: 1, marginTop: 20 }}>Nomeh Unateze</div>
        <div style={{ fontSize: 40, marginTop: 24 }}>One people · Four ancestral villages · 37 sub-villages</div>
        <div style={{ display: "flex", gap: 20, marginTop: 50 }}>
          {names.map((n, i) => (
            <div
              key={n}
              style={{ display: "flex", border: "2px solid #f0a87a", borderRadius: 999, padding: "10px 26px", fontSize: 28 }}
            >
              {i + 1}. {n}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  )
}
