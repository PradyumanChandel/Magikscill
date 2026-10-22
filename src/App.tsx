import React, { useState, useMemo } from 'react';
import { ProProfile, UniversalWorkOrder } from './types';
import {
  INITIAL_PRO_PROFILE,
  TEST_PERSONAS,
  TestPersonaConfig,
  getOrdersForTrade,
} from './data/mockData';
import { LoginView } from './components/LoginView';
import { HeaderModule } from './components/HeaderModule';
import { HeroJobCard } from './components/HeroJobCard';
import { AsymmetricWorkGrid } from './components/AsymmetricWorkGrid';
import { BottomDock, TabType } from './components/BottomDock';
import { WatermarkCameraModal } from './components/WatermarkCameraModal';
import { UpiPayoutModal } from './components/UpiPayoutModal';
import { SosModal } from './components/SosModal';
import { JobDetailModal } from './components/JobDetailModal';
import { SearchFilterModal } from './components/SearchFilterModal';
import { RadarWorkOrdersView } from './components/RadarWorkOrdersView';
import { LedgerWalletView } from './components/LedgerWalletView';
import { ProProfileView } from './components/ProProfileView';
import { TradeCanvasBackground } from './components/TradeCanvasBackground';
import { resolveTradeIcon } from './utils/tradeIconResolver';
import { resolveTradeFromProId, getTradeTheme } from './utils/tradeThemeEngine';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pro, setPro] = useState<ProProfile>(INITIAL_PRO_PROFILE);
  const [orders, setOrders] = useState<UniversalWorkOrder[]>(
    getOrdersForTrade(INITIAL_PRO_PROFILE.tradeCategory || 'electrical')
  );
  const [activeTab, setActiveTab] = useState<TabType>('projects');

  // Dynamic Trade UI Profile (ambient theme, background gradient, card radius, dock style)
  const currentTheme = useMemo(
    () => getTradeTheme(pro.title || pro.tradeCategory),
    [pro.title, pro.tradeCategory]
  );

  // Modals state
  const [isWatermarkOpen, setIsWatermarkOpen] = useState(false);
  const [isUpiPayoutOpen, setIsUpiPayoutOpen] = useState(false);
  const [isSosOpen, setIsSosOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<UniversalWorkOrder | null>(null);

  // Quick Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isRefreshingRadar, setIsRefreshingRadar] = useState(false);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleRefreshRadar = () => {
    setIsRefreshingRadar(true);
    setTimeout(() => {
      setIsRefreshingRadar(false);
      showToast('Dispatch Radar refreshed · Prayagraj 5 km Radius active');
    }, 600);
  };

  const handleCallClient = (phone: string, clientName: string) => {
    showToast(`Calling ${clientName} (${phone})...`);
    window.location.href = `tel:${phone}`;
  };

  const handlePayoutSuccess = (amount: number) => {
    setPro((prev) => ({
      ...prev,
      walletBalance: 0,
    }));
    showToast(`₹${amount.toLocaleString('en-IN')} transferred to ${pro.upiId}!`);
  };

  const handleCompleteOrder = (orderId: string) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === orderId
          ? { ...o, status: 'Completed', escrowStatus: 'Released' }
          : o
      )
    );

    const completed = orders.find((o) => o.id === orderId);
    if (completed) {
      const escrowVal = completed.escrowAmount ?? completed.escrowLockedAmount ?? 199;
      setPro((prev) => ({
        ...prev,
        walletBalance: prev.walletBalance + escrowVal,
        escrowPending: Math.max(0, prev.escrowPending - escrowVal),
        dailyTarget: {
          ...prev.dailyTarget,
          inspectionsDone: Math.min(
            prev.dailyTarget.inspectionsTarget,
            prev.dailyTarget.inspectionsDone + 1
          ),
        },
      }));
      const num = completed.orderNumber || completed.id;
      showToast(`Job ${num} completed! ₹${escrowVal} released to wallet.`);
    }
  };

  const handleToggleDuty = () => {
    setPro((prev) => {
      const nextState = !prev.isOnline;
      showToast(
        nextState
          ? 'On-Duty: Radar active for Prayagraj 5 km dispatches'
          : 'Off-Duty: Radar paused · Dispatches suspended'
      );
      return {
        ...prev,
        isOnline: nextState,
      };
    });
  };

  // Orders assignment with strict trade isolation
  const currentTradeOrders = useMemo(
    () => (orders.length > 0 ? orders : getOrdersForTrade(pro.title || pro.tradeCategory)),
    [orders, pro.title, pro.tradeCategory]
  );
  const primaryOrder = currentTradeOrders[0];
  const secondaryOrder = currentTradeOrders[1];
  const upcomingOrder = currentTradeOrders[2];

  const handleStartInspection = (order: UniversalWorkOrder) => {
    setSelectedOrder(order);
    setIsWatermarkOpen(true);
  };

  const handleSelectTrade = (tradeTitle: string) => {
    setPro((prev) => ({
      ...prev,
      title: tradeTitle,
    }));

    const resolved = resolveTradeIcon(tradeTitle);
    // Strict trade isolation: Load only orders from this exact trade
    const isolated = getOrdersForTrade(tradeTitle);
    setOrders(isolated);

    showToast(`Active Trade: "${tradeTitle}" · ${resolved.label} ecosystem active!`);
  };

  const handleSelectPersona = (persona: TestPersonaConfig) => {
    setPro(persona.proProfile);

    // Zero cross-contamination: Load orders strictly belonging to this pro's trade
    const isolated = getOrdersForTrade(persona.title || persona.tradeCategory);
    setOrders(isolated);

    setIsLoggedIn(true);
    showToast(`Active Pro: ${persona.name} · ${persona.accountId} (${persona.title})`);
  };

  const handleLoginWithProId = (proIdInput: string) => {
    const cleanId = proIdInput.trim().toUpperCase();

    // 1. Exact match in TEST_PERSONAS by accountId
    const exactMatch = TEST_PERSONAS.find(
      (p) => p.accountId.toUpperCase() === cleanId
    );

    if (exactMatch) {
      handleSelectPersona(exactMatch);
      showToast(`Welcome, ${exactMatch.name}! ${cleanId} Terminal active`);
      return;
    }

    // 2. Decode trade prefix using resolveTradeFromProId
    const decodedTrade = resolveTradeFromProId(cleanId);
    const personaByTrade = TEST_PERSONAS.find(
      (p) =>
        p.tradeCategory === decodedTrade ||
        (decodedTrade === 'makeup' && p.tradeCategory === 'beauty')
    );

    if (personaByTrade) {
      const customPersona: TestPersonaConfig = {
        ...personaByTrade,
        accountId: cleanId,
        proProfile: {
          ...personaByTrade.proProfile,
          accountId: cleanId,
        },
      };
      handleSelectPersona(customPersona);
      showToast(`${cleanId} recognized: ${personaByTrade.title} OS active`);
    } else {
      handleSelectPersona(TEST_PERSONAS[0]);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    showToast('Session ended · Enter Pro Account ID');
  };

  // If not logged in, display dedicated mobile LoginView with 1-tap persona tray
  if (!isLoggedIn) {
    return (
      <>
        <LoginView
          onSelectPersona={handleSelectPersona}
          onLoginWithProId={handleLoginWithProId}
          onLoginSuccess={(id) => handleLoginWithProId(id)}
        />
        {/* In-app Toast Banner */}
        {toastMessage && (
          <div className="fixed top-5 inset-x-5 max-w-[380px] mx-auto z-60 bg-[#111111] text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs font-semibold backdrop-blur-md animate-in fade-in slide-in-from-top-3 duration-200">
            <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
            <span className="flex-1 truncate">{toastMessage}</span>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="relative w-full min-h-[100dvh] overflow-x-hidden flex justify-center bg-transparent">
      {/* Dedicated Atmospheric Background Texture & Trade-Native Ambient Canvas */}
      <TradeCanvasBackground
        texture={currentTheme.canvasTexture}
        accentHex={currentTheme.accentHex}
      />

      {/* Responsive mobile frame matching prompt constraint */}
      <main className="w-full max-w-[390px] sm:max-w-[420px] min-h-[100dvh] px-3.5 sm:px-4 pt-3 pb-28 flex flex-col gap-4 box-border relative z-10 bg-white/70 backdrop-blur-md text-[#111111] select-none shadow-2xl overflow-x-hidden transition-all duration-500">
        {/* Clean & Minimal Header Module with Dynamic Trade Switcher */}
        <HeaderModule
          pro={pro}
          onOpenSearch={() => setIsSearchOpen(true)}
          onSelectTrade={handleSelectTrade}
          onLogout={handleLogout}
        />

        {/* Tab 1: Home / Projects View (Primary Active Job Promoted to Top Hero Card) */}
        {(activeTab === 'projects' || activeTab === 'home') && (
          <>
            {/* Top Hero Card: Primary Active Job in Soft Pastel Lilac Tinted Glass */}
            <HeroJobCard
              order={primaryOrder}
              trade={pro.title}
              onSelectOrder={(order) => setSelectedOrder(order)}
              onCallClient={handleCallClient}
              onStartInspection={handleStartInspection}
            />

            {/* Secondary Work Order Grid */}
            <AsymmetricWorkGrid
              secondaryOrder={secondaryOrder}
              upcomingOrder={upcomingOrder}
              activeTrade={pro.title}
              onSelectOrder={(order) => setSelectedOrder(order)}
            />

          </>
        )}

        {/* Tab 2: Queue / Work Orders Radar */}
        {(activeTab === 'queue' || activeTab === 'radar') && (
          <RadarWorkOrdersView
            orders={orders}
            onSelectOrder={(order) => setSelectedOrder(order)}
            onRefreshRadar={handleRefreshRadar}
            isRefreshing={isRefreshingRadar}
          />
        )}

        {/* Tab 3: Daily Ledger / Wallet */}
        {activeTab === 'wallet' && (
          <LedgerWalletView
            pro={pro}
            onOpenUpiPayout={() => setIsUpiPayoutOpen(true)}
          />
        )}

        {/* Tab 4: Pro ID / Settings */}
        {activeTab === 'profile' && (
          <ProProfileView
            pro={pro}
            onToggleOnline={handleToggleDuty}
            onLogout={handleLogout}
          />
        )}

        {/* Interactive Modals */}
        <WatermarkCameraModal
          isOpen={isWatermarkOpen}
          onClose={() => setIsWatermarkOpen(false)}
          activeOrder={selectedOrder || primaryOrder}
        />

        <UpiPayoutModal
          isOpen={isUpiPayoutOpen}
          onClose={() => setIsUpiPayoutOpen(false)}
          pro={pro}
          onPayoutSuccess={handlePayoutSuccess}
        />

        <SosModal
          isOpen={isSosOpen}
          onClose={() => setIsSosOpen(false)}
          pro={pro}
        />

        <JobDetailModal
          order={selectedOrder}
          isOpen={!!selectedOrder}
          onClose={() => setSelectedOrder(null)}
          onCallClient={handleCallClient}
          onOpenWatermark={() => {
            setSelectedOrder(null);
            setIsWatermarkOpen(true);
          }}
          onCompleteOrder={handleCompleteOrder}
        />

        <SearchFilterModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          orders={orders}
          onSelectOrder={(order) => setSelectedOrder(order)}
        />

        {/* In-app Toast Banner */}
        {toastMessage && (
          <div className="fixed top-5 inset-x-5 max-w-[380px] mx-auto z-60 bg-[#111111] text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs font-semibold backdrop-blur-md animate-in fade-in slide-in-from-top-3 duration-200">
            <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
            <span className="flex-1 truncate">{toastMessage}</span>
          </div>
        )}
      </main>

      {/* Floating Bottom Navigation Dock (High-contrast pill dock with pb-28 clearance) */}
      <BottomDock
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
        onSelectTab={(tab) => setActiveTab(tab)}
        pendingOrdersCount={orders.filter((o) => o.status !== 'Completed').length}
        tradeTitle={pro.title}
      />
    </div>
  );
}
