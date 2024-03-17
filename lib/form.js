"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    instructions: formData.get("instructions"),
    summary: formData.get("summary"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    image: formData.get("image"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input",
    };
  }
  await saveMeal(meal);
  revalidatePath("/", "layout");
  redirect("/meals");
}
