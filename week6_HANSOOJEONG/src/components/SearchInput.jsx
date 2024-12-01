import { forwardRef } from 'react';

const SearchInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

SearchInput.displayName = 'SearchInput';

export default SearchInput;
