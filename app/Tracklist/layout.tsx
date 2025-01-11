// app/Tracklist/layout.js
import TracklistHeader from '@/components/TracklistHeader';


export default function TracklistLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <TracklistHeader />
      {children}
      
    </div>
  );
}