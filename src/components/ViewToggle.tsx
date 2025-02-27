
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ViewToggleProps {
  view: "list" | "collage";
  onViewChange: (view: "list" | "collage") => void;
  className?: string;
}

const ViewToggle = ({ view, onViewChange, className }: ViewToggleProps) => {
  return (
    <div 
      className={cn(
        "inline-flex items-center rounded-lg bg-secondary p-1 relative", 
        className
      )}
    >
      <button
        className={cn(
          "relative z-10 flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          view === "list" ? "text-foreground" : "text-muted-foreground"
        )}
        onClick={() => onViewChange("list")}
        aria-pressed={view === "list"}
      >
        List
      </button>
      <button
        className={cn(
          "relative z-10 flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          view === "collage" ? "text-foreground" : "text-muted-foreground"
        )}
        onClick={() => onViewChange("collage")}
        aria-pressed={view === "collage"}
      >
        Collage
      </button>
      <div 
        className={cn(
          "absolute top-1 left-1 bottom-1 rounded-md bg-background shadow-sm transition-transform duration-200",
          view === "list" ? "translate-x-0 w-[72px]" : "translate-x-[72px] w-[90px]"
        )}
      />
    </div>
  );
};

export default ViewToggle;
