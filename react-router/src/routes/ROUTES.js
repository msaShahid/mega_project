const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  DASHBOARD: '/dashboard',
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
  PRODUCT: {
    BASE: '/product',
    FEATURED: '/product/featured',
    NEW: '/product/new',
    DETAIL: '/product/new/:productId',
  }
};

export default ROUTES;