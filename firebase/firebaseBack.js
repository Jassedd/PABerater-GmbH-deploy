import { collection, addDoc, doc, setDoc, Timestamp } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { db } from './firebase';

export async function createNews(title, description, imageUrl) {
  try {
    const idNews = uuidv4();
    const newsCollection = collection(db, 'news');

    // Agregar el documento principal
    const newsDocRef = doc(newsCollection, idNews);
    await setDoc(newsDocRef, {
      title: title,
      description: description,
      img: imageUrl,
    });

    console.log('Noticia creada exitosamente');
  } catch (error) {
    console.error('Error al crear la noticia:', error);
  }
}

export async function createUsersFormLanding(
  name, email, subject, nacionality, country, profession, description,
  telefono, hasEmigrated, moveDate, maritalStatus, germanLevel, englishLevel, estimatedCost, motivation
) {
  try {
    const idUsers = uuidv4();
    const usersFormsCollection = collection(db, 'usersForms');

    const usersDocRef = doc(usersFormsCollection, idUsers);
    await setDoc(usersDocRef, {
      name: name,
      email: email,
      subject: subject,
      nacionality: nacionality,
      country: country,
      profession: profession,
      description: description,
      telefono: telefono, 
      hasEmigrated: hasEmigrated,
      moveDate: moveDate,
      maritalStatus: maritalStatus,
      germanLevel: germanLevel,
      englishLevel: englishLevel,
      estimatedCost: estimatedCost,
      motivation: motivation,
      date: Timestamp.now()
    });

    console.log("Usuario creado exitosamente");
  } catch (error) {
    console.error("Error al crear el usuario:", error);
  }
}

export async function createUsersForm( name, email, subject, profession, description) {
  try {
    const idUsers = uuidv4();
    const usersFormsCollection = collection(db, 'usersForms');

    const usersDocRef = doc(usersFormsCollection, idUsers)
    await setDoc(usersDocRef, {
      name: name,
      email: email,
      subject: subject,
      profession: profession,
      description: description,
      date: Timestamp.now()
    });

    console.log("Usuario creado exitosamente");
  } catch (error) {
    console.error("Error al crear el usuario:", error);
  }
}
