"use client"

import { useState, useEffect } from "react";

export default function DynamicTitle({
    speed,
    dynamicText,
    staticText,
    fontOptions
}: {
    speed: number,
    dynamicText: string,
    staticText: string,
    fontOptions: string[]
}) {
    const [titleStyle, setTitleStyle] = useState("inherit")

    const updateTitle = (fontOptions: string[]) => {
        let font = titleStyle
        while (font == titleStyle) {
            font = fontOptions[Math.floor(Math.random() * fontOptions.length)];
        }
        setTitleStyle(font)
    }

    useEffect(() => {
        setTimeout(() => {
        }, 500);
        const intervalo = setInterval(() => {
            updateTitle(fontOptions);
        }, speed); // 2 segundos

    }, []);

    return (
        <h1 className="text-8xl flex justify-center w-full">
            <strong className="" style={{ fontFamily: titleStyle }}>{dynamicText}</strong> <span>{staticText}</span>
        </h1>
    )
}