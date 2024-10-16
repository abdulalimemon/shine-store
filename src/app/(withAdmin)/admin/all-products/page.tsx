import { Product } from "@/type";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DashboardProduct = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/product`, {
    next: { revalidate: 30 },
  });
  const data = await res.json();
  return (
    <div className="flex flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex py-10 px-5 items-center justify-center rounded-lg border border-dashed shadow-sm overflow-hidden">
          <Table className="overflow-x-auto">
            <TableHeader className="overflow-x-auto">
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="hidden md:block">Brand</TableHead>
                <TableHead className="hidden md:block">Rating</TableHead>
                <TableHead className="hidden md:block">Category</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="overflow-x-auto">
              {data.map((item: Product) => (
                <TableRow key={item._id}>
                  <TableCell>
                    <div className="font-medium">{item.name}</div>
                  </TableCell>
                  <TableCell className="hidden lg:block">
                    {item.brand}
                  </TableCell>
                  <TableCell className="hidden md:block">
                    <Badge className="text-xs" variant="secondary">
                      {item.rating}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:block">
                    {item.category}
                  </TableCell>
                  <TableCell className="text-right">${item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
};

export default DashboardProduct;
