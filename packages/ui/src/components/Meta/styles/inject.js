import { Mixin } from '../../../theme/mixin';

const titleVariant = variant => variant === 'small' ? Mixin.Font.caption() : Mixin.Font.h6();

const valueVariant = variant => variant === 'small' ? Mixin.Font.bodyRegular() : Mixin.Font.h4();

export const inject = { titleVariant, valueVariant };
