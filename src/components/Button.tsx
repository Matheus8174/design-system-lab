import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

export type ButtonProps = PropsWithChildren<{
  asChild?: boolean
}> & ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC <ButtonProps> = ({ children, asChild, className, ...rest }) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      {...rest}

      className={clsx(
        "py-3 px-4 bg-cyan-500 rounded font-semibold transition-colors text-black text-sm w-full hover:bg-cyan-300 focus:ring-2 ring-white",
        className
      )}
    >
      { children }
    </Comp>
  )
}

export default Button;
