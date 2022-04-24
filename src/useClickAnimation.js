import { useSpring } from "@react-spring/web"

export default function useClickAnimation(
  unpressedStyleObject,
  pressedStyleObject
) {
  const [click, clickAPI] = useSpring(() => unpressedStyleObject)

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
  return [click, unpress, press]
}
