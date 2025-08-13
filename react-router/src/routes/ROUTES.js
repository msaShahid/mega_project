const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  PROFILE: '/profile',
  DASHBOARD: '/dashboard',
  AUTH: {
    LOGIN: '/login',             
    SIGNUP: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password',
  },
  PRODUCT: {
    BASE: '/product',
    FEATURED: '/product/featured',
    NEW: '/product/new',
    DETAIL: '/product/new/:productId',
  }
};

export default ROUTES;