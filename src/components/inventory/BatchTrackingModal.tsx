import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon, AlertTriangle } from "lucide-react";

interface BatchTrackingModalProps {
  open: boolean;
  onClose: () => void;
}

const BatchTrackingModal = ({ open, onClose }: BatchTrackingModalProps) => {
  const batches = [
    { id: "B001", item: "Chicken Breast", quantity: "15 kg", received: "2024-03-01", expiry: "2024-04-01", status: "Active", temperature: "2°C" },
    { id: "B002", item: "Olive Oil", quantity: "30 L", received: "2024-03-05", expiry: "2024-06-15", status: "Active", temperature: "21°C" },
    { id: "B003", item: "Tomatoes", quantity: "50 kg", received: "2024-03-10", expiry: "2024-03-25", status: "Expiring Soon", temperature: "8°C" },
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px]">
        <DialogHeader>
          <DialogTitle>Batch Tracking</DialogTitle>
          <DialogDescription>
            Monitor batch status, expiry dates, and storage conditions
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              <span className="text-sm text-muted-foreground">
                2 batches expiring within 30 days
              </span>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  Filter by date
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Batch ID</TableHead>
                <TableHead>Item</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Received Date</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Temperature</TableHead>
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
                  <TableCell>{batch.temperature}</TableCell>
                  <TableCell>
                    <Badge variant={batch.status === "Expiring Soon" ? "destructive" : "secondary"}>
                      {batch.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BatchTrackingModal;