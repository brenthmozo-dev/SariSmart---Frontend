import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import { apiFetch } from "../utils/api.js";
import { getTranslation } from "../data/translations";

export default function TopSellingProductsPage({ onNavigate }) {
  const navigate = useNavigate();
  const t = getTranslation();
  const [activeTab, setActiveTab] = useState("week"); // 'week' | 'month' | 'year'
  const [topProducts, setTopProducts] = useState([]);

  const BASE_URL = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace(/\\+$/, "") : "";
  const API_URL = BASE_URL;

  useEffect(() => {
    // Map UI tabs to backend timeframe values (backend expects TODAY, WEEK, MONTH etc.)
    const timeframeMap = { week: "WEEK", month: "MONTH", year: "YEAR" };
    const tf = timeframeMap[activeTab] || "WEEK";
    apiFetch(`${API_URL}/api/insights?timeframe=${tf}`)
      .then(res => res.json())
      .then(json => setTopProducts(json.topProducts || []))
      .catch(console.error);
  }, [activeTab]);

  const handleBack = () => {
    if (onNavigate) onNavigate("insights");
    else navigate("/insights");
  };

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght=400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .tspp-wrapper { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f0f0f0; font-family: 'Manrope', sans-serif; }
        .tspp-shell { width: 390px; height: 844px; background: #ffffff; border-radius: 48px; box-shadow: 0 24px 80px rgba(0,0,0,0.18), 0 0 0 10px #1a1a1a, 0 0 0 12px #333; overflow: hidden; position: relative; display: flex; flex-direction: column; }
        .tspp-status-bar { display: flex; justify-content: space-between; align-items: center; padding: 16px 24px 0; font-size: 13px; font-weight: 700; color: #1a1a1a; flex-shrink: 0; }
        .tspp-status-icons { display: flex; gap: 6px; align-items: center; }
        .tspp-header { display: flex; align-items: center; gap: 12px; padding: 18px 20px 10px; }
        .tspp-back-btn { background: none; border: none; cursor: pointer; padding: 4px; display: flex; align-items: center; color: #1a1a1a; }
        .tspp-title { font-size: 20px; font-weight: 800; color: #1a1a1a; }
        .tspp-tabs-container { display: flex; padding: 4px 16px; margin-bottom: 12px; border-bottom: 1px solid #F1F5F9; }
        .tspp-tab { flex: 1; text-align: center; background: none; border: none; padding: 10px 0; font-size: 14px; font-weight: 700; color: #94A3B8; cursor: pointer; position: relative; font-family: 'Manrope', sans-serif; }
        .tspp-tab.active { color: #E8821A; }
        .tspp-tab.active::after { content: ''; position: absolute; bottom: -1px; left: 20%; right: 20%; height: 3px; background: #E8821A; border-radius: 99px; }
        .tspp-scroll { flex: 1; overflow-y: auto; scrollbar-width: none; padding: 4px 16px 100px; }
        .tspp-scroll::-webkit-scrollbar { display: none; }
        .tspp-list { display: flex; flex-direction: column; gap: 10px; }
        .tspp-item-card { display: flex; align-items: center; padding: 14px 16px; background: #FFFFFF; border: 1.5px solid #E2E8F0; border-radius: 16px; transition: border-color 0.2s, background 0.2s; }
        .tspp-item-card:hover { border-color: #E8821A; background: #FFFBF7; }
        .tspp-rank-badge { width: 32px; height: 32px; border-radius: 50%; background: #F1F5F9; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800; color: #475569; margin-right: 14px; flex-shrink: 0; }
        .tspp-item-card:nth-child(1) .tspp-rank-badge { background: #FFEEDC; color: #E8821A; }
        .tspp-item-card:nth-child(2) .tspp-rank-badge { background: #F1F5F9; color: #475569; }
        .tspp-item-card:nth-child(3) .tspp-rank-badge { background: #EFF6FF; color: #1D4ED8; }
        .tspp-details-block { flex: 1; display: flex; flex-direction: column; }
        .tspp-item-name { font-size: 15px; font-weight: 700; color: #1A1A1A; margin-bottom: 2px; }
        .tspp-item-sales { font-size: 13px; font-weight: 500; color: #64748B; }
        .tspp-metrics-block { text-align: right; display: flex; flex-direction: column; align-items: flex-end; }
        .tspp-item-revenue { font-size: 15px; font-weight: 800; color: #1A1A1A; margin-bottom: 2px; }
        .tspp-item-growth { font-size: 12px; font-weight: 700; color: #2E9E5B; }
        .tspp-item-growth.negative { color: #E84545; }
        .tspp-home-indicator { height: 24px; display: flex; align-items: center; justify-content: center; background: white; flex-shrink: 0; }
        .tspp-home-bar { width: 120px; height: 5px; border-radius: 3px; background: #ddd; }
      `}</style>
      <div className="tspp-wrapper">
        <div className="tspp-shell">
          <div className="tspp-status-bar"><span>9:41</span><div className="tspp-status-icons"/></div>
          <div className="tspp-header">
            <button className="tspp-back-btn" onClick={handleBack}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M5 12L12 19M5 12L12 5"/></svg>
            </button>
            <span className="tspp-title">Top Selling Products</span>
          </div>
          <div className="tspp-tabs-container">
            <button className={`tspp-tab ${activeTab === "week" ? "active" : ""}`} onClick={() => setActiveTab("week")}>This Week</button>
            <button className={`tspp-tab ${activeTab === "month" ? "active" : ""}`} onClick={() => setActiveTab("month")}>This Month</button>
            <button className={`tspp-tab ${activeTab === "year" ? "active" : ""}`} onClick={() => setActiveTab("year")}>This Year</button>
          </div>
          <div className="tspp-scroll">
            <div className="tspp-list">
              {topProducts.length === 0 ? (
                <div style={{ padding: 16, fontSize: 14, color: "#666" }}>{t.noDataAvailable}</div>
              ) : (
                topProducts.map((product, idx) => (
                  <div key={idx} className="tspp-item-card">
                    <div className="tspp-rank-badge">{idx + 1}</div>
                    <div className="tspp-details-block">
                      <span className="tspp-item-name">{product.name}</span>
                      <span className="tspp-item-sales">{product.category}</span>
                    </div>
                    <div className="tspp-metrics-block">
                      <span className="tspp-item-revenue">₱{product.revenue.toFixed(2)}</span>
                      <span className={`tspp-item-growth ${product.growth && product.growth.startsWith('-') ? 'negative' : ''}`}>
                        {product.growth || ''}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <BottomNav />
          <div className="tspp-home-indicator"><div className="tspp-home-bar"/></div>
        </div>
      </div>
    </>
  );
}