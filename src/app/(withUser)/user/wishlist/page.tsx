import WishlistProduct from "./WishlistProduct";

const Page = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/product`, {
    next: { revalidate: 30 },
  });
  const data = await res.json();
  return (
    <>
      <WishlistProduct products={data} />
    </>
  );
};

export default Page;
