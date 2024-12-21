import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface BulkUpdateModalProps {
  open: boolean;
  onClose: () => void;
}

const BulkUpdateModal = ({ open, onClose }: BulkUpdateModalProps) => {
  const { toast } = useToast();
  const [updateType, setUpdateType] = useState("single");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success",
      description: "Inventory updated successfully",
    });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Inventory Management</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="single" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="single">Single Item</TabsTrigger>
            <TabsTrigger value="bulk">Bulk Update</TabsTrigger>
          </TabsList>
          
          <TabsContent value="single">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Item Name</Label>
                <Input id="name" placeholder="Enter item name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="meat">Meat</SelectItem>
                    <SelectItem value="produce">Produce</SelectItem>
                    <SelectItem value="dairy">Dairy</SelectItem>
                    <SelectItem value="pantry">Pantry</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="quantity">Initial Quantity</Label>
                <div className="flex gap-2">
                  <Input id="quantity" placeholder="Enter quantity" type="number" className="flex-1" />
                  <Select defaultValue="kg">
                    <SelectTrigger className="w-[100px]">
                      <SelectValue placeholder="Unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kg">kg</SelectItem>
                      <SelectItem value="l">L</SelectItem>
                      <SelectItem value="units">units</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="minLevel">Minimum Level</Label>
                <Input id="minLevel" placeholder="Enter minimum stock level" type="number" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="batch">Batch Number</Label>
                <Input id="batch" placeholder="Enter batch number" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" type="date" />
              </div>
              
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit">Save</Button>
              </div>
            </form>
          </TabsContent>
          
          <TabsContent value="bulk">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Bulk Update Method</Label>
                <Select onValueChange={setUpdateType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select update type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="csv">CSV Upload</SelectItem>
                    <SelectItem value="manual">Manual Entry</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {updateType === "csv" ? (
                <div className="space-y-2">
                  <Label htmlFor="csvFile">Upload CSV File</Label>
                  <Input id="csvFile" type="file" accept=".csv" />
                  <p className="text-sm text-muted-foreground">
                    CSV should include: Item Name, Category, Quantity, Unit, Batch Number, Expiry Date
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <textarea
                    className="w-full h-[200px] p-2 border rounded-md"
                    placeholder="Enter items in format:
Item Name, Category, Quantity, Unit, Batch Number, Expiry Date
(one item per line)"
                  />
                </div>
              )}
              
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button onClick={handleSubmit}>Upload</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default BulkUpdateModal;