"use client"
import { useState, useRef } from "react";

import { Button } from "@/components/ui/button";

import {
  ColumnDef,
  flexRender,
  SortingState,
  getPaginationRowModel,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TDataModified {
  self: boolean; // This self property was defined in the original Team type
}

interface DataTableProps<TData extends TDataModified, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  defaultPage: number;
}

export function DataTable<TData extends TDataModified, TValue>({
  columns,
  data,
  defaultPage,
}: DataTableProps<TData, TValue>) {
  const isDefualtPage = useRef<boolean>(false);
  // Sorting state (score from high to low by default)
  const [sorting, setSorting] = useState<SortingState>([
    {
      id: "score",
      desc: true,
    },
  ]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
    },
  });
  if (!isDefualtPage.current) {
    isDefualtPage.current = true;
    [...Array(defaultPage)].forEach(() => {
      if (table.getCanNextPage()) table.nextPage();
    });
  }
  return (
    <div>
      <Table className="gap-5 w-full">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                className={row.original.self ? "bg-muted-foreground" : ""}
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell className="text-md font-normal" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-12 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
