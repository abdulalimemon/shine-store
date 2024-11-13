const ProductPageCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 my-10">
      {newData?.map((product: Product) => (
        <div
          key={product._id}
          className="rounded-md border flex flex-col justify-between"
        >
          <ProductCard product={product} link="products" />
        </div>
      ))}
    </div>
  );
};

export default ProductPageCard;
