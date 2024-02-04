interface ReducerState {
  width: number
  height: number
  ratioWidth: number
  ratioHeight: number
}

export const INITIAL_STATE: ReducerState = {
  width: 1920,
  height: 1080,
  ratioWidth: 16,
  ratioHeight: 9,
}

type ActionSetNumber = {
  type: 'setNumber'
  payload: {
    key: keyof ReducerState
    value: number
  }
}
type ReducerActions = ActionSetNumber

export const roundValue = (value: number) => Math.round(value * 1000) / 1000

const gcd = (a: number, b: number): number => (b == 0 ? a : gcd(b, a % b))

function closestAspectRatio(width: number, height: number) {
  const _gcd = gcd(width, height)
  const ratioWidth = width / _gcd
  const ratioHeight = height / _gcd
  const decimal = ratioWidth / ratioHeight
  return {
    ratioWidth,
    ratioHeight,
    decimal,
  }
}

export function reducer(state: ReducerState, action: ReducerActions) {
  const { key, value } = action.payload

  const { width, height, ratioWidth, ratioHeight } = state

  switch (action.type) {
    case 'setNumber':
      switch (key) {
        case 'height':
          const { ratioWidth: newRatioWidth, ratioHeight: newRatioHeight } =
            closestAspectRatio(width, value)

          return {
            ...state,
            height: value,
            ratioWidth: newRatioWidth,
            ratioHeight: newRatioHeight,
          }
        case 'width':
          const { ratioWidth: newRatioWidth2, ratioHeight: newRatioHeight2 } =
            closestAspectRatio(value, height)

          return {
            ...state,
            width: value,
            ratioWidth: newRatioWidth2,
            ratioHeight: newRatioHeight2,
          }
        case 'ratioWidth':
          const _width = (height * value) / ratioHeight

          return {
            ...state,
            ratioWidth: value,
            width: roundValue(_width),
          }
        case 'ratioHeight':
          const _height = (width * value) / ratioWidth
          return {
            ...state,
            ratioHeight: value,
            height: roundValue(_height),
          }
        default:
          throw Error(`Unknown key`)
      }
    default:
      throw Error(`Unknown action`)
  }
}
