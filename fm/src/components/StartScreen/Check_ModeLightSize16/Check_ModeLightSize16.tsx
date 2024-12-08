import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Check_ModeLightSize16.module.css';
import { Vector1124Icon } from './Vector1124Icon.js';

interface Props {
  className?: string;
  swap?: {
    vector1124?: ReactNode;
  };
}
/* @figmaId 1:74 */
export const Check_ModeLightSize16: FC<Props> = memo(function Check_ModeLightSize16(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.vector1124}>{props.swap?.vector1124 || <Vector1124Icon className={classes.icon} />}</div>
    </div>
  );
});
