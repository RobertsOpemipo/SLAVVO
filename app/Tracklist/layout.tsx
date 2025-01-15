// app/Tracklist/layout.js
import TracklistHeader from '@/app/components/TracklistHeader';


export default function TracklistLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <TracklistHeader />
      {children}
      
    </div>
  );
}