import React, { useEffect, useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSnackbarClose } from '../../redux/actions/snackbar.action';
import { CloseIcon } from '@chakra-ui/icons';
import { RootState } from '../../redux/reducers';
import { SNACKBAR_TIMEOUT } from '../../util/constants/constants.other';
import {
  SNACKBAR_INFO,
  SNACKBAR_WARNING,
  SNACKBAR_DANGER
} from '../../util/constants/constants.redux';

import { theme } from '../../styles/theme';
export const Snackbar: React.FC = () => {
  const dispatch = useDispatch();

  // select the UI states from the redux store
  const toggleSnackbarStore = useSelector((state: RootState) => state.snackbar.toggleSnackbar);
  const [toggleSnackbarState, setToggleSnackbarState] = useState(false);

  useEffect(() => {
    setToggleSnackbarState(toggleSnackbarStore);
  }, [toggleSnackbarStore]);

  const messageSnackbarStore = useSelector((state: RootState) => state.snackbar.message);
  const [messageSnackbarState, setMessageSnackbarState] = useState('');

  useEffect(() => {
    setMessageSnackbarState(messageSnackbarStore);
  }, [messageSnackbarStore]);

  const typeOfSnackbarStore = useSelector((state: RootState) => state.snackbar.type);
  const [typeOfSnackbarState, setTypeOfSnackbarState] = useState(SNACKBAR_INFO);

  useEffect(() => {
    setTypeOfSnackbarState(typeOfSnackbarStore);
  }, [typeOfSnackbarStore]);

  let TIMER: NodeJS.Timeout;
  function handleTimeout() {
    TIMER = setTimeout(() => {
      dispatch(toggleSnackbarClose());
    }, SNACKBAR_TIMEOUT);
  }

  function handleClose() {
    clearTimeout(TIMER);
    dispatch(toggleSnackbarClose());
  }

  useEffect(() => {
    if (toggleSnackbarState) {
      handleTimeout();
    }
    return () => {
      clearTimeout(TIMER);
    };
  }, [toggleSnackbarState, TIMER]);

  return (
    toggleSnackbarState && (
      <Box
        className={
          typeOfSnackbarState === SNACKBAR_INFO
            ? 'snackbar-container snackbar-info'
            : typeOfSnackbarState === SNACKBAR_WARNING
            ? 'snackbar-container snackbar-warning'
            : typeOfSnackbarState === SNACKBAR_DANGER
            ? 'snackbar-container snackbar-danger'
            : 'snackbar-container snackbar-info'
        }
      >
        <p>{messageSnackbarState}</p>
        <Button onClick={handleClose} className='snackbar-button'>
          <CloseIcon color={theme.colors.primaryBlack[900]} />
        </Button>
      </Box>
    )
  );
};

export default Snackbar;
