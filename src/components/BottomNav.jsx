import React from "react";
import aiChatbotIcon from "../assets/images/AIChatbotIcon.png";

export default function BottomNav() {
  const currentPath = window.location.pathname.toLowerCase();

  // Explicitly check which specific view is running
  const isInventory = currentPath.includes("/inventory");
  const isInsights = currentPath.includes("/insights");
  const isProfile = currentPath.includes("/profile");
  
  // Default to active Home if no other explicit tab route matches
  const isHome = !isInventory && !isInsights && !isProfile;

  // Track the color code explicitly
  const homeColor = isHome ? "#EA6113" : "#334155";
  const inventoryColor = isInventory ? "#EA6113" : "#334155";
  const insightsColor = isInsights ? "#EA6113" : "#334155";
  const profileColor = isProfile ? "#EA6113" : "#334155";

  return (
    <footer style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#ffffff",
      padding: "10px 16px 8px 16px",
      borderTop: "1px solid #EAEAEA",
      position: "absolute",
      bottom: "24px",
      left: 0,
      right: 0,
      zIndex: 30,
      height: "66px"
    }}>
      {/* 1. Home Tab */}
      <a href="/home" style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none", width: "20%" }}>
        <svg 
          width="22" 
          height="22" 
          viewBox="0 0 24 24" 
          fill="none" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          style={{ stroke: homeColor }}
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" style={{ stroke: homeColor }}></path>
          <polyline points="9 22 9 12 15 12 15 22" style={{ stroke: homeColor }}></polyline>
        </svg>
        <span style={{ fontSize: "11px", marginTop: "4px", color: homeColor, fontWeight: isHome ? "700" : "600" }}>
          Home
        </span>
      </a>

      {/* 2. Inventory Tab */}
      <a href="/inventory" style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none", width: "20%" }}>
        <svg 
          width="22" 
          height="22" 
          viewBox="0 0 24 24" 
          fill="none" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          style={{ stroke: inventoryColor }}
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" style={{ stroke: inventoryColor }}></rect>
          <line x1="3" y1="9" x2="21" y2="9" style={{ stroke: inventoryColor }}></line>
          <line x1="9" y1="21" x2="9" y2="9" style={{ stroke: inventoryColor }}></line>
        </svg>
        <span style={{ fontSize: "11px", marginTop: "4px", color: inventoryColor, fontWeight: isInventory ? "700" : "600" }}>
          Inventory
        </span>
      </a>

      {/* 3. Center Branding Action Button (AI Chatbot) */}
      <div style={{ position: "relative", width: "20%", display: "flex", justifyContent: "center", top: "-16px" }}>
        <div style={{
          width: "58px",
          height: "58px",
          backgroundColor: "#EA6113",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center", // Fixed the casing issue right here!
          boxShadow: "0 4px 12px rgba(234, 97, 19, 0.3)",
          cursor: "pointer"
        }}>
          <img 
            src={aiChatbotIcon} 
            alt="SariSmart AI Chatbot" 
            style={{ 
              width: "40px", 
              height: "40px", 
              objectFit: "contain" 
            }} 
          />
        </div>
      </div>

      {/* 4. Insights Tab */}
      <a href="/insights" style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none", width: "20%" }}>
        <svg 
          width="22" 
          height="22" 
          viewBox="0 0 24 24" 
          fill="none" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          style={{ stroke: insightsColor }}
        >
          <line x1="18" y1="20" x2="18" y2="10" style={{ stroke: insightsColor }}></line>
          <line x1="12" y1="20" x2="12" y2="4" style={{ stroke: insightsColor }}></line>
          <line x1="6" y1="20" x2="6" y2="14" style={{ stroke: insightsColor }}></line>
        </svg>
        <span style={{ fontSize: "11px", marginTop: "4px", color: insightsColor, fontWeight: isInsights ? "700" : "600" }}>
          Insights
        </span>
      </a>

      {/* 5. Profile Tab */}
      <a href="/profile" style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none", width: "20%" }}>
        <svg 
          width="22" 
          height="22" 
          viewBox="0 0 24 24" 
          fill="none" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          style={{ stroke: profileColor }}
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" style={{ stroke: profileColor }}></path>
          <circle cx="12" cy="7" r="4" style={{ stroke: profileColor }}></circle>
        </svg>
        <span style={{ fontSize: "11px", marginTop: "4px", color: profileColor, fontWeight: isProfile ? "700" : "600" }}>
          Profile
        </span>
      </a>
    </footer>
  );
}