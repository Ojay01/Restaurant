'use client';

import Link from 'next/link';
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css';
 import Image from 'next/image';
 import MainHeaderBackground from './main-header-background';
import { usePathname } from 'next/navigation';
export default function MainHeader() {
    const path = usePathname();

    return ( 
        <>
    <MainHeaderBackground />
    <header className={classes.header}>
        <Link className={classes.logo} href="/">
            <Image src={logoImg} alt="A Plate of food" priority />
        </Link>
        <nav className={classes.nav}> 
            <ul>
                <li>
                    <Link href="/meals" className={path.startsWith('/meals') ? classes.active : undefined }>Browse Meals</Link>
                </li>
                <li>
                    <Link href="/community" className={path === '/community' ? classes.active : undefined }>Community</Link>
                </li>
            </ul>
        </nav>
    </header>
    </>
    );
}