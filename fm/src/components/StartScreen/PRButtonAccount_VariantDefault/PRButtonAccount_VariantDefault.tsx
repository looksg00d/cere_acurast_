import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { User_ModeLightSize16 } from '../User_ModeLightSize16/User_ModeLightSize16.js';
import classes from './PRButtonAccount_VariantDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    vector?: string;
    User?: string;
    root?: string;
  };
}
/* @figmaId 1:484 */
export const PRButtonAccount_VariantDefault: FC<Props> = memo(function PRButtonAccount_VariantDefault(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <User_ModeLightSize16 className={props.classes?.User || ''} classes={{ vector: props.classes?.vector || '' }} />
      <div className={classes.account}>Account</div>
    </div>
  );
});
