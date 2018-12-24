import _isString from 'lodash/isString';
import Check from 'react-feather/dist/icons/check';
import X from 'react-feather/dist/icons/x';
import Clock from 'react-feather/dist/icons/clock';
import AlertTriangle from 'react-feather/dist/icons/alert-triangle';
import Rss from 'react-feather/dist/icons/rss';
import { STATUS, COLORS } from './constants';

export const ICONS = {
  [STATUS.success]: Check,
  [STATUS.error]: X,
  [STATUS.pending]: Clock,
  [STATUS.warning]: AlertTriangle,
  [STATUS.info]: Rss,
  default: null,
};

export const getIcon = (status) => {
  if (_isString(status)) {
    return ICONS[status] || ICONS.default;
  }
  return null;
};

export const STATUS_COLORS = {
  [STATUS.success]: COLORS.GREEN,
  [STATUS.error]: COLORS.RED,
  [STATUS.pending]: COLORS.TUSSOCK,
  [STATUS.warning]: COLORS.GOLD,
  [STATUS.info]: COLORS.INDIGO,
  default: COLORS.PINK,
};

export const getStatusColor = (status) => {
  if (_isString(status)) {
    return STATUS_COLORS[status] || STATUS_COLORS.default;
  }
  return null;
};
