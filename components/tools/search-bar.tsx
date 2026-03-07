"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type SearchBarProps = {
  placeholder?: string;
  onSearch?: (value: string) => void;
  className?: string;
};

export function SearchBar({ placeholder = "Search tools...", onSearch, className }: SearchBarProps) {
  const [value, setValue] = useState("");

  const normalized = useMemo(() => value.trim(), [value]);

  return (
    <div className={cn("relative", className)}>
      <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
      <input
        value={value}
        onChange={(event) => {
          const nextValue = event.target.value;
          setValue(nextValue);
          onSearch?.(nextValue.trim());
        }}
        aria-label="Search"
        placeholder={placeholder}
        className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 text-sm outline-none ring-0 transition focus:border-emerald-400 dark:border-slate-800 dark:bg-slate-900"
      />
      {normalized ? (
        <button
          type="button"
          onClick={() => {
            setValue("");
            onSearch?.("");
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500 transition hover:text-slate-950 dark:hover:text-white"
        >
          Clear
        </button>
      ) : null}
    </div>
  );
}
