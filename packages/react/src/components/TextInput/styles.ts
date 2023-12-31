import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',

  background: '$gray900',
  borderRadius: '$sm',
  border: '2px solid $gray900',
  boxSizing: 'border-box',

  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    size: {
        sm: {
            padding: '$2 $3',
        },
        md: {
            padding: '$3 $4',
        },
    }
  },

  defaultVariants: {
    size: 'md',
  }
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: '$regular',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$white',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray400',
  },
})
