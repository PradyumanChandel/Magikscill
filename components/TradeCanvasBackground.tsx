import React, { useMemo } from 'react';
import { TradeCanvasTexture } from '../utils/tradeThemeEngine';

interface TradeCanvasBackgroundProps {
  texture?: TradeCanvasTexture | string;
  accentHex?: string;
  className?: string;
}

/**
 * 1. MAKEUP & BEAUTY STUDIO WALL
 * Atmosphere: Luxury Salon & Bridal Vanity Dressing Room
 * - Warm blush champagne plaster wall
 * - Parisian arched wall molding panels in rose-gold relief
 * - 6-point warm ambient Hollywood vanity light bulb flares along top and flanks
 * - Floating micro-glint sparkles and draped satin curvature
 */
const MakeupStudioWall: React.FC = () => (
  <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#FFF2F6] via-[#FDE5EE] to-[#FAD4E2] overflow-hidden">
    {/* Base Venetian Plaster Warm Lighting Pool */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_25%,rgba(255,255,255,0.95)_0%,rgba(254,226,236,0.6)_50%,rgba(251,182,206,0.25)_100%)]" />

    {/* Top Center Vanity Daylight Diffuser Pool */}
    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-72 rounded-full blur-3xl opacity-80 bg-[radial-gradient(circle,rgba(255,248,235,1)_0%,rgba(254,205,223,0.5)_50%,transparent_75%)]" />

    {/* Hollywood Vanity Bulb Flares - Top Horizon (3 bulbs) */}
    <div className="absolute top-2 inset-x-0 flex justify-around pointer-events-none px-6 max-w-4xl mx-auto">
      {[1, 2, 3].map((b) => (
        <div key={`bulb-top-${b}`} className="relative flex flex-col items-center">
          {/* Bulb Mounting Collar */}
          <div className="w-3.5 h-2 bg-gradient-to-b from-amber-400 to-amber-600 rounded-b-xs shadow-xs" />
          {/* Glowing Bulb Core */}
          <div className="w-5 h-5 rounded-full bg-gradient-to-b from-[#FFFDF2] to-[#FDE68A] border border-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.9)] relative">
            <span className="absolute inset-0.5 rounded-full bg-white opacity-80 blur-[0.5px]" />
          </div>
          {/* Warm Radiant Flare Pool */}
          <div className="absolute -inset-10 rounded-full blur-xl bg-[radial-gradient(circle,rgba(255,243,205,0.9)_0%,rgba(253,164,175,0.4)_45%,transparent_70%)] pointer-events-none" />
        </div>
      ))}
    </div>

    {/* Hollywood Vanity Bulb Strips - Left Flank */}
    <div className="hidden md:flex absolute left-4 top-24 bottom-24 flex-col justify-around pointer-events-none">
      {[1, 2, 3, 4].map((b) => (
        <div key={`bulb-left-${b}`} className="relative flex items-center">
          <div className="w-2 h-3.5 bg-gradient-to-r from-amber-600 to-amber-400 rounded-l-xs shadow-xs" />
          <div className="w-5 h-5 rounded-full bg-gradient-to-b from-[#FFFDF2] to-[#FDE68A] border border-amber-300 shadow-[0_0_14px_rgba(251,191,36,0.85)] relative">
            <span className="absolute inset-0.5 rounded-full bg-white opacity-80 blur-[0.5px]" />
          </div>
          <div className="absolute -inset-10 rounded-full blur-xl bg-[radial-gradient(circle,rgba(255,243,205,0.85)_0%,rgba(253,164,175,0.35)_45%,transparent_70%)] pointer-events-none" />
        </div>
      ))}
    </div>

    {/* Hollywood Vanity Bulb Strips - Right Flank */}
    <div className="hidden md:flex absolute right-4 top-24 bottom-24 flex-col justify-around pointer-events-none">
      {[1, 2, 3, 4].map((b) => (
        <div key={`bulb-right-${b}`} className="relative flex items-center">
          <div className="w-5 h-5 rounded-full bg-gradient-to-b from-[#FFFDF2] to-[#FDE68A] border border-amber-300 shadow-[0_0_14px_rgba(251,191,36,0.85)] relative">
            <span className="absolute inset-0.5 rounded-full bg-white opacity-80 blur-[0.5px]" />
          </div>
          <div className="w-2 h-3.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-r-xs shadow-xs" />
          <div className="absolute -inset-10 rounded-full blur-xl bg-[radial-gradient(circle,rgba(255,243,205,0.85)_0%,rgba(253,164,175,0.35)_45%,transparent_70%)] pointer-events-none" />
        </div>
      ))}
    </div>

    {/* Architectural Parisian Arched Boiserie Wall Molding Panels (SVG) */}
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Rose Gold Molding Gradient */}
        <linearGradient id="roseGoldMolding" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FB7185" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#FDA4AF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#E11D48" stopOpacity="0.4" />
        </linearGradient>
        {/* Subtle Highlight Reflection */}
        <linearGradient id="moldingHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Left Wall Arched Panel */}
      <g className="opacity-70">
        {/* Outer Frame with Arched Top */}
        <path
          d="M 28 90 L 28 850 L 140 850 L 140 90 Q 84 50 28 90 Z"
          fill="none"
          stroke="url(#roseGoldMolding)"
          strokeWidth="2.5"
        />
        {/* Inner Molding Inset */}
        <path
          d="M 36 96 L 36 842 L 132 842 L 132 96 Q 84 62 36 96 Z"
          fill="none"
          stroke="url(#moldingHighlight)"
          strokeWidth="1.2"
        />
        {/* Center Rosette Motif */}
        <circle cx="84" cy="74" r="5" fill="none" stroke="#FB7185" strokeWidth="1.2" strokeOpacity="0.5" />
      </g>

      {/* Right Wall Arched Panel */}
      <g className="opacity-70">
        <path
          d="M calc(100% - 140px) 90 L calc(100% - 140px) 850 L calc(100% - 28px) 850 L calc(100% - 28px) 90 Q calc(100% - 84px) 50 calc(100% - 140px) 90 Z"
          fill="none"
          stroke="url(#roseGoldMolding)"
          strokeWidth="2.5"
        />
        <path
          d="M calc(100% - 132px) 96 L calc(100% - 132px) 842 L calc(100% - 36px) 842 L calc(100% - 36px) 96 Q calc(100% - 84px) 62 calc(100% - 132px) 96 Z"
          fill="none"
          stroke="url(#moldingHighlight)"
          strokeWidth="1.2"
        />
        <circle cx="calc(100% - 84px)" cy="74" r="5" fill="none" stroke="#FB7185" strokeWidth="1.2" strokeOpacity="0.5" />
      </g>

      {/* Elegant Satin Draped Waves across bottom */}
      <path
        d="M 0 500 C 120 460, 260 540, 420 490 C 580 440, 740 520, 900 480 C 1060 440, 1200 510, 1440 470"
        fill="none"
        stroke="#F43F5E"
        strokeWidth="1.8"
        strokeOpacity="0.16"
      />
      <path
        d="M 0 530 C 150 490, 300 570, 480 520 C 640 470, 800 550, 960 510 C 1120 470, 1280 540, 1440 500"
        fill="none"
        stroke="#FB7185"
        strokeWidth="1.4"
        strokeOpacity="0.2"
      />
    </svg>

    {/* Floating Micro-Glint Sparkles (✦) */}
    <div className="absolute top-28 left-[18%] text-rose-300/80 text-xl font-serif select-none pointer-events-none animate-pulse">✦</div>
    <div className="absolute top-64 right-[16%] text-amber-300/90 text-sm font-serif select-none pointer-events-none">✦</div>
    <div className="absolute top-96 left-[22%] text-rose-400/60 text-base font-serif select-none pointer-events-none">✦</div>
    <div className="absolute bottom-40 right-[20%] text-amber-300/75 text-lg font-serif select-none pointer-events-none">✦</div>
    <div className="absolute bottom-20 left-[14%] text-rose-300/70 text-xs font-serif select-none pointer-events-none">✦</div>
  </div>
);

/**
 * 2. MASTER ELECTRICIAN SUBSTATION WALL
 * Atmosphere: Modern High-Voltage Control Room / Tech Grid
 * - Deep slate-indigo industrial composite
 * - Illuminated vertical copper busbar conduit channels
 * - Amber warning beacon glow at top-right
 * - Electric violet / cobalt neon corona backlighting
 */
const ElectricalSubstationWall: React.FC = () => (
  <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#0B0D18] via-[#101426] to-[#181B34] overflow-hidden">
    {/* High-Voltage Ambient Violet Corona - Top Left */}
    <div className="absolute -top-32 -left-32 w-[34rem] h-[34rem] rounded-full blur-3xl opacity-65 bg-[radial-gradient(circle,rgba(124,58,237,0.6)_0%,rgba(99,102,241,0.25)_45%,transparent_70%)]" />

    {/* High-Voltage Amber Warning Beacon Glow - Top Right */}
    <div className="absolute -top-24 -right-24 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-75 bg-[radial-gradient(circle,rgba(245,158,11,0.7)_0%,rgba(217,119,6,0.3)_45%,transparent_70%)]" />

    {/* Bottom Grid Power Pool */}
    <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[42rem] h-[28rem] rounded-full blur-3xl opacity-50 bg-[radial-gradient(circle,rgba(79,70,229,0.4)_0%,rgba(147,51,234,0.18)_50%,transparent_75%)]" />

    {/* Top Right Warning Beacon Element with Glowing Rings */}
    <div className="hidden sm:flex absolute top-6 right-8 flex-col items-center pointer-events-none">
      <div className="relative">
        <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-amber-400 opacity-60" />
        <div className="relative w-6 h-6 rounded-full bg-gradient-to-br from-amber-300 to-amber-600 border border-amber-200 shadow-[0_0_18px_rgba(245,158,11,0.95)] flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-white shadow-xs" />
        </div>
      </div>
      <span className="text-[9px] font-mono font-black text-amber-400 tracking-wider mt-1 px-1.5 py-0.5 rounded bg-black/60 border border-amber-500/40">
        415V LIVE
      </span>
    </div>

    {/* Left Flank High-Voltage Vertical Copper Busbars & Conduit Channels */}
    <div className="hidden md:flex absolute left-8 top-0 bottom-0 w-20 flex-col items-center pointer-events-none">
      {/* Dual Copper Busbar Tracks */}
      <div className="relative w-12 h-full flex justify-between">
        {/* Busbar A */}
        <div className="w-3.5 h-full bg-gradient-to-r from-[#B45309] via-[#F59E0B] to-[#78350F] shadow-[0_0_10px_rgba(245,158,11,0.4)] relative">
          <div className="absolute inset-y-0 left-0.5 w-0.5 bg-amber-200/80" />
          {/* Standoff Insulator Brackets spaced vertically */}
          {[120, 260, 400, 540, 680, 820].map((topPos) => (
            <div
              key={`insulator-a-${topPos}`}
              style={{ top: `${topPos}px` }}
              className="absolute -left-1.5 w-6 h-3 rounded-xs bg-[#1E293B] border border-amber-400/50 shadow-xs flex items-center justify-center"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            </div>
          ))}
        </div>

        {/* Busbar B */}
        <div className="w-3.5 h-full bg-gradient-to-r from-[#78350F] via-[#F59E0B] to-[#B45309] shadow-[0_0_10px_rgba(245,158,11,0.4)] relative">
          <div className="absolute inset-y-0 right-0.5 w-0.5 bg-amber-200/80" />
          {[120, 260, 400, 540, 680, 820].map((topPos) => (
            <div
              key={`insulator-b-${topPos}`}
              style={{ top: `${topPos}px` }}
              className="absolute -left-1.5 w-6 h-3 rounded-xs bg-[#1E293B] border border-amber-400/50 shadow-xs flex items-center justify-center"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Right Flank High-Voltage Vertical Copper Busbars & Conduit Channels */}
    <div className="hidden md:flex absolute right-8 top-0 bottom-0 w-20 flex-col items-center pointer-events-none">
      <div className="relative w-12 h-full flex justify-between">
        <div className="w-3.5 h-full bg-gradient-to-r from-[#B45309] via-[#F59E0B] to-[#78350F] shadow-[0_0_10px_rgba(245,158,11,0.4)] relative">
          <div className="absolute inset-y-0 left-0.5 w-0.5 bg-amber-200/80" />
          {[120, 260, 400, 540, 680, 820].map((topPos) => (
            <div
              key={`insulator-r-a-${topPos}`}
              style={{ top: `${topPos}px` }}
              className="absolute -left-1.5 w-6 h-3 rounded-xs bg-[#1E293B] border border-amber-400/50 shadow-xs flex items-center justify-center"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            </div>
          ))}
        </div>
        <div className="w-3.5 h-full bg-gradient-to-r from-[#78350F] via-[#F59E0B] to-[#B45309] shadow-[0_0_10px_rgba(245,158,11,0.4)] relative">
          <div className="absolute inset-y-0 right-0.5 w-0.5 bg-amber-200/80" />
          {[120, 260, 400, 540, 680, 820].map((topPos) => (
            <div
              key={`insulator-r-b-${topPos}`}
              style={{ top: `${topPos}px` }}
              className="absolute -left-1.5 w-6 h-3 rounded-xs bg-[#1E293B] border border-amber-400/50 shadow-xs flex items-center justify-center"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Technical Geometric Circuit Conduit Pattern (SVG) */}
    <svg
      className="absolute inset-0 w-full h-full opacity-25 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="elec-iso-grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path
            d="M 0 30 L 30 0 L 60 30 L 30 60 Z"
            fill="none"
            stroke="#818CF8"
            strokeWidth="0.8"
            strokeDasharray="2 3"
          />
          <path
            d="M 30 30 L 60 30 M 30 30 L 30 60"
            fill="none"
            stroke="#A78BFA"
            strokeWidth="1.2"
          />
          <circle cx="30" cy="30" r="2" fill="#F59E0B" />
          <circle cx="60" cy="30" r="1.5" fill="#818CF8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#elec-iso-grid)" />
    </svg>
  </div>
);

/**
 * 3. HYDRO RISER PLUMBING WALL
 * Atmosphere: Architectural Wet-Room / High-Rise Hydro Station
 * - Deep ocean-tinted ceramic subway tile grid
 * - Vertical brushed-chrome pipeline risers with pressure gauge shadow profiles
 * - Caustic water light refraction pools
 */
const PlumbingHydroWall: React.FC = () => (
  <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#041A24] via-[#083040] to-[#0A3D52] overflow-hidden">
    {/* Caustic Water Light Refraction Glow - Top Center */}
    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[38rem] h-[26rem] rounded-full blur-3xl opacity-70 bg-[radial-gradient(circle,rgba(6,182,212,0.6)_0%,rgba(20,184,166,0.25)_50%,transparent_75%)]" />

    {/* Hydro Pool Glow - Bottom */}
    <div className="absolute -bottom-32 left-1/3 w-[36rem] h-[28rem] rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle,rgba(14,116,144,0.5)_0%,rgba(6,182,212,0.2)_50%,transparent_75%)]" />

    {/* Architectural Ceramic Subway Tile Grid (SVG) */}
    <svg
      className="absolute inset-0 w-full h-full opacity-35 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Subway Tile Pattern (100x50 bricks with bevel lines) */}
        <pattern id="subway-tile-hydro" width="100" height="50" patternUnits="userSpaceOnUse">
          {/* Row 1 */}
          <rect x="1" y="1" width="98" height="23" rx="2" fill="#0E374A" stroke="#06222F" strokeWidth="1.5" />
          {/* Tile Gloss Highlight line */}
          <line x1="4" y1="3" x2="96" y2="3" stroke="#22D3EE" strokeWidth="0.8" strokeOpacity="0.4" />

          {/* Row 2 (offset by 50px) */}
          <rect x="-49" y="26" width="98" height="23" rx="2" fill="#0E374A" stroke="#06222F" strokeWidth="1.5" />
          <line x1="-46" y1="28" x2="46" y2="28" stroke="#22D3EE" strokeWidth="0.8" strokeOpacity="0.4" />

          <rect x="51" y="26" width="98" height="23" rx="2" fill="#0E374A" stroke="#06222F" strokeWidth="1.5" />
          <line x1="54" y1="28" x2="146" y2="28" stroke="#22D3EE" strokeWidth="0.8" strokeOpacity="0.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#subway-tile-hydro)" />
    </svg>

    {/* Left Flank Brushed-Chrome Pipeline Riser with Analog Pressure Gauge */}
    <div className="hidden md:flex absolute left-8 top-0 bottom-0 w-24 flex-col items-center pointer-events-none">
      {/* Vertical Chrome Pipe */}
      <div className="relative w-6 h-full bg-gradient-to-r from-[#155E75] via-[#A5F3FC] to-[#0E7490] shadow-[0_0_16px_rgba(6,182,212,0.45)]">
        {/* Specular White Highlight Bar */}
        <div className="absolute inset-y-0 left-1 w-1 bg-white/75" />

        {/* Flanged Pipe Joint Couplings */}
        {[140, 360, 580, 800].map((pos) => (
          <div
            key={`flange-left-${pos}`}
            style={{ top: `${pos}px` }}
            className="absolute -left-2 w-10 h-4 bg-gradient-to-r from-[#0E7490] via-[#CFFAFE] to-[#155E75] border-y border-cyan-300/60 rounded-xs shadow-md flex items-center justify-around"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#083344] border border-cyan-200" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#083344] border border-cyan-200" />
          </div>
        ))}

        {/* Analog Pressure Gauge at top-24 */}
        <div className="absolute top-24 -left-7 w-20 h-20 rounded-full bg-gradient-to-br from-[#164E63] to-[#083344] border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.6)] flex items-center justify-center">
          {/* Dial Face */}
          <div className="w-15 h-15 rounded-full bg-white relative flex flex-col items-center justify-center p-1 text-[#083344]">
            {/* Pressure Ticks */}
            <div className="text-[7.5px] font-black uppercase tracking-tight">BAR</div>
            <div className="text-[11px] font-black font-mono leading-none text-cyan-700">4.2</div>
            <div className="text-[6.5px] font-bold text-emerald-600">STATIC OK</div>
            {/* Dial Needle */}
            <div className="absolute w-6 h-0.5 bg-rose-600 top-7 left-4.5 rotate-45 origin-right shadow-xs" />
          </div>
        </div>
      </div>
    </div>

    {/* Right Flank Copper Riser & Gate Valve Wheel */}
    <div className="hidden md:flex absolute right-8 top-0 bottom-0 w-24 flex-col items-center pointer-events-none">
      <div className="relative w-5 h-full bg-gradient-to-r from-[#9A3412] via-[#FDBA74] to-[#7C2D12] shadow-[0_0_14px_rgba(249,115,22,0.35)]">
        <div className="absolute inset-y-0 left-0.5 w-0.5 bg-amber-100/80" />

        {/* Brass Gate Valve Wheel at top-48 */}
        <div className="absolute top-48 -left-5 w-15 h-15 rounded-full border-4 border-amber-500 bg-[#78350F]/70 shadow-[0_0_15px_rgba(245,158,11,0.5)] flex items-center justify-center">
          {/* Valve Wheel Spokes */}
          <div className="absolute w-12 h-1 bg-amber-400" />
          <div className="absolute w-1 h-12 bg-amber-400" />
          <div className="w-4 h-4 rounded-full bg-amber-300 border-2 border-amber-600" />
        </div>
      </div>
    </div>

    {/* Shimmering Caustic Light Paths (SVG) */}
    <svg
      className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M 0 150 Q 250 80, 500 160 T 1000 130 T 1500 160"
        fill="none"
        stroke="#22D3EE"
        strokeWidth="3"
        strokeOpacity="0.4"
      />
      <path
        d="M 0 280 Q 300 200, 600 290 T 1200 250 T 1600 290"
        fill="none"
        stroke="#67E8F9"
        strokeWidth="2.5"
        strokeOpacity="0.3"
      />
      <path
        d="M 0 440 Q 220 380, 480 450 T 960 410 T 1440 450"
        fill="none"
        stroke="#2DD4BF"
        strokeWidth="2"
        strokeOpacity="0.35"
      />
    </svg>
  </div>
);

/**
 * 4. HVAC & CRYO CHILLER WALL
 * Atmosphere: High-Tech Cleanroom Airflow Lab / Polar Cold-Room
 * - Glacier frost blue brushed aluminum wall panels
 * - Horizontal architectural ventilation louvers with frost-edged seams
 * - Polar ice-blue cold downlight beams
 */
const HvacCryoWall: React.FC = () => (
  <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#E8F4FC] via-[#CFE6F8] to-[#B6D8F4] overflow-hidden">
    {/* Polar Ice-Blue Cold Downlight Pool - Top Center */}
    <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[48rem] h-[26rem] rounded-full blur-3xl opacity-80 bg-[radial-gradient(circle,rgba(56,189,248,0.7)_0%,rgba(2,132,199,0.3)_45%,transparent_75%)]" />

    {/* Cold Cryo Pool - Bottom Right */}
    <div className="absolute -bottom-32 -right-20 w-[36rem] h-[28rem] rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle,rgba(14,165,233,0.45)_0%,rgba(99,102,241,0.2)_50%,transparent_75%)]" />

    {/* Horizontal Architectural Ventilation Louvers - Left Flank */}
    <div className="hidden md:flex absolute left-6 top-16 bottom-16 w-28 flex-col justify-around pointer-events-none">
      {[...Array(14)].map((_, i) => (
        <div key={`louver-left-${i}`} className="w-full h-4 relative">
          {/* Angled Louver Slat with Frost Highlight */}
          <div className="w-full h-2.5 bg-gradient-to-b from-white via-[#BAE6FD] to-[#0284C7] rounded-xs shadow-xs border-t border-white" />
          {/* Dark Undercut Air Gap */}
          <div className="w-full h-1.5 bg-[#0369A1]/40 rounded-b-xs" />
        </div>
      ))}
    </div>

    {/* Horizontal Architectural Ventilation Louvers - Right Flank */}
    <div className="hidden md:flex absolute right-6 top-16 bottom-16 w-28 flex-col justify-around pointer-events-none">
      {[...Array(14)].map((_, i) => (
        <div key={`louver-right-${i}`} className="w-full h-4 relative">
          <div className="w-full h-2.5 bg-gradient-to-b from-white via-[#BAE6FD] to-[#0284C7] rounded-xs shadow-xs border-t border-white" />
          <div className="w-full h-1.5 bg-[#0369A1]/40 rounded-b-xs" />
        </div>
      ))}
    </div>

    {/* Brushed Aluminum Seams & Isobar Streamlines (SVG) */}
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Symmetrical Vertical Panel Seams with Rivet Fasteners */}
      <line x1="160" y1="0" x2="160" y2="100%" stroke="#0284C7" strokeWidth="1.2" strokeOpacity="0.25" strokeDasharray="6 4" />
      <line x1="calc(100% - 160px)" y1="0" x2="calc(100% - 160px)" y2="100%" stroke="#0284C7" strokeWidth="1.2" strokeOpacity="0.25" strokeDasharray="6 4" />

      {/* Aerodynamic Airflow Streamlines */}
      <path
        d="M 0 220 C 300 170, 600 270, 900 200 C 1200 140, 1400 240, 1600 180"
        fill="none"
        stroke="#38BDF8"
        strokeWidth="2.2"
        strokeOpacity="0.35"
      />
      <path
        d="M 0 380 C 250 340, 550 420, 850 360 C 1150 310, 1380 400, 1600 350"
        fill="none"
        stroke="#0284C7"
        strokeWidth="1.8"
        strokeOpacity="0.3"
      />
    </svg>

    {/* Micro Frost Crystal Glyphs (❄) */}
    <div className="absolute top-24 left-[20%] text-sky-400/60 text-lg select-none pointer-events-none">❄</div>
    <div className="absolute top-72 right-[18%] text-cyan-400/70 text-sm select-none pointer-events-none">❄</div>
    <div className="absolute bottom-48 left-[24%] text-blue-400/50 text-base select-none pointer-events-none">❄</div>
  </div>
);

/**
 * 5. ARTISAN CARPENTRY GUILD WALL
 * Atmosphere: Scandinavian Architectural Woodcraft Studio / Joinery Atelier
 * - Warm natural oak and fluted acoustic timber wood slat wall
 * - Fluted vertical architectural slats with deep shadow grooves
 * - Warm 2700K tungsten workshop lamp pool from top-center
 */
const CarpentryGuildWall: React.FC = () => (
  <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#2B1405] via-[#451A03] to-[#5C270B] overflow-hidden">
    {/* 2700K Tungsten Workshop Lamp Flare Pool - Top Center */}
    <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[52rem] h-[32rem] rounded-full blur-3xl opacity-85 bg-[radial-gradient(circle,rgba(254,243,199,0.95)_0%,rgba(245,158,11,0.5)_35%,rgba(180,83,9,0.2)_65%,transparent_80%)]" />

    {/* Warm Ambient Honey Amber Glow - Bottom */}
    <div className="absolute -bottom-40 left-1/4 w-[42rem] h-[30rem] rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle,rgba(217,119,6,0.5)_0%,rgba(146,64,14,0.25)_50%,transparent_75%)]" />

    {/* Fluted Acoustic Timber Slat Texture (SVG) */}
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Repeating Vertical Wood Slat: 28px slat with 12px deep shadow groove */}
        <pattern id="acoustic-wood-slat" width="40" height="120" patternUnits="userSpaceOnUse">
          {/* Deep Shadow Groove */}
          <rect x="0" y="0" width="12" height="120" fill="#1A0A02" />

          {/* Slat Body */}
          <rect x="12" y="0" width="28" height="120" fill="#92400E" />
          {/* Rich Oak Grain Gradient */}
          <rect x="12" y="0" width="28" height="120" fill="url(#oakGrainGrad)" />

          {/* Left Edge Highlight Bevel */}
          <line x1="12" y1="0" x2="12" y2="120" stroke="#FDE68A" strokeWidth="1.2" strokeOpacity="0.4" />
          {/* Right Edge Shadow Bevel */}
          <line x1="40" y1="0" x2="40" y2="120" stroke="#451A03" strokeWidth="1.2" strokeOpacity="0.8" />
        </pattern>

        <linearGradient id="oakGrainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D97706" stopOpacity="0.75" />
          <stop offset="50%" stopColor="#B45309" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#78350F" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      <rect width="100%" height="100%" fill="url(#acoustic-wood-slat)" opacity="0.88" />
    </svg>

    {/* Precision Brass Joinery Ruler Guide running down left flank */}
    <div className="hidden lg:flex absolute left-8 top-12 bottom-12 w-6 flex-col justify-between items-center pointer-events-none bg-gradient-to-b from-[#F59E0B] via-[#D97706] to-[#B45309] rounded-xs shadow-lg border border-amber-300/40 py-4 opacity-75">
      {[...Array(20)].map((_, i) => (
        <div key={`ruler-tick-${i}`} className="w-full flex items-center justify-between px-1">
          <div className={`h-0.5 bg-black/80 ${i % 5 === 0 ? 'w-3' : 'w-1.5'}`} />
          {i % 5 === 0 && (
            <span className="text-[7px] font-mono font-black text-black/90 leading-none">
              {i * 10}
            </span>
          )}
        </div>
      ))}
    </div>
  </div>
);

/**
 * 6. AUTOMOTIVE & GT RACING BAY WALL
 * Atmosphere: Modern GT Racing Garage / Hypercar Detailing Bay
 */
const AutomotiveGarageWall: React.FC = () => (
  <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#09090B] via-[#141416] to-[#1F1F24] overflow-hidden">
    {/* Daylight 6000K Detailing Bar Glow */}
    <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[48rem] h-[26rem] rounded-full blur-3xl opacity-75 bg-[radial-gradient(circle,rgba(255,255,255,0.7)_0%,rgba(148,163,184,0.3)_45%,transparent_75%)]" />

    {/* Red Caliper Neon Underglow */}
    <div className="absolute -bottom-32 -left-20 w-[36rem] h-[28rem] rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle,rgba(239,68,68,0.5)_0%,rgba(185,28,28,0.2)_50%,transparent_75%)]" />

    {/* Hexagonal Detailing Ceiling Array (SVG) */}
    <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="auto-hex-grid" width="80" height="92" patternUnits="userSpaceOnUse">
          <path
            d="M 40 4 L 76 25 L 76 67 L 40 88 L 4 67 L 4 25 Z"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#auto-hex-grid)" />
    </svg>
  </div>
);

/**
 * 7. STERILE SANITIZATION SUITE WALL
 * Atmosphere: Ultra-Clean Bio-Sanitization Suite / Gloss Mint Mosaic
 */
const CleaningSanitizationWall: React.FC = () => (
  <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#ECFDF5] via-[#D1FAE5] to-[#A7F3D0] overflow-hidden">
    {/* Pure Clinical Overhead Diffuser Glow */}
    <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[48rem] h-[26rem] rounded-full blur-3xl opacity-80 bg-[radial-gradient(circle,rgba(255,255,255,0.95)_0%,rgba(52,211,153,0.35)_45%,transparent_75%)]" />

    {/* Mint Emerald Specular Pool */}
    <div className="absolute -bottom-32 right-1/4 w-[36rem] h-[28rem] rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle,rgba(16,185,129,0.4)_0%,rgba(5,150,105,0.2)_50%,transparent_75%)]" />

    {/* Pristine Gloss Mosaic Tile Grid (SVG) */}
    <svg className="absolute inset-0 w-full h-full opacity-35 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="clean-mosaic-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect x="1" y="1" width="38" height="38" rx="2" fill="#FFFFFF" stroke="#6EE7B7" strokeWidth="1" />
          <line x1="3" y1="3" x2="37" y2="3" stroke="#A7F3D0" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#clean-mosaic-grid)" />
    </svg>
  </div>
);

/**
 * TradeCanvasBackground Main Export
 * Renders rich, high-fidelity Environmental Trade Studio Wallpapers tailored to each trade
 */
export const TradeCanvasBackground: React.FC<TradeCanvasBackgroundProps> = ({
  texture = 'electrical',
  className = '',
}) => {
  // Normalize texture key
  const activeTrade: TradeCanvasTexture = useMemo(() => {
    const t = (texture || '').toLowerCase();
    if (t.includes('plumb') || t.includes('hydro')) return 'plumbing';
    if (t.includes('hvac') || t.includes('cryo') || t.includes('ac')) return 'hvac';
    if (t.includes('makeup') || t.includes('beauty') || t.includes('salon') || t.includes('bridal')) return 'makeup';
    if (t.includes('carpent') || t.includes('wood') || t.includes('guild')) return 'carpentry';
    if (t.includes('auto') || t.includes('fleet') || t.includes('moto')) return 'automotive';
    if (t.includes('clean') || t.includes('sanit')) return 'cleaning';
    return 'electrical';
  }, [texture]);

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 pointer-events-none z-0 overflow-hidden select-none transition-all duration-700 ${className}`}
    >
      {/* Dynamic Environmental Trade Studio Wallpaper */}
      {activeTrade === 'makeup' && <MakeupStudioWall />}
      {activeTrade === 'electrical' && <ElectricalSubstationWall />}
      {activeTrade === 'plumbing' && <PlumbingHydroWall />}
      {activeTrade === 'hvac' && <HvacCryoWall />}
      {activeTrade === 'carpentry' && <CarpentryGuildWall />}
      {activeTrade === 'automotive' && <AutomotiveGarageWall />}
      {activeTrade === 'cleaning' && <CleaningSanitizationWall />}
    </div>
  );
};
