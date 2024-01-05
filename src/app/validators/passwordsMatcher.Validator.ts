import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordsMatcher: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPass')?.value;

  return password === confirmPassword ? null : { mismatch: true };
};