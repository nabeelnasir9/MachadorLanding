"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const content = [
  {
    title: "Keep Your PDFs Locked Tight",
    description:
      "Machador makes sure your PDF files are super safe, using a strong lock method and a special secret mix for extra protection.",
  },
  {
    title: "Chat Safely Without Worry",
    description:
      "MessageLock keeps your chats private, using a really strong lock and a unique secret mix so no one else can sneak a peek.",
  },
  {
    title: "Guard Your Conversations and Files",
    description:
      "Machador puts a strong shield around your chats and PDFs, making sure they stay just between you and the intended person.",
  },
  {
    title: "Safe Clone for 24/7",
    description:
      "Machador turns your documents and chats into something like a treasure in a safe, locked away with a complex key and an extra layer of security.",
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-0">
      <StickyScroll content={content} />
    </div>
  );
}
