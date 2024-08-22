import {describe, expect, test} from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../../components/Pagination';

describe('Pagination', () => {
  test('renders pagination buttons', () => {
    render(
      <Pagination
        totalItems={50}
        itemsPerPage={10}
        currentPage={1}
        onPageChange={() => {}}
      />
    );

    expect(screen.getAllByRole('button').length).toBe(5);
  });

  test('pagination buttons work', () => {
    const handlePageChange = jest.fn();

    render(
      <Pagination
        totalItems={50}
        itemsPerPage={10}
        currentPage={1}
        onPageChange={handlePageChange}
      />
    );

    const secondPageButton = screen.getByText('2');
    fireEvent.click(secondPageButton);

    expect(handlePageChange).toHaveBeenCalledWith(2);
  });
});
