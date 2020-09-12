import { AbstractControl, FormGroup } from '@angular/forms';

export function pasValidator(control: AbstractControl) {

  if (control && (control.value !== null || control.value !== undefined)) {
      const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

      if (!regex.test(control.value)) {
          return {
              isError: true
          };
      }
  }

  return null;
}

export function mobileValidator(control: AbstractControl) {

  if (control && (control.value !== null || control.value !== undefined)) {
      const regex = new RegExp('^[0-9]{10}$');

      if (!regex.test(control.value)) {
          return {
              isError: true
          };
      }
  }

  return null;
}


export function passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
        const cnfpassValue = control.value;
        const passControl = control.root.get('password');
        if (passControl) {
            const passValue = passControl.value;
            if (passValue !== cnfpassValue || passValue === '') {
                return {
                    isError: true
                };
            }
        }
    }
    return null;
}


