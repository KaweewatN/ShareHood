import {v4 as uuidv4} from "uuid";
import imageCompression from "browser-image-compression";
import {createClient} from "src/libs/db/client";

// define the props for the uploadImage function
type UploadFileProps = {
  file: File;
  bucket: string;
  folder?: string;
};

// get the storage object from the supabase client
function getStorage() {
  const {storage} = createClient();
  return storage;
}

export async function uploadImage({file, bucket, folder}: UploadFileProps) {
  const fileName = file.name;
  const fileExtension = fileName.slice(fileName.lastIndexOf(".") + 1);
  const path = `${folder ? folder + "/" : ""}${uuidv4()}.${fileExtension}`;

  try {
    await imageCompression(file, {maxSizeMB: 1});
  } catch (error) {
    return {imageUrl: "", error: `Failed to compress image: ${error}`};
  }

  const storage = getStorage();

  const {data, error} = await storage.from(bucket).upload(path, file);

  if (error) {
    return {imageUrl: "", error: error.message};
  }

  const imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${bucket}/${data?.path}`;

  return {imageUrl, error: ""};
}
