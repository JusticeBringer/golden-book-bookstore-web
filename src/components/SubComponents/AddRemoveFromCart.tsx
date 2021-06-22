import { useEffect, useState } from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useDisclosure,
  IconButton,
  Flex
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

import ModalProductDelete from '../Reusable/ModalProductDelete';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { idsAndQtysType } from '../../redux/reducers/reducers.types';
import { setCookie } from '../../util/helpers';

import { shoppingCartBooks } from '../../util/constants/constants.cookies';
import {
  addToCart,
  setExactValueToCart,
  substractFromCart
} from '../../redux/actions/shoppingCart.action';
import { qtysType } from '../../redux/reducers/reducers.types';

type AddRemoveFromCartProps = {
  _id: string;
  bookMaxQty: number;
  userQty: number;
};

export const AddRemoveFromCart: React.FC<AddRemoveFromCartProps> = (
  props: AddRemoveFromCartProps
) => {
  const { _id, bookMaxQty, userQty } = props;

  // display and control modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleRemove = () => {
    onOpen();
  };

  const booksCartStore: idsAndQtysType = useSelector(
    (state: RootState) => state.shoppingCart.books
  );

  useEffect(() => {
    setCookie(shoppingCartBooks, booksCartStore, 180);
  }, [booksCartStore]);

  const booksQtysStore: qtysType[] = useSelector(
    (state: RootState) => state.shoppingCart.books?.qtys
  );
  const [userQtyState, setUserQtyState] = useState(-1);

  useEffect(() => {
    let qty: number = 0;
    booksQtysStore.forEach(item => {
      if (item.id === _id) {
        qty = item.qty;
      }
    });
    setUserQtyState(qty);
  }, [booksQtysStore]);

  const dispatch = useDispatch();
  const [itemQtySelectedInStore, setitemQtySelectedInStore] = useState(-1);

  const handleQtyChange = (val: string) => {
    let inputQty = parseInt(val);

    // if user set a negative value
    if (inputQty < 0) {
      return;
    }

    // if user set the same input as before
    if (inputQty === itemQtySelectedInStore) {
      return;
    }

    // if user selected max value
    if (inputQty > bookMaxQty) {
      dispatch(setExactValueToCart(_id, bookMaxQty));
      setitemQtySelectedInStore(bookMaxQty);
      return;
    }

    // if user decremented
    if (inputQty < itemQtySelectedInStore) {
      // by 1
      if (itemQtySelectedInStore - inputQty === 1) {
        dispatch(substractFromCart(_id));
        setitemQtySelectedInStore(inputQty);
        return;
      }

      // by more
      dispatch(setExactValueToCart(_id, inputQty));
      setitemQtySelectedInStore(inputQty);
      return;
    }

    // user incremented
    if (inputQty - itemQtySelectedInStore === 1) {
      // by 1
      dispatch(addToCart(_id));
      setitemQtySelectedInStore(inputQty);
      return;
    }

    // by more
    dispatch(setExactValueToCart(_id, inputQty));
    setitemQtySelectedInStore(inputQty);
    return;
  };

  return (
    <Flex>
      <NumberInput
        value={userQtyState !== -1 ? userQtyState : userQty}
        max={bookMaxQty}
        min={1}
        keepWithinRange={true}
        clampValueOnBlur={true}
        w={['60px', '65px']}
        mr={['5px', '5px', '5px', '10px']}
        onChange={val => handleQtyChange(val)}
        onClick={e => e.stopPropagation()}
      >
        <NumberInputField fontSize={['14px']} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <IconButton
        bg='red.100'
        _hover={{ bg: 'red.300' }}
        icon={<DeleteIcon fontSize={['14px', '20px']} />}
        aria-label='Delete item'
        onClick={() => handleRemove()}
      />
      <ModalProductDelete _id={_id} isOpen={isOpen} onClose={onClose} />{' '}
    </Flex>
  );
};

export default AddRemoveFromCart;
