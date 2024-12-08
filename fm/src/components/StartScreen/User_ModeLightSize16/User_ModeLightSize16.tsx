import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './User_ModeLightSize16.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    vector?: string;
    root?: string;
  };
}
/* @figmaId 1:436 */
export const User_ModeLightSize16: FC<Props> = memo(function User_ModeLightSize16(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.vector || ''} ${classes.vector}`}>
        <VectorIcon className={classes.icon} />
      </div>
    </div>
  );
});
