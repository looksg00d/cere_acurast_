import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { PRButtonAccount_VariantDefault } from '../PRButtonAccount_VariantDefault/PRButtonAccount_VariantDefault.js';
import { PRButtonNotifications_VariantD } from '../PRButtonNotifications_VariantD/PRButtonNotifications_VariantD.js';
import { FrameIcon } from './FrameIcon.js';
import classes from './HeaderDesktopApplication.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:703 */
export const HeaderDesktopApplication: FC<Props> = memo(function HeaderDesktopApplication(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame48097360}>
        <div className={classes.frame}>
          <FrameIcon className={classes.icon} />
        </div>
        <div className={classes.logo}>
          <div className={classes.frame2}>
            <div className={classes.ClusterNameDeveloperConsole}>Decentralized Image Converter</div>
            <div className={classes.poweredByCereNetwork}>Powered by Cere &amp; Acurast</div>
          </div>
        </div>
      </div>
    </div>
  );
});
