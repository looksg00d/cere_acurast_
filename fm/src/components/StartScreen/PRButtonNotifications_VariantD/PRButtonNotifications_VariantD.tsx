import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Bell_ModeLightSize16 } from '../Bell_ModeLightSize16/Bell_ModeLightSize16.js';
import classes from './PRButtonNotifications_VariantD.module.css';

interface Props {
  className?: string;
  classes?: {
    vector?: string;
    Bell?: string;
    root?: string;
  };
}
/* @figmaId 1:424 */
export const PRButtonNotifications_VariantD: FC<Props> = memo(function PRButtonNotifications_VariantD(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Bell_ModeLightSize16 className={props.classes?.Bell || ''} classes={{ vector: props.classes?.vector || '' }} />
      <div className={classes.notifications}>Notifications</div>
    </div>
  );
});
