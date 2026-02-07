import { getImgPath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/" className='text-2xl font-bold text-midnight_text dark:text-white hover:text-primary dark:hover:text-primary transition'>
      Toheed Qureshi
    </Link>
  );
};

export default Logo;
