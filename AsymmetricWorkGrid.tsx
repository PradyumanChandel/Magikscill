import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Calendar03Icon,
  Timer01Icon,
  SecurityCheckIcon,
} from '@hugeicons/core-free-icons';
import { UniversalWorkOrder } from '../types';

interface AsymmetricWorkGridProps {
  secondaryOrder: UniversalWorkOrder;
  upcomingOrder?: UniversalWorkOrder;
  activeTrade?: string;
  onSelectOrder: (order: UniversalWorkOrder) => void;
}

export const AsymmetricWorkGrid: React.FC<AsymmetricWorkGridProps> = ({
  secondaryOrder,
  upcomingOrder,
  onSelectOrder,
}) => {
  const secondaryEscrow = secondaryOrder.escrowAmount ?? secondaryOrder.escrowLockedAmount ?? 349;
  const secondaryTag = secondaryOrder.priority === 'SCHEDULED' ? 'Scheduled' : 'Queue';
  const secondaryTiming = secondaryOrder.timeSlot || secondaryOrder.eta || '14:00';

  const upcomingEscrow = upcomingOrder ? (upcomingOrder.escrowAmount ?? upcomingOrder.escrowLockedAmount ?? 249) : 0;
  const upcomingTag = upcomingOrder?.priority === 'UPCOMING' ? 'Upcoming' : 'Scheduled';
  const upcomingTiming = upcomingOrder?.timeSlot || upcomingOrder?.eta || '16:30';

  return (
    <section className="mt-2 mb-2 select-none">
      {/* Section Title */}
      <h3 className="text-[20px] font-bold text-[#111111] mb-3 tracking-tight">
        Next in Queue
      </h3>

      {/* 2-Column Split: Tinted Liquid Chromic Glass Cards with Dynamic Curvature */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full min-w-0">
        {/* Card 1: Liquid Chromic Glass Sky Blue (#D2E7FF) Scheduled Job */}
        <div
          onClick={() => onSelectOrder(secondaryOrder)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onSelectOrder(secondaryOrder);
            }
          }}
          className={`liquid-glass-card glass-skyblue p-3.5 sm:p-4 rounded-[22px] sm:rounded-[26px] min-w-0 overflow-hidden flex flex-col justify-between relative cursor-pointer select-none active:scale-[0.99] transition-all min-h-[148px]`}
        >
          <div className="relative z-10 min-w-0">
            {/* Scheduled Chip prefixed with Calendar03Icon */}
            <div className="bg-white/75 backdrop-blur-md px-2 sm:px-2.5 py-0.5 rounded-full text-[9.5px] sm:text-[10px] font-bold text-[#111111] w-fit max-w-full shadow-2xs border border-white/60 flex items-center gap-1 truncate">
              <HugeiconsIcon icon={Calendar03Icon} size={13} strokeWidth={2.2} className="shrink-0" />
              <span className="truncate">{secondaryTag} · {secondaryTiming}</span>
            </div>

            <h4 className="text-[15px] sm:text-[16px] font-black text-[#111111] leading-tight mt-2 line-clamp-2 break-words">
              {secondaryOrder.issueTitle || secondaryOrder.title}
            </h4>
          </div>

          <div className="mt-2 relative z-10 min-w-0">
            <p className="text-[11px] font-bold text-[#111111]/80 leading-tight truncate">
              {secondaryOrder.location}
            </p>
            {/* Escrow Lock footer */}
            <p className="text-[10px] text-[#111111]/70 font-semibold mt-0.5 flex items-center gap-1 truncate">
              <HugeiconsIcon icon={SecurityCheckIcon} size={13} strokeWidth={2.4} className="text-emerald-700 shrink-0" />
              <span className="truncate">₹{secondaryEscrow} Escrow Locked</span>
            </p>
          </div>
        </div>

        {/* Card 2: Liquid Chromic Glass Warm Apricot (#FFDFA6) Upcoming Job */}
        {upcomingOrder && (
          <div
            onClick={() => onSelectOrder(upcomingOrder)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onSelectOrder(upcomingOrder);
              }
            }}
            className={`liquid-glass-card glass-apricot p-3.5 sm:p-4 rounded-[22px] sm:rounded-[26px] min-w-0 overflow-hidden flex flex-col justify-between relative cursor-pointer select-none active:scale-[0.99] transition-all min-h-[148px]`}
          >
            <div className="relative z-10 min-w-0">
              {/* Upcoming Chip prefixed with Timer01Icon */}
              <div className="bg-white/75 backdrop-blur-md px-2 sm:px-2.5 py-0.5 rounded-full text-[9.5px] sm:text-[10px] font-bold text-[#111111] w-fit max-w-full shadow-2xs border border-white/60 flex items-center gap-1 truncate">
                <HugeiconsIcon icon={Timer01Icon} size={13} strokeWidth={2.2} className="shrink-0" />
                <span className="truncate">{upcomingTag} · {upcomingTiming}</span>
              </div>

              <h4 className="text-[15px] sm:text-[16px] font-black text-[#111111] leading-tight mt-2 line-clamp-2 break-words">
                {upcomingOrder.issueTitle || upcomingOrder.title}
              </h4>
            </div>

            <div className="mt-2 relative z-10 min-w-0">
              <p className="text-[11px] font-bold text-[#111111]/80 leading-tight truncate">
                {upcomingOrder.location}
              </p>
              {/* Escrow Lock footer */}
              <p className="text-[10px] text-[#111111]/70 font-semibold mt-0.5 flex items-center gap-1 truncate">
                <HugeiconsIcon icon={SecurityCheckIcon} size={13} strokeWidth={2.4} className="text-emerald-700 shrink-0" />
                <span className="truncate">₹{upcomingEscrow} Escrow Locked</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
