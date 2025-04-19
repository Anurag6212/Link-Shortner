'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { TableData } from '@/Types/table';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { handleEditTable } from '@/store/Reducers/shortnerSlice';
import { Pencil, Trash2 } from 'lucide-react';
import dynamic from 'next/dynamic';
import DeleteTableData from './DeleteTableData';

const EditTableData = dynamic(
  () => import('@/components/MiddleSection/EditTableData'),
  {
    ssr: false,
  }
);

const RenderTable = () => {
  const dispatch = useAppDispatch();

  const { tableData, editTable } = useAppSelector((state) => state.table);

  const handleEdit = (data: TableData) => {
    dispatch(
      handleEditTable({
        ...editTable,
        data: data,
        isOpenEditModal: true,
      })
    );
  };

  const handleDelete = (data: TableData) => {
    dispatch(
      handleEditTable({
        ...editTable,
        data: data,
        isOpenDeleteModal: true,
      })
    );
  };

  return (
    <>
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
              <TableCell className="font-medium">
                {shortner.shortLink}
              </TableCell>
              <TableCell>{shortner.originalLink}</TableCell>
              <TableCell>{shortner.status}</TableCell>
              <TableCell className="text-right">{shortner.date}</TableCell>
              <TableCell className="text-right flex justify-end gap-4">
                <Pencil
                  onClick={() => {
                    handleEdit(shortner);
                  }}
                  className="h-[1rem] w-[1rem] cursor-pointer	 rotate-0 scale-100 transition-all"
                />
                <Trash2
                  onClick={() => {
                    handleDelete(shortner);
                  }}
                  className="h-[1rem] w-[1rem] cursor-pointer	 rotate-0 scale-100 transition-all"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {editTable.isOpenEditModal && <EditTableData />}
      {editTable.isOpenDeleteModal && <DeleteTableData />}
    </>
  );
};

export default RenderTable;
