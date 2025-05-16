import WhyContentComponent from '@/components/why-page';
import type {PropsWithChildren, ReactElement} from 'react';

interface WhyPageProperties {
}

function WhyPage(properties: PropsWithChildren<WhyPageProperties>):ReactElement{
  return <div id='top'>
    <WhyContentComponent></WhyContentComponent>
  </div>
}

export default WhyPage;
