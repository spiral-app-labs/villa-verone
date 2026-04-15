import { ImageResponse } from "next/og";
import { siteData } from "@/lib/site-data";

export const runtime = "edge";
export const alt = "Villa Verone patio and dining atmosphere";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#110809",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={siteData.heroImage}
          alt=""
          width={1200}
          height={630}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            inset: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(17,8,9,0.9) 0%, rgba(17,8,9,0.56) 55%, rgba(17,8,9,0.2) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "64px",
            color: "#f7e6d3",
          }}
        >
          <div style={{ fontSize: 84, lineHeight: 0.9, fontWeight: 700 }}>
            Villa Verone
          </div>
          <div
            style={{
              marginTop: 14,
              fontSize: 24,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#f4ddbb",
            }}
          >
            Geneva, Illinois
          </div>
          <div style={{ marginTop: 26, fontSize: 22, maxWidth: 760 }}>
            Historic Italian dining in an 1849 stone home with patio evenings,
            reservations, and a full dinner and wine program.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
