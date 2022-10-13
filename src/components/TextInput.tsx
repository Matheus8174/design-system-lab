import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
      { children }
    </div>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'

interface TextInputIconProps {
  children: ReactNode
}

export function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      { children }
    </Slot>
  )
}

const TextInputInput: React.FC<TextInputInputProps> = (props) => {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-900-400"
      {...props}
    />
  )
}

TextInputIcon.displayName = 'TextInput.Input'

export const TextInput = {
  Input: TextInputInput,
  Root: TextInputRoot,
  icon: TextInputIcon
};
