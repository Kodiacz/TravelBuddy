import { Platform } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

type ParameterTypes = {
	property: 'height' | 'width';
	iosValue: string | number;
	androidValue: string | number;
};

const usePlatformStyles = () => {
	const getResponsiveValue = (params: ParameterTypes) => {
		const responsiveMethod = params.property === 'height' ? hp : wp;

		return Platform.OS === 'ios'
			? responsiveMethod(params.iosValue)
			: responsiveMethod(params.androidValue);
	};

	return {
		getResponsive: (params: ParameterTypes) => getResponsiveValue(params),
	};
};

export default usePlatformStyles;
