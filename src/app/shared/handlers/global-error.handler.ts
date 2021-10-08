import {ErrorHandler, Injectable} from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ALERT_TYPES } from 'src/app/shared/enums/alert-types.enum';

interface Message {
  error: string;
  title?: string;
}

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {

  constructor(
    private alertService: AlertService,
  ) {
    super();
  }

  handleError(error: any) {
    const messages = this.getErrorMessages(error);
    messages.forEach((message: Message) => {
      this.alertService.showAlert(ALERT_TYPES.ERROR, message.error);
    });

    // delegate to the default handler
    super.handleError(error);
  }

  getErrorMessages(error: any): Message[] {
    console.log(error);
    if (!error) {
      return [{ error: 'Sorry, unknown error has occurred :(' }];
    }

    if (error.error?.msg) {
      return [{ error: error.error.msg }];
    }

    if (error.message) {
      return [{ error: error.message }];
    }
  }
}
