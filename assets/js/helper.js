const AsyncComponent = c => ({
  component: import('@/components/' + c),
  error: 'error',
  // Delay before showing the loading component. Default: 200ms.
  delay: 200,
  // The error component will be displayed if a timeout isf
  // provided and exceeded. Default: Infinity.
  timeout: 6000
})

export default AsyncComponent
