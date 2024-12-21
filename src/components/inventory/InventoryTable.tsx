import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

const InventoryTable = () => {
  const items = [
    { name: "Chicken Breast", category: "Meat", quantity: "15 kg", status: "warning", batchNo: "B001", expiry: "2024-04-01" },
    { name: "Olive Oil", category: "Pantry", quantity: "30 L", status: "in-stock", batchNo: "B002", expiry: "2024-06-15" },
    { name: "Tomatoes", category: "Vegetables", quantity: "50 kg", status: "in-stock", batchNo: "B003", expiry: "2024-03-25" },
  ];

  return (
    <div className="bg-white rounded-lg shadow border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Batch No.</TableHead>
            <TableHead>Expiry Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.name}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.batchNo}</TableCell>
              <TableCell>{item.expiry}</TableCell>
              <TableCell>
                <Badge variant={item.status === "warning" ? "destructive" : "secondary"}>
                  {item.status === "warning" ? "Low Stock" : "In Stock"}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InventoryTable;