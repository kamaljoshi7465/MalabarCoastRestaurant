import { ArrowRight } from 'lucide-react'

type ViewMoreButtonProps = {
  text: string
  href: string
  style?: React.CSSProperties
  className?: string
  light?: boolean
  arrow?: boolean
}

export default function ViewMoreButton({ text, href, style, className, light = false, arrow = true }: ViewMoreButtonProps) {
  return (
    <div className="mt-12 text-center" style={style}>
      <a
        className={`btn-primary inline-flex items-center space-x-2 px-6 py-3 font-medium cursor-pointer rounded-xl ${light ? 'text-black hover:bg-white border border-gray-300' : 'text-white bg-primary-600'} transition-colors hover:bg-primary-700 ${className}`}
        href={href}
      >
        <span>{text}</span>
        {arrow && <ArrowRight size="1em" />}
      </a>
    </div>
  )
}