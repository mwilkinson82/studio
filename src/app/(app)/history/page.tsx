"use client";

import { useState, useEffect } from "react";
import type { Purchase } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, CalendarDays, Tag, Info } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const mockPurchases: Purchase[] = [
  { id: "1", serviceName: "Strategic Memo", date: "2023-05-15", price: 150, status: "Delivered" },
  { id: "2", serviceName: "Insight Note", date: "2023-06-01", price: 55, status: "Delivered" },
  { id: "3", serviceName: "Direct Consulting with Marshall", date: "2023-06-20", price: 1000, status: "In Progress" },
  { id: "4", serviceName: "Embedded Response", date: "2023-07-10", price: 525, status: "Pending" },
];

export default function HistoryPage() {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPurchases(mockPurchases);
      setIsLoading(false);
    }, 1000);
  }, []);

  const getStatusBadgeVariant = (status: Purchase["status"]) => {
    switch (status) {
      case "Delivered":
        return "default"; // Greenish, use default primary for now
      case "In Progress":
        return "secondary"; // Bluish/Yellowish
      case "Pending":
        return "outline"; // Greyish
      default:
        return "outline";
    }
  };


  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <CardTitle className="text-2xl">Purchase History</CardTitle>
        </div>
        <CardDescription>Review your past advisory service purchases.</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center space-x-4 p-2 border rounded-md">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
                <Skeleton className="h-8 w-20 rounded-md" />
              </div>
            ))}
          </div>
        ) : purchases.length === 0 ? (
          <div className="text-center py-12">
            <Info className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-xl text-muted-foreground">No purchases yet.</p>
            <p className="text-sm text-muted-foreground">Start your clarity journey to see your history here.</p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>
                <TableHead><CalendarDays className="inline-block mr-1 h-4 w-4" />Date</TableHead>
                <TableHead className="text-right"><Tag className="inline-block mr-1 h-4 w-4" />Price</TableHead>
                <TableHead className="text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {purchases.map((purchase) => (
                <TableRow key={purchase.id}>
                  <TableCell className="font-medium">{purchase.serviceName}</TableCell>
                  <TableCell>{new Date(purchase.date).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">${purchase.price.toLocaleString()}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant={getStatusBadgeVariant(purchase.status)} className="capitalize">
                      {purchase.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}
