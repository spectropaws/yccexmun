
import { Dialog } from '@radix-ui/react-dialog';
import { Button } from '@shadcn/ui';

const Modal = () => {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>Open Modal</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Modal Title</Dialog.Title>
        <Dialog.Description>Modal Description</Dialog.Description>
        <Dialog.Close asChild>
          <Button>Close</Button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog>
  );
};

export default Modal;
