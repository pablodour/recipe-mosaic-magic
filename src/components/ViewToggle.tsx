import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LayoutGrid, List } from "lucide-react";

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
          "relative z-10 flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-md",
          view === "list" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
        )}
        onClick={() => onViewChange("list")}
        aria-pressed={view === "list"}
      >
        <List size={16} />
        <span>List</span>
      </button>
      <button
        className={cn(
          "relative z-10 flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-md",
          view === "collage" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
        )}
        onClick={() => onViewChange("collage")}
        aria-pressed={view === "collage"}
      >
        <LayoutGrid size={16} />
        <span>Collage</span>
      </button>
      <motion.div 
        className="absolute top-1 bottom-1 rounded-md bg-background shadow-sm"
        initial={false}
        animate={{
          x: view === "list" ? 0 : "50%",
          width: "50%"
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      />
    </div>
  );
};

export default ViewToggle;
