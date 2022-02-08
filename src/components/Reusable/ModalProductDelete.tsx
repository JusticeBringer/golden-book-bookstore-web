import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { toggleSnackbarOpen } from '../../redux/actions/snackbar.action';
import { removeFromCart } from '../../redux/actions/shoppingCart.action';

import {
  SNACKBAR_INFO,
  SNACKBAR_WARNING,
  SNACKBAR_DANGER
} from '../../util/constants/constants.redux';

type ModalProductDeleteProps = {
  _id: string;
  isOpen: boolean;
  onClose: () => void;
};

export const ModalProductDelete: React.FC<ModalProductDeleteProps> = (
  props: ModalProductDeleteProps
) => {
  const { _id, isOpen, onClose } = props;
  const dispatch = useDispatch();

  const handleConfirmRemove = () => {
    // modal successful
    dispatch(toggleSnackbarOpen(SNACKBAR_INFO, 'Item was removed from shopping cart'));
    dispatch(removeFromCart(_id));
  };

  return (
    <>
      <Modal
        size={'sm'}
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete item</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text> Are you sure that you want to delete the item from the shopping cart?</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={() => handleConfirmRemove()}>
              Delete
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalProductDelete;
