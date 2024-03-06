import classes from './page.module.css';
import Link from 'next/link';
import MealsGrid from '@/components/meals/meals-grid';
import {getMeals} from '@/lib/meals';
import { Suspense } from 'react';

async function Meals(){
    const meals = await getMeals();
    return <MealsGrid meals ={meals} />
}
export default function MealsPage(){
    return (
        <>
        <header className={classes.header}>
            <h1>
                Delicious Meals, created <span className={classes.highlight}> By Kingston</span>
                </h1>
                <p>Choose your favourite recipy and cook youself. It is fun</p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share your Favorite meals here
                    </Link>
                </p>
                 </header>
                 <main className={classes.main}>
                    <Suspense  fallback={<p className={classes.loading}> Fetching Data...</p> }>
                    <Meals />
                    </Suspense>
                 </main>
                 </>
    );
}