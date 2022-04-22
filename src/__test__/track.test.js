import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect'
import Track from '../components/track/track'
import { Sample } from '../components/playlist/form-playlist'

test('All components should be render', () => {
  render(<Track />)

  // screen.debug();

  const song = screen.getByTestId('song-pic')
  const button = screen.getByLabelText('btnsong')
  const title = screen.getByLabelText('title')
  const detail = screen.getByLabelText('detail')

  expect(song).toBeInTheDocument()
  expect(button).toBeInTheDocument()
  expect(title).toBeInTheDocument()
  expect(detail).toBeInTheDocument()
});

test("Search box value should be same as user typing", () => {
  render(<Sample />);

  const searchBox = screen.getByLabelText("text-section");
  userEvent.type(searchBox, "cat");

  expect(searchBox.value).toBe("cat");
});

