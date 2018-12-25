import _isString from 'lodash/isString';
import Check from 'react-feather/dist/icons/check';
import X from 'react-feather/dist/icons/x';
import Clock from 'react-feather/dist/icons/clock';
import AlertTriangle from 'react-feather/dist/icons/alert-triangle';
import Rss from 'react-feather/dist/icons/rss';
import { TYPES, COLORS } from './constants';

export const ICONS = {
  [TYPES.success]: Check,
  [TYPES.error]: X,
  [TYPES.pending]: Clock,
  [TYPES.warning]: AlertTriangle,
  [TYPES.info]: Rss,
  default: null,
};

export const getIcon = (type) => {
  if (_isString(type)) {
    return ICONS[type] || ICONS.default;
  }
  return null;
};

export const TYPES_COLORS = {
  [TYPES.success]: COLORS.GREEN,
  [TYPES.error]: COLORS.RED,
  [TYPES.pending]: COLORS.KEPPEL,
  [TYPES.warning]: COLORS.GOLD,
  [TYPES.info]: COLORS.INDIGO,
  default: COLORS.PINK,
};

export const getTypeColor = (type) => {
  if (_isString(type)) {
    return TYPES_COLORS[type] || TYPES_COLORS.default;
  }
  return null;
};
