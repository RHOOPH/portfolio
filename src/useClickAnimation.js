import { useSpring } from "@react-spring/web"

export default function useClickAnimation(
  unpressedStyleObject,
  pressedStyleObject
) {
  const [style, clickAPI] = useSpring(() => unpressedStyleObject)

  const press = (e) => {
    clickAPI.start({
      to: pressedStyleObject,
      immediate: true,
    })
  }

  const unpress = (e) => {
    clickAPI.start({
      to: unpressedStyleObject,
      immediate: true,
    })
  }
  return [style, unpress, press]
}
