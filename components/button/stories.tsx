import Button from ".";

import {ComponentStory} from "@storybook/react";

export default {
  title: 'Veew/Button',
  component: Button,
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({});
Primary.args = {
  caption: "Click Me",
  kind: "primary",
}

export const Secondary = Template.bind({});
Secondary.args = {
  ... Primary.args,
  kind: "secondary",
}
export const Tertiary = Template.bind({});
Tertiary.args = {
  ... Primary.args,
  kind: "tertiary",
}

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  ... Primary.args,
  kind: "primary-outline",
}

export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
  ... Primary.args,
  kind: "secondary-outline",
}

export const TertiaryOutline = Template.bind({});
TertiaryOutline.args = {
  ... Primary.args,
  kind: "tertiary-outline",
}

export const Danger = Template.bind({});
Danger.args = {
  ... Primary.args,
  kind: "danger",
}


