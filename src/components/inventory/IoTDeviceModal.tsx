import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Power, RefreshCw } from "lucide-react";

interface IoTDeviceModalProps {
  open: boolean;
  onClose: () => void;
}

const IoTDeviceModal = ({ open, onClose }: IoTDeviceModalProps) => {
  const devices = [
    { id: "SCALE-001", type: "Smart Scale", location: "Main Kitchen", status: "Connected", lastSync: "2 mins ago" },
    { id: "TEMP-001", type: "Temperature Sensor", location: "Cold Storage", status: "Connected", lastSync: "5 mins ago" },
    { id: "SCAN-001", type: "Barcode Scanner", location: "Storage Room", status: "Offline", lastSync: "1 hour ago" },
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>IoT Devices</DialogTitle>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Device ID</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Sync</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {devices.map((device) => (
              <TableRow key={device.id}>
                <TableCell className="font-medium">{device.id}</TableCell>
                <TableCell>{device.type}</TableCell>
                <TableCell>{device.location}</TableCell>
                <TableCell>
                  <Badge variant={device.status === "Connected" ? "success" : "destructive"}>
                    {device.status}
                  </Badge>
                </TableCell>
                <TableCell>{device.lastSync}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Power className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <RefreshCw className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
};

export default IoTDeviceModal;