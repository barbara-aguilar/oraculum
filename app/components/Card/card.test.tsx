import { expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Card, { CardProps} from './index';

  
  // Test image rendering with correct URLs based on isFlipped
  test('renders front image when isFlipped is false', () => {
    const mockProps: CardProps = {
      name: 'Test Card',
      image: 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/image.jpg',
      isFlipped: false,
    };
    render(<Card {...mockProps} />);
    const image = screen.getByAltText('Test Card') as HTMLImageElement; // Assert type as HTMLImageElement
    expect(image.src).toContain(encodeURIComponent(mockProps.image)); // Check if the original image URL is contained in the rewritten URL
  });

  test('renders back image when isFlipped is true', () => {
    const mockProps: CardProps = {
      name: 'Test Card',
      image: 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png',
      isFlipped: true,
    };
    render(<Card {...mockProps} />);
    const image = screen.getByAltText('Test Card')  as HTMLImageElement;
    expect(image.src).toContain(encodeURIComponent(mockProps.image));
  });
  
//  TODO: Add more tests for the following scenarios:
  // Test for broken images
  // Test onClick handler
  // Accessibility test
