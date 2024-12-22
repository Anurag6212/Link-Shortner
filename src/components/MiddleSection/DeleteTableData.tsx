import React from 'react';
import DialogWrapper from '../ui/dialog-wrapper';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { handleEditTable } from '@/lib/Reducers/shortnerSlice';
import styles from '../../styles/login.module.scss';
import { DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';

const DeleteTableData: React.FC = () => {
  const { editTable } = useAppSelector((state) => state.table);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(
      handleEditTable({
        ...editTable,
        ...(editTable.data ? editTable.data : {}),
        isOpenDeleteModal: false,
      })
    );
  };

  return (
    <DialogWrapper
      open={editTable.isOpenDeleteModal}
      setOpen={handleClose}
      title="Delete link"
    >
      <div className={styles['dialog-wrapper']}>
        <p className="text-white">Are you sure you want to delete this link?</p>
        <DialogFooter className={styles['dialog-footer']}>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </div>
    </DialogWrapper>
  );
};

export default DeleteTableData;
