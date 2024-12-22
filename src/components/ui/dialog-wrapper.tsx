import React from 'react';
import { Dialog, DialogContent, DialogFooter, DialogTitle } from './dialog';
import { set } from 'react-hook-form';

const DialogWrapper = ({
  open,
  setOpen,
  children,
}: {
  open: boolean;
  setOpen: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle></DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DialogWrapper;
