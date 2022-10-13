import { PropsWithChildren } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

export type ButtonProps = PropsWithChildren<{
  asChild?: boolean
}>

const Button: React.FC <ButtonProps> = ({ children, asChild }) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={clsx(
        "py-4 px-3 bg-cyan-500 rounded font-semibold transition-colors text-black text-sm w-full hover:bg-cyan-300 focus:ring-2 ring-white",
      )}
    >
      { children }
    </Comp>
  )
}

export default Button;
