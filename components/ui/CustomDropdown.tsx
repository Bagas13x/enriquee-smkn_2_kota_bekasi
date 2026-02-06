"use client";
import React, { useState, useRef, useEffect } from "react";

interface Option {
    value: string;
    label: string;
}

interface CustomDropdownProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export default function CustomDropdown({
    options,
    value,
    onChange,
    placeholder = "Pilih Layanan"
}: CustomDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectedOption = options.find(opt => opt.value === value);

    return (
        <div ref={dropdownRef} className="relative">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-3 border-b-2 border-gray-300 rounded-xl bg-white text-gray-800 cursor-pointer focus:outline-none focus:border-black focus:ring-2 focus:ring-gray-200 transition duration-300 text-left flex items-center justify-between"
            >
                <span className={selectedOption ? "text-gray-800" : "text-gray-500"}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-300 rounded-2xl shadow-lg z-50 overflow-hidden">
                    <div className="max-h-64 overflow-y-auto">
                        {options.map((option, index) => (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => {
                                    onChange(option.value);
                                    setIsOpen(false);
                                }}
                                className={`w-full px-4 py-3 text-left transition-colors duration-200 ${
                                    value === option.value
                                        ? "bg-black text-white font-semibold"
                                        : "text-gray-800 hover:bg-gray-100"
                                } ${index !== options.length - 1 ? "border-b border-gray-100" : ""}`}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
