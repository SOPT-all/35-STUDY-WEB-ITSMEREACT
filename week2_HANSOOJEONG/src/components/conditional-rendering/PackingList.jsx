import { PackingSection, PackingTitle, StyledPackingList } from './PackingListStyle';
import Item from './Item';

export default function PackingList() {
  return (
    <PackingSection>
      <PackingTitle>Sally Ride's Packing List</PackingTitle>
      <StyledPackingList>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </StyledPackingList>
    </PackingSection>
  );
}