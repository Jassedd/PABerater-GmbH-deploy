import { collection, addDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { db } from "./firebase";

export async function createNews(title, description, imageUrl) {
  try {
    const idNews = uuidv4();
    const newsCollection = collection(db, 'news');

    await addDoc(newsCollection, {
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

export async function createUsersForm(id, name, email, subject, description) {
  try {
    console.log("Creando usuario con ID:", id);
    console.log("Nombre:", name);
    console.log("Correo electrónico:", email);
    console.log("Asunto:", subject);
    console.log("Descripción:", description);

    const usersFormsCollection = collection(db, 'usersForms');

    await addDoc(usersFormsCollection, {
      id: id,
      name: name,
      email: email,
      subject: subject,
      description: description,
    });

    console.log("Usuario creado exitosamente");
  } catch (error) {
    console.error("Error al crear el usuario:", error);
  }
}
