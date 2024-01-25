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

export function createUsersForm(name, email, subject, description) {
  try {
    console.log("Creando usuario con nombre:", name);
    console.log("Correo electrónico:", email);
    console.log("Asunto:", subject);
    console.log("Descripción:", description);

    const idUserForm = uuidv4();
    console.log("ID de usuario:", idUserForm);

    set(ref(db, 'usersForms/' + idUserForm), {
      id: idUserForm,
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
