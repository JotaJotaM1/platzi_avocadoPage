console.log("Happy hacking :)------");

//web api
const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector("#app");

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-En", {
    style: "currency",
    currency: "USD",
  }).format(price)

  return newPrice;
};

// conectarnos al server
window
  .fetch(`${baseUrl}/api/avo`)

  // procesar la respuesta y convertirla en JSON
  .then((respuesta) => respuesta.json())

  // JSON -> Data -> Renderizar info al browser
  .then((responseJson) => {
    const todosLosItems = [];

    responseJson.data.forEach((item) => {
      //crear la imagen
      const imagen = document.createElement("img");
      imagen.src = `${baseUrl}${item.image}`;
      imagen.className = "img-avocado";

      //crear titulo
      const title = document.createElement("h2");
      title.textContent = item.name;
      title.className = "tiitleH2";

      //crear precio
      const price = document.createElement("p");
      price.textContent = formatPrice(item.price);
      price.className = "priceAvocado";

      const buttonAdd = document.createElement("button");
      buttonAdd.textContent = "Add to Cart";
      buttonAdd.className = "btnAdd"

      // creamos el contenedor div y le agregarmos imagen, title y price
      const container = document.createElement("div");
      container.append(imagen, title, price, buttonAdd);
      container.className = "cardContainer";
      

      //Hacemos push a todos los items dentro de container
      todosLosItems.push(container);
    });

    appNode.append(...todosLosItems);
  });
