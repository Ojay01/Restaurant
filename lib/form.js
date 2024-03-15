'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData) {
    const meal = {
        title: formData.get('title'),
        instructions: formData.get('instructions'),
        summary: formData.get('summary'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
        image: formData.get('image'),
    }
   await saveMeal(meal);
   redirect('/meals');
}