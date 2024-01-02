import Link from 'next/link'
import Karu from '../../app/assets/icon.png'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Karu">
      <Image src={Karu} alt='Logo' className='md:w-20 md:h-20 w-14 h-14' />
    </Link>
  )
}
