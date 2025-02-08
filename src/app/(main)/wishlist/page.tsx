import WishlistBreadcrumb from "./WishlistBreadcrumb";
import WishlistComponent from "./WishlistComponent";

const Page = async () => {
    const res = await fetch(`${process.env.BACKEND_URL}/product`, {
        next: { revalidate: 30 },
      });
      const data = await res.json();
  return (
    <>
      <WishlistBreadcrumb />
      <WishlistComponent products={data} />
    </>
  );
};

export default Page;
