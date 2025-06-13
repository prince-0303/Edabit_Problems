// Sum of Polygon Angles.

// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

// Notes
// n will always be greater than 2.
// The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.
// <<<------------------------------------------------------------------------------------------>>>

function sumPolygon(n) {
    if (n > 2) {
        return (n - 2) * 180
    } else {
        return 'Not valid. A polygon must have atleast 3 sides'
    }
}
console.log(sumPolygon(3))
console.log(sumPolygon(5))
console.log(sumPolygon(2))
console.log(sumPolygon(8))