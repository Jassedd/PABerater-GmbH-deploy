
const apiUrl = "/api/news"; 

const addOrEditNews = async (newsObject, editing) => {
  const requestOptions = {
    method: editing ? "PUT" : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newsObject),
  };

  try {
    const response = await fetch(apiUrl, requestOptions);

    if (!response.ok) {
      throw new Error("Error al agregar/editar la noticia");
    }

    const result = await response.json();

    if (editing) {
      alert("Noticia actualizada exitosamente", {
        type: "success",
      });
    } else {
      alert("Noticia agregada exitosamente", {
        type: "success",
      });
    }

    return result;
  } catch (error) {
    console.error("Error al agregar/editar la noticia: ", error);
    alert.error("Error al procesar la solicitud. Por favor, inténtalo de nuevo.", {
      autoClose: 2000,
    });
    throw error;
  }
};

export default addOrEditNews;
