'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { EditTable } from '@/Interfaces/tableInterfaces';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { Pencil, Trash2 } from 'lucide-react';

const RenderTable = () => {
  const dispatch = useAppDispatch();

  const { tableData, editTable } = useAppSelector((state) => state.table);

  const handleEdit = (data: EditTable) => {

  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Short Link</TableHead>
          <TableHead>Original Link</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Date</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((shortner) => (
          <TableRow key={shortner.id}>
            <TableCell className="font-medium">{shortner.shortLink}</TableCell>
            <TableCell>{shortner.originalLink}</TableCell>
            <TableCell>{shortner.status}</TableCell>
            <TableCell className="text-right">{shortner.date}</TableCell>
            <TableCell className="text-right flex justify-end gap-4">
              <Pencil className="h-[1rem] w-[1rem] cursor-pointer	 rotate-0 scale-100 transition-all" />
              <Trash2 className="h-[1rem] w-[1rem] cursor-pointer	 rotate-0 scale-100 transition-all" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RenderTable;
