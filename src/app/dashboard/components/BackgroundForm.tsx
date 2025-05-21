"use client";

import BackgroundFormClient from "./BackgroundFormClient";
import type { backgrounds } from "~/server/db/schema";

type Background = typeof backgrounds.$inferSelect;

export default function BackgroundForm({
    existing,
  }: {
    existing: Background | null;
  }) {


  /* pass plain JS object to the client */
  return <BackgroundFormClient initial={existing} />;
}
