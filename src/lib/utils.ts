import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 

/**
 * 
 * @param inputs || tailwind className
 * @returns merged classname
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const dialogClose = () => {
  document.getElementById('closeDialog')?.click();
};