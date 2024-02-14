import { Inter, Roboto_Mono, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });


//👇 Configure our font object
export const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
  })

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700'] });
