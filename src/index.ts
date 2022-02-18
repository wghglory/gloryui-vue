// tailwind css here, and it will be built inside dist/style.css
import '@/styles/index.css';

import {Plugin} from 'vue';
import {DvCard, DvCurrentTime} from '@/components';

// global components
const components = [DvCurrentTime, DvCard];

export const DvPlugin: Plugin = {
  install: (app: any, options: any) => {
    components.forEach((component) => {
      // Need to define component name
      app.component(component.name, component);
      // app.component('DvCurrentTime', DvCurrentTime);
    });
  },
};

// single component that can be imported in SFC
export {DvCurrentTime, DvCard};
