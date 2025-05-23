import NextLink from 'next/link'
import { LuArrowLeft } from 'react-icons/lu'

interface Props {
  path: string
  text: string
}

export default function ReturnLink({ path, text }: Props) {
  return (
    <NextLink
      href={path}
      className="flex items-center w-fit gap-x-1 text-sm text-zinc-600 opacity-80 hover:opacity-100"
    >
      <LuArrowLeft className="h-4 w-4" aria-hidden />
      {text}
    </NextLink>
  )
}
