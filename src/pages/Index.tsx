import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import StatsCards from "@/components/inventory/StatsCards";
import InventoryTable from "@/components/inventory/InventoryTable";
import BulkUpdateModal from "@/components/inventory/BulkUpdateModal";
import BatchTrackingModal from "@/components/inventory/BatchTrackingModal";
import IoTDeviceModal from "@/components/inventory/IoTDeviceModal";
import BarcodeModal from "@/components/inventory/BarcodeModal";
import { Filter, Plus, BarChart3, History, Download, Upload, Wifi, ScanLine } from "lucide-react";

const Index = () => {
  const [showBulkUpdate, setShowBulkUpdate] = useState(false);
  const [showBatchTracking, setShowBatchTracking] = useState(false);
  const [showIoTDevice, setShowIoTDevice] = useState(false);
  const [showBarcodeScanner, setShowBarcodeScanner] = useState(false);
  const { toast } = useToast();

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Inventory Management</h1>
          <p className="text-muted-foreground">Manage your restaurant's inventory efficiently</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => toast({ title: "Filters", description: "Filter functionality coming soon!" })}>
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline" onClick={() => toast({ title: "Import", description: "Import functionality coming soon!" })}>
            <Upload className="w-4 h-4 mr-2" />
            Import
          </Button>
          <Button variant="outline" onClick={() => toast({ title: "Export", description: "Export functionality coming soon!" })}>
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button onClick={() => setShowBulkUpdate(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Item
          </Button>
        </div>
      </div>

      <StatsCards />

      <div className="flex flex-wrap gap-4 mb-6">
        <Input
          placeholder="Search inventory..."
          className="max-w-xs"
        />
        <div className="flex gap-2 ml-auto">
          <Button variant="outline" onClick={() => setShowBarcodeScanner(true)}>
            <ScanLine className="w-4 h-4 mr-2" />
            Scan Item
          </Button>
          <Button variant="outline" onClick={() => setShowBatchTracking(true)}>
            <History className="w-4 h-4 mr-2" />
            Batch Tracking
          </Button>
          <Button variant="outline" onClick={() => setShowIoTDevice(true)}>
            <Wifi className="w-4 h-4 mr-2" />
            IoT Devices
          </Button>
          <Button variant="outline">
            <BarChart3 className="w-4 h-4 mr-2" />
            Analytics
          </Button>
        </div>
      </div>

      <InventoryTable />
      <BulkUpdateModal open={showBulkUpdate} onClose={() => setShowBulkUpdate(false)} />
      <BatchTrackingModal open={showBatchTracking} onClose={() => setShowBatchTracking(false)} />
      <IoTDeviceModal open={showIoTDevice} onClose={() => setShowIoTDevice(false)} />
      <BarcodeModal open={showBarcodeScanner} onClose={() => setShowBarcodeScanner(false)} />
    </div>
  );
};

export default Index;