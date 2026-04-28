interface Props {
  title: string;
  subtitle?: string;
  index: number;
}

export default function PlaceholderSection({ title, subtitle, index }: Props) {
  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: index % 2 === 0 ? "#0a0a0a" : "#0d0d0d",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative accent */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <p
        style={{
          fontSize: "0.75rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(201,168,76,0.7)",
          marginBottom: "1rem",
          fontFamily: "var(--font-inter, sans-serif)",
        }}
      >
        0{index + 1} — {title}
      </p>
      <h2
        style={{
          fontSize: "clamp(2.5rem, 6vw, 5rem)",
          fontWeight: 900,
          color: "#fff",
          letterSpacing: "0.02em",
          textAlign: "center",
          lineHeight: 1,
          fontFamily: "var(--font-inter, sans-serif)",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            marginTop: "1.25rem",
            color: "rgba(255,255,255,0.35)",
            fontSize: "1rem",
            fontFamily: "var(--font-inter, sans-serif)",
          }}
        >
          {subtitle}
        </p>
      )}
      <div
        style={{
          marginTop: "3rem",
          width: "48px",
          height: "2px",
          background: "var(--gold, #c9a84c)",
          opacity: 0.5,
        }}
      />
    </section>
  );
}
