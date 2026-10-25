'use client';

import dynamic from 'next/dynamic';
import type { EventVenue } from '@/data/event-venues';

const HotelsMap = dynamic(() => import('@/components/hotels-map').then((module) => ({ default: module.HotelsMap })), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[16rem] items-center justify-center rounded-2xl border border-stone-200 bg-stone-100 text-base font-medium text-stone-600">
      Loading map…
    </div>
  ),
});

type SingleVenueMapProps = {
  venue: EventVenue;
  className?: string;
};

export function SingleVenueMap({ venue, className = '' }: SingleVenueMapProps) {
  return (
    <div className={`relative h-[min(28rem,55vh)] min-h-[18rem] w-full overflow-hidden rounded-2xl border border-stone-200 shadow-sm ${className}`.trim()}>
      <HotelsMap
        hotels={[]}
        venues={[venue]}
        activeLocationId={venue.id}
        panToLat={null}
        panToLng={null}
        enablePan={false}
        onLocationSelect={() => {}}
        fitBoundsKey={`single-${venue.id}`}
        fitMaxZoom={12}
        singleMarkerBoundsPad={0.045}
      />
    </div>
  );
}
