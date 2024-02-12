import { useNavigation } from '@react-navigation/native';
import { AppScreenNavigationProp } from '../types/applicationTypes';

export const useAppNavigation = useNavigation<AppScreenNavigationProp>;
