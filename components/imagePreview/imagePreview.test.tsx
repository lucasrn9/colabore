import React from 'react';
import ImagePreview from './ImagePreview';
import {render, screen} from '@testing-library/react-native';
import {Image} from 'react-native';
import TestSvg from '../../assets/images/People.svg';

describe('ImagePreview', () => {
  it('should render', () => {
    render(<ImagePreview accessibilityHint="ImagePreviewTest" />);
    const imagePreview = screen.getByAccessibilityHint('ImagePreviewTest');
    expect(imagePreview).toBeVisible();
  });
  it('should render the image passed as children', () => {
    render(
      <ImagePreview>
        <Image
          source={require('../../assets/images/People.png')}
          accessibilityHint="ImageTest"
        />
      </ImagePreview>,
    );
    const image = screen.getByAccessibilityHint('ImageTest');
    expect(image).toBeVisible();
  });
  it('should render the svg passed as children', () => {
    render(
      <ImagePreview>
        <TestSvg accessibilityHint="svgTest" />
      </ImagePreview>,
    );
    const svg = screen.getByAccessibilityHint('svgTest');
    expect(svg).toBeVisible();
  });
});
