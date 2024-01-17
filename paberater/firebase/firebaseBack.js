import { ref, set } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import { db } from "./firebase";

export function createNews(title, description, imageUrl) {
  try {
    const idNews = uuidv4();
    set(ref(db, 'news/' + idNews), {
      id: idNews,
      title: title,
      description: description,
      img: imageUrl
    });
    console.log("Noticia creada exitosamente");
  } catch (error) {
    console.error("Error al crear la noticia:", error);
  }
}
