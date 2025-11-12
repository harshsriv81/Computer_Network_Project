// Fix: Import `ElementType` from `react` to resolve the `React` namespace error.
import type { ElementType, FC } from 'react';

export interface Protocol {
  id: string;
  name: string;
  fullName: string;
  description: string;
  characteristics: string[];
  // Fix: Use `ElementType` which was imported, instead of `React.ElementType`.
  icon: ElementType;
  category: 'Transport' | 'Application' | 'Network';
  diagram: FC;
}
