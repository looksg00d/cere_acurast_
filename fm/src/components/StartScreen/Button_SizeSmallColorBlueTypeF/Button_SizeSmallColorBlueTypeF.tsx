import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Check_ModeLightSize16 } from '../Check_ModeLightSize16/Check_ModeLightSize16.js';
import classes from './Button_SizeSmallColorBlueTypeF.module.css';
import { Vector1124Icon } from './Vector1124Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    Check?: boolean;
  };
  text?: {
    button?: ReactNode;
  };
}
/* @figmaId 1:90 */
export const Button_SizeSmallColorBlueTypeF: FC<Props> = memo(function Button_SizeSmallColorBlueTypeF(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.Check && (
        <Check_ModeLightSize16
          swap={{
            vector1124: <Vector1124Icon className={classes.icon} />,
          }}
        />
      )}
      {props.text?.button != null ? props.text?.button : <div className={classes.button}>Button</div>}
    </button>
  );
});
