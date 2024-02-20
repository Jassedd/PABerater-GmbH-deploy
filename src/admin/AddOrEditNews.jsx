import { getDatabase, ref, set, push } from "firebase/database";

const database = getDatabase();

const addOrEditNews = async (newsObject, editing) => {
  try {
    if (editing) {
      const newsRef = ref(database, `news/${newsObject.id}`);
      await set(newsRef, newsObject);
      console.log("Noticia actualizada exitosamente");
    } else {
      const newsRef = ref(database, "news");
      const newNewsRef = await push(newsRef, newsObject);
      console.log("Noticia agregada exitosamente con ID: ", newNewsRef.key);
    }
  } catch (e) {
    console.error("Error al agregar/editar documento: ", e);
  }
};

export default addOrEditNews;
