import { test, expect } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import Waste from '.'

// should display an image
// should set wasteBux to +1 - NOT RECOMMENDED.
  // The core premise of React Testing Library is testing React components how users interact with them instead of how the code is implemented. The primary way that users interact with our components is through actions (clicking, typing, hovering, etc)
// check that the image can be clicked - don't know if possible?

test ("It should display img with file name waste.webp and an alt = 'nuclear waste'", ()=> {
  render(<Waste />)
  const img = screen.getByRole('img')
  expect(img).toHaveAttribute('src', 'waste.webp')
  expect(img).toHaveAttribute('alt', 'nuclear waste')
})
