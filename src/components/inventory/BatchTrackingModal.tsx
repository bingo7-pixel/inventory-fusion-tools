import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface BatchTrackingModalProps {
  open: boolean;
  onClose: () => void;
}

const BatchTrackingModal = ({ open, onClose }: BatchTrackingModalProps) => {
  const batches = [
    { id: "B001", item: "Chicken Breast", quantity: "15 kg", received: "2024-03-01", expiry: "2024-04-01", status: "Active" },
    { id: "B002", item: "Olive Oil", quantity: "30 L", received: "2024-03-05", expiry: "2024-06-15", status: "Active" },
    { id: "B003", item: "Tomatoes", quantity: "50 kg", received: "2024-03-10", expiry: "2024-03-25", status: "Expiring Soon" },
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Batch Tracking</DialogTitle>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Batch ID</TableHead>
              <TableHead>Item</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Received Date</TableHead>
              <TableHead>Expiry Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {batches.map((batch) => (
              <TableRow key={batch.id}>
                <TableCell className="font-medium">{batch.id}</TableCell>
                <TableCell>{batch.item}</TableCell>
                <TableCell>{batch.quantity}</TableCell>
                <TableCell>{batch.received}</TableCell>
                <TableCell>{batch.expiry}</TableCell>
                <TableCell>
                  <Badge variant={batch.status === "Expiring Soon" ? "warning" : "secondary"}>
                    {batch.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
};

export default BatchTrackingModal;