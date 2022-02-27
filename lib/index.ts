export default class Fuzzy {
  /**
   * Line methods of Fuzzy Logic
   * @param value - target
   * @param start - stating point
   * @param end - last stop
   * @param reverse - if true, reverse the result
   */
  static grade(
    value: number,
    start: number,
    end: number,
    reverse = false
  ): number {
    if (value <= start) return !reverse ? 0 : 1
    if (value >= end) return !reverse ? 1 : 0

    const diff = end - start

    if (reverse) {
      // is reverse
      return end / diff - value / diff
    }

    return value / diff - start / diff
  }

  /**
   * Triangle methods of Fuzzy Logic
   * @param value - target
   * @param start - starting point
   * @param vertex - vertex of a triangle
   * @param end - last stop
   */
  static triangle(
    value: number,
    start: number,
    vertex: number,
    end: number
  ): number {
    if (value <= start || value >= end) return 0
    if (value === vertex) return 1

    if (value > start && value < vertex)
      return Fuzzy.grade(value, start, vertex)
    return Fuzzy.grade(value, vertex, end, true)
  }

  /**
   * Trapezoid methods of Fuzzy Logic
   * @param value - target
   * @param start - starting point
   * @param vertexStart - near stating point for vertex of trapezoid
   * @param vertexEnd - near last stop for vertex of trapezoid
   * @param end - last stop
   */
  static trapezoid(
    value: number,
    start: number,
    vertexStart: number,
    vertexEnd: number,
    end: number
  ): number {
    if (value <= start || value >= end) return 0
    if (value >= vertexStart && value <= vertexEnd) return 1
    if (value > start && value < vertexStart)
      return Fuzzy.grade(value, start, vertexStart)
    return Fuzzy.grade(value, vertexEnd, end, true)
  }
}
