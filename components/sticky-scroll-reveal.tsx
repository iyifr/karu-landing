"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll";


export const IconParkPlayCycle = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg width="1em" height="1em" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
            <path d="M4 25C4 18.3502 9.39624 13 16 13H44"></path>
            <path d="M38 7L44 13L38 19"></path>
            <path d="M44 23C44 29.6498 38.6038 35 32 35H4"></path>
            <path d="M10 41L4 35L10 29"></path>
        </g>
    </svg>
)


const content = [
    {
        title: <span>Get them to buy <span className="text-orange-500">more</span>💵📈</span>,
        description: "Get your customers to spread the word, and reward them for doing so."
    },
    {
        title: <span>Get them to buy <span className="text-lime-500">more often</span><IconParkPlayCycle className="text-lime-500" /></span>,
        description: "Give customers great reasons to come back by being awesomeeeeeeeeeeeeeee aodfjffff"
    },
    {
        title: "Attach a face to each sale",
        description: "Lorem lorem lorem lorem lorem lorem lorem fjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"
    },
];
export function StickyScrollRevealDemo() {
    return (
        <div className="p-10">
            <StickyScroll content={content} />
        </div>
    );
}
