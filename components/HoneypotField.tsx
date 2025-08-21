'use client';

import { Input } from '@/components/ui/input';

interface HoneypotFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export default function HoneypotField({ value, onChange }: HoneypotFieldProps) {
  return (
    <div className="absolute left-[-9999px] opacity-0 pointer-events-none" aria-hidden="true">
      <Input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Leave this field empty"
      />
    </div>
  );
}