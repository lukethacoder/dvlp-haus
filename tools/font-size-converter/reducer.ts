interface ReducerState {
  px: number
  em: number
  rem: number
  customExtension: number
  baseFontSize: number
  customExtensionText: string
}

export const INITIAL_STATE: ReducerState = {
  px: 16,
  em: 1,
  rem: 1,
  customExtension: 16,
  baseFontSize: 16,
  customExtensionText: 'dvlp',
}

type ActionSetNumber = {
  type: 'setNumber'
  payload: {
    key: keyof ReducerState
    value: number
  }
}
type ActionSetString = {
  type: 'setString'
  payload: {
    key: keyof ReducerState
    value: string
  }
}

type ReducerActions = ActionSetNumber | ActionSetString

export const roundValue = (value: number) => Math.round(value * 1000) / 1000

function setRemLikeValue(
  state: ReducerState,
  key: string,
  value: number
): ReducerState {
  return {
    ...state,
    // calculate px value
    px: roundValue(value * state.baseFontSize),
    rem: value,
    em: value,
    customExtension: value,
  }
}

export function reducer(state: ReducerState, action: ReducerActions) {
  const { key, value } = action.payload
  // ...
  switch (action.type) {
    case 'setNumber':
      let { px, em, rem, customExtension, baseFontSize } = state

      const _value = value as number

      // if the base font size has changed, all values should adjust
      if (key === 'baseFontSize') {
        // baseFontSize should not be influenced by the px value
        baseFontSize = _value

        const remLikeValue = roundValue(px / baseFontSize)

        return {
          ...state,
          em: remLikeValue,
          rem: remLikeValue,
          customExtension: remLikeValue,
          baseFontSize,
        }
      }

      // if the base font size has changed, all values should adjust
      if (key === 'px') {
        px = _value

        const remLikeValue = roundValue(px / baseFontSize)

        return {
          ...state,
          px,
          em: remLikeValue,
          rem: remLikeValue,
          customExtension: remLikeValue,
        }
      }

      // if rem changed
      if (key === 'rem' || key === 'em' || key === 'customExtension') {
        return setRemLikeValue(state, key, value as number)
      }

      return {
        ...state,
        px,
        em,
        rem,
        customExtension,
        baseFontSize,
      }
    case 'setString':
      return {
        ...state,
        [key]: value,
      }
    default:
      throw Error(`Unknown action`)
  }
}
