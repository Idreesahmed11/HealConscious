import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import calendarImg from "../assets/Careox-Integrated-Printable-Page-Heal-Conscious-1536x1113.png";
import journalImg from "../assets/careox-journal-front.png";
import programImg from "../assets/careox-mental-health-guide-program.png";
import paymentImg from "../assets/payment.png"; 

const products = [
  {
    id: "careox-calendar",
    name: "Careox Program Printable Calendar",
    price: "$15.00",
    route: "/product/careox-program-printable-calendar",
    img: calendarImg,
  },
  {
    id: "leather-journal",
    name: "Vintage Leather Wellness Journal | 380 Pages",
    price: "$99.00",
    route: "/product/journal-mental-healthcare-leather-journal",
    img: journalImg,
  },
  {
    id: "fortification-program",
    name: "Careox | 4 week mental health fortification program",
    price: "$199.00",
    route: "/product/careox-4-week-mental-health-fortification-program",
    img: programImg,
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "What is Careox?", href: "/what-is-careox" },
  { label: "Common Concerns", href: "/common-concerns" },
  { label: "Who we are?", href: "/who-we-are" },
  { label: "Store", href: "/store" },
  { label: "Where we are?", href: "/where-we-are" },
];

const policies = [
  { label: "T&C Healing Ambassador", href: "/tc-healing-ambassador" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund & Returns Policy", href: "/refund-policy" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Healing Ambassador", href: "/healing-ambassador" },
  { label: "Shipping Policy", href: "/shipping-policy" },
];


const IconCompare = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
  </svg>
);
const IconHeart = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const IconEye = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="3" />
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
  </svg>
);
const IconLocation = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconPhone = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.56 2 2 0 0 1 3.59 1.36h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
  </svg>
);
const IconMail = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}


function ProductCard({ product, navigate, isMobile }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => navigate(product.route)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: "0.5px solid #e0ddd8",
        borderRadius: 10,
        overflow: "hidden",
        background: "#fff",
        cursor: "pointer",
        transition: "border-color 0.2s, box-shadow 0.2s",
        position: "relative",
        boxShadow: hovered ? "0 4px 16px rgba(0,0,0,0.08)" : "none",
      }}
    >
    
      <div
        style={{
          position: "relative",
          height: isMobile ? 200 : 170,
          overflow: "hidden",
          background: "#f5f0eb",
        }}
      >
        <img
          src={product.img}
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.35s ease",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            display: "block",
          }}
        />

        
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "rgba(255,255,255,0.96)",
            borderTop: "0.5px solid #e0ddd8",
            padding: "8px 10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.22s ease, transform 0.22s ease",
            pointerEvents: hovered ? "auto" : "none",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              alert("Added to cart!");
            }}
            style={{
              background: "#fff",
              border: "1px solid #444",
              color: "#222",
              fontSize: 11,
              fontWeight: 600,
              padding: "6px 13px",
              borderRadius: 3,
              cursor: "pointer",
              letterSpacing: "0.04em",
            }}
          >
            ADD TO CART
          </button>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {[
              { Icon: IconCompare, title: "Compare" },
              { Icon: IconHeart, title: "Add to Wishlist" },
              { Icon: IconEye, title: "Quick View" },
            ].map(({ Icon, title }) => (
              <button
                key={title}
                title={title}
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#888",
                  display: "flex",
                  alignItems: "center",
                  padding: 2,
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#222")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
              >
                <Icon />
              </button>
            ))}
          </div>
        </div>
      </div>

    
      <div style={{ padding: "10px 12px" }}>
        <p
          style={{
            fontSize: 13,
            color: "#333",
            textAlign: "center",
            lineHeight: 1.45,
            marginBottom: 5,
          }}
        >
          {product.name}
        </p>
        <p
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: "#111",
            textAlign: "center",
          }}
        >
          {product.price}
        </p>
      </div>
    </div>
  );
}


export default function HealConsciousSection() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const width = useWindowWidth();


  const isSmallMobile = width <= 480;  
  const isMobile = width <= 768;        
  const isTablet = width <= 1024;       

  
  const cardsColumns = isSmallMobile
    ? "1fr"
    : isMobile
    ? "repeat(2, 1fr)"
    : "repeat(3, 1fr)";


  const footerColumns = isSmallMobile
    ? "1fr"
    : isMobile
    ? "1fr 1fr"
    : isTablet
    ? "1fr 1fr"
    : "1.2fr 1fr 1fr 1.2fr";

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#fff" }}>

      
      <div style={{ padding: isMobile ? "1.25rem 1rem 0" : "2rem 1.5rem 0" }}>
        <div
          style={{
            display: "grid",
            // On tablet/mobile: CTA goes below cards (1fr), on desktop: side by side
            gridTemplateColumns: isTablet ? "1fr" : "1fr auto",
            gap: "1.5rem",
            alignItems: "start",
          }}
        >
          
          <div
            style={{
              display: "grid",
              gridTemplateColumns: cardsColumns,
              gap: isMobile ? "0.9rem" : "1.25rem",
            }}
          >
            {products.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                navigate={navigate}
                isMobile={isMobile}
              />
            ))}
          </div>

        
          <div
            style={{
              minWidth: isTablet ? "unset" : 190,
              maxWidth: isTablet ? "100%" : 230,
              padding: isTablet ? "0.25rem 0 0.5rem" : "0.5rem 0",
              // On tablet: lay it out horizontally
              display: isTablet ? "flex" : "block",
              alignItems: isTablet ? "center" : "unset",
              gap: isTablet ? "1.5rem" : "unset",
              flexWrap: "wrap",
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#888",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: isTablet ? 0 : 6,
                display: isTablet ? "none" : "block",
              }}
            >
              OUR PRODUCTS
            </p>
            <h2
              style={{
                fontSize: isSmallMobile ? 16 : isTablet ? 18 : 22,
                fontWeight: 700,
                color: "#111",
                lineHeight: 1.35,
                marginBottom: isTablet ? 0 : 16,
                flex: isTablet ? 1 : "unset",
              }}
            >
              Your Mental Health, Our Priority – Shop Now
            </h2>
            <button
              onClick={() => navigate("/store")}
              style={{
                padding: "9px 22px",
                border: "1px solid #333",
                background: "#fff",
                color: "#222",
                fontSize: 13,
                fontWeight: 500,
                borderRadius: 3,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#f0f0f0")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
            >
              Start Here
            </button>
          </div>
        </div>
      </div>

      
      <footer
        style={{
          borderTop: "0.5px solid #e0ddd8",
          marginTop: "2.5rem",
          padding: isMobile ? "2rem 1rem 1.25rem" : "2.5rem 1.5rem 1.5rem",
          background: "#fff",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: footerColumns,
            gap: isMobile ? "1.5rem" : "2rem",
          }}
        >
          
          <div>
            <div
              style={{
                width: 28,height: 28,background: "#ddd",borderRadius: 4,marginBottom: 8,}}/>
            <p
              style={{fontSize: 13,fontWeight: 700,color: "#111",marginBottom: 4, }}>
              Sign Up For Our Newsletter
            </p>
            <p
              style={{fontSize: 12,color: "#777",marginBottom: 14,lineHeight: 1.6,}}
            >
              Get updates and offers in your inbox.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "8px 10px",
                border: "0.5px solid #bbb",
                borderRadius: 3,
                fontSize: 12,
                color: "#222",
                background: "#fff",
                outline: "none",
                marginBottom: 8,
                boxSizing: "border-box",
              }}
            />
            <button
              style={{
                width: "100%",
                padding: "9px",
                background: "#222",
                color: "#fff",
                fontSize: 12,
                fontWeight: 600,
                border: "none",
                borderRadius: 3,
                cursor: "pointer",
                letterSpacing: "0.06em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#444")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#222")}
            >
              SUBSCRIBE
            </button>
          </div>

          
          <div>
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#111",
                marginBottom: 14,
              }}
            >
              Quick Links
            </p>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 9,
                padding: 0,
                margin: 0,
              }}
            >
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    style={{
                      fontSize: 12,
                      color: "#666",
                      textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#111")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy */}
          <div>
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#111",
                marginBottom: 14,
              }}
            >
              Our Policy
            </p>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 9,
                padding: 0,
                margin: 0,
              }}
            >
              {policies.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    style={{
                      fontSize: 12,
                      color: "#666",
                      textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#111")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#111",
                marginBottom: 14,
              }}
            >
              Contact Us
            </p>
            {[
              {
                Icon: IconLocation,
                text: "Add: 111B S Gov Avenue, STE 7126 19904 Dover, DE",
              },
              {
                Icon: IconPhone,
                text: "Tel: +1 (012) 345-6789 - Whatsapp",
              },
              {
                Icon: IconMail,
                text: "healconscious.com",
              },
            ].map(({ Icon, text }) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  gap: 8,
                  alignItems: "flex-start",
                  marginBottom: 12,
                }}
              >
                <span style={{ color: "#777", marginTop: 2, flexShrink: 0 }}>
                  <Icon />
                </span>
                <span
                  style={{ fontSize: 12, color: "#666", lineHeight: 1.6 }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        
        <div
          style={{
            borderTop: "0.5px solid #e0ddd8",
            marginTop: "2rem",
            paddingTop: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 8,
            flexDirection: isSmallMobile ? "column" : "row",
            alignItems: isSmallMobile ? "flex-start" : "center",
          }}
        >
          <p style={{ fontSize: 11, color: "#aaa" }}>
            © 2024-25 Heal Conscious Inc. All Rights Reserved.
          </p>
         <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
  
  {/* PayPal Image */}
  <img 
    src={paymentImg} 
    alt="Payment Method" 
    style={{ width: "60px", height: "auto" }} 
  />


</div> 
        </div>
      </footer>
    </div>
  );
}
