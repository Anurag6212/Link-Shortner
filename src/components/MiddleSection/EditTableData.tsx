import React from 'react';
import DialogWrapper from '../ui/dialog-wrapper';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { handleEditTable } from '@/lib/Reducers/shortnerSlice';

const EditTableData: React.FC = () => {
  const { editTable } = useAppSelector((state) => state.table);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(
      handleEditTable({
        ...(editTable.data ? editTable.data : {}),
        isOpen: false,
      })
    );
  };
  
  return (
    <DialogWrapper open={editTable.isOpen} setOpen={handleClose}>
      <div>Edit Table Data</div>
    </DialogWrapper>
  );
};

export default EditTableData;
