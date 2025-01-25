import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("cabins could not be loaded");
  }
  return data;
}
export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("cabins could not be deleted");
  }
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = await `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const fullPathImage = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  let query = supabase.from("cabins");
  //A)create
  if (!id) {
    query = query.insert([{ ...newCabin, image: fullPathImage }]);
  }

  //B)Edit
  if (id) {
    query = query.update({ ...newCabin, image: fullPathImage }).eq("id", id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("cabins could not be created");
  }
  //2.upload image

  if (hasImagePath) {
    return data;
  }

  const { error: fileError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  //3.delete cabin
  if (fileError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(fileError);
    throw new Error("cabin image could not be uploaded");
  }

  return data;
}
