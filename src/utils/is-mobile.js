import MobileDetect from 'mobile-detect'

export const detect = new MobileDetect(window.navigator.userAgent);
export const isMobile = detect.phone() || detect.tablet();
