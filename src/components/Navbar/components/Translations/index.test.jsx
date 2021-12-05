import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { getFullWrappedComponent } from '../../../../utils';
import Translations from '.';

describe('Rover view', () => {
  render(getFullWrappedComponent(Translations));

  test('Change language correctly', async () => {
    screen.debug();
    const englishButton = await screen.findByTestId('change-language');
    fireEvent.click(englishButton);
    fireEvent.mouseLeave(englishButton);
    fireEvent.mouseEnter(englishButton);
    expect(await screen.findByText('Idioma')).toBeInTheDocument();
  });
});
