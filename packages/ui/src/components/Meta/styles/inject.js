import { Mixin } from '../../../theme/mixin';

function titleVariant(variant) {
  return variant === 'small' ? Mixin.Font.caption() : Mixin.Font.h6();
}
function valueVariant(variant) {
  return variant === 'small' ? Mixin.Font.bodyRegular() : Mixin.Font.h4();
}
export const inject = { titleVariant, valueVariant };
