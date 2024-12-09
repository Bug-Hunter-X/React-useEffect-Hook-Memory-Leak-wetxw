# React useEffect Hook Memory Leak

This repository demonstrates a common error in React's `useEffect` hook: forgetting to include a cleanup function (return statement) when dealing with subscriptions or timers.  This can lead to memory leaks and unexpected behavior, especially when the component unmounts.

## Bug Description
The `useEffect` hook is used to perform side effects after each render. In this example, a console log is used to show the count changes, but the lack of return statement causes an infinite re-render loop.

## Solution
The solution involves adding a cleanup function within the `useEffect`'s return statement to ensure that any resources used by the effect are properly released, preventing issues when the component unmounts.