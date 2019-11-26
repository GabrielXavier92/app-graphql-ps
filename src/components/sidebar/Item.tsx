import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBox from '@material-ui/icons/AccountBox';
import { Link } from "react-router-dom";

interface IItem {
  name: string,
  selected: boolean,
  path: string
}

const Item: React.FC<IItem> = ({ name, selected, path }) => {
  return (
    <Link to={path} style={{ textDecoration: 'none', color: 'grey' }}>
      <ListItem button selected={selected}>
        <ListItemIcon>
          <AccountBox />
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    </Link>
  )
};

export default Item