"use client";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function insertData(formData: FormData) {
	const supabase = createClient();

	const newData = {
		email: formData.get("id") as string,
		password: formData.get("title") as string,
	};

	const { error } = await supabase.from("notes").insert([newData]);

	if (error) {
		console.log(error);
		redirect("/error");
	}

	revalidatePath("/", "layout");
	redirect("/supabase/insert");
}
