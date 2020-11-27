import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import DeleteIcon from '@material-ui/icons/Delete';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import SearchIcon from '@material-ui/icons/Search';
import { EMTTableAction } from './types';
import { IconButton, Tooltip } from '@material-ui/core';
import { createStyles, makeStyles, Theme, fade } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    alignContent: 'space-between'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export interface EMTTableToolbarProps {
  search?: boolean,
  action?: EMTTableAction
}

const EMTTableToolbar: React.FC<EMTTableToolbarProps> = ({
  search = false,
  action = 'delete'
}) => {
  const classes = useStyles();
  const ActionIcon = action === 'delete' ? DeleteIcon : DownloadIcon;
  const handleActionButtonClick = () => {};

  return (
    <>
      <Toolbar className={classes.root}>
        {search && (
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        )}
        <Tooltip title={action.charAt(0).toUpperCase()}>
          <IconButton aria-label={action} onClick={handleActionButtonClick}>
            <ActionIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </>
  );
};

export default EMTTableToolbar;