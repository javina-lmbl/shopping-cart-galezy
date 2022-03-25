import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import fakeStoreApi from '../services/fakeStore.api';

function FilterProductsForm() {
  const [categories, setCategories] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    fakeStoreApi
      .get('products/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch(console.error);
  }, []);
  const handleSubmit = (values: any) => {
    if (values._search === '') delete values._search;
    if (values._sort === '') delete values._search;
    if (values.category === '') delete values._search;

    router.push({
      query: values,
    });
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={router.query}
      enableReinitialize
    >
      {({ setValues }) => (
        <Form>
          <Field
            name="_search"
            type="search"
            className="w-full m-2"
            placeholder="Search"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            <div>
              <Field as="select" name="category" placeholder="Category">
                <option value="">Category</option>
                {categories.map((category) => (
                  <option key={`option_${category}`} value={category}>
                    {category}
                  </option>
                ))}
              </Field>
            </div>
            <div>
              <Field as="select" name="_sort" placeholder="Order by">
                <option value="">Order by</option>
                <option value="price">Price</option>
                <option value="rate">Rate</option>
              </Field>
            </div>
            <div>
              <button type="submit" className="btn-theme m-1">
                Filter
              </button>
              <button
                type="button"
                className="btn-theme m-1"
                onClick={() => {
                  router.push({
                    query: {},
                  });
                }}
              >
                Clear
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FilterProductsForm;
