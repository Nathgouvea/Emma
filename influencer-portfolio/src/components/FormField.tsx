"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface FormFieldProps {
  label: string;
  name: string;
  type: "text" | "email" | "textarea" | "select";
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  options?: string[];
  rows?: number;
}

export default function FormField({
  label,
  name,
  type,
  value,
  onChange,
  error,
  required = false,
  placeholder,
  options = [],
  rows = 4,
}: FormFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-dark mb-2"
      >
        {label}
        {required && <span className="text-coral-pink ml-1">*</span>}
      </label>

      {type === "textarea" ? (
        <motion.textarea
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          rows={rows}
          placeholder={placeholder}
          className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 resize-none ${
            error
              ? "border-coral-pink focus:border-coral-pink"
              : isFocused
              ? "border-ocean-blue focus:border-ocean-blue"
              : "border-sandy-beige focus:border-ocean-blue"
          } focus:outline-none focus:ring-2 focus:ring-ocean-blue/20`}
        />
      ) : type === "select" ? (
        <motion.select
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 appearance-none bg-white ${
            error
              ? "border-coral-pink focus:border-coral-pink"
              : isFocused
              ? "border-ocean-blue focus:border-ocean-blue"
              : "border-sandy-beige focus:border-ocean-blue"
          } focus:outline-none focus:ring-2 focus:ring-ocean-blue/20`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
            backgroundPosition: "right 0.5rem center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "1.5em 1.5em",
            paddingRight: "2.5rem",
          }}
        >
          <option value="">Select {label.toLowerCase()}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </motion.select>
      ) : (
        <motion.input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 ${
            error
              ? "border-coral-pink focus:border-coral-pink"
              : isFocused
              ? "border-ocean-blue focus:border-ocean-blue"
              : "border-sandy-beige focus:border-ocean-blue"
          } focus:outline-none focus:ring-2 focus:ring-ocean-blue/20`}
        />
      )}

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-coral-pink text-sm mt-2"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
