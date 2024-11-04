import { PackingItem } from './PackingListStyle';

function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = name + ' ✅';
  }

  return <PackingItem>{itemContent}</PackingItem>;
}

export default Item;