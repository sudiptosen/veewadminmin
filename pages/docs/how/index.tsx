import HowContentComponent from '@/components/how-page';
import type {PropsWithChildren, ReactElement} from 'react';

interface HowPageProperties {
}

function HowPage(properties: PropsWithChildren<HowPageProperties>):ReactElement{
  return <div id="top">
    <HowContentComponent></HowContentComponent>
  </div>
}

export default HowPage;
