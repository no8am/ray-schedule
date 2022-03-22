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

import ToggleDays from './ToggleDays';
import ToggleTimes from './ToggleTimes';
import { makeStyles } from '@mui/styles';

import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match'; 
import algoliasearch from 'algoliasearch/lite';

import { useSelector, useDispatch } from "react-redux";
import { selectCourses, setCourses } from '../src/features/userCourses/userCoursesSlice';

import { instructors } from '../updateCourses/instructors';
import { requirements } from '../updateCourses/requirements';

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

    const [days, setDays] = useState([]);
    const [times, setTimes] = useState(["", ""]);

    const noFilterIcon = props?.noFilterIcon;
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open);

    const courses = useSelector(selectCourses); 

    const setReduxCourses = (props) => {
      let coursesCopy = [...props.courses];
      dispatch(setCourses(coursesCopy));
    }

    const clearFacetsAndFilters = () => {
      setDays([]);
      setTimes(["", ""]);
      setFacets({
        possibleInstructors: "",
        possibleRequirements: "",
      });
      setOpen(false);
    }

    const facetTypes = [{
      name: 'Instructor',
      skipName: true,
      icon: <RecordVoiceOverIcon />,
      comp: (<Autocomplete 
        label="Instructor" 
        variant="outlined" size="small" fullWidth
        options={instructors}
        value={facets["possibleInstructors"]}
        renderInput={(params) => <TextField {...params} label="Instructor" variant="outlined" size="small" fullWidth />}
        onChange={(e, newValue) => {
          setFacets({...facets, possibleInstructors: newValue})
        }}
      />)
    },{
      name: 'CCC Requirement',
      skipName: true,
      icon: <LibraryAddCheckIcon />,
      comp: (<Autocomplete 
        label="CCC Requirement" 
        variant="outlined" size="small" fullWidth
        options={requirements}
        value={facets["possibleRequirements"]}
        renderInput={(params) => <TextField {...params} label="CCC Requirement" variant="outlined" size="small" fullWidth />}
        onChange={(e, newValue) => {
          setFacets({...facets, possibleRequirements: newValue})
        }}
      />)
    },{
      name: 'Time',
      skipName: true,
      icon: <AccessTimeFilledIcon />,
      comp: (<>
        <ToggleDays days={days} setDays={setDays} facets={facets} setFacets={setFacets} />
        <ToggleTimes times={times} setTimes={setTimes} facets={facets} setFacets={setFacets} />
      </>)
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
            facetFilters: Object.keys(facets)
              .filter(facet => facets[facet])
              .map(facet => `${facet}: ${facets[facet]}`),
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
        onChange={(e, courses) => {
          setReduxCourses({courses, e})
        }}
        onInputChange={(e, query) => setQuery(query) }
        id="add-course-autocomplete"
        options={filteredCourseList}
        getOptionLabel={option => option.title}
        isOptionEqualToValue = {(option, value) => option.objectID == value.objectID}
        renderInput={params => (
          <TextField
            {...params}
            className="w-full"
            label="Add course"
          />
        )}
      />
      {!noFilterIcon && (
        <div className="flex flex-row gap-1">
        <Button startIcon={open ? (<ExpandLess />) : (<ExpandMore />)} variant="outlined" color="primary" onClick={toggleOpen} fullWidth>
          Show course filters
        </Button>
        <Button startIcon={<LibraryAddCheckOutlinedIcon />} variant="outlined" color="error" onClick={() => clearFacetsAndFilters()}>
          Clear
        </Button>
        </div>
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
          <ListItem disabled={true}>          
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