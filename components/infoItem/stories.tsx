import {Meta, StoryObj} from "@storybook/react";
import InfoItem from ".";
import {RecoilRoot} from "recoil";

const meta: Meta<typeof InfoItem> = {
  title: 'Veew/InfoItem',
  component: InfoItem,
  tags: ['autodocs'],
  decorators: [ (Story) => RecoilRoot && <RecoilRoot><Story/></RecoilRoot>],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof InfoItem>;

export const Default: Story = {
  args: {}
}

export const Narrow: Story = {
  args: { narrow: true  }
}
