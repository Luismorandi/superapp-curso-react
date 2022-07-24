import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <>
      {products.map((product, i) => {
        return (
          <Item
            key={product.id}
            name={product.title}
            price={product.price}
            id={product.id}
            image={product.image}
            rating={product.rating}
            category={product.category}
          />
        );
      })}
    </>
  );
};

export default ItemList;
