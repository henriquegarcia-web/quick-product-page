import Image from 'next/image'
import logo from '@/assets/logo.png'

export default function Logo() {
  return (
    <Image
      src={logo}
      alt="Logo da QuickShop"
      width={120}
      height={40}
      priority
      className="h-auto w-auto max-h-10"
    />
  )
}
