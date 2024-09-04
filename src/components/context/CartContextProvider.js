import React, { createContext, useState } from "react";

export const context = createContext();
const { Provider } = context;

const CartContextProvider = ({ children }) => {
  const [productsCart, setProductsCart] = useState([]);

  const removeAllProducts = () => {
    setProductsCart([]);
  };
  const reservedProduct = (products) => {
    sendWhatsapp(products);
    setProductsCart([]);
  };

  const sendWhatsapp = (products) => {
    const phonesNumber = [
      {
        number: "+5491167232714",
        name: "Luis",
      },
      { number: "+34657387499", name: "Angie" },
    ];
    const randomNumber = Math.floor(Math.random() * 2);
    const contact = phonesNumber[randomNumber];

    const productList = products
      .map((product, index) => `${index + 1}. ${product.title}`)
      .join("\n");
    const message = `Hola ${contact.name}, estoy interesado en los siguientes productos:\n\n${productList}`;

    // Codificar el mensaje en URL
    const encodedMessage = encodeURIComponent(message);

    // Construir el enlace de WhatsApp
    const whatsappUrl = `https://wa.me/${contact.number}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  const checkProducts = (id) => {
    let result = productsCart.find((objeto) => id === objeto.id);
    return result;
  };

  const addProductsCart = (product, count) => {
    if (checkProducts(product.id) === undefined) {
      product.amount = count;
      setProductsCart([...productsCart, product]);
    } else {
      let copyProducts = productsCart.slice();
      let index = copyProducts.findIndex((objeto) => product.id === objeto.id);
      copyProducts[index].amount += count;
      setProductsCart(copyProducts);
    }
  };

  const removeProducts = (product) => {
    let copyProducts = [];
    let id = product.id;
    productsCart.map(function (objeto) {
      if (id !== objeto.id) {
        copyProducts.push(objeto);
      }
    });
    setProductsCart(copyProducts);
  };

  const quantityProducts = (products) => {
    const amount = products.reduce(function (count, object) {
      return count + object.amount;
    }, 0);

    return amount;
  };

  return (
    <Provider
      value={{
        productsCart,
        addProductsCart,
        removeProducts,
        quantityProducts,
        removeAllProducts,
        reservedProduct,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartContextProvider;
