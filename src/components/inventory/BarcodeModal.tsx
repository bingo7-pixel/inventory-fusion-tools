import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Barcode, ScanLine, Keyboard } from "lucide-react";
import { useState } from "react";

interface BarcodeModalProps {
  open: boolean;
  onClose: () => void;
}

const BarcodeModal = ({ open, onClose }: BarcodeModalProps) => {
  const { toast } = useToast();
  const [manualCode, setManualCode] = useState("");
  const [scanning, setScanning] = useState(false);

  const handleScan = () => {
    setScanning(true);
    // Simulating a scan
    setTimeout(() => {
      setScanning(false);
      toast({
        title: "Item Scanned",
        description: "Barcode: 123456789 - Chicken Breast detected",
      });
    }, 2000);
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualCode) return;
    
    toast({
      title: "Code Entered",
      description: `Manual code entered: ${manualCode}`,
    });
    setManualCode("");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Scan Inventory Item</DialogTitle>
          <DialogDescription>
            Scan barcode or enter code manually to track inventory
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="scan" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="scan">
              <ScanLine className="w-4 h-4 mr-2" />
              Scan Barcode
            </TabsTrigger>
            <TabsTrigger value="manual">
              <Keyboard className="w-4 h-4 mr-2" />
              Manual Entry
            </TabsTrigger>
          </TabsList>

          <TabsContent value="scan" className="space-y-4">
            <div className="flex flex-col items-center justify-center space-y-4 min-h-[200px]">
              {scanning ? (
                <div className="relative">
                  <ScanLine className="w-16 h-16 text-primary animate-pulse" />
                  <div className="absolute inset-0 bg-primary/10 animate-scan" />
                </div>
              ) : (
                <Barcode className="w-16 h-16 text-muted-foreground" />
              )}
              <Button 
                onClick={handleScan}
                disabled={scanning}
                className="w-full max-w-xs"
              >
                {scanning ? "Scanning..." : "Start Scanning"}
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="manual">
            <form onSubmit={handleManualSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  placeholder="Enter barcode number"
                  value={manualCode}
                  onChange={(e) => setManualCode(e.target.value)}
                  type="text"
                  pattern="[0-9]*"
                />
              </div>
              <Button type="submit" className="w-full">
                Submit Code
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default BarcodeModal;