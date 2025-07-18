import React from 'react';
import {render, screen} from '@testing-library/react-native';
import BubbleSpeech from './BubbleSpeech';
import {Text} from 'react-native';

describe('BubbleSpeech Component', () => {
  it('renders correctly', () => {
    render(<BubbleSpeech>Test</BubbleSpeech>);
    expect(screen.getByLabelText('bubble-speech-polygon')).toBeTruthy();
    expect(screen.getByLabelText('bubble-speech-bubble')).toBeTruthy();
  });

  it('applies custom styles', () => {
    render(
      <BubbleSpeech
        style={{backgroundColor: 'red'}}
        containerMargins={{marginLeft: 5}}>
        Styled
      </BubbleSpeech>,
    );
    const container = screen.getByLabelText('bubble-speech-container');
    const polygon = screen.getByLabelText('bubble-speech-polygon');
    const bubble = screen.getByLabelText('bubble-speech-bubble');
    expect(container.props.style).toContainEqual({
      marginLeft: 5,
    });
    expect(container.props.style).not.toContainEqual({
      backgroundColor: 'red',
    });
    expect(polygon.props.fill).toBe('red');
    expect(bubble.props.style).toContainEqual({backgroundColor: 'red'});
    expect(bubble.props.style).not.toContainEqual({
      marginLeft: 5,
    });
  });

  it('contains children elements', () => {
    render(
      <BubbleSpeech>
        <Text>ChildText</Text>
      </BubbleSpeech>,
    );
    expect(screen.getByText('ChildText')).toBeTruthy();
  });
});
