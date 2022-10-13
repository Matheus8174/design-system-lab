import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInputInputProps, TextInput } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.icon>
        <Envelope />
      </TextInput.icon>,
      <TextInput.Input placeholder="Type your email"/>
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<TextInputInputProps>;

export const Default: StoryObj = {};

export const WithoutIcon: StoryObj = {
  args: {
    children: (
      <TextInput.Input placeholder="Type your email"/>
    )
  }
};
