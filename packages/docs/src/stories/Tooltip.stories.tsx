import { Meta, StoryObj } from '@storybook/react'
import {Box, Button, Tooltip, TooltipProps } from '@emarra-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,

  args: {
    children: <Button>Tooltip hover</Button>,
    content: 'Tooltip content',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
        return (
            <Box
                css={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '$20',
                    backgroundColor: '$gray500'
                }}
            >
                <Story />
            </Box>
        )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}