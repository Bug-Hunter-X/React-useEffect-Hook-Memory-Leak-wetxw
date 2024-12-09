```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count changed:', count);
    // Cleanup function: returns a function to run before the component unmounts or before the next effect runs
    return () => {
      console.log('Cleaning up...');
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```