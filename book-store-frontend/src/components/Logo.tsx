import clsx from 'clsx'

export function Logo({ size = 'sm', className }: {
  size?: 'sm' | 'md' | 'lg',
  className?: string
}) {
  return (
    <div className={clsx(
      'flex items-center',
      size === 'sm' && 'h-10',
      size === 'md' && 'h-12',
      size === 'lg' && 'h-16',
      className ?? 'text-[#1384E1]'
    )}>

      <div className={clsx(
        'flex-initial ml-1 font-semibold tracking-wide',
        size === 'sm' && 'text-2xl',
        size === 'md' && 'text-3xl',
        size === 'lg' && 'text-4xl',
      )}>
        Book Store
      </div>

    </div>


  )
}
