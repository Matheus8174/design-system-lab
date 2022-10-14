import { PropsWithChildren } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

export type HeadingProps = PropsWithChildren<{
  size?: 'sm' | 'md' | 'lg',
  asChild?: boolean,
  className?: string
}>

const Heading: React.FC <HeadingProps> = ({ size = 'md', children, asChild, className }) => {
  const Comp = asChild ? Slot : 'h2'

  return (
    <Comp
      className={clsx(
        "text-gray-100 font-bold font-sans",
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg'
        },
        className
      )
    }

    >
      { children }
    </Comp>
  )
}

export default Heading;
