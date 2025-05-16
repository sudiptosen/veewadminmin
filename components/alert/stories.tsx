import {Meta, StoryObj} from "@storybook/react";
import Alert from ".";

const meta: Meta<typeof Alert> = {
  title: 'Veew/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: { type: 'info', message: 'This is an info alert'}
};

export const Success: Story = {
  args: { type: 'success', message: 'This is an info alert' },
};

export const Failure: Story = {
  args: { type: 'danger', message: 'This is an info alert' },
};

