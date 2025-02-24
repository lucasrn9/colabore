import {render, screen} from '@testing-library/react-native';
import React from 'react';
import FilledBtn from './FilledBtn';
import {Text} from 'react-native';
import LockIcon from '../../assets/images/Lock-Icon.svg';

describe('FilledBtn', () => {
  it('renders', () => {
    render(<FilledBtn />);
    const filledBtn = screen.getByAccessibilityHint('A button');
    expect(filledBtn).toBeVisible();
  });
  it('renders with custom accessibility hint', () => {
    render(<FilledBtn accessibilityHint="FilledBtn test" />);
    const filledBtn = screen.getByAccessibilityHint('FilledBtn test');
    expect(filledBtn).toBeVisible();
  });
  it('renders with custom styles', () => {
    render(<FilledBtn style={{backgroundColor: 'red', borderRadius: 0}} />);
    const filledBtn = screen.getByAccessibilityHint('A button');
    expect(filledBtn).toHaveStyle({backgroundColor: 'red', borderRadius: 0});
  });
  it('renders text as children', () => {
    render(
      <FilledBtn>
        <Text>test</Text>
      </FilledBtn>,
    );
    const children = screen.getByText('test');
    expect(children).toBeVisible();
  });
  it('renders an svg icon as children', () => {
    render(
      <FilledBtn>
        <LockIcon accessibilityHint="test icon" />
      </FilledBtn>,
    );
    const children = screen.getByAccessibilityHint('test icon');
    expect(children).toBeVisible();
  });
});
