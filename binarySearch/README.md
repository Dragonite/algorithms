# Takeaways

## Monotonic function

Binary searches assume **sorted** arrays. This means that as the index increases, the value will either stay the same, or increase or decrease, but not both. A monotonic function is a function f(x) that is non-decreasing or non-increasing, meaning it only moves in one direction.

Binary searches essentially find a **feasible** function to apply.

## Feasible function

A feasible function is a function that essentially returns a boolean with some relation to the midpoint that you are searching. Depending on the outcome, you move the left and right pointers to reduce the search space of the value you are trying to find.

## Search space

There's basically two types of searches. You can have a monotonic that's like most cases, like

`F F F T T T T T`

This is usually used to find the first True. The trick to solving these is to just reference the `left` value at the end of a search.

`T T F F F F F F`

This is usually used to find the last True. The trick here is to solve and reference using the `right` value at the end of the search.