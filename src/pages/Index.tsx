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
    <div className="container mx-auto p-6 space-y-6 dark:bg-[#1A1F2C] min-h-screen">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold dark:text-white">Inventory Management</h1>
          <p className="text-muted-foreground dark:text-gray-300">Manage your restaurant's inventory efficiently</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button 
            variant="outline" 
            onClick={() => toast({ title: "Filters", description: "Filter functionality coming soon!" })}
            className="dark:bg-[#403E43] dark:text-white dark:hover:bg-[#221F26] transition-colors"
          >
            <Filter className="w-4 h-4 mr-2" />
            <span>Filters</span>
          </Button>
          <Button 
            variant="outline" 
            onClick={() => toast({ title: "Import", description: "Import functionality coming soon!" })}
            className="dark:bg-[#403E43] dark:text-white dark:hover:bg-[#221F26] transition-colors"
          >
            <Upload className="w-4 h-4 mr-2" />
            <span>Import</span>
          </Button>
          <Button 
            variant="outline" 
            onClick={() => toast({ title: "Export", description: "Export functionality coming soon!" })}
            className="dark:bg-[#403E43] dark:text-white dark:hover:bg-[#221F26] transition-colors"
          >
            <Download className="w-4 h-4 mr-2" />
            <span>Export</span>
          </Button>
          <Button 
            onClick={() => setShowBulkUpdate(true)}
            className="dark:bg-[#7E69AB] dark:text-white dark:hover:bg-[#6E59A5] transition-colors"
          >
            <Plus className="w-4 h-4 mr-2" />
            <span>Add Item</span>
          </Button>
        </div>
      </div>

      <StatsCards />

      <div className="flex flex-wrap gap-4 mb-6">
        <Input
          placeholder="Search inventory..."
          className="max-w-xs dark:bg-[#403E43] dark:text-white dark:border-[#221F26]"
        />
        <div className="flex flex-wrap gap-2 ml-auto">
          <Button 
            variant="outline" 
            onClick={() => setShowBarcodeScanner(true)}
            className="dark:bg-[#403E43] dark:text-white dark:hover:bg-[#221F26] transition-colors"
          >
            <ScanLine className="w-4 h-4 mr-2" />
            <span>Scan Item</span>
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setShowBatchTracking(true)}
            className="dark:bg-[#403E43] dark:text-white dark:hover:bg-[#221F26] transition-colors"
          >
            <History className="w-4 h-4 mr-2" />
            <span>Batch Tracking</span>
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setShowIoTDevice(true)}
            className="dark:bg-[#403E43] dark:text-white dark:hover:bg-[#221F26] transition-colors"
          >
            <Wifi className="w-4 h-4 mr-2" />
            <span>IoT Devices</span>
          </Button>
          <Button 
            variant="outline"
            className="dark:bg-[#403E43] dark:text-white dark:hover:bg-[#221F26] transition-colors"
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            <span>Analytics</span>
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