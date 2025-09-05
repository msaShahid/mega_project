import AppSuccess from '@utils/appSuccess';
import SUCCESS_MESSAGES from '@constants/successMessages.js';
import SUCCESS_STATUS from '@constants/successStatus.js';

const successFactory = {
  userVerified: <T extends object = {}>(data?: T) => new AppSuccess<T>(SUCCESS_MESSAGES.USER_VERIFIED, data ?? ({} as T), SUCCESS_STATUS.OK),
  userRegistered: <T extends object = {}>(data?: T) => new AppSuccess<T>(SUCCESS_MESSAGES.USER_REGISTERED, data ?? ({} as T), SUCCESS_STATUS.CREATED),
  accountVerified: <T extends object = {}>(data?: T) => new AppSuccess<T>(SUCCESS_MESSAGES.ACCOUNT_VERIFIED, data ?? ({} as T), SUCCESS_STATUS.OK),
  loginSuccess: <T extends object = {}>(data?: T) => new AppSuccess<T>(SUCCESS_MESSAGES.LOGIN_SUCCESS, data ?? ({} as T), SUCCESS_STATUS.OK),
  logoutSuccess: () => new AppSuccess(SUCCESS_MESSAGES.LOGOUT_SUCCESS, {}, SUCCESS_STATUS.OK),
  passwordResetEmailSent: () => new AppSuccess(SUCCESS_MESSAGES.PASSWORD_RESET_EMAIL_SENT, {}, SUCCESS_STATUS.OK),
  passwordResetSuccess: () => new AppSuccess(SUCCESS_MESSAGES.PASSWORD_RESET_SUCCESS, {}, SUCCESS_STATUS.OK),
  profileUpdated: <T extends object = {}>(data?: T) => new AppSuccess<T>(SUCCESS_MESSAGES.PROFILE_UPDATED, data ?? ({} as T), SUCCESS_STATUS.OK),
  dataFetched: <T extends object = {}>(data: T) => new AppSuccess<T>(SUCCESS_MESSAGES.DATA_FETCHED, data, SUCCESS_STATUS.OK),
  dataCreated: <T extends object = {}>(data: T) => new AppSuccess<T>(SUCCESS_MESSAGES.DATA_CREATED, data, SUCCESS_STATUS.CREATED),
  dataUpdated: <T extends object = {}>(data: T) => new AppSuccess<T>(SUCCESS_MESSAGES.DATA_UPDATED, data, SUCCESS_STATUS.OK),
  dataDeleted: () => new AppSuccess(SUCCESS_MESSAGES.DATA_DELETED, {}, SUCCESS_STATUS.OK),
  fileUploaded: <T extends object = {}>(data?: T) => new AppSuccess<T>(SUCCESS_MESSAGES.FILE_UPLOADED, data ?? ({} as T), SUCCESS_STATUS.CREATED),
};

export default successFactory;
