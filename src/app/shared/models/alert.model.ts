import { ALERT_TYPES } from 'src/app/shared/enums/alert-types.enum';

export interface Alert {
  type: ALERT_TYPES;
  text: string;
}