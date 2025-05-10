"use client";
import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import type { Card } from "./RulesClient";

/*  Lazy‑load card components so initial JS stays light  */
const COMPONENTS: Record<string, React.ComponentType> = {
  "Lexique Gaming": dynamic(() => import("./LexiqueGaming")),
  "Lexique Roleplay": dynamic(() => import("./LexiqueRoleplay")),
  "Règlement IG": dynamic(() => import("./RulesIG")),
  "Règlement Streamer": dynamic(() => import("./RulesStreamer")),
  "Lore de The Return": dynamic(() => import("./Lore")),
  "Règlement Discord": dynamic(() => import("./RulesDiscord")),
  "Gouvernement – LSPD": dynamic(() => import("./GovLspd")),
  "Entreprise": dynamic(() => import("./Entreprise")),
  "EMS – Coma": dynamic(() => import("./EmsComa")),
  "Meta Illégal": dynamic(() => import("./MetaIllegal")),
  "Illégal": dynamic(() => import("./RulesIllegal")),
  "Économie Illégal": dynamic(() => import("./EcomonyIllegal")),
  "Code Pénal": dynamic(() => import("./PenalCode")),
};

/* ------------------------------------------------------------------ */
/*  2 . Modal                                                         */
/* ------------------------------------------------------------------ */
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    card: Card | null;
  }
  
  export default function Modal({ isOpen, onClose, card }: ModalProps) {
    const dialogRef = useRef<HTMLDivElement>(null);
  
    /* ESC to close */
    useEffect(() => {
      if (!isOpen) return;
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [isOpen, onClose]);
  
    /* Focus‑trap */
    useEffect(() => {
      if (!isOpen || !dialogRef.current) return;
      const prev = document.activeElement as HTMLElement | null;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        "a, button, textarea, input, select, iframe, article"
      );
      focusable[0]?.focus();
  
      const trap = (e: KeyboardEvent) => {
        if (e.key !== "Tab") return;
        const list = Array.from(focusable);
        const i = list.indexOf(document.activeElement as HTMLElement);
        const atStart = i === 0;
        const atEnd = i === list.length - 1;
        if (e.shiftKey && atStart) {
          e.preventDefault();
          list[list.length - 1]?.focus();
        } else if (!e.shiftKey && atEnd) {
          e.preventDefault();
          list[0]?.focus();
        }
      };
  
      dialogRef.current.addEventListener("keydown", trap);
      return () => {
        dialogRef.current?.removeEventListener("keydown", trap);
        prev?.focus();
      };
    }, [isOpen]);
  
    /* ---------------------------------------------------------------- */
    if (!isOpen || !card) return null;
  
    const Inline = COMPONENTS[card.label];
    const body = Inline ? (
      <article className="h-[70vh] w-full overflow-y-auto text-sm leading-relaxed text-gray-200">
        <Inline />
      </article>
    ) : (
      card.href && (
        <iframe
          src={card.href}
          title={card.label}
          className="h-[70vh] w-full bg-white"
        />
      )
    );
  
    /* If no body could be built (bad config) don’t render the modal */
    if (!body) return null;
  
    /* ---------------------------------------------------------------- */
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center px-4 lg:px-0 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <button
          aria-label="Close dialog"
          onClick={onClose}
          className="absolute inset-0 bg-black/70 transition-opacity"
        />
  
        {/* Dialog */}
        <div
          ref={dialogRef}
          className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-lg bg-slate-900 shadow-2xl"
        >
          <header className="flex items-center justify-between gap-4 border-b border-white/10 bg-slate-800/40 px-6 py-4">
            <h2 className="text-lg font-semibold text-orange-200">{card.label}</h2>
            <button
              onClick={onClose}
              className="rounded-md p-1 text-orange-200 transition hover:bg-orange-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            >
              ✕<span className="sr-only">Close</span>
            </button>
          </header>
  
          {body}
        </div>
      </div>
    );
  }
