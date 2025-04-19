import React from 'react';
import { useForm } from 'react-hook-form';
import DialogWrapper from '../ui/dialog-wrapper';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { handleEditTable } from '@/store/Reducers/shortnerSlice';
import styles from '../../styles/login.module.scss';
import { editTableInput } from '@/Types/form';
import { DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const EditTableData: React.FC = () => {
  const { editTable } = useAppSelector((state) => state.table);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<editTableInput>();

  const statusList = ['active', 'inactive'];

  const handleClose = () => {
    dispatch(
      handleEditTable({
        ...editTable,
        ...(editTable.data ? editTable.data : {}),
        isOpenEditModal: false,
      })
    );
  };

  return (
    <DialogWrapper
      open={editTable.isOpenEditModal}
      setOpen={handleClose}
      title="Edit link"
    >
      <div className={styles['dialog-wrapper']}>
        <div className="mb-4">
          <label htmlFor="originalLink" className={styles.label}>
            Original Link
          </label>
          <input
            type="originalLink"
            id="originalLink"
            placeholder="Enter link"
            className={styles.input}
            {...register('originalLink', { required: true })}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className={styles.label}>
            Status
          </label>
          <Select onValueChange={() => {}} defaultValue="active">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              {statusList.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <DialogFooter className={styles['dialog-footer']}>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </div>
    </DialogWrapper>
  );
};

export default EditTableData;
