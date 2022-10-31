'use client';

import { useEffect, useState } from 'react';
import Footer from './Footer';

export default function StatefulLayout({ children }) {
  const [someState, setSomeState] = useState<string>();

  useEffect(() => {
    setSomeState('something');
  }, []);

  return (
    <div>
      {children}
      <Footer title={someState} />
    </div>
  );
}
