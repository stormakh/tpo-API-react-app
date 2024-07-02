import { render, screen } from '@testing-library/react';
import CardProduct from '../../../components/AMBProducts/CardProduct';
import '@testing-library/jest-dom/extend-expect';

// Define el tipo de tu producto
type Product = {
  images: string[];
  name: string;
  price: number;
  sizes: string[];
  id: number;
};

describe('CardProduct', () => {
  const mockProduct: Product = {
    images: ['url-de-imagen'],
    name: 'Nombre del producto',
    price: 100,
    sizes: ['M'],
    id: 1
  };

  it('muestra la información del producto correctamente', () => {
    render(<CardProduct description={''} colors={[]} categories={[]} material={[]} parentCategories={[]} sellerId={0} {...mockProduct} />);

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(`Precio: $${mockProduct.price}`)).toBeInTheDocument();
    expect(screen.getByText(`Talle: ${mockProduct.sizes[0]}`)).toBeInTheDocument();
    expect(screen.getByText('Sold')).toBeInTheDocument();
    expect(screen.getByText('Shared')).toBeInTheDocument();
    expect(screen.getByText('Edit')).toBeInTheDocument();
  });
});
