import { ItemInterface } from "../../../types";

export interface AutoCompleteProps {
  data: ItemInterface[];
  handleClickItem: (item: ItemInterface) => void;
}
