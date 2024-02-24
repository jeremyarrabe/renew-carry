import NavCategoryComponent from '@/components/CategoryMobileView';
export default function ProductsLayout({ children }) {
  return (
    <section>
      <NavCategoryComponent />
      {children}
    </section>
  );
}
