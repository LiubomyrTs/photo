import { ALERT_TYPES } from 'src/app/shared/enums/alert-types.enum';

export interface MessageResponse {
  type: ALERT_TYPES;
  msg: string;
}
