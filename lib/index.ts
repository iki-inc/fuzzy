export default class Fuzzy {
  /**
   * Line methods of Fuzzy Logic
   * @param value - target
   * @param min - stating point
   * @param max - last stop
   * @param reverse - if true, reverse the result
   */
  static grade(
    value: number,
    min: number,
    max: number,
    reverse = false
  ): number {
    if (value <= min) return !reverse ? 0 : 1
    if (value >= max) return !reverse ? 1 : 0

    const diff = max - min

    if (reverse) {
      // is reverse
      return max / diff - value / diff
    }

    return value / diff - min / diff
  }

  /**
   * Triangle methods of Fuzzy Logic
   * @param value - target
   * @param min - starting point
   * @param vertex - vertex of a triangle
   * @param max - last stop
   */
  static triangle(
    value: number,
    min: number,
    vertex: number,
    max: number
  ): number {
    if (value <= min || value >= max) return 0
    if (value === vertex) return 1

    if (value > min && value < vertex) return Fuzzy.grade(value, min, vertex)
    return Fuzzy.grade(value, vertex, max, true)
  }

  /**
   * Trapezoid methods of Fuzzy Logic
   * @param value - target
   * @param min - starting point
   * @param vertexStart - near stating point for vertex of trapezoid
   * @param vertexEnd - near last stop for vertex of trapezoid
   * @param max - last stop
   */
  static trapezoid(
    value: number,
    min: number,
    vertexStart: number,
    vertexEnd: number,
    max: number
  ): number {
    if (value <= min || value >= max) return 0
    if (value >= vertexStart && value <= vertexEnd) return 1
    if (value > min && value < vertexStart)
      return Fuzzy.grade(value, min, vertexStart)
    return Fuzzy.grade(value, vertexEnd, max, true)
  }
}
