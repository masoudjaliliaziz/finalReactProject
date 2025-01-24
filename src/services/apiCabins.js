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

export async function createCabin(newCabin) {
  const imageName = await `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const fullPathImage = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: fullPathImage }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("cabins could not be created");
  }
  //2.upload image
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
