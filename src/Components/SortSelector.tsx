import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface SortSelectorProps {
    onSelectSortOrder: (sortOrder: string) => void
    sortOrder: string
}

const SortSelector = ({onSelectSortOrder, sortOrder} : SortSelectorProps) => {
    const sortOrders = [
        {label: 'Relevance', value: ''},
        {label: 'Date added', value: '-added'},
        {label: 'Name', value: 'label'},
        {label: 'Release date', value: '-released'},
        {label: 'Popularity', value: '-metacritic'},
        {label: 'Average rating', value: '-rating'}
    ]

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder)
  return (
      <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
              Order by: {currentSortOrder?.label || 'Relevance'}
          </MenuButton>
          <MenuList>
                {sortOrders.map((order) => (
                    <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>
                ))}
          </MenuList>
      </Menu>
    )
}

export default SortSelector