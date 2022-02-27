export default class Fuzzy {
    /**
     * Line methods of Fuzzy Logic
     * @param value - target
     * @param start - stating point
     * @param end - last stop
     * @param reverse - if true, reverse the result
     */
    static grade(value: number, start: number, end: number, reverse?: boolean): number;
    /**
     * Triangle methods of Fuzzy Logic
     * @param value - target
     * @param start - starting point
     * @param vertex - vertex of a triangle
     * @param end - last stop
     */
    static triangle(value: number, start: number, vertex: number, end: number): number;
    /**
     * Trapezoid methods of Fuzzy Logic
     * @param value - target
     * @param start - starting point
     * @param vertexStart - near stating point for vertex of trapezoid
     * @param vertexEnd - near last stop for vertex of trapezoid
     * @param end - last stop
     */
    static trapezoid(value: number, start: number, vertexStart: number, vertexEnd: number, end: number): number;
}
