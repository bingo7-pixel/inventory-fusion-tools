import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Power, RefreshCw, WifiOff, Thermometer, Scale, Barcode } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface IoTDeviceModalProps {
  open: boolean;
  onClose: () => void;
}

const IoTDeviceModal = ({ open, onClose }: IoTDeviceModalProps) => {
  const { toast } = useToast();
  
  const devices = [
    { 
      id: "SCALE-001", 
      type: "Smart Scale", 
      location: "Main Kitchen", 
      status: "Connected", 
      lastSync: "2 mins ago",
      reading: "15.5 kg",
      icon: Scale
    },
    { 
      id: "TEMP-001", 
      type: "Temperature Sensor", 
      location: "Cold Storage", 
      status: "Connected", 
      lastSync: "5 mins ago",
      reading: "2.1°C",
      icon: Thermometer
    },
    { 
      id: "SCAN-001", 
      type: "Barcode Scanner", 
      location: "Storage Room", 
      status: "Offline", 
      lastSync: "1 hour ago",
      reading: "N/A",
      icon: Barcode
    },
  ];

  const handleRefresh = (deviceId: string) => {
    toast({
      title: "Refreshing device",
      description: `Syncing data from device ${deviceId}`,
    });
  };

  const handlePower = (deviceId: string) => {
    toast({
      title: "Power cycle",
      description: `Attempting to restart device ${deviceId}`,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px]">
        <DialogHeader>
          <DialogTitle>IoT Devices</DialogTitle>
          <DialogDescription>
            Monitor and manage connected devices for real-time inventory tracking
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {devices.map((device) => (
              <div key={`summary-${device.id}`} className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <device.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{device.type}</span>
                </div>
                <div className="mt-2 text-2xl font-bold">{device.reading}</div>
                <div className="text-sm text-muted-foreground">{device.location}</div>
              </div>
            ))}
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Device ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Sync</TableHead>
                <TableHead>Reading</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {devices.map((device) => (
                <TableRow key={device.id}>
                  <TableCell className="font-medium">{device.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <device.icon className="w-4 h-4" />
                      <span>{device.type}</span>
                    </div>
                  </TableCell>
                  <TableCell>{device.location}</TableCell>
                  <TableCell>
                    <Badge variant={device.status === "Connected" ? "secondary" : "destructive"}>
                      <div className="flex items-center space-x-1">
                        {device.status === "Connected" ? (
                          <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                        ) : (
                          <WifiOff className="w-3 h-3" />
                        )}
                        <span>{device.status}</span>
                      </div>
                    </Badge>
                  </TableCell>
                  <TableCell>{device.lastSync}</TableCell>
                  <TableCell>{device.reading}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => handlePower(device.id)}
                      >
                        <Power className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => handleRefresh(device.id)}
                      >
                        <RefreshCw className="w-4 h-4" />
                      </Button>
                    </div>
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

export default IoTDeviceModal;