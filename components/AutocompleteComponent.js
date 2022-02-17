import React, { useState, useEffect } from 'react'

import Autocomplete from '@mui/material/Autocomplete';
import { TextField, Chip, Tooltip, Button, List, ListItem, ListItemIcon, ListItemText, Typography, Collapse } from '@mui/material';

import FilterListIcon from '@mui/icons-material/FilterList';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { makeStyles } from '@mui/styles';

import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match'; 
import algoliasearch from 'algoliasearch/lite';

import { useSelector, useDispatch } from "react-redux";
import { selectCourses, setCourses } from '../src/features/userCourses/userCoursesSlice';

const AutocompleteComponent = (props) => {

    const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
    const ALGOLIA_SEARCH_ONLY_API = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API;
    const ALGOLIA_INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;

    const searchClient = algoliasearch(
        ALGOLIA_APP_ID,
        ALGOLIA_SEARCH_ONLY_API,
    );
    const algoliaIndex = searchClient.initIndex(ALGOLIA_INDEX_NAME);

    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    const [filteredCourseList, setFilteredCourseList] = useState([]);
    const [facets, setFacets] = useState({});

    const noFilterIcon = props?.noFilterIcon;
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open);

    const courses = useSelector(selectCourses); 

    const setReduxCourses = (props) => {
      let coursesCopy = [...props.courses];
      dispatch(setCourses(coursesCopy));
    }

    const facetTypes = [{
      name: 'Instructor',
      skipName: true,
      icon: <RecordVoiceOverIcon />,
      comp: (<TextField 
        size="small" fullWidth 
        label="Instructor" 
        variant="outlined" 
        value={facets["possibleInstructors"]}
        onChange={(e) => {
          setFacets({...facets, possibleInstructors: e.target.value})
        }}
      />)
    },{
      name: 'CCC Requirement',
      icon: <LibraryAddCheckIcon />,
    },{
      name: 'Time',
      icon: <AccessTimeFilledIcon />,
    }];

    useEffect(() => {
      (async () => {
        algoliaIndex
          .search(query, {
            "getRankingInfo": true,
            "analytics": false,
            "enableABTest": false,
            "attributesToRetrieve": "*",
            "snippetEllipsisText": "…",
            "responseFields": "*",
            "explain": "*",
            // facetFilters: [["possibleInstructors:Koutsoliotas, Sally"]]
            facetFilters: Object.keys(facets).map(facet => `${facet}: ${facets[facet]}`),
          })
          .then(({ hits }) => {
            setFilteredCourseList(hits)
          })
      })();
    }, [query, facets]);
        
    return (
    <div className="flex flex-col w-full gap-2">
      <Autocomplete
        size="small"
        className="w-full"
        limitTags={0}
        getLimitTagsText={(value) => `${value} course${(value != 1) ? 's' : ""} selected`}
        disablePortal={noFilterIcon}
        autoHighlight
        filterSelectedOptions={true}
        multiple
        value={courses}
        {...noFilterIcon ? {open: true} : {}}
        onChange={(e, courses) => setReduxCourses({courses, e})}
        onInputChange={(e, query) => setQuery(query) }
        id="add-course-autocomplete"
        options={filteredCourseList}
        getOptionLabel={option => option.title}
        renderInput={params => (
          <TextField
            {...params}
            className="w-full"
            label="Add course"
          />
        )}
      />
      {!noFilterIcon && (
        <Button startIcon={open ? (<ExpandLess />) : (<ExpandMore />)} variant="outlined" color="primary" onClick={toggleOpen}>
          Show course filters
        </Button>
      )}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          open={open}
          dense={true}
        >
          {facetTypes.map((facetType, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                {facetType.icon}
              </ListItemIcon>
              {(!facetType.skipName) && (<ListItemText>{facetType.name}</ListItemText>)}
              {facetType.comp}
            </ListItem>
          ))}
          <ListItem>          
            <ListItemIcon>
              <LibraryAddCheckOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Pre-requisite&nbsp;</ListItemText>
            <Typography variant="caption" color="secondary" >(beta)</Typography>
          </ListItem>
        </List>
      </Collapse>
    </div>
)}

export default AutocompleteComponent;