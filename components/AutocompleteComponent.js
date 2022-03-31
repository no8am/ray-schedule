import React, { useState, useEffect } from 'react'

import Autocomplete from '@mui/material/Autocomplete';
import { TextField, Chip, Tooltip, IconButton, Button, List, ListItem, ListItemIcon, ListItemText, Typography, Collapse, InputAdornment } from '@mui/material';

import FilterListIcon from '@mui/icons-material/FilterList';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import WarningIcon from '@mui/icons-material/Warning';

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
    const totalCredits = courses.reduce((acc, course) => {
      return (acc + Object.keys(course.activeSections)
        .filter(sectionType => course.activeSections[sectionType] != "")
        .reduce((acc, sectionType) => {
          return acc + course.sections[sectionType][course.activeSections[sectionType]].Credit;
        }, 0))
    }, 0);

    const InfoChip = (params) => {
      return (
        <Chip
          {...params}
          size="large"
          variant="filled"
        />
      )
    }

    const creditInfo = (totalCredits) => {
      if (totalCredits <= 0) {
        return ["default", "Credit count will show up here as you add courses."]
      } else if (totalCredits < 3) {
        return ["error", "This number of courses is too low for a valid registration."]
      } else if (totalCredits < 4) {
        return ["warning", "This number of courses is an underload, which likely requires dean's permission."]
      } else if (totalCredits < 5) {
        return ["primary", "This number of courses is valid for registration."]
      } else {
        return ["warning", "This number of courses is an overload, which likely requires dean's permission."]
      }
    }

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
      comp: (<div className='w-full gap-1 flex flex-row items-center'>
        <ToggleDays days={days} setDays={setDays} facets={facets} setFacets={setFacets} />
        <ToggleTimes times={times} setTimes={setTimes} facets={facets} setFacets={setFacets} />
      </div>)
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
      <div className="flex flex-row gap-1">
        <Tooltip title={creditInfo(totalCredits)[1]}>
          <InfoChip 
            icon={<LibraryAddCheckOutlinedIcon />} 
            label={`${totalCredits} ${totalCredits == 1 ? 'credit' : 'credits'}`} 
            color={creditInfo(totalCredits)[0]}
          />
        </Tooltip>
        {(courses.reduce((acc, course) => 
            acc + Object.keys(course.activeSections).filter(sectionType => 
              course.activeSections[sectionType] == ""
            )
          .length, 0)) > 0 && <InfoChip 
          icon={<WarningIcon />}
          label={"Sections"}
          color="warning"
        />}
      </div>
      <Autocomplete
        size="small"
        className="w-full"
        limitTags={0}
        // getLimitTagsText={(value) => `${value} course${(value != 1) ? 's' : ""} selected`}
        getLimitTagsText={v => ""}
        disablePortal={noFilterIcon}
        autoHighlight
        filterSelectedOptions={true}
        disableClearable={true}
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
            // InputProps={{
            //   ...params.InputProps,
            //   endAdornment: (
            //     <>
            //       {params.InputProps.endAdornment}
            //       <InputAdornment position="end">
            //         <IconButton
            //           onClick={() => setQuery("")}
            //           edge="end"
            //         >
            //           <CloseIcon />
            //         </IconButton>
            //       </InputAdornment>
            //     </>
            //   ),
            // }}
          />
        )}
        ChipProps={{
          variant: "outlined",
          size: "small",
        }}
      />
      {!noFilterIcon && (
        <div className="flex flex-row gap-1">
        <Button startIcon={open ? (<ExpandLess />) : (<ExpandMore />)} variant="outlined" color="primary" onClick={toggleOpen} fullWidth>
          Show more options
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
            <Typography variant="caption" color="secondary" >(in development)</Typography>
          </ListItem>
          <ListItem className="flex flex-row gap-2">
            <Button 
              startIcon={<PlaylistRemoveIcon />} 
              className="w-full"
              size="small"
              variant="outlined" 
              color="secondary" 
              onClick={() => {
                clearFacetsAndFilters();
              }}>
              Clear Filters
            </Button>
            <Tooltip title="This will permanently remove all courses from this schedule!">
              <Button 
                startIcon={<DeleteSweepIcon />} 
                className="w-full"
                size='small'
                variant="outlined" 
                color="error" 
                onClick={() => {
                  clearFacetsAndFilters();
                  setReduxCourses({courses: []})
                }}>
                Clear Courses
              </Button>
            </Tooltip>
          </ListItem>
        </List>
      </Collapse>
    </div>
)}

export default AutocompleteComponent;