import { render, screen } from '@testing-library/react';
import { Heading } from '@/components/Heading';

describe('Heading', () => {
  it('renders provided text', () => {
    render(<Heading text="Friends of Braybrook Park" />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Friends of Braybrook Park'
    );
  });
});


