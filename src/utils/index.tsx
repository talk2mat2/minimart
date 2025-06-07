import {useToast} from 'react-native-toast-notifications';

export const appToast = () => {
  const {show, hide, hideAll, update} = useToast();

  return {
    show,
    hide,
    hideAll,
    update,
  };
};
