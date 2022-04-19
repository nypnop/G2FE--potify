import React from 'react';
import { render, screen } from '@testing-library/react';

import "@testing-library/jest-dom/extend-expect";
import Track from '../components/track/track';

test("All components should be render", () => {
    render(<Track />);
  
    // screen.debug();
  
    const song = screen.getByTestId("song-pic");
    const button = screen.getByLabelText("btnsong");
    const title = screen.getByLabelText("title");
    const detail = screen.getByLabelText("detail");
  
    expect(song).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(detail).toBeInTheDocument();
});